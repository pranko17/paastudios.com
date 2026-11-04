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
    studioEyebrow: '独立游戏工作室',
    ourGames: '我们的游戏',
    howWeMake: '我们怎样做游戏',
    sayHello: '打个招呼',
    sayHelloText:
      '有问题、有想法、发现了故障，或者只是想说句暖心话？写信给你正在玩的那款游戏吧——每一条消息我们都会认真阅读。',
    discover: '了解 {name}',
    docDescription: '{studio} 旗下游戏 {name} 的{title}页面。',
  },
  studio: {
    title: 'PAA Studios — 小巧宁静的益智游戏',
    description:
      'PAA Studios 为 iPhone、iPad 和 Android 打造温馨的逻辑益智游戏：Pixtangle 和 Stitch Tales。',
    headline: '小巧、[宁静]的\n益智游戏。',
    intro:
      '我们为 iPhone、iPad 和 Android 制作温馨的逻辑谜题。每道谜题的终点都是一幅小小的图画——一只像素画小动物，或是一只刺绣蝴蝶——而且永远不用急着赶到那里。',
    principles: [
      {
        title: '离线畅玩',
        text: '无需联网。在飞机上、地铁里，或者完全没有信号的地方，都能解谜。',
      },
      {
        title: '无需账号',
        text: '打开游戏就能玩。不用注册，不用登录，也不用交出邮箱地址。',
      },
      {
        title: '进度归你所有',
        text: '进度保存在你的设备上，并备份到你自己的 iCloud 或 Google 账号——我们根本没有接收它的服务器。',
      },
    ],
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
    'stitch-tales': {
      genre: '十字绣数织谜题',
      tagline: '每道谜题，都是大图里的一针。',
      summary:
        '读出每行每列旁的数字，填对格子——每解开一道数织，它就会绣进你绣绷上的场景。',
      platforms: 'iPhone、iPad 和 Android',
      keywords: [
        '数织',
        '数织谜题',
        'nonogram',
        'picross',
        '十字绣',
        '十字绣游戏',
        '刺绣',
        '逻辑谜题',
        '像素画谜题',
        '益智游戏',
        '烧脑游戏',
        '游戏',
        '手机游戏',
        '免费游戏',
        '离线游戏',
      ],
      art: {
        alt: '绣绷上绣着一片花草地：蝴蝶、太阳、花朵，还有一朵尚未绣上的蘑菇',
      },
      rules: {
        steps: [
          '每行每列旁的数字，依次表示要连续填满的格子数。',
          '该填的格子就绣上，该空着的格子标上叉号。',
          '小心——绣错一格，就会失去一颗刺绣爱心，也就是一点生命。',
          '解开整个网格，图案就会绣进绣绷上的场景。',
        ],
        alt: '一道快要解开的猫咪数织：石榴红的已绣格子，空格里标着叉号',
      },
      features: [
        {
          title: '等你来绣的场景',
          text: '花草地、巨石阵、水果野餐、太阳系、日式庭园、娃娃屋、冬日村庄、海底世界……还有更多。',
        },
        {
          title: '真正的刺绣针法',
          text: '缎面绣、锁链绣、鱼骨绣和法式结粒绣——每个图案都用自己的绣线和质感绣成。',
        },
        {
          title: '无尽的刺绣样布',
          text: '绣完第一个场景，就会解锁一块民间图案的刺绣样布——上面的图案永无止境。',
        },
        {
          title: '卡住时有提示',
          text: '揭开一格或一整条线，然后继续刺绣。',
        },
        {
          title: '每天一份礼物',
          text: '每天回来领取奖励，连续天数越长，奖励越丰厚。',
        },
        {
          title: '看着舒服',
          text: '柔和的亚麻色调，轻柔的刺绣声，无需账号，无需联网。',
        },
      ],
      supportNote: '也可以在游戏里点“我的”→“联系我们”给我们写信。',
    },
  },
};
