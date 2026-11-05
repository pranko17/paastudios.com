// Latvian translation of en.mjs and the Pixtangle texts in games.mjs.
export default {
  code: 'lv',
  hreflang: 'lv',
  name: 'Latviešu',
  ogLocale: 'lv_LV',
  ui: {
    skip: 'Pāriet uz saturu',
    navGames: 'Spēles',
    navContact: 'Kontakti',
    fineNoCookies: 'Šī vietne neizmanto sīkdatnes un izsekotājus.',
    fineTrademarks:
      'App Store ir Apple Inc. pakalpojuma zīme. Google Play un Google Play logotips ir Google LLC preču zīmes.',
    appStoreAlt: 'Lejupielādēt {name} no App Store',
    googlePlayAlt: 'Iegūt {name} pakalpojumā Google Play',
    comingSoon: 'Drīzumā: {stores}',
    storeAppStore: 'App Store',
    storeGooglePlay: 'Google Play',
    and: 'un',
    freeOn: 'Bez maksas {platforms}',
    howToPlay: 'Kā spēlēt',
    tips: 'Risināšanas knifi',
    faq: 'Jautājumi un atbildes',
    gallery: 'Tuvplānā',
    screenshots: 'Ekrānuzņēmumi',
    features: 'Kas tevi gaida',
    support: 'Atbalsts',
    supportText:
      'Jautājumi, idejas vai kaut kas nedarbojas? Raksti mums — mēs izlasām katru vēstuli.',
    supportPage: 'Atbalsta lapa',
    privacyPolicy: 'Privātuma politika',
    moreFrom: 'Citas {studio} spēles',
    language: 'Valoda',
    gameTitle: '{name} — {genre} | {studio}',
    studioEyebrow: 'Neatkarīga spēļu studija',
    ourGames: 'Mūsu spēles',
    howWeMake: 'Kā mēs tās veidojam',
    sayHello: 'Uzraksti mums',
    sayHelloText:
      'Jautājums, ideja, kļūda — vai vienkārši labs vārds. Raksti uz tās spēles adresi, kuru spēlē: mēs izlasām katru vēstuli.',
    discover: 'Iepazīsti {name}',
    docDescription: '{title}: {name}, studijas {studio} spēle.',
  },
  studio: {
    title: 'PAA Studios — mazas, mierīgas mīklu spēles',
    description:
      'PAA Studios veido mājīgas loģikas mīklas iPhone, iPad un Android ierīcēm: Pixtangle un Stitch Tales.',
    headline: 'Mazas, [mierīgas]\nmīklu spēles.',
    intro:
      'Mēs veidojam mājīgas loģikas mīklas iPhone, iPad un Android ierīcēm. Katra mīkla beidzas ar mazu attēlu — pikseļu mākslas dzīvnieciņu, izšūtu tauriņu —, un līdz tam nekad nav jāsteidzas.',
    principles: [
      {
        title: 'Darbojas bezsaistē',
        text: 'Savienojums nav vajadzīgs. Risini mīklas lidmašīnā, metro vai tur, kur nav tīkla pārklājuma vispār.',
      },
      {
        title: 'Bez kontiem',
        text: 'Atver spēli un spēlē. Bez reģistrācijas, bez pieteikšanās, bez e-pasta adreses, kas būtu jāatdod.',
      },
      {
        title: 'Tavs progress pieder tev',
        text: 'Tas glabājas tavā ierīcē, un tā rezerves kopija ir tavā iCloud vai Google kontā — mums nav serveru, uz kuriem to sūtīt.',
      },
    ],
  },
  games: {
    pixtangle: {
      genre: 'Shikaku loģikas mīkla',
      tagline: 'Sadali režģi. Vēro, kā uzplaukst pikseļu māksla.',
      summary:
        'Sadali lauku taisnstūros — katrs skaitlis ir sava taisnstūra izmērs. Aizpildi visu režģi, un mīkla uzplauks pikseļu attēlā tavai kolekcijai.',
      platforms: 'iPhone, iPad un Android ierīcēm',
      keywords: [
        'shikaku',
        'shikaku mīkla',
        'taisnstūru mīkla',
        'loģikas mīkla',
        'loģikas spēle',
        'skaitļu mīkla',
        'pikseļu māksla',
        'prāta spēles',
        'galvas lauzīšana',
        'spēle',
        'mobilā spēle',
        'mīklu spēle',
        'bezmaksas spēle',
        'spēle bez interneta',
      ],
      art: {
        alts: [
          'Lauks grūtības līmenī „Vidējs” risināšanas laikā',
          'Pabeigts pikseļu attēls „Sakura”',
          'Pikseļu attēlu kolekcija pa kategorijām',
        ],
      },
      rules: {
        intro:
          'Pixtangle pamatā ir shikaku — japāņu loģikas mīkla, ko risina ar zīmuli uz papīra un kas pazīstama arī ar angliskajiem nosaukumiem Rectangles un Divide by Squares. Lauks ir režģis, kura dažās rūtiņās ir skaitļi: sadali to taisnstūros tā, lai katra rūtiņa piederētu tieši vienam no tiem.',
        steps: [
          'Velc ar pirkstu pa lauku, lai uzzīmētu taisnstūri ap skaitli.',
          'Katrā taisnstūrī ir tieši viens skaitlis…',
          '…un šis skaitlis ir tā laukums rūtiņās.',
          'Pārklāj visu lauku, un parādīsies attēls.',
        ],
        notes: [
          'Kvadrāti arī ir taisnstūri: 4 var būt gan 2 × 2, gan 1 × 4.',
          'Jautājuma zīme ir nezināma izmēra taisnstūris: arī tajā ir tieši viena norāde, bet tā laukumu izvēlies tu.',
        ],
        tips: [
          'Sāc ar skaitļiem, kas ietilpst tikai vienā veidā: norāde, ko iespiež mala un kaimiņi, bieži atstāj vienu vienīgu formu.',
          'Pirmskaitlis — 2, 3, 5, 7 — var būt tikai taisna rūtiņu līnija: viena rinda vai viena kolonna.',
          'Meklē rūtiņas, līdz kurām sniedzas tikai viens skaitlis: tām jāietilpst šī skaitļa taisnstūrī.',
          'Lieliem skaitļiem stūros un gar malām ir maz vietas — izmēģini tos laikus.',
          'Iestrēgi? Padoms parāda vienu pareizu taisnstūri, un tālāk turpini pats.',
        ],
        alt: 'Pixtangle lauks no sešām reiz sešām rūtiņām: pasteļkrāsu taisnstūri ar skaitļiem, viens no tiem tiek zīmēts',
      },
      screenshots: [
        'Lauks grūtības līmenī „Vidējs” risināšanas laikā',
        'Sakuras lauks pirms pirmā taisnstūra',
        'Pabeigts pikseļu attēls „Sakura”',
        'Pikseļu attēlu kolekcijas pa kategorijām',
        'Dienas izaicinājuma kalendārs',
        'Maratona skrējiens: lauks pēc lauka pret pulksteni',
        'Klasisko līmeņu sešas grūtības pakāpes',
      ],
      features: [
        {
          title: '270+ pikseļu attēli',
          text: 'Desmit kategorijas — no dzīvniekiem līdz kosmosam. Katrs attēls ir lauks attēla formā: atrisini to, lai to izkrāsotu.',
        },
        {
          title: 'Katru dienu jauns izaicinājums',
          text: 'Unikālas formas dienas lauks. Uzturi sēriju, un balvas būs lielākas.',
        },
        {
          title: 'Sešas grūtības pakāpes',
          text: 'Bezgalīgi klasiskie līmeņi — no ātras iesildīšanās līdz galvu lauzošiem laukiem līmenī „Ārprāts”, kā arī Meistara ceļa attēli par tavām uzvarām.',
        },
        {
          title: 'Retumu medības',
          text: 'No parastiem līdz leģendāriem: pabeidz visu kategoriju, lai atbloķētu tās retāko attēlu.',
        },
        {
          title: 'Sasniegumi un līderu saraksti',
          text: 'Game Center iPhone un iPad ierīcēs: desmitiem sasniegumu un iknedēļas līderu saraksti, kuros kāpt arvien augstāk.',
        },
        {
          title: 'Radīta atpūtai',
          text: 'Tumšā un gaišā tēma, maigas skaņas un vibrācija. Bez konta, darbojas pilnībā bezsaistē.',
        },
      ],
      faq: [
        {
          q: 'Kas ir shikaku?',
          a: 'Loģikas mīkla no Japānas: režģis jāsadala taisnstūros tā, lai katrā būtu viens skaitlis, kas vienāds ar tā laukumu. Angliski to sauc arī par Rectangles vai Divide by Squares.',
        },
        {
          q: 'Vai Pixtangle ir bez maksas?',
          a: 'Jā. Pixtangle ir bez maksas iPhone, iPad un Android ierīcēs, ar reklāmām un neobligātiem pirkumiem lietotnē — starp tiem ir komplekts, kas izslēdz reklāmas starp līmeņiem.',
        },
        {
          q: 'Vai var spēlēt bezsaistē?',
          a: 'Jā. Konts nav vajadzīgs, un spēlēt var bez interneta; progress glabājas ierīcē un tiek saglabāts kopā ar tālruņa rezerves kopiju.',
        },
        {
          q: 'Cik grūti kļūst?',
          a: 'Sešas grūtības pakāpes ved no maziem laukiem līmenī „Viegls” līdz lieliem laukiem līmenī „Ārprāts”, kas pilni ar jautājuma zīmju norādēm, — turklāt katru dienu ir jauns dienas izaicinājums un Maratons pret pulksteni.',
        },
      ],
    },
    'stitch-tales': {
      genre: 'Nonogramma krustdūrienā',
      tagline: 'Katra mīkla ir dūriens lielākā attēlā.',
      summary:
        'Lasi skaitļus pie rindām un kolonnām, izšuj pareizās rūtiņas — un katra atrisinātā nonogramma tiks iešūta ainā tavā riņķī.',
      platforms: 'iPhone, iPad un Android ierīcēm',
      keywords: [
        'nonogramma',
        'nonogrammas',
        'japāņu krustvārdu mīkla',
        'picross',
        'griddlers',
        'krustdūriens',
        'izšūšana',
        'izšuvums',
        'loģikas mīkla',
        'loģikas spēle',
        'skaitļu mīkla',
        'pikseļu māksla',
        'spēle',
        'mobilā spēle',
        'mīklu spēle',
        'bezmaksas spēle',
        'spēle bez interneta',
      ],
      art: {
        alt: 'Izšūšanas riņķis ar izšūtu ziedu pļavu: tauriņš, saule, ziedi un mušmire, kas vēl jāizšuj',
      },
      rules: {
        steps: [
          'Skaitļi pie katras rindas un kolonnas ir aizpildīto rūtiņu grupas pēc kārtas.',
          'Izšuj rūtiņas, kurām jābūt aizpildītām; tās, kas paliek tukšas, atzīmē ar krustiņu.',
          'Uzmanīgi — nepareizs dūriens atņem vienu no tavām izšūtajām sirdīm.',
          'Atrisini režģi, un figūra tiks iešūta ainā tavā riņķī.',
        ],
        alt: 'Gandrīz atrisināta nonogramma ar kaķi: granātsarkanā diegā izšūtas rūtiņas, tukšajās — krustiņi',
      },
      features: [
        {
          title: 'Ainas izšūšanai',
          text: 'Ziedu pļava, Stounhendža, augļu pikniks, Saules sistēma, japāņu dārzs, leļļu māja, ziemas ciems, jūras dibens — un vēl daudz kas.',
        },
        {
          title: 'Īsti izšūšanas dūrieni',
          text: 'Gludums, ķēdīšu dūriens, zivs asaku dūriens un franču mezgliņi — katra figūra izšūta ar savu diegu un savā faktūrā.',
        },
        {
          title: 'Bezgalīgs rakstu dvielis',
          text: 'Pēc pirmās ainas atveras rakstu dvielis ar tautas rakstiem — un tā raksti nekad nebeidzas.',
        },
        {
          title: 'Padomi, kad netiec tālāk',
          text: 'Atklāj vienu rūtiņu vai veselu līniju — un izšuj tālāk.',
        },
        {
          title: 'Dāvana katru dienu',
          text: 'Nāc katru dienu pēc balvas, kas aug līdz ar tavu sēriju.',
        },
        {
          title: 'Saudzīgi acīm',
          text: 'Maigas lina krāsas, klusas dūrienu skaņas, nav vajadzīgs ne konts, ne internets.',
        },
      ],
      supportNote: 'Mums var rakstīt arī no spēles: Profils → Sazināties ar mums.',
    },
  },
};
