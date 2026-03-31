/* global YaGames */
(function initYgNamespace() {
  const YG = {
    ysdk: null,
    player: null,
    ready: false,
    initPromise: null,
    language: null,

    async init() {
      if (this.initPromise) return this.initPromise;

      this.initPromise = (async () => {
        if (typeof YaGames === 'undefined') {
          return false;
        }

        try {
          this.ysdk = await YaGames.init();
          if (this.ysdk && this.ysdk.features && this.ysdk.features.LoadingAPI) {
            this.ysdk.features.LoadingAPI.ready();
          }

          try {
            this.player = await this.ysdk.getPlayer({ scopes: false });
          } catch (playerErr) {
            console.warn('YG player unavailable:', playerErr);
          }

          this.ready = true;
          this.language = this.getLanguage();
          return true;
        } catch (e) {
          console.warn('YG init failed:', e);
          this.ready = false;
          return false;
        }
      })();

      return this.initPromise;
    },

    getLanguage() {
      if (!this.ysdk) return null;
      const lang = this.ysdk.environment && this.ysdk.environment.i18n
        ? this.ysdk.environment.i18n.lang
        : null;
      if (!lang) return null;
      return String(lang).toLowerCase().startsWith('ru') ? 'ru' : 'en';
    },

    showInterstitial() {
      if (!this.ysdk || !this.ysdk.adv) return;

      this.ysdk.adv.showFullscreenAdv({
        callbacks: {
          onOpen: function () {
            window.dispatchEvent(new Event('yg-ad-open'));
          },
          onClose: function () {
            window.dispatchEvent(new Event('yg-ad-close'));
          },
          onError: function (e) {
            window.dispatchEvent(new Event('yg-ad-close'));
            console.warn('YG interstitial error:', e);
          }
        }
      });
    },

    showRewarded(onReward) {
      if (!this.ysdk || !this.ysdk.adv) return;

      this.ysdk.adv.showRewardedVideo({
        callbacks: {
          onOpen: function () {
            window.dispatchEvent(new Event('yg-ad-open'));
          },
          onRewarded: function () {
            if (typeof onReward === 'function') onReward();
          },
          onClose: function () {
            window.dispatchEvent(new Event('yg-ad-close'));
          },
          onError: function (e) {
            window.dispatchEvent(new Event('yg-ad-close'));
            console.warn('YG rewarded error:', e);
          }
        }
      });
    },

    async saveCloud(data) {
      if (!this.player) return false;
      try {
        await this.player.setData({ novelaCloudSave: data });
        return true;
      } catch (e) {
        console.warn('YG cloud save error:', e);
        return false;
      }
    },

    async loadCloud() {
      if (!this.player) return null;
      try {
        const data = await this.player.getData();
        return data && data.novelaCloudSave ? data.novelaCloudSave : null;
      } catch (e) {
        console.warn('YG cloud load error:', e);
        return null;
      }
    }
  };

  window.YG = YG;
})();
