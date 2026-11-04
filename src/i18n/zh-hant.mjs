// Traditional Chinese (Taiwan) translation of en.mjs and the Pixtangle texts in games.mjs.
export default {
  code: 'zh-hant',
  hreflang: 'zh-Hant',
  name: '繁體中文',
  ogLocale: 'zh_TW',
  ui: {
    skip: '跳至主要內容',
    navGames: '遊戲',
    navContact: '聯絡我們',
    fineNoCookies: '本網站不設定 Cookie，也不使用任何追蹤器。',
    fineTrademarks:
      'App Store 是 Apple Inc. 的服務標章。Google Play 和 Google Play 標誌是 Google LLC 的商標。',
    appStoreAlt: '在 App Store 下載 {name}',
    googlePlayAlt: '在 Google Play 取得 {name}',
    comingSoon: '即將在 {stores} 推出',
    storeAppStore: 'App Store',
    storeGooglePlay: 'Google Play',
    and: '和',
    freeOn: '可在 {platforms} 上免費暢玩',
    howToPlay: '玩法說明',
    tips: '解題技巧',
    faq: '常見問題',
    gallery: '近看細節',
    screenshots: '螢幕截圖',
    features: '遊戲內容',
    support: '支援',
    supportText: '有問題、有想法，或遇到故障？寫信給我們吧——每一則訊息我們都會仔細閱讀。',
    supportPage: '支援頁面',
    privacyPolicy: '隱私政策',
    moreFrom: '{studio} 的更多遊戲',
    language: '語言',
    gameTitle: '{name} — {genre} | {studio}',
  },
  games: {
    pixtangle: {
      genre: '數方格邏輯謎題',
      tagline: '切分盤面，看像素畫綻放。',
      summary:
        '把盤面分成一個個矩形——每個數字就是它所在矩形的大小。填滿整個盤面，謎題就會綻放成一幅像素畫，收進你的收藏。',
      platforms: 'iPhone、iPad 和 Android',
      keywords: [
        '數方格',
        'shikaku',
        '數方格謎題',
        '矩形謎題',
        '邏輯謎題',
        '數字謎題',
        '像素畫',
        '益智遊戲',
        '燒腦遊戲',
      ],
      art: {
        alts: [
          '「中等」難度的盤面，正在解題中',
          '完成的「櫻花」像素畫',
          '依類別排列的像素畫收藏',
        ],
      },
      rules: {
        intro:
          'Pixtangle 以數方格（Shikaku）為基礎。這是一種源自日本的紙筆邏輯謎題，英文又稱 Rectangles 或 Divide by Squares。盤面是一個網格，部分格子裡寫有數字：把它劃分成若干矩形，讓每個格子都恰好屬於其中一個矩形。',
        steps: [
          '在盤面上拖曳，圍繞一個數字畫出矩形。',
          '每個矩形恰好包含一個數字……',
          '……這個數字就是它所占的格子數，也就是面積。',
          '鋪滿整個盤面，圖畫就會出現。',
        ],
        notes: [
          '正方形也算矩形：4 既可以是 2 × 2，也可以是 1 × 4。',
          '問號代表大小未知的矩形：它同樣只包含一個標記，面積由你決定。',
        ],
        tips: [
          '先從只有一種擺法的數字下手：被邊緣和相鄰數字夾住的數字，往往只剩一種形狀。',
          '質數（2、3、5、7）只能是排成一直線的格子：橫向一排，或縱向一排。',
          '找出只有一個數字碰得到的格子：它們一定屬於那個數字的矩形。',
          '角落和邊緣的大數字沒什麼地方可去——儘早嘗試它們。',
          '卡關了嗎？提示會點亮一個正確的矩形，你可以從那裡繼續。',
        ],
        alt: '6 × 6 的 Pixtangle 盤面：帶數字的粉彩矩形，其中一個正在繪製中',
      },
      screenshots: [
        '「中等」難度的盤面，正在解題中',
        '放下第一個矩形之前的櫻花盤面',
        '完成的「櫻花」像素畫',
        '依類別排列的像素畫收藏',
        '每日挑戰日曆',
        '馬拉松：與時間賽跑，一盤接一盤',
        '經典關卡的六種難度',
      ],
      features: [
        {
          title: '270+ 幅像素畫',
          text: '從動物到太空，共十大類別。每幅作品都是一個圖畫形狀的盤面——解開它，就能為它上色。',
        },
        {
          title: '每天都有新挑戰',
          text: '每天一個形狀獨特的盤面。保持連續天數，贏得更豐厚的獎勵。',
        },
        {
          title: '六種難度',
          text: '無盡的經典關卡，從輕鬆暖身到「瘋狂」級燒腦難題，獲勝還能贏得大師之路的作品。',
        },
        {
          title: '追尋稀有作品',
          text: '從普通到傳說：集齊一整個類別，即可解鎖其中最稀有的作品。',
        },
        {
          title: '成就與排行榜',
          text: 'iPhone 和 iPad 上支援 Game Center：數十項成就，還有每週排行榜等你衝榜。',
        },
        {
          title: '為療癒而生',
          text: '深色與淺色主題，柔和的音效與觸覺回饋。無需帳號，完全離線運作。',
        },
      ],
      faq: [
        {
          q: '什麼是數方格？',
          a: '一種來自日本的邏輯謎題：把網格劃分成若干矩形，使每個矩形裡只有一個數字，且這個數字等於它的面積。它的日文名是 Shikaku，英文又稱 Rectangles 或 Divide by Squares。',
        },
        {
          q: 'Pixtangle 免費嗎？',
          a: '是的。Pixtangle 在 iPhone、iPad 和 Android 上免費，含廣告和可選購的 App 內購買項目——其中包括一個可關閉關卡之間廣告的組合包。',
        },
        {
          q: '可以離線玩嗎？',
          a: '可以。無需帳號，沒有網路也能玩；你的進度儲存在裝置上，並隨手機的備份一起備份。',
        },
        {
          q: '難度有多高？',
          a: '六種難度帶你從小小的「簡單」盤面，一路挑戰到布滿問號線索的大型「瘋狂」盤面；此外還有每天更新的每日挑戰和限時馬拉松。',
        },
      ],
    },
  },
};
