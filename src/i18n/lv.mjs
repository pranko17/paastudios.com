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
    madeFor: 'Spēle {platforms}',
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
        alts: [
          'Pūce, kas veidojas nonogrammā, tukšajās rūtiņās — krustiņi',
          'Aina „Zodiaks” riņķī, izšūta figūru pēc figūras',
          'Ainas „Kaķis pie loga” tuvplāns: bezdelīgas, tauriņš, kaķis un dziju kamols',
        ],
      },
      cardArt: {
        alt: 'Spēlē pabeigtas izšūšanas stīpas: priekšā “Kaķis pie loga”, aiz tā “Vitrāžu putni” un “Saules sistēma”, blakus adata ar granātsarkanu diegu',
      },
      rules: {
        intro:
          'Stitch Tales pamatā ir nonogrammas — loģikas mīklas, kas atklāj attēlu. Tās ir pazīstamas arī kā japāņu krustvārdu mīklas, griddlers vai hanjie. Skaitļi pie rindām un virs kolonnām norāda, kuras rūtiņas jāaizpilda; aizpildi pareizās, un parādīsies slēpts attēls — šeit tā ir figūra, kas tiek iešūta ainā tavā riņķī.',
        steps: [
          'Skaitļi pie rindas vai virs kolonnas norāda, cik rūtiņas pēc kārtas jāizšuj un kādā secībā.',
          'Starp divām grupām vienmēr ir vismaz viena tukša rūtiņa — atzīmē to ar krustiņu.',
          'Velc ar pirkstu, un diegs sekos tam pa rūtiņām.',
          'Nepareizs dūriens atņem vienu no tavām trim dzīvībām, tāpēc nesteidzies.',
          'Atrisini režģi, un figūra tiks iešūta ainā tavā riņķī.',
        ],
        notes: [
          'Skaitļus virs kolonnas lasi no augšas uz leju, bet pie rindas — no kreisās uz labo.',
          'Rakstu dvielī katram skaitlim ir sava diega krāsa: dažādu krāsu grupas drīkst saskarties, bet vienas krāsas grupas vienmēr šķir tukša rūtiņa.',
          'Pirmā figūra tevi iepazīstinās ar visiem noteikumiem.',
        ],
        tips: [
          'Sāc ar pilnākajām līnijām: saskaiti grupas un pieskaiti pa vienai tukšai rūtiņai starp katrām divām. Ja summa ir vienāda ar līnijas garumu, visa līnija ir atrisināta; ja pietrūkst tikai vienas vai divu rūtiņu, garākajās grupās jau ir droši zināmas rūtiņas.',
          'Pabīdi grupu, cik tālu var, uz vienu līnijas galu un tad uz otru: rūtiņas, ko tā nosedz abas reizes, vienmēr jāizšuj. 10 rūtiņu līnijā 7 vienmēr aizpilda četras vidējās rūtiņas.',
          'Dūriens pašā režģa malā ir pirmās grupas sākums: izšuj no tā visu grupu un aiz tās ieliec krustiņu.',
          'Kad līnija atrisināta, tās tukšās rūtiņas saņem krustiņus — un katrs krustiņš parāda līnijām, kas to šķērso, kur grupa nevar atrasties.',
          'Nemini uz labu laimi: nepareizs dūriens atņem dzīvību. Ja līnijā vēl nekas nav skaidrs, atgriezies pie tās pēc līnijām, kas to šķērso.',
        ],
        alt: 'Gandrīz atrisināta nonogramma ar kaķi: granātsarkanā diegā izšūtas rūtiņas, tukšajās — krustiņi',
      },
      screenshots: [
        'Pūce, kas veidojas nonogrammā, tukšajās rūtiņās — krustiņi',
        'Aina „Zodiaks” riņķī, izšūta figūru pēc figūras',
        'Ainas „Kaķis pie loga” tuvplāns: bezdelīgas, tauriņš, kaķis un dziju kamols',
        'Kalendārs: mazs izšuvums katrai dienai un ezis visam mēnesim',
        'Bezgalīgais rakstu dvielis ar krāsainiem tautas rakstiem',
        'Pabeigto riņķu kolekcija',
      ],
      features: [
        {
          title: 'Riņķis pēc riņķa',
          text: 'Kaķis pie loga, vitrāžu putni, ziemas ciems, Asgarda zāles, Mežonīgie Rietumi un vēl daudz kas. Katrs pabeigtais riņķis nonāk tavā kolekcijā.',
        },
        {
          title: 'Gluži kā īsts izšuvums',
          text: 'Katrai figūrai ir savi diegi un dūrieni, uz lina krīt maigas ēnas, un klusi skan adata un riņķis.',
        },
        {
          title: 'Ikdienas dūrienu kalendārs',
          text: 'Katru dienu gaida mazs izšuvums. Izšuj visas mēneša dienas, un atvērsies tā lielā figūra — izlaistās dienas tevi pagaidīs.',
        },
        {
          title: 'Bezgalīgs rakstu dvielis',
          text: 'Pēc pirmās pabeigtās ainas atveras rakstu dvielis ar tautas rakstiem: krāsainas nonogrammas ar diviem vai trim diegiem, kas nekad nebeidzas.',
        },
        {
          title: 'Padomi grūtiem brīžiem',
          text: 'Atklāj rūtiņu, veselu līniju vai 10 nejaušas rūtiņas — un uzpirkstenis pasargās no nākamās kļūdas.',
        },
        {
          title: 'Bez taimera, bez steigas',
          text: 'Dāvana katru dienu, Game Center sasniegumi un līderu saraksti iPhone un iPad ierīcēs, un spēlēšanai nav vajadzīgs internets.',
        },
      ],
      supportNote: 'Mums var rakstīt arī no spēles: Profils → Sazināties ar mums.',
    },
  },
};
