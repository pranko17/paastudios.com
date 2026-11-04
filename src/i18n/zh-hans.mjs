// Simplified Chinese translation of en.mjs and the Pixtangle texts in games.mjs.
export default {
  code: 'zh-hans',
  hreflang: 'zh-Hans',
  name: '简体中文',
  ogLocale: 'zh_CN',
  ui: {
    skip: '跳到正文',
    navGames: '游戏',
    navContact: '联系我们',
    fineNoCookies: '本网站不设置 Cookie，也不使用任何跟踪器。',
    fineTrademarks:
      'App Store 是 Apple Inc. 的服务标志。Google Play 和 Google Play 徽标是 Google LLC 的商标。',
    appStoreAlt: '在 App Store 下载 {name}',
    googlePlayAlt: '在 Google Play 获取 {name}',
    comingSoon: '即将登陆 {stores}',
    storeAppStore: 'App Store',
    storeGooglePlay: 'Google Play',
    and: '和',
    freeOn: '可在 {platforms} 上免费畅玩',
    howToPlay: '玩法说明',
    tips: '解题技巧',
    faq: '常见问题',
    gallery: '近距离看看',
    screenshots: '屏幕截图',
    features: '游戏内容',
    support: '支持',
    supportText: '有问题、有想法，或者遇到故障？给我们写信吧——每一条消息我们都会认真阅读。',
    supportPage: '支持页面',
    privacyPolicy: '隐私政策',
    moreFrom: '{studio} 的更多游戏',
    language: '语言',
    gameTitle: '{name} — {genre} | {studio}',
  },
  games: {
    pixtangle: {
      genre: '数方格逻辑谜题',
      tagline: '切分棋盘，看像素画绽放。',
      summary:
        '把棋盘分成若干矩形——每个数字就是它所在矩形的大小。填满整个棋盘，谜题就会绽放成一幅像素画，收入你的收藏。',
      platforms: 'iPhone、iPad 和 Android',
      keywords: [
        '数方格',
        'shikaku',
        '数方格谜题',
        '矩形谜题',
        '逻辑谜题',
        '数字谜题',
        '像素画',
        '益智游戏',
        '烧脑游戏',
        '游戏',
        '手机游戏',
        '免费游戏',
        '离线游戏',
      ],
      art: {
        alts: [
          '“中等”难度的棋盘，正在解题中',
          '完成的“樱花”像素画',
          '按类别排列的像素画收藏',
        ],
      },
      rules: {
        intro:
          'Pixtangle 以数方格（Shikaku）为基础。这是一种源自日本的纸笔逻辑谜题，英文又称 Rectangles 或 Divide by Squares。棋盘是一个网格，部分格子里写有数字：把它划分成若干矩形，让每个格子都恰好属于其中一个矩形。',
        steps: [
          '在棋盘上拖动，围绕一个数字画出矩形。',
          '每个矩形恰好包含一个数字……',
          '……这个数字就是它所占的格子数，也就是面积。',
          '铺满整个棋盘，图画就会出现。',
        ],
        notes: [
          '正方形也算矩形：4 既可以是 2 × 2，也可以是 1 × 4。',
          '问号代表大小未知的矩形：它同样只包含一个标记，面积由你决定。',
        ],
        tips: [
          '先从只有一种摆法的数字入手：被边缘和相邻数字夹住的数字，往往只剩一种形状。',
          '质数（2、3、5、7）只能是排成一条直线的格子：一整行或一整列。',
          '找出只有一个数字能够到的格子：它们一定属于那个数字的矩形。',
          '角落和边缘的大数字没有多少地方可去——尽早尝试它们。',
          '卡住了？提示会点亮一个正确的矩形，你可以从那里继续。',
        ],
        alt: '6 × 6 的 Pixtangle 棋盘：带数字的粉彩矩形，其中一个正在绘制中',
      },
      screenshots: [
        '“中等”难度的棋盘，正在解题中',
        '放下第一个矩形之前的樱花棋盘',
        '完成的“樱花”像素画',
        '按类别排列的像素画收藏',
        '每日挑战日历',
        '马拉松：与时间赛跑，一盘接一盘',
        '经典关卡的六种难度',
      ],
      features: [
        {
          title: '270+ 幅像素画',
          text: '从动物到太空，共十大类别。每幅作品都是一块图画形状的棋盘——解开它，就能为它上色。',
        },
        {
          title: '每天都有新挑战',
          text: '每天一块形状独特的棋盘。保持连续天数，赢取更丰厚的奖励。',
        },
        {
          title: '六种难度',
          text: '无尽的经典关卡，从轻松热身到“疯狂”级烧脑难题，获胜还能赢得大师之路的作品。',
        },
        {
          title: '追寻稀有作品',
          text: '从普通到传说：集齐一整个类别，即可解锁其中最稀有的作品。',
        },
        {
          title: '成就与排行榜',
          text: 'iPhone 和 iPad 上支持 Game Center：数十项成就，还有每周排行榜等你冲榜。',
        },
        {
          title: '为放松而做',
          text: '深色与浅色主题，柔和的音效与触感反馈。无需账号，完全离线运行。',
        },
      ],
      faq: [
        {
          q: '什么是数方格？',
          a: '一种来自日本的逻辑谜题：把网格划分成若干矩形，使每个矩形里只有一个数字，且这个数字等于它的面积。它的日文名是 Shikaku，英文又称 Rectangles 或 Divide by Squares。',
        },
        {
          q: 'Pixtangle 免费吗？',
          a: '是的。Pixtangle 在 iPhone、iPad 和 Android 上免费，含广告和可选的应用内购买——其中包括一个可关闭关卡之间广告的礼包。',
        },
        {
          q: '可以离线玩吗？',
          a: '可以。无需账号，没有网络也能玩；你的进度保存在设备上，并随手机的备份一起备份。',
        },
        {
          q: '难度有多高？',
          a: '六种难度带你从小小的“简单”棋盘，一路挑战到布满问号线索的大型“疯狂”棋盘；此外还有每天更新的每日挑战和限时马拉松。',
        },
      ],
    },
  },
};
