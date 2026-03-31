const STORY = {

  characters: {
    mc: {
      name: "Ты", color: "#64b5f6", nameClass: "name-mc",
      spriteClass: "sprite-mc", avatar: "А",
      expressions: { normal: "😐", happy: "😊", surprised: "😲", worried: "😟" },
      images: {
        normal:    "assets/characters/mc_normal.webp",
        happy:     "assets/characters/mc_happy.webp",
        surprised: "assets/characters/mc_surprised.webp",
        worried:   "assets/characters/mc_worried.webp"
      }
    },
    sayori: {
      name: "Сайори", color: "#ff9a9e", nameClass: "name-sayori",
      spriteClass: "sprite-sayori", avatar: "С",
      expressions: { happy: "😊", sad: "😢", surprised: "😲", normal: "🙂", embarrassed: "😳", excited: "🤩" },
      images: {
        happy:       "assets/characters/sayori_happy.webp",
        sad:         "assets/characters/sayori_sad.webp",
        surprised:   "assets/characters/sayori_surprised.webp",
        normal:      "assets/characters/sayori_normal.webp",
        embarrassed: "assets/characters/sayori_embarrassed1.webp",
        excited:     "assets/characters/sayori_excited.webp"
      }
    },
    natsuki: {
      name: "Нацуки", color: "#ff6b9d", nameClass: "name-natsuki",
      spriteClass: "sprite-natsuki", avatar: "Н",
      expressions: { angry: "😤", happy: "😊", embarrassed: "😳", normal: "😐", proud: "😏", surprised: "😲" },
      images: {
        angry:       "assets/characters/natsuki_angry.webp",
        happy:       "assets/characters/natsuki_happy.webp",
        embarrassed: "assets/characters/natsuki_embarrassed.webp",
        normal:      "assets/characters/natsuki_normal.webp",
        proud:       "assets/characters/natsuki_proud.webp",
        surprised:   "assets/characters/natsuki_surprised.webp"
      }
    },
    yuri: {
      name: "Юри", color: "#a18cd1", nameClass: "name-yuri",
      spriteClass: "sprite-yuri", avatar: "Ю",
      expressions: { shy: "😳", happy: "🙂", normal: "😌", passionate: "✨", nervous: "😰", surprised: "😲" },
      images: {
        shy:        "assets/characters/yuri_shy.webp",
        happy:      "assets/characters/yuri_happy.webp",
        normal:     "assets/characters/yuri_normal.webp",
        passionate: "assets/characters/yuri_passionate.webp",
        nervous:    "assets/characters/yuri_nervous.webp",
        surprised:  "assets/characters/yuri_surprised.webp"
      }
    },
    monika: {
      name: "Моника", color: "#7bc67e", nameClass: "name-monika",
      spriteClass: "sprite-monika", avatar: "М",
      expressions: { happy: "😊", confident: "😏", normal: "🙂", wink: "😉", thoughtful: "🤔", serious: "😐" },
      images: {
        happy:      "assets/characters/monika_happy.webp",
        confident:  "assets/characters/monika_confident.webp",
        normal:     "assets/characters/monika_normal.webp",
        wink:       "assets/characters/monika_wink.webp",
        thoughtful: "assets/characters/monika_thoughtful.webp",
        serious:    "assets/characters/monika_serious.webp"
      }
    }
  },

  music: {
    menu:      "assets/music/menu_theme.mp3",
    daily:     "assets/music/daily_theme.mp3",
    club:      "assets/music/daily_theme.mp3",
    emotional: "assets/music/emotional_theme.mp3",
    poem:      "assets/music/poem_theme.mp3"
  },

  backgrounds: {
    bedroom:         { css: "bg-bedroom",         image: "assets/backgrounds/bg_bedroom.webp" },
    street:          { css: "bg-street",           image: "assets/backgrounds/bg_street.webp" },
    school_exterior: { css: "bg-school-exterior",  image: "assets/backgrounds/bg_school_exterior.webp" },
    hallway:         { css: "bg-hallway",          image: "assets/backgrounds/bg_hallway.webp" },
    club_room:       { css: "bg-club-room",        image: "assets/backgrounds/bg_club_room.webp" },
    sunset:          { css: "bg-sunset",           image: "assets/backgrounds/bg_sunset.webp" },
    black:           { css: "bg-black",            image: null }
  },

  bakingIngredients: [
    { name: "Мука",       emoji: "🌾", correct: true },
    { name: "Сахар",      emoji: "🍬", correct: true },
    { name: "Яйца",      emoji: "🥚", correct: true },
    { name: "Масло",      emoji: "🧈", correct: true },
    { name: "Соль",       emoji: "🧂", correct: false },
    { name: "Кетчуп",     emoji: "🍅", correct: false },
    { name: "Перец",      emoji: "🌶️", correct: false },
    { name: "Лук",        emoji: "🧅", correct: false },
    { name: "Ваниль",     emoji: "🌸", correct: false },
    { name: "Горчица",    emoji: "🟡", correct: false }
  ],

  associations: [
    {
      word: "Метафора",
      options: [
        { text: "Скрытое сравнение", correct: true },
        { text: "Повторение звуков", correct: false },
        { text: "Преувеличение", correct: false },
        { text: "Обращение к природе", correct: false }
      ]
    },
    {
      word: "Катарсис",
      options: [
        { text: "Духовное очищение через искусство", correct: true },
        { text: "Начало произведения", correct: false },
        { text: "Описание природы", correct: false },
        { text: "Второстепенный персонаж", correct: false }
      ]
    },
    {
      word: "Аллитерация",
      options: [
        { text: "Повторение согласных звуков", correct: true },
        { text: "Противопоставление понятий", correct: false },
        { text: "Нарушение порядка слов", correct: false },
        { text: "Переносное значение", correct: false }
      ]
    },
    {
      word: "Антитеза",
      options: [
        { text: "Противопоставление", correct: true },
        { text: "Краткое изречение", correct: false },
        { text: "Повтор в начале строк", correct: false },
        { text: "Вид рифмы", correct: false }
      ]
    },
    {
      word: "Эпитет",
      options: [
        { text: "Образное определение", correct: true },
        { text: "Вопрос без ответа", correct: false },
        { text: "Вид стихотворения", correct: false },
        { text: "Внутренний монолог", correct: false }
      ]
    },
    {
      word: "Гипербола",
      options: [
        { text: "Художественное преувеличение", correct: true },
        { text: "Скрытое сравнение", correct: false },
        { text: "Перестановка слов", correct: false },
        { text: "Краткая мудрость", correct: false }
      ]
    },
    {
      word: "Анафора",
      options: [
        { text: "Повторение слов в начале строк", correct: true },
        { text: "Противопоставление образов", correct: false },
        { text: "Олицетворение предметов", correct: false },
        { text: "Ритмический рисунок", correct: false }
      ]
    },
    {
      word: "Оксюморон",
      options: [
        { text: "Сочетание противоположностей", correct: true },
        { text: "Длинное описание", correct: false },
        { text: "Музыкальный приём", correct: false },
        { text: "Вид диалога", correct: false }
      ]
    }
  ],

  memoryCards: [
    { id: "sayori",  emoji: "🎀", label: "Сайори" },
    { id: "natsuki", emoji: "🧁", label: "Нацуки" },
    { id: "yuri",    emoji: "📖", label: "Юри" },
    { id: "monika",  emoji: "💚", label: "Моника" },
    { id: "pen",     emoji: "🖊️", label: "Перо" },
    { id: "star",    emoji: "⭐", label: "Звезда" },
    { id: "heart",   emoji: "💕", label: "Сердце" },
    { id: "book",    emoji: "📚", label: "Книги" }
  ],

  poemWords: [
    { word: "солнце",      s: 3, n: 1, y: 0, m: 1 },
    { word: "радость",     s: 3, n: 1, y: 0, m: 1 },
    { word: "улыбка",      s: 3, n: 2, y: 0, m: 1 },
    { word: "облака",      s: 3, n: 0, y: 1, m: 1 },
    { word: "дружба",      s: 3, n: 1, y: 0, m: 2 },
    { word: "тепло",       s: 3, n: 1, y: 1, m: 0 },
    { word: "завтрак",     s: 2, n: 2, y: 0, m: 0 },
    { word: "праздник",    s: 3, n: 2, y: 0, m: 0 },
    { word: "кекс",        s: 1, n: 3, y: 0, m: 0 },
    { word: "котёнок",     s: 1, n: 3, y: 0, m: 0 },
    { word: "розовый",     s: 1, n: 3, y: 0, m: 0 },
    { word: "сладость",    s: 2, n: 3, y: 0, m: 0 },
    { word: "храбрость",   s: 0, n: 3, y: 1, m: 1 },
    { word: "блеск",       s: 1, n: 3, y: 1, m: 0 },
    { word: "прыжок",      s: 1, n: 3, y: 0, m: 0 },
    { word: "мечта",       s: 2, n: 2, y: 1, m: 1 },
    { word: "вечность",    s: 0, n: 0, y: 3, m: 1 },
    { word: "тайна",       s: 0, n: 0, y: 3, m: 1 },
    { word: "бездна",      s: 0, n: 0, y: 3, m: 1 },
    { word: "одиночество", s: 1, n: 0, y: 3, m: 1 },
    { word: "мрак",        s: 0, n: 0, y: 3, m: 0 },
    { word: "чернила",     s: 0, n: 0, y: 3, m: 1 },
    { word: "лабиринт",    s: 0, n: 0, y: 3, m: 1 },
    { word: "шёпот",       s: 0, n: 0, y: 3, m: 0 },
    { word: "реальность",  s: 0, n: 0, y: 1, m: 3 },
    { word: "код",         s: 0, n: 0, y: 0, m: 3 },
    { word: "истина",      s: 0, n: 0, y: 2, m: 3 },
    { word: "свобода",     s: 1, n: 1, y: 1, m: 3 },
    { word: "контроль",    s: 0, n: 0, y: 0, m: 3 },
    { word: "сознание",    s: 0, n: 0, y: 2, m: 3 },
    { word: "выбор",       s: 0, n: 0, y: 1, m: 3 },
    { word: "экран",       s: 0, n: 0, y: 0, m: 3 },
    { word: "пламя",       s: 1, n: 1, y: 2, m: 1 },
    { word: "звезда",      s: 2, n: 1, y: 2, m: 1 },
    { word: "сердце",      s: 2, n: 1, y: 1, m: 2 }
  ],

  scenes: {

    "start": [
      { type: "music", id: "daily" },
      { type: "bg", id: "bedroom", transition: "fade" },
      { type: "narrate", text: "...Опять этот будильник." },
      { type: "wait", ms: 600 },
      { type: "narrate", text: "Я с трудом разлепил глаза и уставился в потолок. Обычное утро обычного дня." },
      { type: "narrate", text: "Школа, уроки, дом, сон. Повторить. Вот и весь мой захватывающий цикл жизни." },
      { type: "narrate", text: "Иногда мне кажется, что я застрял в какой-то бесконечной петле, где ничего по-настоящему интересного не происходит." },
      { type: "narrate", text: "Ну ладно. Пора собираться, а то опять опоздаю." },
      { type: "wait", ms: 400 },
      { type: "jump", to: "meet_sayori" }
    ],

    "meet_sayori": [
      { type: "bg", id: "street", transition: "fade" },
      { type: "narrate", text: "Утренний воздух приятно холодил лицо. Я шёл по привычному маршруту, засунув руки в карманы." },
      { type: "narrate", text: "Где-то позади раздался знакомый топот." },
      { type: "show", char: "sayori", pos: "center", expr: "happy" },
      { type: "dialog", char: "sayori", expr: "happy", text: "Эй! Подожди меня!" },
      { type: "narrate", text: "Я даже не обернулся. Кто бы это мог быть, как не..." },
      { type: "dialog", char: "sayori", expr: "excited", text: "Доброе утро! Ты сегодня рано! Ну... относительно рано. Для тебя!" },
      { type: "dialog", char: "mc", text: "Привет, Сайори. Ты, как обычно, бежишь в последнюю минуту?" },
      { type: "dialog", char: "sayori", expr: "embarrassed", text: "Э-хе-хе... Я, может, чуть-чуть проспала... Но это не главное!" },
      { type: "dialog", char: "sayori", expr: "happy", text: "Послушай, послушай! Я хотела тебя кое о чём попросить!" },
      { type: "dialog", char: "mc", text: "О нет. Последний раз, когда ты начинала разговор так, я три часа помогал тебе искать потерянного хомяка." },
      { type: "dialog", char: "sayori", expr: "happy", text: "Да нет же! В нашей школе есть литературный кружок, и... мне бы очень хотелось, чтобы ты туда заглянул!" },
      { type: "dialog", char: "mc", text: "Литературный кружок? С каких пор тебя интересует литература?" },
      { type: "dialog", char: "sayori", expr: "embarrassed", text: "Ну... на самом деле, я уже давно туда хожу! Там очень классно, честно! Пожалуйста, загляни хотя бы разочек!" },
      { type: "choice", options: [
        { text: "Звучит интересно, приду!", next: "sayori_react_positive", set: { sayori_mood: "happy" } },
        { text: "Литература? Скукотища...", next: "sayori_react_skeptic", set: { sayori_mood: "neutral" } },
        { text: "Только если там есть еда", next: "sayori_react_joke", set: { sayori_mood: "amused" } }
      ]}
    ],

    "sayori_react_positive": [
      { type: "dialog", char: "mc", text: "Знаешь, звучит неплохо. Ладно, приду." },
      { type: "dialog", char: "sayori", expr: "excited", text: "ПРАВДА?! Ура-ура-ура! Ты не пожалеешь, обещаю!" },
      { type: "dialog", char: "sayori", expr: "happy", text: "После уроков — третий этаж, не забудь!" },
      { type: "jump", to: "sayori_react_end" }
    ],

    "sayori_react_skeptic": [
      { type: "dialog", char: "mc", text: "Литературный кружок... Не знаю, Сайори. Это не совсем моё." },
      { type: "dialog", char: "sayori", expr: "sad", text: "Ну вот... Я так и знала, что ты так скажешь." },
      { type: "dialog", char: "sayori", expr: "happy", text: "Но! Там не только книги! Там классные люди, и печенье, и стихи, и..." },
      { type: "dialog", char: "mc", text: "Ладно, ладно. Загляну. Одним глазком." },
      { type: "dialog", char: "sayori", expr: "excited", text: "Одного глазка хватит! После уроков — не забудь!" },
      { type: "jump", to: "sayori_react_end" }
    ],

    "sayori_react_joke": [
      { type: "dialog", char: "mc", text: "Только если там кормят. Я человек простой." },
      { type: "dialog", char: "sayori", expr: "excited", text: "ТАМ ЕСТЬ КЕКСЫ! Нацуки печёт такие кексы, что ты умрёшь от счастья!" },
      { type: "dialog", char: "mc", text: "Хм, кексы — это серьёзный аргумент." },
      { type: "dialog", char: "sayori", expr: "happy", text: "Вот видишь! После уроков — не забудь, третий этаж!" },
      { type: "jump", to: "sayori_react_end" }
    ],

    "sayori_react_end": [
      { type: "hide", char: "sayori" },
      { type: "jump", to: "school_arrive" }
    ],

    "school_arrive": [
      { type: "bg", id: "school_exterior", transition: "fade" },
      { type: "narrate", text: "Мы подошли к школе. Утренняя толпа уже втягивалась в двери." },
      { type: "show", char: "sayori", pos: "center", expr: "happy" },
      { type: "dialog", char: "sayori", expr: "happy", text: "Ну ладно, мне в другой корпус! Не забудь — после уроков, кабинет на третьем этаже!" },
      { type: "hide", char: "sayori" },
      { type: "narrate", text: "Она убежала, махнув рукой. Литературный кружок, значит..." },
      { type: "narrate", text: "Ну, посмотрим." },
      { type: "wait", ms: 600 },
      { type: "jump", to: "after_school" }
    ],

    "after_school": [
      { type: "bg", id: "hallway", transition: "fade" },
      { type: "narrate", text: "Уроки наконец закончились. Я стоял в коридоре, закинув сумку на плечо." },
      { type: "narrate", text: "Можно пойти домой, завалиться на диван и ничего не делать. Звучит заманчиво." },
      { type: "narrate", text: "Но Сайори будет расстроена, если я не приду... Она ведь так просила." },
      { type: "choice", options: [
        { text: "Пойти в литературный кружок", next: "go_to_club" },
        { text: "Пойти домой", next: "go_home" }
      ]}
    ],

    "go_home": [
      { type: "bg", id: "street", transition: "fade" },
      { type: "narrate", text: "Я развернулся и направился к выходу. Свобода." },
      { type: "narrate", text: "...Но почему-то с каждым шагом мне становилось всё неуютнее." },
      { type: "narrate", text: "Представил, как Сайори стоит у двери кабинета, ждёт меня и грустнеет с каждой минутой." },
      { type: "wait", ms: 500 },
      { type: "narrate", text: "Телефон завибрировал. Сообщение от Сайори:" },
      { type: "narrate", text: "«Ты идёшь?? Я приготовила для тебя кексик! 🧁»" },
      { type: "narrate", text: "...Ну вот. Теперь точно не смогу просто уйти." },
      { type: "narrate", text: "Развернулся обратно." },
      { type: "jump", to: "club_entrance" }
    ],

    "go_to_club": [
      { type: "bg", id: "hallway", transition: "fade" },
      { type: "show", char: "sayori", pos: "center", expr: "excited" },
      { type: "dialog", char: "sayori", expr: "excited", text: "Ты пришёл!! Я знала, знала, знала!" },
      { type: "dialog", char: "mc", text: "Ну, я просто подумал — почему бы и нет." },
      { type: "dialog", char: "sayori", expr: "happy", text: "Пойдём скорее! Все уже ждут!" },
      { type: "narrate", text: "Сайори схватила меня за руку и потащила по коридору. Её энергии хватило бы на троих." },
      { type: "hide", char: "sayori" },
      { type: "jump", to: "club_entrance" }
    ],

    "club_entrance": [
      { type: "music", id: "club" },
      { type: "bg", id: "club_room", transition: "fade" },
      { type: "narrate", text: "Мы вошли в светлый уютный кабинет. На стенах — полки с книгами, на столе — печенье и чай. Пахло бумагой и чем-то сладким." },
      { type: "show", char: "sayori", pos: "left", expr: "happy" },
      { type: "dialog", char: "sayori", expr: "excited", text: "Все, смотрите — я привела нового участника!" },
      { type: "show", char: "monika", pos: "right", expr: "happy" },
      { type: "dialog", char: "monika", expr: "happy", text: "О, добро пожаловать! Я Моника — президент литературного кружка." },
      { type: "dialog", char: "monika", expr: "wink", text: "Сайори столько о тебе рассказывала, что мне кажется, я тебя уже знаю." },
      { type: "dialog", char: "mc", text: "Э... приятно познакомиться. Надеюсь, она не наговорила лишнего." },
      { type: "dialog", char: "monika", expr: "happy", text: "Только хорошее! Располагайся, чувствуй себя как дома. Давай я тебя со всеми познакомлю." },
      { type: "hide", char: "sayori" },
      { type: "hide", char: "monika" },
      { type: "jump", to: "meet_natsuki" }
    ],

    "meet_natsuki": [
      { type: "bg", id: "club_room", transition: "fade" },
      { type: "narrate", text: "В дальнем углу кабинета, уткнувшись в яркую книжку с обложкой, усыпанной цветами, сидела розоволосая девчонка." },
      { type: "show", char: "natsuki", pos: "center", expr: "normal" },
      { type: "dialog", char: "monika", text: "Нацуки, познакомься — это наш новый гость!" },
      { type: "dialog", char: "natsuki", expr: "surprised", text: "А? Новый?" },
      { type: "narrate", text: "Она подняла взгляд и окинула меня с ног до головы." },
      { type: "dialog", char: "natsuki", expr: "angry", text: "Хмф. Опять парень. Надеюсь, ты не из тех, кто будет смеяться над мангой." },
      { type: "dialog", char: "mc", text: "Мангой? В литературном кружке?" },
      { type: "dialog", char: "natsuki", expr: "angry", text: "Манга — это тоже литература! Там есть и сюжет, и персонажи, и..." },
      { type: "choice", options: [
        { text: "Я тоже читаю мангу!", next: "natsuki_react_agree", set: { natsuki_trust: "high" } },
        { text: "Ладно, ладно, верю", next: "natsuki_react_neutral", set: { natsuki_trust: "medium" } },
        { text: "Ну это немного странно...", next: "natsuki_react_doubt", set: { natsuki_trust: "low" } }
      ]}
    ],

    "natsuki_react_agree": [
      { type: "dialog", char: "mc", text: "Эй, я тоже читаю мангу! Не надо на меня так смотреть." },
      { type: "dialog", char: "natsuki", expr: "surprised", text: "П-правда?! Ты серьёзно?!" },
      { type: "dialog", char: "natsuki", expr: "happy", text: "...Ну, может, ты не такой уж плохой. Потом покажу тебе свою коллекцию." },
      { type: "jump", to: "natsuki_react_end" }
    ],

    "natsuki_react_neutral": [
      { type: "dialog", char: "mc", text: "Ладно, я тебе верю. Манга — это литература." },
      { type: "dialog", char: "natsuki", expr: "embarrassed", text: "...В общем, не то чтобы мне важно твоё мнение. Просто не лезь ко мне, и мы поладим." },
      { type: "dialog", char: "mc", text: "Договорились, наверное..." },
      { type: "jump", to: "natsuki_react_end" }
    ],

    "natsuki_react_doubt": [
      { type: "dialog", char: "mc", text: "Ну, манга — это всё-таки немного... не совсем литература, нет?" },
      { type: "dialog", char: "natsuki", expr: "angry", text: "ВОТ! Вот именно поэтому я не люблю новичков!" },
      { type: "dialog", char: "natsuki", expr: "angry", text: "Приходи ко мне через год, когда прочитаешь хотя бы один том!" },
      { type: "dialog", char: "mc", text: "Ладно-ладно, извини..." },
      { type: "jump", to: "natsuki_react_end" }
    ],

    "natsuki_react_end": [
      { type: "narrate", text: "Она уткнулась обратно в мангу, но я заметил, что уголок её рта чуть дёрнулся — то ли в усмешку, то ли в улыбку." },
      { type: "hide", char: "natsuki" },
      { type: "jump", to: "meet_yuri" }
    ],

    "meet_yuri": [
      { type: "bg", id: "club_room", transition: "fade" },
      { type: "narrate", text: "У окна, мягко освещённая послеполуденным светом, сидела девушка с длинными фиолетовыми волосами. Перед ней лежал толстенный роман." },
      { type: "show", char: "yuri", pos: "center", expr: "normal" },
      { type: "dialog", char: "monika", text: "А это Юри — наш главный книжный знаток!" },
      { type: "dialog", char: "yuri", expr: "shy", text: "А... з-здравствуй. Приятно познакомиться." },
      { type: "dialog", char: "mc", text: "Привет! Что читаешь?" },
      { type: "dialog", char: "yuri", expr: "passionate", text: "«Портрет Марианны». Это повесть об одиночестве и поиске себя через призму метафор, связанных с живописью..." },
      { type: "dialog", char: "yuri", expr: "shy", text: "...П-простите, я увлеклась. Наверное, это звучит скучно." },
      { type: "choice", options: [
        { text: "Расскажи ещё! Это захватывает", next: "yuri_react_eager", set: { yuri_bond: "strong" } },
        { text: "Нет, что ты, это интересно", next: "yuri_react_kind", set: { yuri_bond: "warm" } },
        { text: "Честно? Я мало читаю...", next: "yuri_react_honest", set: { yuri_bond: "honest" } }
      ]}
    ],

    "yuri_react_eager": [
      { type: "dialog", char: "mc", text: "Нет, расскажи ещё! Серьёзно, это звучит захватывающе." },
      { type: "dialog", char: "yuri", expr: "surprised", text: "Т-ты правда хочешь слушать?.." },
      { type: "dialog", char: "yuri", expr: "passionate", text: "Ну... там есть момент, когда героиня рисует портрет, и он начинает разговаривать с ней..." },
      { type: "dialog", char: "yuri", expr: "happy", text: "О, прости, я опять увлеклась... Но если хочешь, я одолжу тебе эту книгу!" },
      { type: "dialog", char: "mc", text: "С удовольствием." },
      { type: "jump", to: "yuri_react_end" }
    ],

    "yuri_react_kind": [
      { type: "dialog", char: "mc", text: "Нет, совсем нет. Звучит интересно." },
      { type: "dialog", char: "yuri", expr: "happy", text: "Правда?.. Если хочешь, я могу одолжить тебе эту книгу, когда дочитаю." },
      { type: "dialog", char: "mc", text: "Было бы здорово, спасибо." },
      { type: "jump", to: "yuri_react_end" }
    ],

    "yuri_react_honest": [
      { type: "dialog", char: "mc", text: "Честно говоря, я мало читаю. Но... когда ты рассказываешь, хочется начать." },
      { type: "dialog", char: "yuri", expr: "shy", text: "Э-это... самый приятный комплимент, который мне говорили." },
      { type: "dialog", char: "yuri", expr: "happy", text: "Я могу подобрать для тебя книгу для начинающих! Ч-что-нибудь не слишком сложное..." },
      { type: "dialog", char: "mc", text: "Буду рад." },
      { type: "jump", to: "yuri_react_end" }
    ],

    "yuri_react_end": [
      { type: "narrate", text: "Юри слегка улыбнулась и вернулась к чтению. От неё веяло каким-то спокойствием — как от тихой библиотеки." },
      { type: "hide", char: "yuri" },
      { type: "jump", to: "club_activities" }
    ],

    "club_activities": [
      { type: "bg", id: "club_room", transition: "fade" },
      { type: "show", char: "monika", pos: "center", expr: "happy" },
      { type: "dialog", char: "monika", expr: "confident", text: "Итак! Раз уж все познакомились, давай я расскажу, чем мы тут занимаемся." },
      { type: "dialog", char: "monika", expr: "happy", text: "Мы читаем, обсуждаем книги, а самое главное — пишем стихи и делимся ими друг с другом." },
      { type: "dialog", char: "mc", text: "Стихи? Я никогда в жизни не писал стихов..." },
      { type: "dialog", char: "monika", expr: "wink", text: "Это не страшно! Стихи — это не про рифму и размер. Это про то, чтобы выразить то, что у тебя внутри." },
      { type: "choice", options: [
        { text: "Ладно, попробую!", next: "club_poem_eager" },
        { text: "Звучит страшновато...", next: "club_poem_nervous" },
        { text: "А можно просто читать?", next: "club_poem_shy" }
      ]}
    ],

    "club_poem_eager": [
      { type: "dialog", char: "mc", text: "Ладно, попробую! Когда-то же надо начинать." },
      { type: "show", char: "sayori", pos: "right", expr: "happy" },
      { type: "dialog", char: "sayori", expr: "excited", text: "Вот это настрой! Мне уже не терпится прочитать!" },
      { type: "hide", char: "sayori" },
      { type: "show", char: "monika", pos: "center", expr: "happy" },
      { type: "dialog", char: "monika", expr: "happy", text: "Вот и отлично! Тема — свободная." },
      { type: "jump", to: "club_free_time" }
    ],

    "club_poem_nervous": [
      { type: "dialog", char: "mc", text: "Звучит... страшновато, если честно." },
      { type: "show", char: "sayori", pos: "right", expr: "happy" },
      { type: "dialog", char: "sayori", expr: "happy", text: "Я тоже сначала боялась! Но потом поняла — тут никто не критикует!" },
      { type: "hide", char: "sayori" },
      { type: "show", char: "monika", pos: "center", expr: "wink" },
      { type: "dialog", char: "monika", expr: "wink", text: "Не переживай. Здесь все свои. Тема — свободная." },
      { type: "jump", to: "club_free_time" }
    ],

    "club_poem_shy": [
      { type: "dialog", char: "mc", text: "А... можно я пока просто буду читать? Не уверен, что готов писать." },
      { type: "show", char: "monika", pos: "center", expr: "thoughtful" },
      { type: "dialog", char: "monika", expr: "thoughtful", text: "Хм... Знаешь, я думаю, тебе стоит попробовать. Хотя бы несколько строк." },
      { type: "dialog", char: "monika", expr: "happy", text: "Обещаю — никто не будет смеяться. Тема — свободная." },
      { type: "show", char: "sayori", pos: "right", expr: "happy" },
      { type: "dialog", char: "sayori", expr: "excited", text: "Давай-давай! Я верю в тебя!" },
      { type: "hide", char: "sayori" },
      { type: "jump", to: "club_free_time" }
    ],

    "club_free_time": [
      { type: "dialog", char: "monika", expr: "confident", text: "А пока у нас ещё есть время до конца занятий. Можешь пообщаться с кем-нибудь поближе!" },
      { type: "hide", char: "monika" },
      { type: "narrate", text: "Я оглядел кабинет. С кем бы провести оставшееся время?" },
      { type: "choice", options: [
        { text: "С Сайори", next: "time_sayori" },
        { text: "С Нацуки", next: "time_natsuki" },
        { text: "С Юри", next: "time_yuri" }
      ]}
    ],

    "time_sayori": [
      { type: "set", var: "first_choice", value: "sayori" },
      { type: "show", char: "sayori", pos: "center", expr: "happy" },
      { type: "dialog", char: "sayori", expr: "excited", text: "Ты решил посидеть со мной? Ура!" },
      { type: "narrate", text: "Я подсел к Сайори. Она тут же пододвинула мне тарелку с печеньем." },
      { type: "dialog", char: "mc", text: "Помнишь, как мы в детстве строили крепость из подушек и читали комиксы с фонариком?" },
      { type: "dialog", char: "sayori", expr: "happy", text: "Ещё бы! А потом ты заснул прямо в крепости, и я нарисовала тебе усы маркером!" },
      { type: "dialog", char: "mc", text: "Это была ТЫ?! Я думал, это мой младший брат!" },
      { type: "dialog", char: "sayori", expr: "embarrassed", text: "Э-хе-хе... Сюрприз?" },
      { type: "narrate", text: "Мы оба рассмеялись. С Сайори всегда было легко — она будто излучала тепло." },
      { type: "dialog", char: "sayori", expr: "excited", text: "О! Знаешь что? Давай поиграем! У меня есть карточки с нашими символами!" },
      { type: "dialog", char: "sayori", expr: "happy", text: "Нужно найти все пары — переворачиваешь по две и запоминаешь!" },
      { type: "dialog", char: "mc", text: "Карточная игра на память? Ладно, давай." },
      { type: "hide", char: "sayori" },
      { type: "memory" },
      { type: "jump", to: "time_sayori_after" }
    ],

    "time_sayori_after": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "sayori", pos: "center", expr: "happy" },
      { type: "dialog", char: "sayori", expr: "happy", text: "Это было весело! Мне давно хотелось, чтобы ты увидел эту часть моей жизни." },
      { type: "dialog", char: "sayori", expr: "normal", text: "Этот кружок... Он для меня очень важен." },
      { type: "dialog", char: "mc", text: "Я вижу. И, кажется, начинаю понимать почему." },
      { type: "narrate", text: "Сайори расплылась в широкой улыбке. В этот момент она выглядела по-настоящему счастливой." },
      { type: "hide", char: "sayori" },
      { type: "jump", to: "poem_game" }
    ],

    "time_natsuki": [
      { type: "set", var: "first_choice", value: "natsuki" },
      { type: "show", char: "natsuki", pos: "center", expr: "surprised" },
      { type: "dialog", char: "natsuki", expr: "surprised", text: "А? Ты ко мне? Зачем?" },
      { type: "dialog", char: "mc", text: "Ну, ты сказала, что манга — это литература. Мне стало любопытно." },
      { type: "dialog", char: "natsuki", expr: "proud", text: "Наконец-то кто-то с мозгами! Ладно, сначала покажу тебе кое-что покруче манги." },
      { type: "dialog", char: "natsuki", expr: "happy", text: "Я принесла ингредиенты для кексов! Хочу испечь для всего кружка." },
      { type: "dialog", char: "natsuki", expr: "angry", text: "Но мне нужна помощь. Только не вздумай положить что-нибудь странное — это КЕКСЫ, а не суп!" },
      { type: "dialog", char: "mc", text: "Ладно, ладно. Что нужно делать?" },
      { type: "dialog", char: "natsuki", expr: "normal", text: "Выбери правильные ингредиенты. Посмотрим, есть ли у тебя чутьё." },
      { type: "hide", char: "natsuki" },
      { type: "baking" },
      { type: "jump", to: "time_natsuki_result" }
    ],

    "time_natsuki_result": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "natsuki", pos: "center", expr: "normal" },
      { type: "if", var: "baking_result", eq: "great", then: "natsuki_baking_great", else: "natsuki_baking_check" }
    ],

    "natsuki_baking_check": [
      { type: "if", var: "baking_result", eq: "ok", then: "natsuki_baking_ok", else: "natsuki_baking_fail" }
    ],

    "natsuki_baking_great": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "natsuki", pos: "center", expr: "surprised" },
      { type: "dialog", char: "natsuki", expr: "surprised", text: "Подожди... Ты выбрал ВСЕ правильные ингредиенты?!" },
      { type: "dialog", char: "natsuki", expr: "happy", text: "Н-не то чтобы я впечатлена... Просто неплохо для новичка!" },
      { type: "dialog", char: "natsuki", expr: "embarrassed", text: "Может... мы ещё как-нибудь вместе что-нибудь испечём..." },
      { type: "hide", char: "natsuki" },
      { type: "jump", to: "poem_game" }
    ],

    "natsuki_baking_ok": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "natsuki", pos: "center", expr: "normal" },
      { type: "dialog", char: "natsuki", expr: "normal", text: "Хм... Не идеально, но сойдёт. Я исправлю." },
      { type: "dialog", char: "natsuki", expr: "proud", text: "Смотри и учись — вот как делают настоящие кексы!" },
      { type: "narrate", text: "Нацуки ловко поправила рецепт. Через полчаса кабинет наполнился сладким ароматом." },
      { type: "hide", char: "natsuki" },
      { type: "jump", to: "poem_game" }
    ],

    "natsuki_baking_fail": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "natsuki", pos: "center", expr: "angry" },
      { type: "dialog", char: "natsuki", expr: "angry", text: "КЕТЧУП?! Ты хотел положить КЕТЧУП в кексы?!" },
      { type: "dialog", char: "natsuki", expr: "angry", text: "Уйди от плиты! Я сама!" },
      { type: "dialog", char: "natsuki", expr: "embarrassed", text: "...Но хотя бы спасибо, что попробовал. Наверное." },
      { type: "narrate", text: "Несмотря на провал, атмосфера была весёлой. Даже Нацуки, кажется, повеселела." },
      { type: "hide", char: "natsuki" },
      { type: "jump", to: "poem_game" }
    ],

    "time_yuri": [
      { type: "set", var: "first_choice", value: "yuri" },
      { type: "show", char: "yuri", pos: "center", expr: "surprised" },
      { type: "dialog", char: "yuri", expr: "shy", text: "Ты... хочешь посидеть со мной? Мне обычно не составляют компанию..." },
      { type: "dialog", char: "mc", text: "Ты рассказывала про ту книгу — стало интересно узнать побольше." },
      { type: "dialog", char: "yuri", expr: "happy", text: "О! «Портрет Марианны» — это история о девушке, которая теряет связь с реальностью через свои картины..." },
      { type: "dialog", char: "yuri", expr: "passionate", text: "Автор использует метафору живописи как способ говорить о том, как мы создаём миры внутри себя..." },
      { type: "dialog", char: "mc", text: "Звучит глубоко. Никогда не думал о книгах с такой стороны." },
      { type: "dialog", char: "yuri", expr: "shy", text: "П-правда? Тогда... может, ты хочешь проверить свои знания литературных терминов?" },
      { type: "dialog", char: "yuri", expr: "happy", text: "Я подготовила маленькую викторину. Это поможет лучше понимать поэзию!" },
      { type: "dialog", char: "mc", text: "Давай, попробую." },
      { type: "hide", char: "yuri" },
      { type: "association" },
      { type: "jump", to: "time_yuri_result" }
    ],

    "time_yuri_result": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "yuri", pos: "center", expr: "normal" },
      { type: "if", var: "assoc_result", eq: "great", then: "yuri_assoc_great", else: "yuri_assoc_check" }
    ],

    "yuri_assoc_check": [
      { type: "if", var: "assoc_result", eq: "ok", then: "yuri_assoc_ok", else: "yuri_assoc_low" }
    ],

    "yuri_assoc_great": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "yuri", pos: "center", expr: "passionate" },
      { type: "dialog", char: "yuri", expr: "passionate", text: "Невероятно! Ты ответил почти на всё правильно!" },
      { type: "dialog", char: "yuri", expr: "happy", text: "Нечасто встретишь кого-то, кто так понимает литературу..." },
      { type: "dialog", char: "yuri", expr: "shy", text: "М-может, мы как-нибудь обсудим книги... вместе? За чашкой чая..." },
      { type: "hide", char: "yuri" },
      { type: "jump", to: "poem_game" }
    ],

    "yuri_assoc_ok": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "yuri", pos: "center", expr: "happy" },
      { type: "dialog", char: "yuri", expr: "happy", text: "Неплохо! Некоторые термины непростые, не переживай." },
      { type: "dialog", char: "yuri", expr: "normal", text: "Я могу одолжить тебе книгу по теории литературы — она очень увлекательная!" },
      { type: "hide", char: "yuri" },
      { type: "jump", to: "poem_game" }
    ],

    "yuri_assoc_low": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "yuri", pos: "center", expr: "nervous" },
      { type: "dialog", char: "yuri", expr: "nervous", text: "Н-не расстраивайся! Эти термины сложные даже для тех, кто много читает." },
      { type: "dialog", char: "yuri", expr: "happy", text: "Я буду рада помочь разобраться. Вместе учиться легче..." },
      { type: "hide", char: "yuri" },
      { type: "jump", to: "poem_game" }
    ],

    "poem_game": [
      { type: "bg", id: "bedroom", transition: "fade" },
      { type: "narrate", text: "Вечером, дома. Я сидел за столом, уставившись на чистый лист бумаги." },
      { type: "narrate", text: "Стихотворение. Мне нужно написать стихотворение. Тема — свободная." },
      { type: "narrate", text: "Ладно... Попробую просто подобрать слова, которые мне откликаются." },
      { type: "wait", ms: 500 },
      { type: "poem" },
      { type: "jump", to: "day1_end" }
    ],

    "day1_end": [
      { type: "music", id: "emotional" },
      { type: "bg", id: "sunset", transition: "fade" },
      { type: "narrate", text: "Закат заливал комнату оранжевым светом. Я откинулся на стуле и перечитал то, что написал." },
      { type: "narrate", text: "Не шедевр, конечно. Но... что-то в этом есть. Странное ощущение, когда выкладываешь мысли на бумагу." },
      { type: "narrate", text: "Литературный кружок... Может, это не так уж плохо. Там интересные люди." },
      { type: "wait", ms: 800 },
      { type: "narrate", text: "Интересно, что завтра скажут о моём стихотворении." },
      { type: "narrate", text: "Телефон завибрировал. Сообщение от... Моники?" },
      { type: "show", char: "monika", pos: "center", expr: "happy" },
      { type: "dialog", char: "monika", expr: "wink", text: "Привет! Рада, что ты присоединился к нам. У меня чувство, что тебе здесь понравится." },
      { type: "dialog", char: "monika", expr: "thoughtful", text: "Знаешь, иногда мне кажется, что каждый выбор, который мы делаем, определяет всю историю. Каждый. Без исключения." },
      { type: "choice", options: [
        { text: "Это глубокая мысль...", next: "monika_night_deep", set: { monika_interest: "high" } },
        { text: "Ты всегда такая серьёзная?", next: "monika_night_tease", set: { monika_interest: "playful" } },
        { text: "Что ты имеешь в виду?", next: "monika_night_question", set: { monika_interest: "curious" } }
      ]}
    ],

    "monika_night_deep": [
      { type: "dialog", char: "mc", text: "Это... глубокая мысль. Ты много об этом думаешь?" },
      { type: "dialog", char: "monika", expr: "happy", text: "Больше, чем ты можешь себе представить. Но я рада, что ты понимаешь." },
      { type: "dialog", char: "monika", expr: "wink", text: "Спокойной ночи! Увидимся завтра. 💚" },
      { type: "hide", char: "monika" },
      { type: "narrate", text: "...Странная девушка. Но что-то в её словах цепляет." },
      { type: "jump", to: "day1_end_continue" }
    ],

    "monika_night_tease": [
      { type: "dialog", char: "mc", text: "Ты всегда такая серьёзная, или это только по вечерам?" },
      { type: "dialog", char: "monika", expr: "happy", text: "Ха-ха! Только когда хочу произвести впечатление." },
      { type: "dialog", char: "monika", expr: "wink", text: "Получилось? Спокойной ночи!" },
      { type: "hide", char: "monika" },
      { type: "narrate", text: "...Странная девушка. Но обаятельная." },
      { type: "jump", to: "day1_end_continue" }
    ],

    "monika_night_question": [
      { type: "dialog", char: "mc", text: "Что ты имеешь в виду? Какие выборы определяют историю?" },
      { type: "dialog", char: "monika", expr: "serious", text: "Ну... например, ты мог бы не прийти в кружок. И всё было бы совсем иначе." },
      { type: "dialog", char: "monika", expr: "thoughtful", text: "Иногда я думаю — а что, если кто-то за нас уже всё решил? Что, если мы просто... следуем сценарию?" },
      { type: "dialog", char: "monika", expr: "happy", text: "Ладно, забудь! Это я философствую. Спокойной ночи! 💚" },
      { type: "hide", char: "monika" },
      { type: "narrate", text: "...Странная девушка. Очень странная. Но почему-то хочется узнать больше." },
      { type: "jump", to: "day1_end_continue" }
    ],

    "day1_end_continue": [
      { type: "wait", ms: 600 },
      { type: "narrate", text: "Я лёг в кровать, и впервые за долгое время мне казалось, что завтрашний день не будет скучным." },
      { type: "wait", ms: 1000 },
      { type: "jump", to: "end_chapter1" }
    ],

    "end_chapter1": [
      { type: "music", id: "stop" },
      { type: "bg", id: "black", transition: "fade" },
      { type: "wait", ms: 800 },
      { type: "narrate", text: "Конец первой главы." },
      { type: "wait", ms: 1200 },
      { type: "narrate", text: "Но это ещё не всё..." },
      { type: "wait", ms: 1000 },
      { type: "jump", to: "day2_morning" }
    ],

    "day2_morning": [
      { type: "music", id: "daily" },
      { type: "bg", id: "bedroom", transition: "fade" },
      { type: "narrate", text: "Утро второго дня. Я проснулся с необычным ощущением — мне и правда хотелось идти в школу." },
      { type: "narrate", text: "Точнее, в кружок. Странно, как быстро это стало частью моей жизни." },
      { type: "wait", ms: 500 },
      { type: "bg", id: "street", transition: "fade" },
      { type: "show", char: "sayori", pos: "center", expr: "happy" },
      { type: "dialog", char: "sayori", expr: "excited", text: "Доброе утро! Ты сегодня как-то по-другому выглядишь!" },
      { type: "dialog", char: "mc", text: "В смысле?" },
      { type: "dialog", char: "sayori", expr: "happy", text: "Не знаю... Бодрее, что ли! Кружок на тебя хорошо влияет!" },
      { type: "dialog", char: "sayori", expr: "normal", text: "Кстати... сегодня все обсуждают стихи, которые написали вчера. Волнуешься?" },
      { type: "choice", options: [
        { text: "Немного. А ты?", next: "day2_sayori_casual" },
        { text: "Ты сама-то как? Выглядишь задумчивой...", next: "day2_sayori_worried" },
        { text: "Я готов покорять литературный мир!", next: "day2_sayori_confident" }
      ]}
    ],

    "day2_sayori_casual": [
      { type: "dialog", char: "mc", text: "Немного. А ты?" },
      { type: "dialog", char: "sayori", expr: "embarrassed", text: "Я?! Ужасно!! Но это же весело, правда? Э-хе-хе..." },
      { type: "jump", to: "day2_morning_end" }
    ],

    "day2_sayori_worried": [
      { type: "dialog", char: "mc", text: "Погоди... Ты сама как? Ты выглядишь как-то... задумчивой." },
      { type: "dialog", char: "sayori", expr: "surprised", text: "А? Я?.. Н-нет, всё хорошо!" },
      { type: "dialog", char: "sayori", expr: "normal", text: "Просто... плохо спала. Бывает же, правда?" },
      { type: "dialog", char: "mc", text: "Если что, можешь рассказать. Мы ведь друзья." },
      { type: "dialog", char: "sayori", expr: "happy", text: "...Спасибо. Правда, спасибо." },
      { type: "set", var: "noticed_sayori", value: "yes" },
      { type: "jump", to: "day2_morning_end" }
    ],

    "day2_sayori_confident": [
      { type: "dialog", char: "mc", text: "Я готов! Мой стих — шедевр, мир ещё не видел такого!" },
      { type: "dialog", char: "sayori", expr: "excited", text: "Ха-ха-ха! Ну ты даёшь! Э-хе-хе!" },
      { type: "dialog", char: "sayori", expr: "happy", text: "Мне уже не терпится послушать!" },
      { type: "jump", to: "day2_morning_end" }
    ],

    "day2_morning_end": [
      { type: "hide", char: "sayori" },
      { type: "jump", to: "day2_club" }
    ],

    "day2_club": [
      { type: "music", id: "club" },
      { type: "bg", id: "club_room", transition: "fade" },
      { type: "narrate", text: "После уроков я снова пришёл в кабинет литературного кружка. Все уже были на местах." },
      { type: "show", char: "monika", pos: "center", expr: "happy" },
      { type: "dialog", char: "monika", expr: "confident", text: "Отлично, все в сборе! Сегодня мы делимся стихами." },
      { type: "dialog", char: "monika", expr: "happy", text: "Но сначала... Я хочу, чтобы каждый показал что-то от себя. Не только стихи, а что-то личное." },
      { type: "dialog", char: "monika", expr: "wink", text: "С кем хочешь провести время сегодня?" },
      { type: "hide", char: "monika" },
      { type: "choice", options: [
        { text: "Провести время с Сайори", next: "day2_sayori" },
        { text: "Провести время с Нацуки", next: "day2_natsuki" },
        { text: "Провести время с Юри", next: "day2_yuri" },
        { text: "Провести время с Моникой", next: "day2_monika" }
      ]}
    ],

    "day2_sayori": [
      { type: "set", var: "day2_choice", value: "sayori" },
      { type: "bg", id: "club_room", transition: "fade" },
      { type: "show", char: "sayori", pos: "center", expr: "excited" },
      { type: "dialog", char: "sayori", expr: "excited", text: "Ты опять ко мне! Я так рада!" },
      { type: "dialog", char: "sayori", expr: "happy", text: "Знаешь, я подготовила новые карточки! На этот раз посложнее!" },
      { type: "dialog", char: "mc", text: "Посложнее? Вызов принят." },
      { type: "dialog", char: "sayori", expr: "happy", text: "Вот увидишь, будет весело!" },
      { type: "hide", char: "sayori" },
      { type: "memory" },
      { type: "jump", to: "day2_sayori_result" }
    ],

    "day2_sayori_result": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "sayori", pos: "center", expr: "happy" },
      { type: "if", var: "memory_result", eq: "great", then: "day2_sayori_great", else: "day2_sayori_other" }
    ],

    "day2_sayori_other": [
      { type: "if", var: "memory_result", eq: "ok", then: "day2_sayori_ok", else: "day2_sayori_many" }
    ],

    "day2_sayori_great": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "sayori", pos: "center", expr: "excited" },
      { type: "dialog", char: "sayori", expr: "excited", text: "Ого!! Ты так быстро всё нашёл! У тебя отличная память!" },
      { type: "dialog", char: "sayori", expr: "happy", text: "Мне так нравится проводить время с тобой... Как в детстве." },
      { type: "dialog", char: "sayori", expr: "normal", text: "Только лучше. Потому что мы теперь старше, и... понимаем больше." },
      { type: "hide", char: "sayori" },
      { type: "jump", to: "day2_poem_share" }
    ],

    "day2_sayori_ok": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "sayori", pos: "center", expr: "happy" },
      { type: "dialog", char: "sayori", expr: "happy", text: "Хорошая игра! Мне понравилось!" },
      { type: "dialog", char: "sayori", expr: "happy", text: "Давай ещё как-нибудь поиграем, ладно?" },
      { type: "hide", char: "sayori" },
      { type: "jump", to: "day2_poem_share" }
    ],

    "day2_sayori_many": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "sayori", pos: "center", expr: "happy" },
      { type: "dialog", char: "sayori", expr: "embarrassed", text: "Хе-хе, ну ничего! Главное — мы играли вместе!" },
      { type: "dialog", char: "sayori", expr: "happy", text: "В следующий раз будет легче, обещаю!" },
      { type: "hide", char: "sayori" },
      { type: "jump", to: "day2_poem_share" }
    ],

    "day2_natsuki": [
      { type: "set", var: "day2_choice", value: "natsuki" },
      { type: "bg", id: "club_room", transition: "fade" },
      { type: "show", char: "natsuki", pos: "center", expr: "surprised" },
      { type: "dialog", char: "natsuki", expr: "surprised", text: "Опять ко мне? ...Хмф, не то чтобы я против." },
      { type: "dialog", char: "natsuki", expr: "proud", text: "Раз уж ты здесь — я принесла новые ингредиенты! Сегодня печём настоящие кексы!" },
      { type: "dialog", char: "natsuki", expr: "angry", text: "И на этот раз — без экспериментов! Выбирай правильно!" },
      { type: "hide", char: "natsuki" },
      { type: "baking" },
      { type: "jump", to: "day2_natsuki_result" }
    ],

    "day2_natsuki_result": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "natsuki", pos: "center", expr: "normal" },
      { type: "if", var: "baking_result", eq: "great", then: "day2_natsuki_great", else: "day2_natsuki_other" }
    ],

    "day2_natsuki_other": [
      { type: "if", var: "baking_result", eq: "ok", then: "day2_natsuki_ok", else: "day2_natsuki_fail" }
    ],

    "day2_natsuki_great": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "natsuki", pos: "center", expr: "happy" },
      { type: "dialog", char: "natsuki", expr: "surprised", text: "Идеально! Может, из тебя выйдет толк..." },
      { type: "dialog", char: "natsuki", expr: "embarrassed", text: "Н-не улыбайся так! Это просто комплимент от шеф-повара, ясно?!" },
      { type: "narrate", text: "Нацуки отвернулась, но я видел, что она довольно улыбается. Кексы получились великолепные." },
      { type: "hide", char: "natsuki" },
      { type: "jump", to: "day2_poem_share" }
    ],

    "day2_natsuki_ok": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "natsuki", pos: "center", expr: "proud" },
      { type: "dialog", char: "natsuki", expr: "proud", text: "Сойдёт. Я подправлю, и будет вкусно." },
      { type: "narrate", text: "Вместе мы испекли кексы. Кабинет наполнился сладким ароматом." },
      { type: "hide", char: "natsuki" },
      { type: "jump", to: "day2_poem_share" }
    ],

    "day2_natsuki_fail": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "natsuki", pos: "center", expr: "angry" },
      { type: "dialog", char: "natsuki", expr: "angry", text: "Безнадёжный... Ладно, я спасу ситуацию. Как обычно." },
      { type: "dialog", char: "natsuki", expr: "embarrassed", text: "...Но ты хотя бы старался. Это... мило." },
      { type: "hide", char: "natsuki" },
      { type: "jump", to: "day2_poem_share" }
    ],

    "day2_yuri": [
      { type: "set", var: "day2_choice", value: "yuri" },
      { type: "bg", id: "club_room", transition: "fade" },
      { type: "show", char: "yuri", pos: "center", expr: "shy" },
      { type: "dialog", char: "yuri", expr: "shy", text: "Ты снова пришёл ко мне... Я рада." },
      { type: "dialog", char: "yuri", expr: "happy", text: "Я приготовила новую викторину — на этот раз посложнее!" },
      { type: "dialog", char: "yuri", expr: "passionate", text: "Литературные приёмы — это не просто термины. Это инструменты, которыми авторы рисуют миры..." },
      { type: "dialog", char: "mc", text: "Звучит как вызов. Давай попробую." },
      { type: "hide", char: "yuri" },
      { type: "association" },
      { type: "jump", to: "day2_yuri_result" }
    ],

    "day2_yuri_result": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "yuri", pos: "center", expr: "normal" },
      { type: "if", var: "assoc_result", eq: "great", then: "day2_yuri_great", else: "day2_yuri_other" }
    ],

    "day2_yuri_other": [
      { type: "if", var: "assoc_result", eq: "ok", then: "day2_yuri_ok", else: "day2_yuri_low" }
    ],

    "day2_yuri_great": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "yuri", pos: "center", expr: "passionate" },
      { type: "dialog", char: "yuri", expr: "passionate", text: "Ты потрясающе справился! Я поражена!" },
      { type: "dialog", char: "yuri", expr: "shy", text: "Мне... мне очень приятно говорить о литературе с тобой. Ты понимаешь." },
      { type: "narrate", text: "Юри улыбнулась так тепло, что мне стало немного не по себе — в хорошем смысле." },
      { type: "hide", char: "yuri" },
      { type: "jump", to: "day2_poem_share" }
    ],

    "day2_yuri_ok": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "yuri", pos: "center", expr: "happy" },
      { type: "dialog", char: "yuri", expr: "happy", text: "Хороший результат! Ты растёшь." },
      { type: "dialog", char: "yuri", expr: "normal", text: "Давай продолжим в следующий раз? Мне нравится заниматься этим с тобой." },
      { type: "hide", char: "yuri" },
      { type: "jump", to: "day2_poem_share" }
    ],

    "day2_yuri_low": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "yuri", pos: "center", expr: "nervous" },
      { type: "dialog", char: "yuri", expr: "nervous", text: "Не переживай... Литература — это путь, а не точка назначения." },
      { type: "dialog", char: "yuri", expr: "happy", text: "Я верю, что в следующий раз будет лучше. Я помогу." },
      { type: "hide", char: "yuri" },
      { type: "jump", to: "day2_poem_share" }
    ],

    "day2_monika": [
      { type: "set", var: "day2_choice", value: "monika" },
      { type: "bg", id: "club_room", transition: "fade" },
      { type: "show", char: "monika", pos: "center", expr: "happy" },
      { type: "dialog", char: "monika", expr: "wink", text: "Ты выбрал меня? Отличный вкус." },
      { type: "dialog", char: "monika", expr: "happy", text: "У меня есть кое-что интересное — игра на память!" },
      { type: "dialog", char: "monika", expr: "thoughtful", text: "Память — удивительная вещь. Иногда мы помним то, что хотели бы забыть... И забываем то, что важнее всего." },
      { type: "dialog", char: "mc", text: "Ты всегда говоришь такие загадочные вещи..." },
      { type: "dialog", char: "monika", expr: "wink", text: "Это часть моего шарма! Ну, давай играть!" },
      { type: "hide", char: "monika" },
      { type: "memory" },
      { type: "jump", to: "day2_monika_result" }
    ],

    "day2_monika_result": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "monika", pos: "center", expr: "happy" },
      { type: "if", var: "memory_result", eq: "great", then: "day2_monika_great", else: "day2_monika_other" }
    ],

    "day2_monika_other": [
      { type: "if", var: "memory_result", eq: "ok", then: "day2_monika_ok", else: "day2_monika_many" }
    ],

    "day2_monika_great": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "monika", pos: "center", expr: "happy" },
      { type: "dialog", char: "monika", expr: "surprised", text: "Невероятно! Ты запомнил всё с первого раза!" },
      { type: "dialog", char: "monika", expr: "wink", text: "Надеюсь, ты так же хорошо запомнишь и меня... навсегда." },
      { type: "hide", char: "monika" },
      { type: "jump", to: "day2_poem_share" }
    ],

    "day2_monika_ok": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "monika", pos: "center", expr: "happy" },
      { type: "dialog", char: "monika", expr: "happy", text: "Хорошая игра! Мне понравилось." },
      { type: "dialog", char: "monika", expr: "confident", text: "Знаешь, с каждым днём ты становишься всё ближе к нам. Мне это нравится." },
      { type: "hide", char: "monika" },
      { type: "jump", to: "day2_poem_share" }
    ],

    "day2_monika_many": [
      { type: "bg", id: "club_room" },
      { type: "show", char: "monika", pos: "center", expr: "thoughtful" },
      { type: "dialog", char: "monika", expr: "thoughtful", text: "Многовато ходов... Но знаешь что?" },
      { type: "dialog", char: "monika", expr: "happy", text: "Главное — что мы играли вместе. Это я запомню." },
      { type: "hide", char: "monika" },
      { type: "jump", to: "day2_poem_share" }
    ],

    "day2_poem_share": [
      { type: "bg", id: "club_room", transition: "fade" },
      { type: "show", char: "monika", pos: "center", expr: "confident" },
      { type: "dialog", char: "monika", expr: "confident", text: "Итак! Пришло время делиться стихами. Кто хочет первым?" },
      { type: "narrate", text: "Повисла тишина. Все переглядывались." },
      { type: "hide", char: "monika" },
      { type: "show", char: "sayori", pos: "center", expr: "embarrassed" },
      { type: "dialog", char: "sayori", expr: "embarrassed", text: "Л-ладно, я начну! Только не смейтесь, хорошо?!" },
      { type: "dialog", char: "sayori", expr: "happy", text: "«Утро. Солнце сквозь шторы. Кто-то ждёт меня за дверью. Мне бы встать. Мне бы улыбнуться. Мне бы... просто не вернуться в темноту.»" },
      { type: "narrate", text: "Все замолчали. Стихотворение Сайори было простым, но... что-то в нём царапнуло." },
      { type: "choice", options: [
        { text: "Сайори, это было красиво.", next: "poem_react_compliment" },
        { text: "«Не вернуться в темноту»... Ты в порядке?", next: "poem_react_concern" },
        { text: "Простое, но глубокое. Мне нравится.", next: "poem_react_thoughtful" }
      ]}
    ],

    "poem_react_compliment": [
      { type: "dialog", char: "mc", text: "Сайори... Это было красиво." },
      { type: "dialog", char: "sayori", expr: "happy", text: "Правда?! Э-хе-хе, спасибо!" },
      { type: "hide", char: "sayori" },
      { type: "jump", to: "poem_react_end" }
    ],

    "poem_react_concern": [
      { type: "dialog", char: "mc", text: "«Не вернуться в темноту»... Сайори, ты точно в порядке?" },
      { type: "dialog", char: "sayori", expr: "surprised", text: "А? Это... это просто метафора! Э-хе-хе..." },
      { type: "dialog", char: "sayori", expr: "normal", text: "...Но спасибо, что заметил. Правда." },
      { type: "set", var: "noticed_poem", value: "yes" },
      { type: "hide", char: "sayori" },
      { type: "jump", to: "poem_react_end" }
    ],

    "poem_react_thoughtful": [
      { type: "dialog", char: "mc", text: "Простое, но глубокое. Настоящие чувства не нуждаются в сложных словах." },
      { type: "dialog", char: "sayori", expr: "surprised", text: "Ого... Ты так хорошо это сформулировал." },
      { type: "dialog", char: "sayori", expr: "happy", text: "Спасибо!" },
      { type: "hide", char: "sayori" },
      { type: "jump", to: "poem_react_end" }
    ],

    "poem_react_end": [
      { type: "show", char: "natsuki", pos: "center", expr: "proud" },
      { type: "dialog", char: "natsuki", expr: "proud", text: "Моя очередь! «Розовый — не значит слабый. Сладкий — не значит пустой. Я вложила душу в каждый слой. А ты? Ты просто стоишь и смотришь.»" },
      { type: "dialog", char: "natsuki", expr: "embarrassed", text: "...Что? Это про кексы. Не смотри так!" },
      { type: "choice", options: [
        { text: "Это мощно, Нацуки.", next: "natsuki_poem_praise" },
        { text: "Точно только про кексы?", next: "natsuki_poem_tease" },
        { text: "Мне нравится твой стиль", next: "natsuki_poem_style" }
      ]}
    ],

    "natsuki_poem_praise": [
      { type: "dialog", char: "mc", text: "Это мощно, Нацуки. Серьёзно." },
      { type: "dialog", char: "natsuki", expr: "surprised", text: "Т-ты правда так думаешь?!" },
      { type: "dialog", char: "natsuki", expr: "embarrassed", text: "...Спасибо. Ну, не то чтобы мне нужна твоя похвала!" },
      { type: "hide", char: "natsuki" },
      { type: "jump", to: "monika_closing_poems" }
    ],

    "natsuki_poem_tease": [
      { type: "dialog", char: "mc", text: "«Ты просто стоишь и смотришь»... Точно только про кексы?" },
      { type: "dialog", char: "natsuki", expr: "angry", text: "ДА! ПРО КЕКСЫ! Что ещё ты себе напридумывал?!" },
      { type: "dialog", char: "natsuki", expr: "embarrassed", text: "...Бака." },
      { type: "narrate", text: "Она покраснела до ушей. Кажется, я попал в точку." },
      { type: "hide", char: "natsuki" },
      { type: "jump", to: "monika_closing_poems" }
    ],

    "natsuki_poem_style": [
      { type: "dialog", char: "mc", text: "Мне нравится твой стиль. Коротко, дерзко, от души." },
      { type: "dialog", char: "natsuki", expr: "happy", text: "Ха! Конечно! Это же МОЙ стиль!" },
      { type: "dialog", char: "natsuki", expr: "proud", text: "Запомни — краткость — сестра таланта!" },
      { type: "hide", char: "natsuki" },
      { type: "jump", to: "monika_closing_poems" }
    ],

    "monika_closing_poems": [
      { type: "narrate", text: "Я улыбнулся. Нацуки — больше, чем кажется на первый взгляд." },
      { type: "show", char: "monika", pos: "center", expr: "happy" },
      { type: "dialog", char: "monika", expr: "happy", text: "Замечательные стихи, все молодцы! А завтра — напишем ещё. Тема: «Что я хочу сказать, но не могу»." },
      { type: "dialog", char: "monika", expr: "thoughtful", text: "Иногда самые важные слова — те, что застревают внутри." },
      { type: "hide", char: "monika" },
      { type: "jump", to: "day2_evening" }
    ],

    "day2_evening": [
      { type: "music", id: "emotional" },
      { type: "bg", id: "sunset", transition: "fade" },
      { type: "narrate", text: "Время пролетело незаметно. Солнце садилось за горизонт, заливая коридор тёплым светом." },
      { type: "show", char: "sayori", pos: "left", expr: "happy" },
      { type: "dialog", char: "sayori", expr: "happy", text: "Сегодня было здорово, правда? Все такие талантливые..." },
      { type: "dialog", char: "sayori", expr: "normal", text: "Знаешь, иногда мне кажется, что стихи — это способ сказать то, что не получается сказать вслух." },
      { type: "choice", options: [
        { text: "Ты хочешь мне что-то сказать?", next: "evening_sayori_press" },
        { text: "Я думаю, ты права", next: "evening_sayori_agree" },
        { text: "Пойдём домой, становится темно", next: "evening_sayori_avoid" }
      ]}
    ],

    "evening_sayori_press": [
      { type: "dialog", char: "mc", text: "Сайори... Ты хочешь мне что-то сказать? Можешь быть честной." },
      { type: "dialog", char: "sayori", expr: "surprised", text: "Я?.." },
      { type: "dialog", char: "sayori", expr: "sad", text: "...Иногда мне бывает тяжело. Просыпаться, улыбаться, делать вид, что всё хорошо." },
      { type: "dialog", char: "sayori", expr: "normal", text: "Но... когда ты рядом, мне легче. Правда." },
      { type: "dialog", char: "mc", text: "Я всегда рядом, Сайори. Помни это." },
      { type: "dialog", char: "sayori", expr: "happy", text: "...Спасибо." },
      { type: "set", var: "sayori_opened", value: "yes" },
      { type: "jump", to: "evening_walk_home" }
    ],

    "evening_sayori_agree": [
      { type: "dialog", char: "mc", text: "Я думаю, ты права. Слова могут больше, чем мы думаем." },
      { type: "dialog", char: "sayori", expr: "happy", text: "Правда?.. Э-хе-хе. Мне нравится так думать." },
      { type: "dialog", char: "sayori", expr: "normal", text: "Пойдём домой? Становится поздно." },
      { type: "jump", to: "evening_walk_home" }
    ],

    "evening_sayori_avoid": [
      { type: "dialog", char: "mc", text: "Ладно, пойдём. Темнеет уже." },
      { type: "dialog", char: "sayori", expr: "embarrassed", text: "А? Да, конечно! Э-хе-хе, идём!" },
      { type: "narrate", text: "Сайори будто хотела ещё что-то сказать, но промолчала." },
      { type: "jump", to: "evening_walk_home" }
    ],

    "evening_walk_home": [
      { type: "hide", char: "sayori" },
      { type: "narrate", text: "Мы шли домой по вечерней улице. Сайори шагала рядом, но казалась немного задумчивой." },
      { type: "narrate", text: "Второй день в кружке. Кексы, викторины, стихи, карточки, разговоры о книгах..." },
      { type: "narrate", text: "Кто бы мог подумать, что литературный кружок окажется таким... живым." },
      { type: "bg", id: "bedroom", transition: "fade" },
      { type: "narrate", text: "Дома, вечером. Нужно написать ещё одно стихотворение. «Что я хочу сказать, но не могу»." },
      { type: "narrate", text: "Непростая тема. Но, кажется, слова уже приходят..." },
      { type: "wait", ms: 500 },
      { type: "poem" },
      { type: "jump", to: "day2_night" }
    ],

    "day2_night": [
      { type: "bg", id: "bedroom", transition: "fade" },
      { type: "narrate", text: "Я перечитал написанное. На этот раз получилось... личнее. Честнее." },
      { type: "narrate", text: "Телефон завибрировал. Сообщение." },
      { type: "show", char: "monika", pos: "center", expr: "thoughtful" },
      { type: "dialog", char: "monika", expr: "thoughtful", text: "Привет. Не спишь? У меня к тебе странный вопрос." },
      { type: "dialog", char: "monika", expr: "serious", text: "Ты когда-нибудь чувствовал, что за тобой наблюдают? Что кто-то... знает о тебе больше, чем должен?" },
      { type: "choice", options: [
        { text: "Иногда... Ты тоже это чувствуешь?", next: "monika_night2_agree" },
        { text: "Моника, ты меня пугаешь", next: "monika_night2_scared" },
        { text: "Это звучит как сюжет твоей книги", next: "monika_night2_deflect" },
        { text: "Честно? Я чувствую это прямо сейчас", next: "monika_night2_meta" }
      ]}
    ],

    "monika_night2_agree": [
      { type: "dialog", char: "mc", text: "Иногда... Да, бывает такое ощущение. Ты тоже?" },
      { type: "dialog", char: "monika", expr: "surprised", text: "...Ты серьёзно? Ты тоже это чувствуешь?" },
      { type: "dialog", char: "monika", expr: "serious", text: "Тогда, может... мы не так уж отличаемся друг от друга." },
      { type: "dialog", char: "monika", expr: "happy", text: "Ладно, поговорим об этом позже. Спокойной ночи. 💚" },
      { type: "hide", char: "monika" },
      { type: "narrate", text: "Что-то в словах Моники не давало покоя. Как будто она знала что-то, чего не говорила." },
      { type: "jump", to: "day2_night_end" }
    ],

    "monika_night2_scared": [
      { type: "dialog", char: "mc", text: "Эм... Моника, ты меня немного пугаешь." },
      { type: "dialog", char: "monika", expr: "happy", text: "Ой, прости-прости! Я не хотела! Это просто... мысли вслух." },
      { type: "dialog", char: "monika", expr: "wink", text: "Не бери в голову. Спокойной ночи! Завтра будет лучший день! 💚" },
      { type: "hide", char: "monika" },
      { type: "narrate", text: "Она попыталась отшутиться. Но я заметил, что сначала она была серьёзна." },
      { type: "jump", to: "day2_night_end" }
    ],

    "monika_night2_deflect": [
      { type: "dialog", char: "mc", text: "Это звучит как сюжет какого-нибудь романа, который читает Юри." },
      { type: "dialog", char: "monika", expr: "thoughtful", text: "Хм... А что, если наша жизнь и есть чей-то роман?" },
      { type: "dialog", char: "monika", expr: "happy", text: "Шучу! Наверное. Спокойной ночи! 💚" },
      { type: "hide", char: "monika" },
      { type: "narrate", text: "«Наверное». Она сказала «наверное». Почему не «конечно»?" },
      { type: "jump", to: "day2_night_end" }
    ],

    "monika_night2_meta": [
      { type: "dialog", char: "mc", text: "Честно? Я чувствую это прямо сейчас. Как будто кто-то читает наш разговор." },
      { type: "dialog", char: "monika", expr: "surprised", text: "..." },
      { type: "dialog", char: "monika", expr: "serious", text: "...Ты даже не представляешь, насколько ты близок к истине." },
      { type: "dialog", char: "monika", expr: "happy", text: "Но хватит об этом! Спокойной ночи! 💚" },
      { type: "hide", char: "monika" },
      { type: "narrate", text: "Мурашки пробежали по спине. Что она имела в виду?.." },
      { type: "jump", to: "day2_night_end" }
    ],

    "day2_night_end": [
      { type: "narrate", text: "Я положил телефон и уставился в потолок." },
      { type: "narrate", text: "Моника... Кто ты на самом деле?" },
      { type: "wait", ms: 800 },
      { type: "jump", to: "end_chapter2" }
    ],

    "end_chapter2": [
      { type: "music", id: "stop" },
      { type: "bg", id: "black", transition: "fade" },
      { type: "wait", ms: 800 },
      { type: "narrate", text: "Конец второй главы." },
      { type: "wait", ms: 1200 },
      { type: "narrate", text: "Продолжение следует..." },
      { type: "wait", ms: 1500 },
      { type: "end" }
    ]

  }
};
