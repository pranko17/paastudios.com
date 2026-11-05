// Hungarian translation of en.mjs and the Pixtangle texts in games.mjs.
export default {
  code: 'hu',
  hreflang: 'hu',
  name: 'Magyar',
  ogLocale: 'hu_HU',
  ui: {
    skip: 'Ugrás a tartalomra',
    navGames: 'Játékok',
    navContact: 'Kapcsolat',
    fineNoCookies: 'Ez az oldal nem használ sütiket és nyomkövetőket.',
    fineTrademarks:
      'Az App Store az Apple Inc. szolgáltatási védjegye. A Google Play és a Google Play-logó a Google LLC védjegyei.',
    appStoreAlt: '{name} letöltése az App Store-ból',
    googlePlayAlt: '{name} letöltése a Google Playről',
    comingSoon: 'Hamarosan {stores}',
    storeAppStore: 'az App Store-ban',
    storeGooglePlay: 'a Google Playen',
    and: 'és',
    freeOn: 'Ingyenes {platforms} eszközökre',
    howToPlay: 'Így játssz',
    tips: 'Tanácsok a megoldáshoz',
    faq: 'Kérdések és válaszok',
    gallery: 'Közelebbről',
    screenshots: 'Képernyőképek',
    features: 'Mi vár rád',
    support: 'Támogatás',
    supportText:
      'Kérdésed, ötleted van, vagy valami nem működik? Írj nekünk – minden üzenetet elolvasunk.',
    supportPage: 'Támogatási oldal',
    privacyPolicy: 'Adatvédelmi szabályzat',
    moreFrom: 'A {studio} további játékai',
    language: 'Nyelv',
    gameTitle: '{name} — {genre} | {studio}',
    studioEyebrow: 'Független játékstúdió',
    ourGames: 'Játékaink',
    howWeMake: 'Hogyan készülnek',
    sayHello: 'Írj nekünk',
    sayHelloText:
      'Kérdés, ötlet, egy hiba – vagy csak egy kedves szó. Annak a játéknak írj, amellyel játszol: minden üzenetet elolvasunk.',
    discover: 'Fedezd fel: {name}',
    docDescription: '{title} – {name}, a {studio} játéka.',
  },
  studio: {
    title: 'PAA Studios – kis, nyugodt fejtörő játékok',
    description:
      'A PAA Studios hangulatos logikai fejtörőket készít iPhone-ra, iPadre és Androidra: a Pixtangle és a Stitch Tales.',
    headline: 'Kis, [nyugodt]\nfejtörő játékok.',
    intro:
      'Hangulatos logikai fejtörőket készítünk iPhone-ra, iPadre és Androidra. Minden fejtörő egy kis képpel zárul – egy állatot ábrázoló pixelképpel, egy kihímzett pillangóval –, és odáig sosem kell sietned.',
    principles: [
      {
        title: 'Offline is működik',
        text: 'Nem kell hozzá internet. Fejtörőzz repülőn, metrón vagy ott, ahol egyáltalán nincs térerő.',
      },
      {
        title: 'Nincs fiók',
        text: 'Nyisd meg a játékot, és játssz. Nincs regisztráció, nincs bejelentkezés, és az e-mail-címedet sem kell megadnod.',
      },
      {
        title: 'A haladásod a tiéd',
        text: 'A készülékeden marad, a biztonsági mentés pedig a saját iCloud- vagy Google-fiókodba kerül – nincsenek szervereink, ahová elküldhetnénk.',
      },
    ],
  },
  games: {
    pixtangle: {
      genre: 'Shikaku logikai fejtörő',
      tagline: 'Szeleteld fel a rácsot. Nézd, ahogy kivirágzik a pixelkép.',
      summary:
        'Oszd fel a táblát téglalapokra – minden szám a saját téglalapja méretét adja meg. Töltsd ki az egész rácsot, és a fejtörő pixelképpé virágzik a gyűjteményedben.',
      platforms: 'iPhone, iPad és Android',
      keywords: [
        'shikaku',
        'shikaku fejtörő',
        'téglalapos rejtvény',
        'logikai játék',
        'logikai rejtvény',
        'számrejtvény',
        'pixelkép',
        'pixel art',
        'agytorna',
        'játék',
        'mobiljáték',
        'fejtörő játék',
        'ingyenes játék',
        'offline játék',
        'játék internet nélkül',
      ],
      art: {
        alts: [
          'Közepes nehézségű tábla félkész téglalapokkal',
          'A kész „Cseresznyevirág” pixelkép',
          'A pixelképek gyűjteménye kategóriánként',
        ],
      },
      rules: {
        intro:
          'A Pixtangle alapja a shikaku, egy papírra és ceruzára szánt japán logikai rejtvény, amelyet angolul Rectangles vagy Divide by Squares néven is ismernek. A tábla egy rács, amelynek néhány cellájában számok állnak: oszd fel téglalapokra úgy, hogy minden cella pontosan egy téglalaphoz tartozzon.',
        steps: [
          'Húzd végig az ujjad a táblán, hogy téglalapot rajzolj egy szám köré.',
          'Minden téglalapban pontosan egy szám van…',
          '…és ez a szám a téglalap területe cellákban.',
          'Fedd le az egész táblát, és előtűnik a kép.',
        ],
        notes: [
          'A négyzetek is téglalapnak számítanak: a 4 lehet 2 × 2 és 1 × 4 is.',
          'A kérdőjel ismeretlen méretű téglalapot jelöl: ebben is pontosan egy jel áll, de a területét te választod meg.',
        ],
        tips: [
          'Kezdd azokkal a számokkal, amelyek csak egyféleképpen férnek el: a tábla széle és a szomszédai közé szorult szám gyakran csak egyetlen alakot enged.',
          'A prímszám – 2, 3, 5, 7 – csak egyenes cellasor lehet: egyetlen sor vagy egyetlen oszlop.',
          'Keresd azokat a cellákat, amelyeket csak egy szám ér el: ezek biztosan annak a számnak a téglalapjához tartoznak.',
          'A sarkokban és a szélek mentén álló nagy számoknak kevés helyük van – próbáld ki őket korán.',
          'Elakadtál? Egy tipp megmutat egy helyes téglalapot, és onnan folytathatod.',
        ],
        alt: 'Hatszor hatos Pixtangle-tábla: pasztellszínű téglalapok számokkal, az egyiket éppen rajzolják',
      },
      screenshots: [
        'Közepes nehézségű tábla félkész téglalapokkal',
        'A cseresznyevirág táblája az első téglalap előtt',
        'A kész „Cseresznyevirág” pixelkép',
        'Pixelkép-gyűjtemények kategóriánként',
        'A napi kihívás naptára',
        'Maraton-futam: tábla tábla után az idő ellen',
        'A klasszikus pályák hat nehézségi szintje',
      ],
      features: [
        {
          title: '270+ pixelkép',
          text: 'Tíz kategória, az állatoktól a világűrig. Minden kép egy a formájára szabott tábla – oldd meg, és kiszínezheted.',
        },
        {
          title: 'Minden nap új kihívás',
          text: 'Egyedi formájú napi tábla. Tartsd életben a sorozatodat a nagyobb jutalmakért.',
        },
        {
          title: 'Hat nehézségi szint',
          text: 'Végtelen klasszikus pályák a gyors bemelegítéstől az Őrült szintű agytornáig, a győzelmeidért pedig Mesterösvény-képek járnak.',
        },
        {
          title: 'Ritkaságvadászat',
          text: 'A gyakoritól a legendásig: teljesíts egy egész kategóriát, és megnyílik a legritkább képe.',
        },
        {
          title: 'Teljesítmények és ranglisták',
          text: 'Game Center iPhone-on és iPaden: több tucat teljesítmény és heti ranglisták, amelyeken egyre feljebb léphetsz.',
        },
        {
          title: 'Pihenésre tervezve',
          text: 'Sötét és világos téma, finom hangok és rezgés. Nincs fiók, teljesen offline működik.',
        },
      ],
      faq: [
        {
          q: 'Mi az a shikaku?',
          a: 'Japán logikai rejtvény: a rácsot úgy kell téglalapokra osztani, hogy mindegyikben egyetlen szám legyen, amely megegyezik a területével. Angolul Rectangles vagy Divide by Squares néven is ismert.',
        },
        {
          q: 'Ingyenes a Pixtangle?',
          a: 'Igen. A Pixtangle ingyenes iPhone-on, iPaden és Androidon, reklámokkal és választható alkalmazáson belüli vásárlásokkal – köztük egy csomaggal, amely kikapcsolja a pályák közötti reklámokat.',
        },
        {
          q: 'Működik offline?',
          a: 'Igen. Nem kell fiók, és internet nélkül is játszhatsz; a haladásod a készülékeden marad, és a telefonod biztonsági mentésével együtt mentődik.',
        },
        {
          q: 'Mennyire nehéz?',
          a: 'Hat nehézségi szint vezet a kis Könnyű tábláktól a kérdőjelekkel teli nagy Őrült táblákig, emellett minden nap új napi kihívás és időre menő Maraton is vár.',
        },
      ],
    },
    'stitch-tales': {
      genre: 'Keresztszemes nonogram',
      tagline: 'Minden fejtörő egy öltés egy nagyobb képen.',
      summary:
        'Olvasd le a számokat a sorok és oszlopok mellett, hímezd ki a megfelelő cellákat – és minden megoldott nonogram belehímződik egy jelenetbe a hímzőkereteden.',
      platforms: 'iPhone, iPad és Android',
      keywords: [
        'nonogram',
        'japán rejtvény',
        'japán keresztrejtvény',
        'képrejtvény',
        'picross',
        'griddlers',
        'keresztszemes hímzés',
        'hímzés',
        'logikai játék',
        'logikai rejtvény',
        'számrejtvény',
        'pixelkép',
        'játék',
        'mobiljáték',
        'fejtörő játék',
        'ingyenes játék',
        'offline játék',
      ],
      art: {
        alt: 'Hímzőkeret kihímzett réttel: pillangó, nap, virágok és egy légyölő galóca, amelyet még ki kell hímezni',
      },
      rules: {
        steps: [
          'Az egyes sorok és oszlopok melletti számok sorrendben a kitöltött cellák egybefüggő szakaszait adják meg.',
          'Hímezd ki a kitöltendő cellákat, az üresen maradókat pedig jelöld kereszttel.',
          'Vigyázz – egy rossz öltésért elveszítesz egy életet, az egyik kihímzett szívet.',
          'Oldd meg a rácsot, és a figura belehímződik a jelenetbe a hímzőkereteden.',
        ],
        alt: 'Majdnem megoldott nonogram egy macskával: gránátpiros öltésekkel kihímzett cellák, az üresekben keresztek',
      },
      features: [
        {
          title: 'Kihímezhető jelenetek',
          text: 'Virágos rét, Stonehenge, gyümölcspiknik, a Naprendszer, japánkert, babaház, téli falu, a tenger mélye – és még sok más.',
        },
        {
          title: 'Igazi hímzőöltések',
          text: 'Laposöltés, láncöltés, halszálkaöltés és francia csomó – minden figura saját fonallal és saját textúrával készül.',
        },
        {
          title: 'Végtelen mintakendő',
          text: 'Az első jeleneted után megnyílik egy népi mintákkal teli mintakendő – és a mintái sosem fogynak el.',
        },
        {
          title: 'Tippek, ha elakadsz',
          text: 'Fedj fel egyetlen cellát vagy egy egész vonalat, és hímezz tovább.',
        },
        {
          title: 'Ajándék minden nap',
          text: 'Gyere vissza minden nap egy jutalomért, amely a sorozatoddal együtt nő.',
        },
        {
          title: 'Kíméli a szemet',
          text: 'Lágy lenvászon színek, halk öltéshangok, nem kell hozzá se fiók, se internet.',
        },
      ],
      supportNote: 'A játékból is elérsz minket: Profil → Írj nekünk.',
    },
  },
};
