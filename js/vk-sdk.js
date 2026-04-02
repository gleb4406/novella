/* global vkBridge */
(function initVkNamespace() {
  const VK = {
    bridge: null,
    ready: false,
    initPromise: null,

    async ensureBridge() {
      if (window.vkBridge) {
        this.bridge = window.vkBridge;
        return true;
      }

      const sources = [
        'https://cdn.jsdelivr.net/npm/@vkontakte/vk-bridge/dist/browser.min.js',
        'https://unpkg.com/@vkontakte/vk-bridge/dist/browser.min.js'
      ];

      for (const src of sources) {
        const loaded = await new Promise((resolve) => {
          const script = document.createElement('script');
          script.src = src;
          script.async = true;
          script.onload = () => resolve(true);
          script.onerror = () => resolve(false);
          document.head.appendChild(script);
        });
        if (loaded && window.vkBridge) {
          this.bridge = window.vkBridge;
          return true;
        }
      }

      return false;
    },

    async init() {
      if (this.initPromise) return this.initPromise;

      this.initPromise = (async () => {
        const hasBridge = await this.ensureBridge();
        if (!hasBridge || !this.bridge) return false;
        try {
          await this.bridge.send('VKWebAppInit');
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
      if (!this.ready || !this.bridge) return false;
      try {
        window.dispatchEvent(new Event('yg-ad-open'));
        await this.bridge.send('VKWebAppShowNativeAds', { ad_format: 'interstitial' });
        window.dispatchEvent(new Event('yg-ad-close'));
        return true;
      } catch (e) {
        window.dispatchEvent(new Event('yg-ad-close'));
        return false;
      }
    },

    async showRewarded(onReward) {
      if (!this.ready || !this.bridge) return false;
      try {
        window.dispatchEvent(new Event('yg-ad-open'));
        const result = await this.bridge.send('VKWebAppShowNativeAds', { ad_format: 'reward' });
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
      if (!this.ready || !this.bridge) return false;
      try {
        await this.bridge.send('VKWebAppStorageSet', {
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
      if (!this.ready || !this.bridge) return null;
      try {
        const result = await this.bridge.send('VKWebAppStorageGet', { keys: ['novelaCloudSave'] });
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
