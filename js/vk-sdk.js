/* global vkBridge */
(function initVkNamespace() {
  const VK = {
    ready: false,
    initPromise: null,

    async init() {
      if (this.initPromise) return this.initPromise;

      this.initPromise = (async () => {
        if (typeof vkBridge === 'undefined') return false;
        try {
          await vkBridge.send('VKWebAppInit');
          this.ready = true;
          return true;
        } catch (e) {
          console.warn('VK init failed:', e);
          this.ready = false;
          return false;
        }
      })();

      return this.initPromise;
    },

    getLanguage() {
      const params = new URLSearchParams(window.location.search);
      const fromQuery = params.get('vk_language') || params.get('lang');
      const lang = (fromQuery || '').toLowerCase();
      if (!lang) return null;
      return lang.startsWith('ru') ? 'ru' : 'en';
    },

    async showInterstitial() {
      if (!this.ready || typeof vkBridge === 'undefined') return false;
      try {
        window.dispatchEvent(new Event('yg-ad-open'));
        await vkBridge.send('VKWebAppShowNativeAds', { ad_format: 'interstitial' });
        window.dispatchEvent(new Event('yg-ad-close'));
        return true;
      } catch (e) {
        window.dispatchEvent(new Event('yg-ad-close'));
        return false;
      }
    },

    async showRewarded(onReward) {
      if (!this.ready || typeof vkBridge === 'undefined') return false;
      try {
        window.dispatchEvent(new Event('yg-ad-open'));
        const result = await vkBridge.send('VKWebAppShowNativeAds', { ad_format: 'reward' });
        if (result && result.result && typeof onReward === 'function') {
          onReward();
        }
        window.dispatchEvent(new Event('yg-ad-close'));
        return true;
      } catch (e) {
        window.dispatchEvent(new Event('yg-ad-close'));
        return false;
      }
    },

    async saveCloud(data) {
      if (!this.ready || typeof vkBridge === 'undefined') return false;
      try {
        await vkBridge.send('VKWebAppStorageSet', {
          key: 'novelaCloudSave',
          value: JSON.stringify(data)
        });
        return true;
      } catch (e) {
        console.warn('VK cloud save error:', e);
        return false;
      }
    },

    async loadCloud() {
      if (!this.ready || typeof vkBridge === 'undefined') return null;
      try {
        const result = await vkBridge.send('VKWebAppStorageGet', { keys: ['novelaCloudSave'] });
        const item = result && Array.isArray(result.keys)
          ? result.keys.find(k => k.key === 'novelaCloudSave')
          : null;
        if (!item || !item.value) return null;
        return JSON.parse(item.value);
      } catch (e) {
        console.warn('VK cloud load error:', e);
        return null;
      }
    }
  };

  window.VKSDK = VK;
})();
