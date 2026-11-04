// Turkish translation of en.mjs and the Pixtangle texts in games.mjs.
export default {
  code: 'tr',
  hreflang: 'tr',
  name: 'Türkçe',
  ogLocale: 'tr_TR',
  ui: {
    skip: 'İçeriğe geç',
    navGames: 'Oyunlar',
    navContact: 'İletişim',
    fineNoCookies: 'Bu site çerez bırakmaz ve izleyici kullanmaz.',
    fineTrademarks:
      'App Store, Apple Inc.’in hizmet markasıdır. Google Play ve Google Play logosu, Google LLC’nin ticari markalarıdır.',
    appStoreAlt: '{name} uygulamasını App Store’dan indir',
    googlePlayAlt: '{name} uygulamasını Google Play’den al',
    comingSoon: 'Çok yakında: {stores}',
    storeAppStore: 'App Store',
    storeGooglePlay: 'Google Play',
    and: 've',
    freeOn: '{platforms} için ücretsiz',
    howToPlay: 'Nasıl oynanır',
    tips: 'Çözüm taktikleri',
    faq: 'Sorular ve yanıtlar',
    gallery: 'Daha yakından',
    screenshots: 'Ekran görüntüleri',
    features: 'Neler var',
    support: 'Destek',
    supportText: 'Sorun, fikrin ya da çalışmayan bir şey mi var? Bize yaz — her mesajı okuyoruz.',
    supportPage: 'Destek sayfası',
    privacyPolicy: 'Gizlilik politikası',
    moreFrom: '{studio} imzalı diğer oyunlar',
    language: 'Dil',
    gameTitle: '{name} — {genre} | {studio}',
    studioEyebrow: 'Bağımsız oyun stüdyosu',
    ourGames: 'Oyunlarımız',
    howWeMake: 'Nasıl yapıyoruz',
    sayHello: 'Merhaba de',
    sayHelloText:
      'Bir soru, bir fikir, bir hata — ya da sadece güzel bir söz. Oynadığın oyunun adresine yaz; her mesajı okuyoruz.',
    discover: '{name} oyununu keşfet',
    docDescription: '{title} — {studio} imzalı {name}.',
  },
  studio: {
    title: 'PAA Studios — küçük, sakin bulmaca oyunları',
    description:
      'PAA Studios; iPhone, iPad ve Android için keyifli mantık bulmacası oyunları yapar: Pixtangle ve Stitch Tales.',
    headline: 'Küçük, [sakin]\nbulmaca oyunları.',
    intro:
      'iPhone, iPad ve Android için keyifli mantık bulmacaları yapıyoruz. Her bulmaca küçük bir resimle biter — piksel sanat bir hayvan, nakışla işlenmiş bir kelebek — ve oraya varmak için hiç acele etmen gerekmez.',
    principles: [
      {
        title: 'Çevrimdışı oynanır',
        text: 'İnternet gerekmez. Uçakta, metroda ya da hiç çekmeyen bir yerde bulmaca çöz.',
      },
      {
        title: 'Hesap yok',
        text: 'Oyunu aç ve oyna. Kayıt yok, giriş yok, vermen gereken bir e-posta adresi yok.',
      },
      {
        title: 'İlerlemen sana ait',
        text: 'Cihazında durur ve kendi iCloud ya da Google hesabına yedeklenir — onu göndereceğimiz bir sunucumuz yok.',
      },
    ],
  },
  games: {
    pixtangle: {
      genre: 'Shikaku mantık bulmacası',
      tagline: 'Izgarayı dilimle. Piksel sanatın çiçek açmasını izle.',
      summary:
        'Tahtayı dikdörtgenlere böl — her sayı kendi dikdörtgeninin büyüklüğüdür. Izgaranın tamamını doldur; bulmaca çiçek açar gibi koleksiyonuna katılacak bir piksel sanat resmine dönüşsün.',
      platforms: 'iPhone, iPad ve Android',
      keywords: [
        'shikaku',
        'shikaku bulmaca',
        'dikdörtgen bulmaca',
        'mantık bulmacası',
        'sayı bulmacası',
        'piksel sanat',
        'zeka oyunu',
        'beyin jimnastiği',
        'akıl oyunu',
        'oyun',
        'mobil oyun',
        'bulmaca oyunu',
        'ücretsiz oyun',
        'internetsiz oyun',
      ],
      art: {
        alts: [
          'Orta zorlukta, çözülmekte olan bir tahta',
          'Tamamlanmış “Sakura” piksel sanatı',
          'Kategorilere göre piksel sanat koleksiyonu',
        ],
      },
      rules: {
        intro:
          'Pixtangle, kâğıt kalemle oynanan ve İngilizcede Rectangles ya da Divide by Squares adlarıyla da bilinen Japon mantık bulmacası Shikaku’ya dayanır. Tahta, bazı hücrelerinde sayılar bulunan bir ızgaradır: her hücre tam olarak bir dikdörtgene ait olacak şekilde onu dikdörtgenlere böl.',
        steps: [
          'Bir sayının etrafına dikdörtgen çizmek için parmağını tahtada sürükle.',
          'Her dikdörtgende tam olarak bir sayı bulunur…',
          '…ve o sayı, dikdörtgenin hücre cinsinden alanıdır.',
          'Tahtanın tamamını kapla, resim ortaya çıksın.',
        ],
        notes: [
          'Kareler de dikdörtgen sayılır: 4, hem 2 × 2 hem de 1 × 4 olabilir.',
          'Soru işareti, boyutu bilinmeyen bir dikdörtgendir: yine tam olarak bir işaret içerir, ama alanına sen karar verirsin.',
        ],
        tips: [
          'Tek bir şekilde yerleşebilen sayılarla başla: kenar ile komşuları arasında sıkışmış bir sayı çoğu zaman tek bir şekle izin verir.',
          'Asal bir sayı — 2, 3, 5, 7 — yalnızca düz bir hücre dizisi olabilir: tek bir satır ya da tek bir sütun.',
          'Yalnızca tek bir sayının ulaşabildiği hücreleri ara: bu hücreler o sayının dikdörtgenine ait olmak zorundadır.',
          'Köşelerdeki ve kenarlardaki büyük sayıların gidecek pek yeri yoktur — onları erkenden dene.',
          'Takıldın mı? Bir ipucu doğru bir dikdörtgeni gösterir, sen de oradan devam edersin.',
        ],
        alt: 'Altıya altı bir Pixtangle tahtası: sayılı pastel dikdörtgenler, biri çiziliyor',
      },
      screenshots: [
        'Orta zorlukta, çözülmekte olan bir tahta',
        'İlk dikdörtgenden önce sakura tahtası',
        'Tamamlanmış “Sakura” piksel sanatı',
        'Kategorilere göre piksel sanat koleksiyonları',
        'Günlük meydan okuma takvimi',
        'Bir Maraton koşusu: zamana karşı tahtalar',
        'Klasik seviyelerin altı zorluğu',
      ],
      features: [
        {
          title: '270+ piksel sanat',
          text: 'Hayvanlardan uzaya on kategori. Her eser, resmin şeklinde bir tahtadır — çöz ve renklendir.',
        },
        {
          title: 'Her gün yeni bir meydan okuma',
          text: 'Benzersiz şekilli günlük bir tahta. Serini sürdür, ödüllerin büyüsün.',
        },
        {
          title: 'Altı zorluk',
          text: 'Hızlı ısınmalardan Çılgın seviyesindeki zorlu bulmacalara kadar sonsuz klasik seviye, üstüne galibiyetlerin için Ustanın yolu eserleri.',
        },
        {
          title: 'Peşine düşülecek nadirlikler',
          text: 'Sıradandan efsaneviye: bir kategorinin tamamını bitir, en nadir eserinin kilidini aç.',
        },
        {
          title: 'Başarımlar ve liderlik tabloları',
          text: 'iPhone ve iPad’de Game Center: onlarca başarım ve tırmanılacak haftalık liderlik tabloları.',
        },
        {
          title: 'Rahatlamak için tasarlandı',
          text: 'Koyu ve açık temalar, yumuşak sesler ve titreşim. Hesap gerekmez, tamamen çevrimdışı çalışır.',
        },
      ],
      faq: [
        {
          q: 'Shikaku nedir?',
          a: 'Japonya’dan bir mantık bulmacası: bir ızgarayı, her birinde alanına eşit tek bir sayı olacak şekilde dikdörtgenlere bölersin. İngilizcede Rectangles ya da Divide by Squares olarak da bilinir.',
        },
        {
          q: 'Pixtangle ücretsiz mi?',
          a: 'Evet. Pixtangle; iPhone, iPad ve Android’de ücretsizdir. Reklamlar ve isteğe bağlı uygulama içi satın alımlar içerir — seviyeler arasındaki reklamları kapatan bir paket de bunlara dahildir.',
        },
        {
          q: 'Çevrimdışı çalışır mı?',
          a: 'Evet. Hesap yok ve internetsiz oynayabilirsin; ilerlemen cihazında kalır ve telefonunun yedeğiyle birlikte yedeklenir.',
        },
        {
          q: 'Ne kadar zorlaşıyor?',
          a: 'Altı zorluk seni küçük Kolay tahtalardan soru işaretleriyle dolu büyük Çılgın tahtalara götürür; üstüne her gün yenilenen günlük meydan okuma ve zamana karşı Maraton var.',
        },
      ],
    },
    'stitch-tales': {
      genre: 'Nakışlı nonogram bulmacası',
      tagline: 'Her bulmaca, büyük bir resmin tek bir dikişi.',
      summary:
        'Satır ve sütunların yanındaki sayıları oku, doğru kareleri dik — çözdüğün her nonogram kasnağındaki sahneye işlensin.',
      platforms: 'iPhone, iPad ve Android',
      keywords: [
        'nonogram',
        'nonogram bulmaca',
        'picross',
        'japon bulmacası',
        'resimli bulmaca',
        'kanaviçe',
        'nakış',
        'etamin',
        'mantık bulmacası',
        'zeka oyunu',
        'oyun',
        'mobil oyun',
        'bulmaca oyunu',
        'ücretsiz oyun',
        'internetsiz oyun',
      ],
      art: {
        alt: 'İçinde nakışlı bir çayır olan kasnak: kelebek, güneş, çiçekler ve henüz işlenmemiş bir mantar',
      },
      rules: {
        steps: [
          'Her satırın ve sütunun yanındaki sayılar, sırayla yan yana kaç kare dikileceğini gösterir.',
          'Dolu olması gereken kareleri dik; boş kalacakları çarpıyla işaretle.',
          'Dikkat: her yanlış dikiş bir can götürür — nakışlı kalplerinden biri kırılır.',
          'Izgarayı çöz; figür kasnağındaki sahneye işlensin.',
        ],
        alt: 'Neredeyse çözülmüş bir kedi nonogramı: nar kırmızısı iplikle dikilmiş kareler, boş olanlarda çarpılar',
      },
      features: [
        {
          title: 'İşlenecek sahneler',
          text: 'Çiçekli çayır, Stonehenge, meyve pikniği, Güneş Sistemi, Japon bahçesi, bebek evi, kış köyü, deniz dibi ve daha fazlası.',
        },
        {
          title: 'Gerçek nakış teknikleri',
          text: 'Saten dolgu, zincir işi, balık kılçığı ve Fransız düğümü — her figür kendi ipliği ve dokusuyla işlenir.',
        },
        {
          title: 'Sonsuz bir etamin',
          text: 'İlk sahneni bitirince halk motifleriyle bir etamin açılır — ve desenleri hiç bitmez.',
        },
        {
          title: 'Takıldığında ipuçları',
          text: 'Tek bir kareyi ya da bütün bir satırı veya sütunu aç, dikmeye devam et.',
        },
        {
          title: 'Her gün bir hediye',
          text: 'Her gün uğra; ödülün serinle birlikte büyüsün.',
        },
        {
          title: 'Göz yormaz',
          text: 'Yumuşak keten renkleri, hafif dikiş sesleri. Hesap da internet de gerekmez.',
        },
      ],
      supportNote: 'Bize oyunun içinden de ulaşabilirsin: “Profil” → “Bize yazın”.',
    },
  },
};
