(function initPlatformSdk() {
  const PlatformSDK = {
    provider: 'none',
    ready: false,

    async init() {
      const query = new URLSearchParams(window.location.search);
      const isVkContext = query.has('vk_user_id') || query.has('vk_app_id') || query.has('sign');

      if (isVkContext && window.VKSDK && typeof window.VKSDK.init === 'function') {
        const okVkFirst = await window.VKSDK.init();
        if (okVkFirst) {
          this.provider = 'vk';
          this.ready = true;
          return true;
        }
      }

      if (window.YG && typeof window.YG.init === 'function') {
        const ok = await window.YG.init();
        if (ok) {
          this.provider = 'yandex';
          this.ready = true;
          return true;
        }
      }

      if (window.VKSDK && typeof window.VKSDK.init === 'function') {
        const ok = await window.VKSDK.init();
        if (ok) {
          this.provider = 'vk';
          this.ready = true;
          return true;
        }
      }

      this.provider = 'none';
      this.ready = false;
      return false;
    },

    getLanguage() {
      if (this.provider === 'yandex' && window.YG && typeof window.YG.getLanguage === 'function') {
        return window.YG.getLanguage();
      }
      if (this.provider === 'vk' && window.VKSDK && typeof window.VKSDK.getLanguage === 'function') {
        return window.VKSDK.getLanguage();
      }
      return null;
    },

    async showInterstitial() {
      if (!this.ready) return false;
      if (this.provider === 'yandex' && window.YG) {
        window.YG.showInterstitial();
        return true;
      }
      if (this.provider === 'vk' && window.VKSDK) {
        return window.VKSDK.showInterstitial();
      }
      return false;
    },

    async showRewarded(onReward) {
      if (!this.ready) return false;
      if (this.provider === 'yandex' && window.YG) {
        window.YG.showRewarded(onReward);
        return true;
      }
      if (this.provider === 'vk' && window.VKSDK) {
        return window.VKSDK.showRewarded(onReward);
      }
      return false;
    },

    async saveCloud(data) {
      if (!this.ready) return false;
      if (this.provider === 'yandex' && window.YG) {
        return window.YG.saveCloud(data);
      }
      if (this.provider === 'vk' && window.VKSDK) {
        return window.VKSDK.saveCloud(data);
      }
      return false;
    },

    async loadCloud() {
      if (!this.ready) return null;
      if (this.provider === 'yandex' && window.YG) {
        return window.YG.loadCloud();
      }
      if (this.provider === 'vk' && window.VKSDK) {
        return window.VKSDK.loadCloud();
      }
      return null;
    }
  };

  window.PlatformSDK = PlatformSDK;
})();
