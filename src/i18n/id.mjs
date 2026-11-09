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
    madeFor: 'Untuk {platforms}',
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
        alts: [
          'Burung hantu yang mulai terbentuk di nonogram, dengan silang di kotak kosong',
          'Adegan “Zodiak” di bingkai sulam, disulam figur demi figur',
          'Adegan “Kucing di jendela” dari dekat: burung layang-layang, kupu-kupu, kucing, dan gulungan benang',
        ],
      },
      cardArt: {
        alt: 'Bingkai sulam dengan padang bunga tersulam: kupu-kupu, matahari, bunga-bunga, dan jamur yang belum disulam',
      },
      rules: {
        intro:
          'Stitch Tales dibuat berdasarkan nonogram, teka-teki logika bergambar yang juga dikenal sebagai griddlers, hanjie, atau teka-teki silang Jepang. Angka di samping baris dan di atas kolom memberi tahu kotak mana yang perlu diisi; isi kotak yang benar, dan gambar tersembunyi pun muncul — di sini, sebuah figur yang tersulam ke dalam adegan di bingkai sulammu.',
        steps: [
          'Angka di samping baris atau di atas kolom memberi tahu berapa kotak berturut-turut yang perlu disulam, dan dalam urutan apa.',
          'Di antara dua kelompok selalu ada setidaknya satu kotak kosong — tandai dengan silang.',
          'Usap jarimu, dan benang akan mengikutinya melintasi kotak-kotak.',
          'Tusukan yang salah mengurangi satu dari tiga nyawamu, jadi pelan-pelan saja.',
          'Pecahkan kisinya, dan figurnya tersulam ke dalam adegan di bingkai sulammu.',
        ],
        notes: [
          'Angka di atas kolom dibaca dari atas ke bawah, angka di samping baris dari kiri ke kanan.',
          'Di kain sulam, setiap angka punya warna benangnya sendiri: kelompok yang berbeda warna boleh bersentuhan, sedangkan kelompok yang sewarna harus dipisah satu kotak kosong.',
          'Figur pertamamu akan menuntunmu melewati setiap aturan.',
        ],
        tips: [
          'Mulailah dari garis yang paling penuh: jumlahkan kelompok-kelompoknya beserta satu kotak kosong di antara setiap dua kelompok. Jika totalnya sama dengan panjang garis, seluruh garis sudah terpecahkan; jika hanya kurang satu atau dua kotak, kelompok yang lebih panjang sudah punya kotak yang pasti.',
          'Geser sebuah kelompok sejauh mungkin ke satu ujung, lalu ke ujung lainnya: kotak yang tertutup di kedua posisi itu pasti disulam. Angka 7 di garis sepanjang 10 kotak selalu mengisi empat kotak di tengahnya.',
          'Tusukan tepat di tepi papan adalah awal kelompok pertama: sulam seluruh kelompok dari situ, lalu beri silang tepat sesudahnya.',
          'Begitu sebuah garis terpecahkan, kotak kosongnya diberi silang — dan setiap silang memberi tahu garis yang memotongnya di mana kelompok tidak mungkin berada.',
          'Jangan menebak: tusukan yang salah mengurangi satu nyawa. Jika belum ada yang pasti di sebuah garis, kembalilah ke sana setelah mengerjakan garis-garis yang memotongnya.',
        ],
        alt: 'Nonogram kucing yang hampir terpecahkan: kotak tersulam merah delima, silang di kotak kosong',
      },
      screenshots: [
        'Burung hantu yang mulai terbentuk di nonogram, dengan silang di kotak kosong',
        'Adegan “Zodiak” di bingkai sulam, disulam figur demi figur',
        'Adegan “Kucing di jendela” dari dekat: burung layang-layang, kupu-kupu, kucing, dan gulungan benang',
        'Kalender: sulaman kecil untuk setiap hari dan landak untuk sebulan penuh',
        'Kain sulam tanpa akhir dengan motif tradisional warna-warni',
        'Koleksi bingkai sulam yang sudah selesai',
      ],
      features: [
        {
          title: 'Bingkai demi bingkai',
          text: 'Kucing di jendela, burung kaca patri, desa musim dingin, aula Asgard, Wild West, dan masih banyak lagi. Setiap bingkai yang selesai masuk ke koleksimu.',
        },
        {
          title: 'Sulaman yang terasa nyata',
          text: 'Setiap figur punya benang dan tusukannya sendiri, bayangan lembut di atas linen, serta suara jarum dan bingkai yang menenangkan.',
        },
        {
          title: 'Kalender sulaman harian',
          text: 'Setiap hari, sulaman kecil baru menantimu. Sulam sebulan penuh, dan figur besar bulan itu akan terbuka — hari yang terlewat tetap menunggumu.',
        },
        {
          title: 'Kain sulam tanpa akhir',
          text: 'Setelah adegan pertamamu selesai, terbukalah kain sulam bermotif tradisional: nonogram berwarna dengan dua atau tiga benang yang tak pernah habis.',
        },
        {
          title: 'Petunjuk untuk saat-saat sulit',
          text: 'Buka satu kotak, satu garis penuh, atau 10 kotak acak — dan bidal melindungimu dari kesalahan berikutnya.',
        },
        {
          title: 'Tanpa timer, tanpa buru-buru',
          text: 'Hadiah setiap hari, pencapaian dan papan peringkat Game Center di iPhone dan iPad, dan bisa dimainkan tanpa internet.',
        },
      ],
      supportNote: 'Kamu juga bisa menghubungi kami dari dalam game: Profil → Hubungi kami.',
    },
  },
};
