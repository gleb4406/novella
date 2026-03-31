(function initI18n() {
  const STORAGE_KEY = 'novela_lang';

  const strings = {
    en: {
      'document.title': 'Anime Novella',
      'game.title': 'Anime Novella',
      'game.subtitle': 'Every word has meaning...',
      'menu.newGame': 'New Game',
      'menu.continue': 'Continue',
      'menu.load': 'Load',
      'menu.settings': 'Settings',
      'char.sayori': 'Sayori',
      'char.natsuki': 'Natsuki',
      'char.yuri': 'Yuri',
      'char.monika': 'Monika',
      'music.aria': 'Music',
      'dialog.read': 'Read',
      'quick.save': 'Save',
      'quick.load': 'Load',
      'quick.history': 'History',
      'quick.settings': 'Settings',
      'quick.menu': 'Menu',
      'minigame.poem.title': 'Write a Poem',
      'minigame.poem.subtitle': 'Pick the words that resonate with you',
      'minigame.poem.progress': 'Selected:',
      'minigame.baking.title': 'Baking with Natsuki',
      'minigame.baking.subtitle': 'Choose the right ingredients for perfect cupcakes!',
      'minigame.baking.progress': 'Selected:',
      'minigame.baking.bowl': 'Your bowl:',
      'minigame.assoc.title': 'Literature Quiz',
      'minigame.assoc.subtitle': 'What do these literary terms mean?',
      'minigame.assoc.progress': 'Question:',
      'minigame.memory.title': 'Memory Match',
      'minigame.memory.subtitle': 'Find all pairs!',
      'minigame.memory.progress.moves': 'Moves:',
      'minigame.memory.progress.pairs': 'Pairs found:',
      'settings.title': 'Settings',
      'settings.textSpeed': 'Text speed',
      'settings.autoSpeed': 'Auto-advance speed',
      'settings.musicVolume': 'Music volume',
      'settings.language': 'Language',
      'settings.close': 'Close',
      'history.title': 'History',
      'confirm.yes': 'Yes',
      'confirm.no': 'No',
      'confirm.backToMenu': 'Return to main menu?',
      'saveLoad.title.save': 'Save',
      'saveLoad.title.load': 'Load',
      'saveLoad.autosave': 'Autosave',
      'saveLoad.empty': 'Empty',
      'saveLoad.slot': 'Slot {num}',
      'saveLoad.btn.save': 'Save',
      'saveLoad.btn.load': 'Load',
      'saveLoad.btn.delete': 'Delete'
    },
    ru: {
      'document.title': 'Аниме Новелла',
      'game.title': 'Аниме Новелла',
      'game.subtitle': 'Каждое слово имеет значение...',
      'menu.newGame': 'Новая игра',
      'menu.continue': 'Продолжить',
      'menu.load': 'Загрузить',
      'menu.settings': 'Настройки',
      'char.sayori': 'Сайори',
      'char.natsuki': 'Нацуки',
      'char.yuri': 'Юри',
      'char.monika': 'Моника',
      'music.aria': 'Музыка',
      'dialog.read': 'Прочитал',
      'quick.save': 'Сохранить',
      'quick.load': 'Загрузить',
      'quick.history': 'История',
      'quick.settings': 'Настройки',
      'quick.menu': 'Меню',
      'minigame.poem.title': 'Напиши стихотворение',
      'minigame.poem.subtitle': 'Выбери слова, которые тебе откликаются',
      'minigame.poem.progress': 'Выбрано:',
      'minigame.baking.title': 'Выпечка с Нацуки',
      'minigame.baking.subtitle': 'Выбери правильные ингредиенты для идеальных кексов!',
      'minigame.baking.progress': 'Выбрано:',
      'minigame.baking.bowl': 'Твоя миска:',
      'minigame.assoc.title': 'Литературная викторина',
      'minigame.assoc.subtitle': 'Что означают эти литературные термины?',
      'minigame.assoc.progress': 'Вопрос:',
      'minigame.memory.title': 'Игра на память',
      'minigame.memory.subtitle': 'Найди все пары!',
      'minigame.memory.progress.moves': 'Ходов:',
      'minigame.memory.progress.pairs': 'Пар найдено:',
      'settings.title': 'Настройки',
      'settings.textSpeed': 'Скорость текста',
      'settings.autoSpeed': 'Скорость авто-перехода',
      'settings.musicVolume': 'Громкость музыки',
      'settings.language': 'Язык',
      'settings.close': 'Закрыть',
      'history.title': 'История',
      'confirm.yes': 'Да',
      'confirm.no': 'Нет',
      'confirm.backToMenu': 'Вернуться в главное меню?',
      'saveLoad.title.save': 'Сохранить',
      'saveLoad.title.load': 'Загрузить',
      'saveLoad.autosave': 'Автосохранение',
      'saveLoad.empty': 'Пусто',
      'saveLoad.slot': 'Слот {num}',
      'saveLoad.btn.save': 'Сохранить',
      'saveLoad.btn.load': 'Загрузить',
      'saveLoad.btn.delete': 'Удалить'
    }
  };

  function normalizeLang(lang) {
    if (!lang) return 'en';
    const lower = String(lang).toLowerCase();
    if (lower.startsWith('ru')) return 'ru';
    return 'en';
  }

  function formatTemplate(text, params) {
    if (!params) return text;
    return text.replace(/\{(\w+)\}/g, (_, key) => (
      params[key] !== undefined ? String(params[key]) : `{${key}}`
    ));
  }

  const I18N = {
    lang: 'en',
    strings,

    init(preferredLang) {
      const saved = localStorage.getItem(STORAGE_KEY);
      const detected = preferredLang || (window.YG && window.YG.getLanguage ? window.YG.getLanguage() : navigator.language);
      const nextLang = normalizeLang(detected || saved);
      this.setLanguage(nextLang, false);
    },

    t(key, params) {
      const dict = this.strings[this.lang] || this.strings.en;
      const fallback = this.strings.en || {};
      const text = dict[key] || fallback[key] || key;
      return formatTemplate(text, params);
    },

    setLanguage(lang, persist = true) {
      this.lang = normalizeLang(lang);
      if (persist) {
        localStorage.setItem(STORAGE_KEY, this.lang);
      }
      this.apply();
      return this.lang;
    },

    apply(root) {
      const scope = root || document;
      scope.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (!key) return;
        el.textContent = this.t(key);
      });
      scope.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
        const key = el.getAttribute('data-i18n-aria-label');
        if (!key) return;
        el.setAttribute('aria-label', this.t(key));
      });

      document.documentElement.lang = this.lang;
      document.title = this.t('document.title');
    }
  };

  window.I18N = I18N;
})();
