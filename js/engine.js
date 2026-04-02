class NovelEngine {
  constructor() {
    this.el = {
      mainMenu: document.getElementById('main-menu'),
      gameScreen: document.getElementById('game-screen'),
      poemScreen: document.getElementById('poem-screen'),
      bakingScreen: document.getElementById('baking-screen'),
      assocScreen: document.getElementById('association-screen'),
      memoryScreen: document.getElementById('memory-screen'),

      btnNewGame: document.getElementById('btn-new-game'),
      btnContinue: document.getElementById('btn-continue'),
      btnLoad: document.getElementById('btn-load'),
      btnSettings: document.getElementById('btn-settings'),
      btnLangToggle: document.getElementById('btn-lang-toggle'),

      bgLayer1: document.getElementById('bg-layer-1'),
      bgLayer2: document.getElementById('bg-layer-2'),
      characterContainer: document.getElementById('character-container'),
      dialogueContainer: document.getElementById('dialogue-container'),
      dialogueBox: document.getElementById('dialogue-box'),
      dialogueAvatar: document.getElementById('dialogue-avatar'),
      namePlate: document.getElementById('name-plate'),
      speakerName: document.getElementById('speaker-name'),
      dialogueText: document.getElementById('dialogue-text'),
      btnRead: document.getElementById('btn-read'),
      choicesContainer: document.getElementById('choices-container'),
      quickMenu: document.getElementById('quick-menu'),

      qmSave: document.getElementById('qm-save'),
      qmLoad: document.getElementById('qm-load'),
      qmSettings: document.getElementById('qm-settings'),
      qmHistory: document.getElementById('qm-history'),
      qmMenu: document.getElementById('qm-menu'),

      saveLoadModal: document.getElementById('save-load-modal'),
      saveLoadTitle: document.getElementById('save-load-title'),
      slotsContainer: document.getElementById('slots-container'),
      settingsModal: document.getElementById('settings-modal'),
      historyModal: document.getElementById('history-modal'),
      historyContent: document.getElementById('history-content'),
      confirmModal: document.getElementById('confirm-modal'),
      confirmText: document.getElementById('confirm-text'),
      confirmYes: document.getElementById('confirm-yes'),
      confirmNo: document.getElementById('confirm-no'),

      settingTextSpeed: document.getElementById('setting-text-speed'),
      settingAutoSpeed: document.getElementById('setting-auto-speed'),
      settingMusicVol: document.getElementById('setting-music-vol'),
      textSpeedVal: document.getElementById('text-speed-val'),
      autoSpeedVal: document.getElementById('auto-speed-val'),
      musicVolVal: document.getElementById('music-vol-val'),
      btnSettingsClose: document.getElementById('btn-settings-close'),

      poemGrid: document.getElementById('poem-grid'),
      poemSayori: document.querySelector('#poem-sayori .poem-score'),
      poemNatsuki: document.querySelector('#poem-natsuki .poem-score'),
      poemYuri: document.querySelector('#poem-yuri .poem-score'),
      poemMonika: document.querySelector('#poem-monika .poem-score'),

      poemCount: document.getElementById('poem-count'),
      poemTotal: document.getElementById('poem-total'),

      bakingGrid: document.getElementById('baking-grid'),
      bakingCount: document.getElementById('baking-count'),
      bakingTotal: document.getElementById('baking-total'),
      bowlItems: document.getElementById('bowl-items'),

      assocWord: document.getElementById('assoc-word'),
      assocOptions: document.getElementById('assoc-options'),
      assocCurrent: document.getElementById('assoc-current'),
      assocTotal: document.getElementById('assoc-total'),

      memoryGrid: document.getElementById('memory-grid'),
      memoryMoves: document.getElementById('memory-moves'),
      memoryPairs: document.getElementById('memory-pairs'),
      memoryTotal: document.getElementById('memory-total'),

      btnMusicToggle: document.getElementById('btn-music-toggle'),
      btnMusicToggleGame: document.getElementById('btn-music-toggle-game'),

      charNames: document.querySelectorAll('.char-name')
    };

    this.currentScene = null;
    this.commandIndex = 0;
    this.variables = {};
    this.visibleCharacters = {};
    this.history = [];
    this.isTyping = false;
    this.isResolvingText = false;
    this.typeTimeout = null;
    this.currentBgLayer = 1;
    this.currentBackgroundId = null;
    this.music = null;
    this.audioCtx = null;
    this.musicGainNode = null;
    this.musicBuffer = null;
    this.musicSource = null;
    this.musicStartTime = 0;
    this.musicPauseOffset = 0;
    this.musicPaused = true;
    this.musicLoop = true;
    this.currentMusicUrl = null;
    this.currentMusicId = null;
    this.isMuted = false;
    this.wasPlayingBeforeBlur = false;
    this.lastAdAt = 0;
    this.translationCache = {};
    this.translationPending = {};
    this.choiceRenderToken = 0;
    this.settings = { textSpeed: 30, autoSpeed: 3000, musicVolume: 70 };

    this.bindEvents();
    this.loadSettings();
    this.initPlatform();

    this.refreshContinueAvailability();

    this.playMusic('menu');
  }

  bindEvents() {
    if (this.el.btnNewGame) {
      this.el.btnNewGame.addEventListener('click', () => this.startGame());
    }
    if (this.el.btnContinue) {
      this.el.btnContinue.addEventListener('click', async () => {
        if (this.el.btnContinue.disabled) return;
        await this.loadGameState();
      });
    }
    if (this.el.btnLoad) {
      this.el.btnLoad.addEventListener('click', () => this.showSaveLoad('load'));
    }
    if (this.el.btnSettings) {
      this.el.btnSettings.addEventListener('click', () => this.showSettings());
    }
    if (this.el.btnLangToggle) {
      this.el.btnLangToggle.addEventListener('click', () => {
        const current = window.I18N && window.I18N.lang ? window.I18N.lang : 'ru';
        const next = current === 'ru' ? 'en' : 'ru';
        if (window.I18N && typeof window.I18N.setLanguage === 'function') {
          window.I18N.setLanguage(next);
        }
        this.updateLanguageToggleLabel();
      });
    }

    if (this.el.gameScreen) {
      this.el.gameScreen.addEventListener('click', (e) => {
        if (this.el.quickMenu && this.el.quickMenu.contains(e.target)) return;
        if (this.el.choicesContainer && this.el.choicesContainer.contains(e.target)) return;
        const modal = e.target.closest('.modal');
        if (modal) return;
        this.onGameClick();
      });
    }

    if (this.el.qmSave) {
      this.el.qmSave.addEventListener('click', () => this.showSaveLoad('save'));
    }
    if (this.el.qmLoad) {
      this.el.qmLoad.addEventListener('click', () => this.showSaveLoad('load'));
    }
    if (this.el.qmSettings) {
      this.el.qmSettings.addEventListener('click', () => this.showSettings());
    }
    if (this.el.qmHistory) {
      this.el.qmHistory.addEventListener('click', () => this.showHistory());
    }
    if (this.el.qmMenu) {
      this.el.qmMenu.addEventListener('click', () => {
        this.showConfirm(this.t('confirm.backToMenu'), () => {
          this.showScreen('main-menu');
          this.playMusic('menu');
          this.maybeShowInterstitial();
        });
      });
    }
    if (this.el.btnRead) {
      this.el.btnRead.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.onGameClick();
      });
    }

    if (this.el.settingTextSpeed) {
      this.el.settingTextSpeed.addEventListener('input', () => {
        this.settings.textSpeed = parseInt(this.el.settingTextSpeed.value);
        if (this.el.textSpeedVal) {
          this.el.textSpeedVal.textContent = this.settings.textSpeed;
        }
        this.saveSettings();
      });
    }
    if (this.el.settingAutoSpeed) {
      this.el.settingAutoSpeed.addEventListener('input', () => {
        this.settings.autoSpeed = parseInt(this.el.settingAutoSpeed.value);
        if (this.el.autoSpeedVal) {
          this.el.autoSpeedVal.textContent = this.settings.autoSpeed;
        }
        this.saveSettings();
      });
    }
    if (this.el.settingMusicVol) {
      this.el.settingMusicVol.addEventListener('input', () => {
        this.settings.musicVolume = parseInt(this.el.settingMusicVol.value);
        if (this.el.musicVolVal) {
          this.el.musicVolVal.textContent = this.settings.musicVolume;
        }
        this.saveSettings();
        this.updateMusicVolume();
      });
    }

    if (this.el.btnSettingsClose) {
      this.el.btnSettingsClose.addEventListener('click', () => {
        this.closeModal(this.el.settingsModal);
      });
    }

    document.querySelectorAll('.modal-close').forEach(btn => {
      btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        if (modal) this.closeModal(modal);
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const openModal = document.querySelector('.modal.active');
        if (openModal) {
          this.closeModal(openModal);
          return;
        }
      }
      if (e.key === ' ' || e.key === 'Enter') {
        const openModal = document.querySelector('.modal.active');
        if (openModal) return;
        if (this.el.choicesContainer &&
            !this.el.choicesContainer.classList.contains('hidden') &&
            this.el.choicesContainer.children.length > 0) return;
        e.preventDefault();
        this.onGameClick();
      }
    });

    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });

    document.addEventListener('visibilitychange', () => {
      if (!this.music || this.isMuted) return;
      if (document.hidden) {
        if (!this.musicPaused) {
          this.wasPlayingBeforeBlur = true;
          this.pauseMusicPlayback();
        }
      } else if (this.wasPlayingBeforeBlur) {
        this.resumeMusicPlayback();
        this.wasPlayingBeforeBlur = false;
      }
    });

    window.addEventListener('blur', () => {
      if (!this.music || this.isMuted) return;
      if (!this.musicPaused) {
        this.wasPlayingBeforeBlur = true;
        this.pauseMusicPlayback();
      }
    });

    window.addEventListener('focus', () => {
      if (!this.music || this.isMuted) return;
      if (this.wasPlayingBeforeBlur) {
        this.resumeMusicPlayback();
        this.wasPlayingBeforeBlur = false;
      }
    });

    window.addEventListener('yg-ad-open', () => {
      if (!this.music || this.isMuted) return;
      this.wasPlayingBeforeBlur = !this.musicPaused;
      if (this.wasPlayingBeforeBlur) {
        this.pauseMusicPlayback();
      }
    });

    window.addEventListener('yg-ad-close', () => {
      if (!this.music || this.isMuted) return;
      if (this.wasPlayingBeforeBlur) {
        this.resumeMusicPlayback();
        this.wasPlayingBeforeBlur = false;
      }
    });

    const toggleMute = () => {
      this.isMuted = !this.isMuted;
      const icon = this.isMuted ? '🔇' : '🔊';
      if (this.el.btnMusicToggle) this.el.btnMusicToggle.textContent = icon;
      if (this.el.btnMusicToggleGame) this.el.btnMusicToggleGame.textContent = icon;
      if (this.music) {
        if (this.isMuted) {
          this.wasPlayingBeforeBlur = false;
          this.pauseMusicPlayback();
        } else {
          this.resumeMusicPlayback();
        }
      }
    };

    if (this.el.btnMusicToggle) {
      this.el.btnMusicToggle.addEventListener('click', toggleMute);
    }
    if (this.el.btnMusicToggleGame) {
      this.el.btnMusicToggleGame.addEventListener('click', toggleMute);
    }

    const quotes = {
      ru: {
        sayori: [
          'Каждый день — это новое приключение!',
          'Э-хе-хе~',
          'Ты мой самый лучший друг!',
          'Не забывай улыбаться!'
        ],
        natsuki: [
          'М-манга — это литература!',
          'Не смотри на меня так!',
          'Мои кексы лучшие, и точка!',
          'Хмф!'
        ],
        yuri: [
          'Хорошая книга — как другой мир...',
          'И-извини, я задумалась...',
          'Чай? Я заварю свой любимый.',
          'Литература — это искусство души.'
        ],
        monika: [
          'Просто Моника.',
          'Ты ведь помнишь меня?',
          'Каждый выбор имеет значение.',
          'Я всегда буду рядом. 💚'
        ]
      },
      en: {
        sayori: [
          'Every day is a new adventure!',
          'Ehehe~',
          'You are my best friend!',
          'Don’t forget to smile!'
        ],
        natsuki: [
          'M-manga is literature!',
          'Don’t look at me like that!',
          'My cupcakes are the best. Period.',
          'Hmph!'
        ],
        yuri: [
          'A good book feels like another world...',
          'S-sorry, I got lost in thought...',
          'Tea? I can brew my favorite one.',
          'Literature is the art of the soul.'
        ],
        monika: [
          'Just Monika.',
          'You do remember me, right?',
          'Every choice matters.',
          'I will always be here. 💚'
        ]
      }
    };

    document.querySelectorAll('.menu-avatar').forEach(avatar => {
      const charId = avatar.dataset.char;
      if (!charId) return;

      let tooltip = null;

      avatar.addEventListener('mouseenter', () => {
        const lang = window.I18N && window.I18N.lang ? window.I18N.lang : 'en';
        const quoteSet = quotes[lang] || quotes.en;
        const charQuotes = quoteSet[charId] || [];
        if (!charQuotes.length) return;
        const randomQuote = charQuotes[Math.floor(Math.random() * charQuotes.length)];

        tooltip = document.createElement('div');
        tooltip.className = 'avatar-tooltip';
        tooltip.textContent = randomQuote;

        document.body.appendChild(tooltip);
        const rect = avatar.getBoundingClientRect();
        const tipRect = tooltip.getBoundingClientRect();
        const margin = 12;

        let left = rect.left + (rect.width - tipRect.width) / 2;
        let top = rect.top - tipRect.height - 10;

        if (left < margin) left = margin;
        if (left + tipRect.width > window.innerWidth - margin) {
          left = window.innerWidth - tipRect.width - margin;
        }
        if (top < margin) {
          top = rect.bottom + 10;
        }

        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
      });

      avatar.addEventListener('mouseleave', () => {
        if (tooltip) {
          tooltip.remove();
          tooltip = null;
        }
      });
    });
  }

  async initPlatform() {
    let preferredLang = null;
    if (window.PlatformSDK && typeof window.PlatformSDK.init === 'function') {
      try {
        await window.PlatformSDK.init();
        if (typeof window.PlatformSDK.getLanguage === 'function') {
          preferredLang = window.PlatformSDK.getLanguage();
        }
      } catch (e) {
        console.warn('Platform init error:', e);
      }
    }
    if (window.I18N && typeof window.I18N.init === 'function') {
      window.I18N.init(preferredLang || 'ru');
    }
    this.updateLanguageToggleLabel();
    await this.refreshContinueAvailability();
  }

  updateLanguageToggleLabel() {
    if (!this.el.btnLangToggle) return;
    const lang = window.I18N && window.I18N.lang ? window.I18N.lang : 'ru';
    this.el.btnLangToggle.textContent = lang.toUpperCase();
    this.el.btnLangToggle.setAttribute('aria-label', lang === 'ru' ? 'Смена языка: русский' : 'Language switch: English');
  }

  t(key, params) {
    if (window.I18N && typeof window.I18N.t === 'function') {
      return window.I18N.t(key, params);
    }
    return key;
  }

  async refreshContinueAvailability() {
    if (!this.el.btnContinue) return;

    const hasLocalAuto = !!localStorage.getItem('novela_auto');
    let hasCloudAuto = false;

    if (window.PlatformSDK && window.PlatformSDK.ready && typeof window.PlatformSDK.loadCloud === 'function') {
      try {
        const cloud = await window.PlatformSDK.loadCloud();
        hasCloudAuto = !!cloud;
      } catch (e) {
        hasCloudAuto = false;
      }
    }

    const hasAnySave = hasLocalAuto || hasCloudAuto;
    this.el.btnContinue.disabled = !hasAnySave;
    this.el.btnContinue.classList.toggle('disabled', !hasAnySave);
  }

  maybeShowInterstitial() {
    const now = Date.now();
    const minIntervalMs = 120000;
    if (now - this.lastAdAt < minIntervalMs) return;

    if (window.PlatformSDK && window.PlatformSDK.ready && typeof window.PlatformSDK.showInterstitial === 'function') {
      window.PlatformSDK.showInterstitial();
      this.lastAdAt = now;
    }
  }

  showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) target.classList.add('active');
  }

  startGame() {
    this.currentScene = null;
    this.commandIndex = 0;
    this.variables = {};
    this.visibleCharacters = {};
    this.history = [];
    this.isTyping = false;
    if (this.typeTimeout) {
      clearTimeout(this.typeTimeout);
      this.typeTimeout = null;
    }
    this.currentBgLayer = 1;

    if (this.el.characterContainer) this.el.characterContainer.innerHTML = '';
    if (this.el.dialogueContainer) this.el.dialogueContainer.classList.add('hidden');
    if (this.el.choicesContainer) {
      this.el.choicesContainer.classList.add('hidden');
      this.el.choicesContainer.innerHTML = '';
    }

    if (this.el.bgLayer1) {
      this.el.bgLayer1.style.backgroundImage = '';
      this.el.bgLayer1.className = 'bg-layer';
      this.el.bgLayer1.style.opacity = '1';
      this.el.bgLayer1.style.zIndex = '0';
    }
    if (this.el.bgLayer2) {
      this.el.bgLayer2.style.backgroundImage = '';
      this.el.bgLayer2.className = 'bg-layer';
      this.el.bgLayer2.style.opacity = '0';
      this.el.bgLayer2.style.zIndex = '0';
    }

    this.showScreen('game-screen');
    this.jumpToScene('start');
  }

  jumpToScene(sceneId) {
    if (!STORY.scenes[sceneId]) {
      console.warn('Scene not found:', sceneId);
      return;
    }
    this.currentScene = sceneId;
    this.commandIndex = 0;
    this.executeCommand();
  }

  executeCommand() {
    const scene = STORY.scenes[this.currentScene];
    if (!scene || this.commandIndex >= scene.length) return;

    const cmd = scene[this.commandIndex];

    switch (cmd.type) {
      case 'music':
        this.playMusic(cmd.id);
        this.advance();
        break;

      case 'bg':
        this.changeBackground(cmd.id, cmd.transition);
        this.advance();
        break;

      case 'show':
        this.showCharacter(cmd.char, cmd.pos, cmd.expr);
        this.advance();
        break;

      case 'hide':
        this.hideCharacter(cmd.char);
        this.advance();
        break;

      case 'dialog':
        this.showDialog(cmd.char, cmd.expr, cmd.text);
        break;

      case 'narrate':
        this.showNarration(cmd.text);
        break;

      case 'choice':
        this.autoSave();
        this.showChoices(cmd.options);
        break;

      case 'set':
        this.variables[cmd.var] = cmd.value;
        this.advance();
        break;

      case 'if':
        if (this.variables[cmd.var] === cmd.eq) {
          this.jumpToScene(cmd.then);
        } else {
          this.jumpToScene(cmd.else);
        }
        break;

      case 'jump':
        this.jumpToScene(cmd.to);
        break;

      case 'wait':
        setTimeout(() => this.advance(), cmd.ms);
        break;

      case 'poem':
        this.startPoemGame();
        break;

      case 'baking':
        this.startBakingGame();
        break;

      case 'association':
        this.startAssociationGame();
        break;

      case 'memory':
        this.startMemoryGame();
        break;

      case 'end':
        this.showScreen('main-menu');
        this.playMusic('menu');
        this.maybeShowInterstitial();
        break;

      default:
        console.warn('Unknown command type:', cmd.type);
        this.advance();
    }
  }

  advance() {
    this.commandIndex++;
    const scene = STORY.scenes[this.currentScene];
    if (scene && this.commandIndex < scene.length) {
      this.executeCommand();
    }
  }

  onGameClick() {
    if (!this.el.gameScreen || !this.el.gameScreen.classList.contains('active')) return;
    if (this.isResolvingText) return;
    if (this.isTyping) {
      this.completeText();
    } else {
      this.advance();
    }
  }

  getCurrentLang() {
    if (window.I18N && window.I18N.lang) return window.I18N.lang;
    return 'ru';
  }

  getLocalizedCharacterName(charId, charData) {
    if (this.getCurrentLang() !== 'en') return charData.name;
    const map = {
      mc: 'You',
      sayori: 'Sayori',
      natsuki: 'Natsuki',
      yuri: 'Yuri',
      monika: 'Monika'
    };
    return map[charId] || charData.name;
  }

  async translateTextRuToEn(text) {
    if (!text) return text;
    if (this.translationCache[text]) return this.translationCache[text];
    if (this.translationPending[text]) return this.translationPending[text];

    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=ru&tl=en&dt=t&q=${encodeURIComponent(text)}`;
    const req = fetch(url)
      .then(resp => resp.ok ? resp.json() : null)
      .then(data => {
        let translated = text;
        if (Array.isArray(data) && Array.isArray(data[0])) {
          translated = data[0].map(chunk => (Array.isArray(chunk) ? (chunk[0] || '') : '')).join('') || text;
        }
        this.translationCache[text] = translated;
        delete this.translationPending[text];
        return translated;
      })
      .catch(() => {
        delete this.translationPending[text];
        return text;
      });

    this.translationPending[text] = req;
    return req;
  }

  resolveLineText(rawText, callback) {
    const lang = this.getCurrentLang();
    if (lang !== 'en') {
      callback(rawText);
      return;
    }

    this.isResolvingText = true;
    this.translateTextRuToEn(rawText).then((translated) => {
      this.isResolvingText = false;
      callback(translated || rawText);
    });
  }

  changeBackground(bgId, transition) {
    const bg = STORY.backgrounds[bgId];
    if (!bg) return;
    this.currentBackgroundId = bgId;

    const newLayerNum = this.currentBgLayer === 1 ? 2 : 1;
    const newLayer = newLayerNum === 1 ? this.el.bgLayer1 : this.el.bgLayer2;
    const oldLayer = this.currentBgLayer === 1 ? this.el.bgLayer1 : this.el.bgLayer2;

    const oldBgClasses = [];
    oldLayer.classList.forEach(cls => {
      if (cls.startsWith('bg-') && cls !== 'bg-layer') {
        oldBgClasses.push(cls);
      }
    });

    newLayer.className = 'bg-layer';
    if (bg.image) {
      newLayer.style.backgroundImage = `url(${bg.image})`;
    } else {
      newLayer.style.backgroundImage = '';
      if (bg.css) newLayer.classList.add(bg.css);
    }

    if (transition === 'fade') {
      newLayer.style.zIndex = '1';
      newLayer.style.opacity = '0';
      oldLayer.style.zIndex = '0';

      requestAnimationFrame(() => {
        newLayer.style.transition = 'opacity 0.8s ease';
        newLayer.style.opacity = '1';

        const onEnd = () => {
          newLayer.removeEventListener('transitionend', onEnd);
          newLayer.style.transition = '';
          oldLayer.style.opacity = '0';
          oldBgClasses.forEach(cls => oldLayer.classList.remove(cls));
          oldLayer.style.backgroundImage = '';
          this.currentBgLayer = newLayerNum;
        };
        newLayer.addEventListener('transitionend', onEnd);
      });
    } else {
      newLayer.style.opacity = '1';
      newLayer.style.zIndex = '1';
      oldLayer.style.opacity = '0';
      oldLayer.style.zIndex = '0';
      oldBgClasses.forEach(cls => oldLayer.classList.remove(cls));
      oldLayer.style.backgroundImage = '';
      this.currentBgLayer = newLayerNum;
    }
  }

  showCharacter(charId, position, expression) {
    const charData = STORY.characters[charId];
    if (!charData) return;

    this.visibleCharacters[charId] = { position, expression };

    let existing = this.el.characterContainer
      ? this.el.characterContainer.querySelector(`[data-char="${charId}"]`)
      : null;
    if (existing) existing.remove();

    const wrapper = document.createElement('div');
    wrapper.className = `character-wrapper ${charData.spriteClass || ''}`;
    wrapper.dataset.char = charId;

    let posX = '50%';
    if (position === 'left') posX = '15%';
    else if (position === 'right') posX = '85%';
    else if (position === 'center') posX = '50%';

    wrapper.style.position = 'absolute';
    wrapper.style.left = posX;
    wrapper.style.transform = 'translateX(-50%)';
    wrapper.style.bottom = '0';

    const spriteDiv = document.createElement('div');
    spriteDiv.className = 'character-sprite';

    if (charData.images && charData.images[expression]) {
      const img = new Image();
      img.src = charData.images[expression];
      img.alt = charData.name;
      img.className = 'character-image';

      img.onload = () => {
        spriteDiv.innerHTML = '';
        spriteDiv.appendChild(img);
        spriteDiv.classList.add('has-image');
      };

      img.onerror = () => {
        spriteDiv.innerHTML = '';
        spriteDiv.classList.remove('has-image');
        const fallback = document.createElement('div');
        fallback.className = 'character-fallback';
        const avatarCircle = document.createElement('div');
        avatarCircle.className = 'character-avatar-circle';
        avatarCircle.style.backgroundColor = charData.color || '#888';
        avatarCircle.textContent = charData.avatar || charId[0].toUpperCase();
        fallback.appendChild(avatarCircle);
        const emoji = document.createElement('div');
        emoji.className = 'character-emoji';
        emoji.textContent = (charData.expressions && charData.expressions[expression]) || '🙂';
        fallback.appendChild(emoji);
        spriteDiv.appendChild(fallback);
      };
    } else {
      const fallback = document.createElement('div');
      fallback.className = 'character-fallback';
      const avatarCircle = document.createElement('div');
      avatarCircle.className = 'character-avatar-circle';
      avatarCircle.style.backgroundColor = charData.color || '#888';
      avatarCircle.textContent = charData.avatar || charId[0].toUpperCase();
      fallback.appendChild(avatarCircle);
      const emoji = document.createElement('div');
      emoji.className = 'character-emoji';
      emoji.textContent = (charData.expressions && charData.expressions[expression]) || '🙂';
      fallback.appendChild(emoji);
      spriteDiv.appendChild(fallback);
    }

    wrapper.appendChild(spriteDiv);

    if (this.el.characterContainer) {
      this.el.characterContainer.appendChild(wrapper);
    }

    requestAnimationFrame(() => {
      wrapper.classList.add('visible');
    });
  }

  hideCharacter(charId) {
    delete this.visibleCharacters[charId];

    if (!this.el.characterContainer) return;
    const el = this.el.characterContainer.querySelector(`[data-char="${charId}"]`);
    if (el) {
      el.classList.add('hiding');
      el.addEventListener('animationend', () => el.remove(), { once: true });
      setTimeout(() => {
        if (el.parentNode) el.remove();
      }, 600);
    }
  }

  showDialog(charId, expression, text) {
    const charData = STORY.characters[charId];
    if (!charData) {
      this.showNarration(text);
      return;
    }

    if (this.el.dialogueContainer) this.el.dialogueContainer.classList.remove('hidden');
    if (this.el.speakerName) {
      this.el.speakerName.textContent = this.getLocalizedCharacterName(charId, charData);
      this.el.speakerName.style.color = charData.color || '';
    }
    if (this.el.namePlate) {
      this.el.namePlate.className = 'name-plate';
      if (charData.nameClass) this.el.namePlate.classList.add(charData.nameClass);
    }

    this.setDialogueAvatar(charId, charData);

    if (expression && this.visibleCharacters[charId]) {
      this.visibleCharacters[charId].expression = expression;
      this.updateCharacterExpression(charId, expression);
    }

    this.highlightSpeaker(charId);
    this.resolveLineText(text, (resolved) => {
      this.history.push({ name: this.getLocalizedCharacterName(charId, charData), text: resolved });
      this.typeText(resolved);
    });
  }

  showNarration(text) {
    if (this.el.dialogueContainer) this.el.dialogueContainer.classList.remove('hidden');
    if (this.el.speakerName) {
      this.el.speakerName.textContent = '';
    }
    if (this.el.namePlate) {
      this.el.namePlate.className = 'name-plate narrator';
    }

    const mcData = STORY.characters.mc;
    if (mcData) {
      this.setDialogueAvatar('mc', mcData);
    } else if (this.el.dialogueAvatar) {
      this.el.dialogueAvatar.classList.remove('visible');
      if (this.el.dialogueBox) this.el.dialogueBox.classList.remove('has-avatar');
    }

    this.highlightSpeaker(null);
    this.resolveLineText(text, (resolved) => {
      this.history.push({ name: '', text: resolved });
      this.typeText(resolved);
    });
  }

  setDialogueAvatar(charId, charData) {
    if (!this.el.dialogueAvatar) return;

    const avatarPath = `assets/avatars/avatar_${charId}.webp`;
    const img = new Image();
    img.src = avatarPath;

    img.onload = () => {
      this.el.dialogueAvatar.innerHTML = '';
      const imgEl = document.createElement('img');
      imgEl.src = avatarPath;
      imgEl.alt = charData.name || charId;
      imgEl.className = 'avatar-image';
      this.el.dialogueAvatar.appendChild(imgEl);
      this.el.dialogueAvatar.classList.add('visible');
      if (this.el.dialogueBox) this.el.dialogueBox.classList.add('has-avatar');
    };

    img.onerror = () => {
      this.el.dialogueAvatar.innerHTML = '';
      const letter = document.createElement('span');
      letter.className = 'avatar-letter';
      letter.textContent = charData.avatar || charId[0].toUpperCase();
      letter.style.backgroundColor = charData.color || '#888';
      this.el.dialogueAvatar.appendChild(letter);
      this.el.dialogueAvatar.classList.add('visible');
      if (this.el.dialogueBox) this.el.dialogueBox.classList.add('has-avatar');
    };
  }

  updateCharacterExpression(charId, expression) {
    if (!this.el.characterContainer) return;
    const wrapper = this.el.characterContainer.querySelector(`[data-char="${charId}"]`);
    if (!wrapper) return;

    const charData = STORY.characters[charId];
    if (!charData) return;

    const spriteDiv = wrapper.querySelector('.character-sprite');
    if (!spriteDiv) return;

    if (charData.images && charData.images[expression]) {
      const img = new Image();
      img.src = charData.images[expression];
      img.alt = charData.name;
      img.className = 'character-image';

      img.onload = () => {
        spriteDiv.innerHTML = '';
        spriteDiv.appendChild(img);
        spriteDiv.classList.add('has-image');
      };

      img.onerror = () => {
        this.renderFallbackSprite(spriteDiv, charData, expression);
      };
    } else {
      this.renderFallbackSprite(spriteDiv, charData, expression);
    }
  }

  renderFallbackSprite(spriteDiv, charData, expression) {
    spriteDiv.innerHTML = '';
    spriteDiv.classList.remove('has-image');
    const fallback = document.createElement('div');
    fallback.className = 'character-fallback';
    const avatarCircle = document.createElement('div');
    avatarCircle.className = 'character-avatar-circle';
    avatarCircle.style.backgroundColor = charData.color || '#888';
    avatarCircle.textContent = charData.avatar || '?';
    fallback.appendChild(avatarCircle);
    const emoji = document.createElement('div');
    emoji.className = 'character-emoji';
    emoji.textContent = (charData.expressions && charData.expressions[expression]) || '🙂';
    fallback.appendChild(emoji);
    spriteDiv.appendChild(fallback);
  }

  typeText(text) {
    if (!this.el.dialogueText) return;

    if (this.typeTimeout) {
      clearTimeout(this.typeTimeout);
      this.typeTimeout = null;
    }

    this.isTyping = true;
    this.el.dialogueText.textContent = '';
    this._fullText = text;
    this._charIndex = 0;

    const typeNext = () => {
      if (this._charIndex < this._fullText.length) {
        this.el.dialogueText.textContent += this._fullText[this._charIndex];
        this._charIndex++;
        this.typeTimeout = setTimeout(typeNext, this.settings.textSpeed);
      } else {
        this.isTyping = false;
        this.typeTimeout = null;
      }
    };

    typeNext();
  }

  completeText() {
    if (this.typeTimeout) {
      clearTimeout(this.typeTimeout);
      this.typeTimeout = null;
    }
    if (this.el.dialogueText && this._fullText) {
      this.el.dialogueText.textContent = this._fullText;
    }
    this.isTyping = false;
  }

  highlightSpeaker(charId) {
    if (!this.el.characterContainer) return;
    this.el.characterContainer.querySelectorAll('.character-wrapper').forEach(el => {
      el.classList.remove('speaking');
    });
    if (charId) {
      const el = this.el.characterContainer.querySelector(`[data-char="${charId}"]`);
      if (el) el.classList.add('speaking');
    }
  }

  showChoices(options) {
    // Keep dialogue container visible because choices are rendered inside it.
    if (this.el.dialogueContainer) this.el.dialogueContainer.classList.remove('hidden');
    if (this.el.dialogueText) this.el.dialogueText.textContent = '';
    if (this.el.speakerName) this.el.speakerName.textContent = '';
    if (!this.el.choicesContainer) return;

    const renderToken = ++this.choiceRenderToken;
    this.el.choicesContainer.innerHTML = '';
    this.isResolvingText = this.getCurrentLang() === 'en';

    const renderButtons = (resolvedOptions) => {
      if (!this.el.choicesContainer || renderToken !== this.choiceRenderToken) return;
      this.el.choicesContainer.classList.remove('hidden');
      resolvedOptions.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = opt.text;
        btn.style.animationDelay = `${idx * 0.1}s`;

        btn.addEventListener('click', () => {
          this.el.choicesContainer.classList.add('hidden');
          this.el.choicesContainer.innerHTML = '';

          if (opt.set) {
            Object.keys(opt.set).forEach(key => {
              this.variables[key] = opt.set[key];
            });
          }

          this.jumpToScene(opt.next);
        });

        this.el.choicesContainer.appendChild(btn);
      });
      this.isResolvingText = false;
    };

    if (this.getCurrentLang() !== 'en') {
      renderButtons(options);
      return;
    }

    Promise.all(
      options.map(async (opt) => ({
        ...opt,
        text: (await this.translateTextRuToEn(opt.text)) || opt.text
      }))
    ).then(renderButtons).catch(() => {
      renderButtons(options);
    });
  }

  startPoemGame() {
    this.showScreen('poem-screen');

    const words = this.shuffleArray([...STORY.poemWords]).slice(0, 20);
    const scores = { s: 0, n: 0, y: 0, m: 0 };
    let picked = 0;

    if (this.el.poemSayori) this.el.poemSayori.textContent = '0';
    if (this.el.poemNatsuki) this.el.poemNatsuki.textContent = '0';
    if (this.el.poemYuri) this.el.poemYuri.textContent = '0';
    if (this.el.poemMonika) this.el.poemMonika.textContent = '0';
    if (this.el.poemCount) this.el.poemCount.textContent = '0';
    if (this.el.poemTotal) this.el.poemTotal.textContent = '20';

    if (this.el.poemGrid) {
      this.el.poemGrid.innerHTML = '';

      words.forEach(w => {
        const card = document.createElement('div');
        card.className = 'poem-word-card';
        card.textContent = w.word;
        if (this.getCurrentLang() === 'en') {
          this.translateTextRuToEn(w.word).then((translated) => {
            card.textContent = translated || w.word;
          });
        }

        card.addEventListener('click', () => {
          if (card.classList.contains('picked')) return;
          card.classList.add('picked');

          scores.s += w.s;
          scores.n += w.n;
          scores.y += w.y;
          scores.m += w.m;
          picked++;

          if (this.el.poemSayori) this.el.poemSayori.textContent = scores.s;
          if (this.el.poemNatsuki) this.el.poemNatsuki.textContent = scores.n;
          if (this.el.poemYuri) this.el.poemYuri.textContent = scores.y;
          if (this.el.poemMonika) this.el.poemMonika.textContent = scores.m;
          if (this.el.poemCount) this.el.poemCount.textContent = picked;

          if (picked >= 20) {
            this.finishPoemGame(scores);
          }
        });

        this.el.poemGrid.appendChild(card);
      });
    }
  }

  finishPoemGame(scores) {
    const max = Math.max(scores.s, scores.n, scores.y, scores.m);
    let winner = 'sayori';
    if (scores.n === max) winner = 'natsuki';
    if (scores.y === max) winner = 'yuri';
    if (scores.m === max) winner = 'monika';

    if (scores.s === max) winner = 'sayori';

    this.variables.poem_winner = winner;
    this.variables.poem_s = scores.s;
    this.variables.poem_n = scores.n;
    this.variables.poem_y = scores.y;
    this.variables.poem_m = scores.m;

    setTimeout(() => {
      this.showScreen('game-screen');
      this.advance();
    }, 800);
  }

  startBakingGame() {
    this.showScreen('baking-screen');

    const ingredients = this.shuffleArray([...STORY.bakingIngredients]);
    let picked = 0;
    const maxPicks = 4;
    const selectedItems = [];

    if (this.el.bakingCount) this.el.bakingCount.textContent = '0';
    if (this.el.bakingTotal) this.el.bakingTotal.textContent = String(maxPicks);
    if (this.el.bowlItems) this.el.bowlItems.innerHTML = '';

    if (this.el.bakingGrid) {
      this.el.bakingGrid.innerHTML = '';

      ingredients.forEach(ing => {
        const card = document.createElement('div');
        card.className = 'baking-card';

        const emoji = document.createElement('span');
        emoji.className = 'baking-emoji';
        emoji.textContent = ing.emoji;

        const name = document.createElement('span');
        name.className = 'baking-name';
        name.textContent = ing.name;
        if (this.getCurrentLang() === 'en') {
          this.translateTextRuToEn(ing.name).then((translated) => {
            name.textContent = translated || ing.name;
          });
        }

        card.appendChild(emoji);
        card.appendChild(name);

        card.addEventListener('click', () => {
          if (card.classList.contains('selected') || picked >= maxPicks) return;
          card.classList.add('selected');
          picked++;
          selectedItems.push(ing);

          if (this.el.bakingCount) this.el.bakingCount.textContent = String(picked);

          if (this.el.bowlItems) {
            const bowlItem = document.createElement('span');
            bowlItem.className = 'bowl-item';
            bowlItem.textContent = ing.emoji;
            this.el.bowlItems.appendChild(bowlItem);
          }

          if (picked >= maxPicks) {
            setTimeout(() => this.finishBaking(selectedItems, ingredients), 600);
          }
        });

        this.el.bakingGrid.appendChild(card);
      });
    }
  }

  finishBaking(selectedItems, allIngredients) {
    const correctCount = selectedItems.filter(i => i.correct).length;

    if (this.el.bakingGrid) {
      this.el.bakingGrid.querySelectorAll('.baking-card').forEach((card, idx) => {
        const ing = allIngredients[idx];
        if (ing.correct) {
          card.classList.add('correct');
        } else if (card.classList.contains('selected')) {
          card.classList.add('wrong');
        }
      });
    }

    this.variables.baking_score = correctCount;
    if (correctCount === 4) {
      this.variables.baking_result = 'great';
    } else if (correctCount >= 2) {
      this.variables.baking_result = 'ok';
    } else {
      this.variables.baking_result = 'fail';
    }

    setTimeout(() => {
      this.showScreen('game-screen');
      this.advance();
    }, 1200);
  }

  startAssociationGame() {
    this.showScreen('association-screen');

    const allAssoc = this.shuffleArray([...STORY.associations]);
    const questions = allAssoc.slice(0, 5);
    let currentQ = 0;
    let correct = 0;

    if (this.el.assocCurrent) this.el.assocCurrent.textContent = '1';
    if (this.el.assocTotal) this.el.assocTotal.textContent = String(questions.length);

    const showQuestion = () => {
      if (currentQ >= questions.length) {
        this.finishAssociation(correct, questions.length);
        return;
      }

      if (this.el.assocCurrent) this.el.assocCurrent.textContent = String(currentQ + 1);

      const q = questions[currentQ];
      if (this.el.assocWord) {
        this.el.assocWord.textContent = q.word;
        if (this.getCurrentLang() === 'en') {
          this.translateTextRuToEn(q.word).then((translated) => {
            this.el.assocWord.textContent = translated || q.word;
          });
        }
      }

      if (this.el.assocOptions) {
        this.el.assocOptions.innerHTML = '';
        const shuffledOpts = this.shuffleArray([...q.options]);

        shuffledOpts.forEach(opt => {
          const btn = document.createElement('button');
          btn.className = 'assoc-option';
          btn.textContent = opt.text;
          if (this.getCurrentLang() === 'en') {
            this.translateTextRuToEn(opt.text).then((translated) => {
              btn.textContent = translated || opt.text;
            });
          }

          btn.addEventListener('click', () => {
            if (btn.classList.contains('answered')) return;

            this.el.assocOptions.querySelectorAll('.assoc-option').forEach(b => {
              b.classList.add('answered');
            });

            if (opt.correct) {
              btn.classList.add('correct');
              correct++;
            } else {
              btn.classList.add('wrong');
              this.el.assocOptions.querySelectorAll('.assoc-option').forEach(b => {
                const optData = shuffledOpts.find(o => o.text === b.textContent);
                if (optData && optData.correct) b.classList.add('correct');
              });
            }

            currentQ++;
            setTimeout(showQuestion, 800);
          });

          this.el.assocOptions.appendChild(btn);
        });
      }
    };

    showQuestion();
  }

  finishAssociation(correct, total) {
    this.variables.assoc_score = correct;
    if (correct >= 4) {
      this.variables.assoc_result = 'great';
    } else if (correct >= 2) {
      this.variables.assoc_result = 'ok';
    } else {
      this.variables.assoc_result = 'fail';
    }

    setTimeout(() => {
      this.showScreen('game-screen');
      this.advance();
    }, 600);
  }

  startMemoryGame() {
    this.showScreen('memory-screen');

    const allCards = [...STORY.memoryCards];
    const picked = this.shuffleArray(allCards).slice(0, 6);
    const pairs = [];
    picked.forEach(c => {
      pairs.push({ ...c, uid: c.id + '_a' });
      pairs.push({ ...c, uid: c.id + '_b' });
    });

    const shuffled = this.shuffleArray(pairs);
    let flipped = [];
    let matched = 0;
    let moves = 0;
    let locked = false;
    const totalPairs = picked.length;

    if (this.el.memoryMoves) this.el.memoryMoves.textContent = '0';
    if (this.el.memoryPairs) this.el.memoryPairs.textContent = '0';
    if (this.el.memoryTotal) this.el.memoryTotal.textContent = String(totalPairs);

    if (this.el.memoryGrid) {
      this.el.memoryGrid.innerHTML = '';

      shuffled.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.className = 'memory-card';
        cardEl.dataset.cardId = card.id;
        cardEl.dataset.uid = card.uid;

        const inner = document.createElement('div');
        inner.className = 'memory-card-inner';

        const front = document.createElement('div');
        front.className = 'memory-card-front';
        front.textContent = '?';

        const back = document.createElement('div');
        back.className = 'memory-card-back';
        back.innerHTML = `<span class="memory-emoji">${card.emoji}</span><span class="memory-label">${card.label}</span>`;
        if (this.getCurrentLang() === 'en') {
          this.translateTextRuToEn(card.label).then((translated) => {
            back.innerHTML = `<span class="memory-emoji">${card.emoji}</span><span class="memory-label">${translated || card.label}</span>`;
          });
        }

        inner.appendChild(front);
        inner.appendChild(back);
        cardEl.appendChild(inner);

        cardEl.addEventListener('click', () => {
          if (locked) return;
          if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) return;

          cardEl.classList.add('flipped');
          flipped.push(cardEl);

          if (flipped.length === 2) {
            moves++;
            locked = true;
            if (this.el.memoryMoves) this.el.memoryMoves.textContent = String(moves);

            const [first, second] = flipped;
            if (first.dataset.cardId === second.dataset.cardId) {
              first.classList.add('matched');
              second.classList.add('matched');
              matched++;
              if (this.el.memoryPairs) this.el.memoryPairs.textContent = String(matched);
              flipped = [];
              locked = false;

              if (matched >= totalPairs) {
                setTimeout(() => this.finishMemory(moves), 600);
              }
            } else {
              setTimeout(() => {
                first.classList.remove('flipped');
                second.classList.remove('flipped');
                flipped = [];
                locked = false;
              }, 800);
            }
          }
        });

        this.el.memoryGrid.appendChild(cardEl);
      });
    }
  }

  finishMemory(moves) {
    this.variables.memory_moves = moves;
    if (moves <= 8) {
      this.variables.memory_result = 'great';
    } else if (moves <= 14) {
      this.variables.memory_result = 'ok';
    } else {
      this.variables.memory_result = 'many';
    }

    setTimeout(() => {
      this.showScreen('game-screen');
      this.advance();
    }, 600);
  }

  ensureAudioContext() {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    if (!this.audioCtx) {
      this.audioCtx = new Ctx();
      this.musicGainNode = this.audioCtx.createGain();
      this.musicGainNode.connect(this.audioCtx.destination);
      this.musicGainNode.gain.value = this.settings.musicVolume / 100;
    }
    return this.audioCtx;
  }

  stopMusicPlayback() {
    if (this.musicSource) {
      try { this.musicSource.stop(0); } catch (e) {}
      try { this.musicSource.disconnect(); } catch (e) {}
      this.musicSource = null;
    }
    this.musicPaused = true;
    this.musicPauseOffset = 0;
  }

  startMusicPlayback(offsetSeconds) {
    const ctx = this.ensureAudioContext();
    if (!ctx || !this.musicBuffer || !this.musicGainNode) return;
    if (ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    const source = ctx.createBufferSource();
    source.buffer = this.musicBuffer;
    source.loop = this.musicLoop;
    source.connect(this.musicGainNode);

    const safeOffset = Math.max(0, Math.min(offsetSeconds || 0, Math.max(0, this.musicBuffer.duration - 0.01)));
    this.musicStartTime = ctx.currentTime - safeOffset;
    this.musicSource = source;
    this.musicPaused = false;
    this.musicPauseOffset = safeOffset;

    source.onended = () => {
      if (this.musicSource === source && !source.loop) {
        this.musicSource = null;
        this.musicPaused = true;
      }
    };

    try {
      source.start(0, safeOffset);
    } catch (e) {
      this.musicSource = null;
      this.musicPaused = true;
    }
  }

  pauseMusicPlayback() {
    if (!this.musicSource || !this.audioCtx || this.musicPaused) return;
    this.musicPauseOffset = Math.max(0, this.audioCtx.currentTime - this.musicStartTime);
    this.stopMusicPlayback();
  }

  resumeMusicPlayback() {
    if (!this.music || this.isMuted) return;
    if (!this.musicBuffer) return;
    this.startMusicPlayback(this.musicPauseOffset || 0);
  }

  async loadMusicBuffer(url) {
    const ctx = this.ensureAudioContext();
    if (!ctx) return null;

    const response = await fetch(url);
    const arrBuffer = await response.arrayBuffer();
    const audioBuffer = await ctx.decodeAudioData(arrBuffer.slice(0));
    return audioBuffer;
  }

  async playMusic(musicId) {
    if (musicId === 'stop') {
      this.stopMusicPlayback();
      this.music = null;
      this.musicBuffer = null;
      this.currentMusicUrl = null;
      this.currentMusicId = null;
      return;
    }

    const url = STORY.music[musicId];
    if (!url) return;
    if (this.currentMusicId === musicId) return;

    this.stopMusicPlayback();
    this.currentMusicId = musicId;
    this.currentMusicUrl = url;
    this.music = { paused: true };

    try {
      this.musicBuffer = await this.loadMusicBuffer(url);
      if (!this.musicBuffer) return;
      if (!this.isMuted) {
        this.startMusicPlayback(0);
      } else {
        this.musicPaused = true;
      }
    } catch (e) {
      console.warn('Music load failed:', e);
      this.musicBuffer = null;
    }
  }

  updateMusicVolume() {
    if (this.musicGainNode) {
      this.musicGainNode.gain.value = this.settings.musicVolume / 100;
    }
  }

  autoSave() {
    this.saveToKey('novela_auto');
  }

  saveSlot(slot) {
    this.saveToKey(`novela_save_${slot}`);
  }

  saveToKey(key) {
    const data = {
      scene: this.currentScene,
      commandIndex: this.commandIndex,
      variables: { ...this.variables },
      visibleCharacters: Object.keys(this.visibleCharacters),
      history: this.history.slice(-50),
      currentBackgroundId: this.currentBackgroundId,
      currentMusicId: this.currentMusicId,
      timestamp: Date.now()
    };
    localStorage.setItem(key, JSON.stringify(data));
    this.refreshContinueAvailability();

    if (window.PlatformSDK && window.PlatformSDK.ready && typeof window.PlatformSDK.saveCloud === 'function') {
      const cloudPayload = {
        auto: key === 'novela_auto' ? data : this.safeParseStorage('novela_auto'),
        slots: this.collectLocalSlots(),
        updatedAt: Date.now()
      };
      window.PlatformSDK.saveCloud(cloudPayload).catch(() => {});
    }
  }

  safeParseStorage(key) {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  collectLocalSlots() {
    const slots = {};
    for (let i = 1; i <= 8; i++) {
      const key = `novela_save_${i}`;
      const parsed = this.safeParseStorage(key);
      if (parsed) slots[key] = parsed;
    }
    return slots;
  }

  async loadSlot(slot) {
    const key = `novela_save_${slot}`;
    const raw = localStorage.getItem(key);
    let data = raw ? JSON.parse(raw) : null;

    if (!data && window.PlatformSDK && window.PlatformSDK.ready && typeof window.PlatformSDK.loadCloud === 'function') {
      try {
        const cloud = await window.PlatformSDK.loadCloud();
        if (cloud && cloud.slots && cloud.slots[key]) {
          data = cloud.slots[key];
          localStorage.setItem(key, JSON.stringify(data));
        }
      } catch (e) {}
    }

    if (!data) return;
    this.restoreSaveData(data);
  }

  restoreSaveData(data) {
    this.currentScene = data.scene;
    this.commandIndex = data.commandIndex;
    this.variables = data.variables || {};
    this.history = data.history || [];
    this.currentBackgroundId = data.currentBackgroundId || null;

    if (this.el.characterContainer) this.el.characterContainer.innerHTML = '';
    this.visibleCharacters = {};

    if (data.visibleCharacters && Array.isArray(data.visibleCharacters)) {
      data.visibleCharacters.forEach(charId => {
        const charData = STORY.characters[charId];
        if (charData) {
          this.showCharacter(charId, 'center', 'normal');
        }
      });
    }

    if (data.currentMusicId) {
      this.playMusic(data.currentMusicId);
    }

    if (this.currentBackgroundId) {
      this.changeBackground(this.currentBackgroundId);
    }

    this.showScreen('game-screen');
    this.executeCommand();
  }

  async loadGameState() {
    let data = null;

    if (window.PlatformSDK && window.PlatformSDK.ready && typeof window.PlatformSDK.loadCloud === 'function') {
      try {
        const cloud = await window.PlatformSDK.loadCloud();
        if (cloud && cloud.auto) {
          data = cloud.auto;
        }
      } catch (e) {}
    }

    if (!data) {
      const raw = localStorage.getItem('novela_auto');
      if (!raw) return;
      data = JSON.parse(raw);
    }

    this.restoreSaveData(data);
  }

  showSaveLoad(mode) {
    if (!this.el.saveLoadModal || !this.el.slotsContainer) return;

    if (this.el.saveLoadTitle) {
      this.el.saveLoadTitle.textContent = mode === 'save' ? this.t('saveLoad.title.save') : this.t('saveLoad.title.load');
    }

    this.el.slotsContainer.innerHTML = '';

    const autoRaw = localStorage.getItem('novela_auto');
    const autoSlot = document.createElement('div');
    autoSlot.className = 'save-slot';
    if (autoRaw) {
      const autoData = JSON.parse(autoRaw);
      const date = new Date(autoData.timestamp);
      autoSlot.innerHTML = `
        <div class="slot-info">
          <span class="slot-name">${this.t('saveLoad.autosave')}</span>
          <span class="slot-date">${date.toLocaleString()}</span>
          <span class="slot-scene">${autoData.scene || ''}</span>
        </div>
        <div class="slot-actions">
          ${mode === 'load' ? `<button class="slot-btn slot-load-btn">${this.t('saveLoad.btn.load')}</button>` : ''}
          <button class="slot-btn slot-delete-btn">${this.t('saveLoad.btn.delete')}</button>
        </div>
      `;
      const loadBtn = autoSlot.querySelector('.slot-load-btn');
      if (loadBtn) {
        loadBtn.addEventListener('click', () => {
          this.closeModal(this.el.saveLoadModal);
          this.loadGameState();
        });
      }
      const delBtn = autoSlot.querySelector('.slot-delete-btn');
      if (delBtn) {
        delBtn.addEventListener('click', () => {
          localStorage.removeItem('novela_auto');
          this.refreshContinueAvailability();
          this.showSaveLoad(mode);
        });
      }
    } else {
      autoSlot.innerHTML = `
        <div class="slot-info">
          <span class="slot-name">${this.t('saveLoad.autosave')}</span>
          <span class="slot-date">${this.t('saveLoad.empty')}</span>
        </div>
      `;
    }
    this.el.slotsContainer.appendChild(autoSlot);

    for (let i = 1; i <= 8; i++) {
      const key = `novela_save_${i}`;
      const raw = localStorage.getItem(key);
      const slot = document.createElement('div');
      slot.className = 'save-slot';

      if (raw) {
        const saveData = JSON.parse(raw);
        const date = new Date(saveData.timestamp);
        slot.innerHTML = `
          <div class="slot-info">
            <span class="slot-name">${this.t('saveLoad.slot', { num: i })}</span>
            <span class="slot-date">${date.toLocaleString()}</span>
            <span class="slot-scene">${saveData.scene || ''}</span>
          </div>
          <div class="slot-actions">
            ${mode === 'save' ? `<button class="slot-btn slot-save-btn">${this.t('saveLoad.btn.save')}</button>` : ''}
            ${mode === 'load' ? `<button class="slot-btn slot-load-btn">${this.t('saveLoad.btn.load')}</button>` : ''}
            <button class="slot-btn slot-delete-btn">${this.t('saveLoad.btn.delete')}</button>
          </div>
        `;
      } else {
        slot.innerHTML = `
          <div class="slot-info">
            <span class="slot-name">${this.t('saveLoad.slot', { num: i })}</span>
            <span class="slot-date">${this.t('saveLoad.empty')}</span>
          </div>
          <div class="slot-actions">
            ${mode === 'save' ? `<button class="slot-btn slot-save-btn">${this.t('saveLoad.btn.save')}</button>` : ''}
          </div>
        `;
      }

      const saveBtn = slot.querySelector('.slot-save-btn');
      if (saveBtn) {
        const slotNum = i;
        saveBtn.addEventListener('click', () => {
          this.saveSlot(slotNum);
          this.showSaveLoad(mode);
        });
      }

      const loadBtn = slot.querySelector('.slot-load-btn');
      if (loadBtn) {
        const slotNum = i;
        loadBtn.addEventListener('click', async () => {
          this.closeModal(this.el.saveLoadModal);
          await this.loadSlot(slotNum);
        });
      }

      const delBtn = slot.querySelector('.slot-delete-btn');
      if (delBtn) {
        const slotNum = i;
        delBtn.addEventListener('click', () => {
          localStorage.removeItem(`novela_save_${slotNum}`);
          this.refreshContinueAvailability();
          this.showSaveLoad(mode);
        });
      }

      this.el.slotsContainer.appendChild(slot);
    }

    this.openModal(this.el.saveLoadModal);
  }

  showSettings() {
    if (this.el.settingTextSpeed) {
      this.el.settingTextSpeed.value = this.settings.textSpeed;
    }
    if (this.el.settingAutoSpeed) {
      this.el.settingAutoSpeed.value = this.settings.autoSpeed;
    }
    if (this.el.settingMusicVol) {
      this.el.settingMusicVol.value = this.settings.musicVolume;
    }
    if (this.el.textSpeedVal) {
      this.el.textSpeedVal.textContent = this.settings.textSpeed;
    }
    if (this.el.autoSpeedVal) {
      this.el.autoSpeedVal.textContent = this.settings.autoSpeed;
    }
    if (this.el.musicVolVal) {
      this.el.musicVolVal.textContent = this.settings.musicVolume;
    }

    this.openModal(this.el.settingsModal);
  }

  saveSettings() {
    localStorage.setItem('novela_settings', JSON.stringify(this.settings));
  }

  loadSettings() {
    const raw = localStorage.getItem('novela_settings');
    if (raw) {
      try {
        const saved = JSON.parse(raw);
        this.settings.textSpeed = saved.textSpeed ?? this.settings.textSpeed;
        this.settings.autoSpeed = saved.autoSpeed ?? this.settings.autoSpeed;
        this.settings.musicVolume = saved.musicVolume ?? this.settings.musicVolume;
      } catch (e) {}
    }

    if (this.el.settingTextSpeed) {
      this.el.settingTextSpeed.value = this.settings.textSpeed;
    }
    if (this.el.settingAutoSpeed) {
      this.el.settingAutoSpeed.value = this.settings.autoSpeed;
    }
    if (this.el.settingMusicVol) {
      this.el.settingMusicVol.value = this.settings.musicVolume;
    }
    if (this.el.textSpeedVal) {
      this.el.textSpeedVal.textContent = this.settings.textSpeed;
    }
    if (this.el.autoSpeedVal) {
      this.el.autoSpeedVal.textContent = this.settings.autoSpeed;
    }
    if (this.el.musicVolVal) {
      this.el.musicVolVal.textContent = this.settings.musicVolume;
    }
  }

  openModal(el) {
    if (!el) return;
    el.classList.remove('hidden');
    el.classList.add('active');
  }

  closeModal(el) {
    if (!el) return;
    el.classList.add('hidden');
    el.classList.remove('active');
  }

  showHistory() {
    if (!this.el.historyModal || !this.el.historyContent) return;

    this.el.historyContent.innerHTML = '';

    this.history.forEach(entry => {
      const div = document.createElement('div');
      div.className = 'history-entry';

      if (entry.name) {
        const nameSpan = document.createElement('span');
        nameSpan.className = 'history-name';
        nameSpan.textContent = entry.name + ': ';

        const charEntry = Object.values(STORY.characters).find(c => c.name === entry.name);
        if (charEntry) nameSpan.style.color = charEntry.color;

        div.appendChild(nameSpan);
      }

      const textSpan = document.createElement('span');
      textSpan.className = 'history-text';
      textSpan.textContent = entry.text;
      div.appendChild(textSpan);

      this.el.historyContent.appendChild(div);
    });

    this.el.historyContent.scrollTop = this.el.historyContent.scrollHeight;
    this.openModal(this.el.historyModal);
  }

  showConfirm(text, onYes) {
    if (!this.el.confirmModal) return;

    if (this.el.confirmText) {
      this.el.confirmText.textContent = text;
    }

    const yesHandler = () => {
      this.closeModal(this.el.confirmModal);
      cleanup();
      if (onYes) onYes();
    };

    const noHandler = () => {
      this.closeModal(this.el.confirmModal);
      cleanup();
    };

    const cleanup = () => {
      if (this.el.confirmYes) this.el.confirmYes.removeEventListener('click', yesHandler);
      if (this.el.confirmNo) this.el.confirmNo.removeEventListener('click', noHandler);
    };

    if (this.el.confirmYes) {
      this.el.confirmYes.addEventListener('click', yesHandler);
    }
    if (this.el.confirmNo) {
      this.el.confirmNo.addEventListener('click', noHandler);
    }

    this.openModal(this.el.confirmModal);
  }

  shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}

const game = new NovelEngine();
