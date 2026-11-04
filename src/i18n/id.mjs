// Indonesian translation of en.mjs and the Pixtangle texts in games.mjs.
export default {
  code: 'id',
  hreflang: 'id',
  name: 'Bahasa Indonesia',
  ogLocale: 'id_ID',
  ui: {
    skip: 'Langsung ke konten',
    navGames: 'Game',
    navContact: 'Kontak',
    fineNoCookies: 'Situs ini tidak memasang cookie dan tidak memakai pelacak.',
    fineTrademarks:
      'App Store adalah merek layanan Apple Inc. Google Play dan logo Google Play adalah merek dagang Google LLC.',
    appStoreAlt: 'Unduh {name} di App Store',
    googlePlayAlt: 'Dapatkan {name} di Google Play',
    comingSoon: 'Segera hadir di {stores}',
    storeAppStore: 'App Store',
    storeGooglePlay: 'Google Play',
    and: 'dan',
    freeOn: 'Gratis di {platforms}',
    howToPlay: 'Cara bermain',
    tips: 'Tips menyelesaikan',
    faq: 'Tanya jawab',
    gallery: 'Lihat lebih dekat',
    screenshots: 'Tangkapan layar',
    features: 'Isi game',
    support: 'Dukungan',
    supportText:
      'Ada pertanyaan, ide, atau sesuatu tidak berfungsi? Kirimi kami pesan — kami membaca setiap pesan.',
    supportPage: 'Halaman dukungan',
    privacyPolicy: 'Kebijakan privasi',
    moreFrom: 'Game lain dari {studio}',
    language: 'Bahasa',
    gameTitle: '{name} — {genre} | {studio}',
    studioEyebrow: 'Studio game independen',
    ourGames: 'Game kami',
    howWeMake: 'Cara kami membuatnya',
    sayHello: 'Sapa kami',
    sayHelloText:
      'Pertanyaan, ide, bug — atau sekadar kata-kata baik. Tulis ke alamat game yang kamu mainkan, kami membaca setiap pesan.',
    discover: 'Jelajahi {name}',
    docDescription: '{title} {name}, game dari {studio}.',
  },
  studio: {
    title: 'PAA Studios — game teka-teki kecil yang menenangkan',
    description:
      'PAA Studios membuat game teka-teki logika yang nyaman untuk iPhone, iPad, dan Android: Pixtangle dan Stitch Tales.',
    headline: 'Game teka-teki kecil\nyang [tenang].',
    intro:
      'Kami membuat teka-teki logika yang nyaman untuk iPhone, iPad, dan Android. Setiap teka-teki berakhir dengan gambar kecil — hewan pixel art, kupu-kupu sulaman — dan kamu tak pernah perlu terburu-buru untuk sampai ke sana.',
    principles: [
      {
        title: 'Main tanpa internet',
        text: 'Tidak perlu koneksi. Pecahkan teka-teki di pesawat, di kereta, atau di tempat tanpa sinyal sama sekali.',
      },
      {
        title: 'Tanpa akun',
        text: 'Buka game dan langsung main. Tanpa daftar, tanpa login, tanpa perlu menyerahkan alamat email.',
      },
      {
        title: 'Progresmu milikmu',
        text: 'Progres tersimpan di perangkatmu dan dicadangkan ke akun iCloud atau Google milikmu sendiri — kami tidak punya server untuk menampungnya.',
      },
    ],
  },
  games: {
    pixtangle: {
      genre: 'Teka-teki logika shikaku',
      tagline: 'Potong kisinya. Saksikan pixel art bermekaran.',
      summary:
        'Bagi papan menjadi persegi panjang — setiap angka adalah ukuran persegi panjangnya sendiri. Penuhi seluruh kisi, dan teka-teki itu bermekaran menjadi gambar pixel art untuk koleksimu.',
      platforms: 'iPhone, iPad, dan Android',
      keywords: [
        'shikaku',
        'teka-teki shikaku',
        'puzzle persegi panjang',
        'teka-teki logika',
        'puzzle logika',
        'puzzle angka',
        'pixel art',
        'seni piksel',
        'asah otak',
        'game',
        'game mobile',
        'game puzzle',
        'game gratis',
        'game offline',
      ],
      art: {
        alts: [
          'Papan tingkat Sedang yang sedang dikerjakan',
          'Pixel art sakura yang sudah selesai',
          'Koleksi pixel art per kategori',
        ],
      },
      rules: {
        intro:
          'Pixtangle dibuat berdasarkan Shikaku, teka-teki logika kertas dan pensil dari Jepang yang dalam bahasa Inggris juga dikenal sebagai Rectangles atau Divide by Squares. Papannya berupa kisi dengan angka di beberapa sel: bagilah menjadi persegi panjang sehingga setiap sel masuk ke tepat satu persegi panjang.',
        steps: [
          'Seret jari di papan untuk menggambar persegi panjang di sekitar sebuah angka.',
          'Setiap persegi panjang berisi tepat satu angka…',
          '…dan angka itu adalah luasnya dalam sel.',
          'Tutupi seluruh papan, dan gambarnya muncul.',
        ],
        notes: [
          'Persegi juga dihitung sebagai persegi panjang: angka 4 bisa 2 × 2, bisa juga 1 × 4.',
          'Tanda tanya adalah persegi panjang yang ukurannya tidak diketahui: isinya tetap tepat satu tanda, dan luasnya terserah kamu.',
        ],
        tips: [
          'Mulailah dari angka yang hanya muat dengan satu cara: angka yang terjepit tepi papan dan tetangganya sering hanya menyisakan satu bentuk.',
          'Bilangan prima — 2, 3, 5, 7 — hanya bisa berupa garis lurus sel: satu baris atau satu kolom.',
          'Cari sel yang hanya bisa dijangkau satu angka: sel itu pasti milik persegi panjang angka tersebut.',
          'Angka besar di sudut dan di sepanjang tepi tidak punya banyak ruang — coba lebih awal.',
          'Buntu? Petunjuk menyorot satu persegi panjang yang benar, lalu kamu lanjutkan dari situ.',
        ],
        alt: 'Papan Pixtangle enam kali enam: persegi panjang pastel berisi angka, salah satunya sedang digambar',
      },
      screenshots: [
        'Papan tingkat Sedang yang sedang dikerjakan',
        'Papan sakura sebelum persegi panjang pertama',
        'Pixel art sakura yang sudah selesai',
        'Koleksi pixel art per kategori',
        'Kalender tantangan harian',
        'Satu putaran Maraton: papan demi papan melawan waktu',
        'Enam tingkat kesulitan level klasik',
      ],
      features: [
        {
          title: '270+ pixel art',
          text: 'Sepuluh kategori, dari hewan sampai antariksa. Setiap karya adalah papan berbentuk gambarnya — selesaikan untuk mewarnainya.',
        },
        {
          title: 'Tantangan baru setiap hari',
          text: 'Papan harian dengan bentuk unik. Jaga rentetanmu agar hadiahnya makin besar.',
        },
        {
          title: 'Enam tingkat kesulitan',
          text: 'Level klasik tanpa akhir, dari pemanasan singkat sampai teka-teki tingkat Gila, plus karya Jalan sang master untuk kemenanganmu.',
        },
        {
          title: 'Berburu kelangkaan',
          text: 'Dari umum hingga legendaris: tuntaskan satu kategori penuh untuk membuka karya paling langkanya.',
        },
        {
          title: 'Pencapaian dan papan peringkat',
          text: 'Game Center di iPhone dan iPad: puluhan pencapaian dan papan peringkat mingguan untuk didaki.',
        },
        {
          title: 'Dibuat untuk bersantai',
          text: 'Tema gelap dan terang, suara lembut, dan getaran haptik. Tanpa akun, berfungsi sepenuhnya secara luring.',
        },
      ],
      faq: [
        {
          q: 'Apa itu Shikaku?',
          a: 'Teka-teki logika dari Jepang: bagi kisi menjadi persegi panjang sehingga masing-masing berisi satu angka yang sama dengan luasnya. Teka-teki ini juga disebut Rectangles atau Divide by Squares.',
        },
        {
          q: 'Apakah Pixtangle gratis?',
          a: 'Ya. Pixtangle gratis di iPhone, iPad, dan Android, dengan iklan dan pembelian dalam aplikasi opsional — termasuk paket yang mematikan iklan di antara level.',
        },
        {
          q: 'Apakah bisa dimainkan secara luring?',
          a: 'Ya. Tidak perlu akun dan kamu bisa bermain tanpa internet; progresmu tersimpan di perangkat dan ikut dicadangkan bersama cadangan ponselmu.',
        },
        {
          q: 'Seberapa sulit permainannya?',
          a: 'Enam tingkat kesulitan membawamu dari papan Mudah yang kecil hingga papan Gila yang besar dan penuh tanda tanya, ditambah tantangan harian yang baru setiap hari dan Maraton berbatas waktu.',
        },
      ],
    },
    'stitch-tales': {
      genre: 'Nonogram kristik',
      tagline: 'Setiap teka-teki adalah satu jahitan dalam gambar yang lebih besar.',
      summary:
        'Baca angka di sepanjang baris dan kolom, isi kotak yang benar — dan setiap nonogram yang terpecahkan tersulam ke dalam gambar di bingkai sulammu.',
      platforms: 'iPhone, iPad, dan Android',
      keywords: [
        'nonogram',
        'teka-teki nonogram',
        'picross',
        'griddlers',
        'teka-teki gambar',
        'kristik',
        'sulam silang',
        'sulaman',
        'teka-teki logika',
        'puzzle logika',
        'pixel art',
        'game',
        'game mobile',
        'game puzzle',
        'game gratis',
        'game offline',
      ],
      art: {
        alt: 'Bingkai sulam dengan padang bunga tersulam: kupu-kupu, matahari, bunga-bunga, dan jamur yang belum disulam',
      },
      rules: {
        steps: [
          'Angka di samping setiap baris dan kolom menunjukkan potongan kotak terisi, berurutan.',
          'Sulam kotak yang harus terisi; tandai kotak yang tetap kosong dengan silang.',
          'Hati-hati — satu sulaman yang salah mengurangi satu nyawa, salah satu hati sulamanmu.',
          'Pecahkan kisinya, dan figurnya tersulam ke dalam gambar di bingkai sulammu.',
        ],
        alt: 'Nonogram kucing yang hampir terpecahkan: kotak tersulam merah delima, silang di kotak kosong',
      },
      features: [
        {
          title: 'Adegan untuk disulam',
          text: 'Padang bunga, Stonehenge, piknik buah, tata surya, taman Jepang, rumah boneka, desa musim dingin, dunia bawah laut, dan masih banyak lagi.',
        },
        {
          title: 'Tusuk sulam sungguhan',
          text: 'Tusuk satin, tusuk rantai, tusuk tulang ikan, dan simpul Prancis — setiap figur disulam dengan benang dan teksturnya sendiri.',
        },
        {
          title: 'Kain sulam tanpa akhir',
          text: 'Setelah adegan pertamamu, terbukalah kain sulam bermotif tradisional — dan polanya tak pernah habis.',
        },
        {
          title: 'Petunjuk saat buntu',
          text: 'Buka satu kotak atau satu garis penuh, lalu lanjutkan menyulam.',
        },
        {
          title: 'Hadiah setiap hari',
          text: 'Datang setiap hari untuk hadiah yang makin besar seiring rentetanmu.',
        },
        {
          title: 'Nyaman di mata',
          text: 'Warna linen yang lembut, suara sulaman yang halus, tanpa akun dan tanpa perlu internet.',
        },
      ],
      supportNote: 'Kamu juga bisa menghubungi kami dari dalam game: Profil → Hubungi kami.',
    },
  },
};
