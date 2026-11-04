// Polish translation of en.mjs and the Pixtangle texts in games.mjs.
export default {
  code: 'pl',
  hreflang: 'pl',
  name: 'Polski',
  ogLocale: 'pl_PL',
  ui: {
    skip: 'Przejdź do treści',
    navGames: 'Gry',
    navContact: 'Kontakt',
    fineNoCookies: 'Ta strona nie zapisuje plików cookie i nie używa narzędzi śledzących.',
    fineTrademarks:
      'App Store jest znakiem usługowym Apple Inc. Google Play i logo Google Play są znakami towarowymi Google LLC.',
    appStoreAlt: 'Pobierz {name} z App Store',
    googlePlayAlt: 'Pobierz {name} z Google Play',
    comingSoon: 'Wkrótce w {stores}',
    storeAppStore: 'App Store',
    storeGooglePlay: 'Google Play',
    and: 'i',
    freeOn: 'Za darmo na {platforms}',
    howToPlay: 'Jak grać',
    tips: 'Wskazówki do rozwiązywania',
    faq: 'Pytania i odpowiedzi',
    gallery: 'Z bliska',
    screenshots: 'Zrzuty ekranu',
    features: 'Co w środku',
    support: 'Pomoc',
    supportText:
      'Masz pytanie, pomysł albo coś nie działa? Napisz do nas — czytamy każdą wiadomość.',
    supportPage: 'Strona pomocy',
    privacyPolicy: 'Polityka prywatności',
    moreFrom: 'Inne gry {studio}',
    language: 'Język',
    gameTitle: '{name} — {genre} | {studio}',
    studioEyebrow: 'Niezależne studio gier',
    ourGames: 'Nasze gry',
    howWeMake: 'Jak je tworzymy',
    sayHello: 'Odezwij się',
    sayHelloText:
      'Pytanie, pomysł, błąd — albo po prostu miłe słowo. Napisz na adres gry, w którą grasz — czytamy każdą wiadomość.',
    discover: 'Poznaj {name}',
    docDescription: '{title}: {name}, gra od {studio}.',
  },
  studio: {
    title: 'PAA Studios — małe, spokojne łamigłówki',
    description:
      'PAA Studios tworzy przytulne łamigłówki logiczne na iPhone’a, iPada i Androida: Pixtangle i Stitch Tales.',
    headline: 'Małe, [spokojne]\nłamigłówki.',
    intro:
      'Tworzymy przytulne łamigłówki logiczne na iPhone’a, iPada i Androida. Każda kończy się małym obrazkiem — zwierzakiem w stylu pixel art, wyhaftowanym motylem — i nigdy nie trzeba się do niego spieszyć.',
    principles: [
      {
        title: 'Działa offline',
        text: 'Internet nie jest potrzebny. Rozwiązuj w samolocie, w metrze albo tam, gdzie nie ma zasięgu.',
      },
      {
        title: 'Bez kont',
        text: 'Otwórz grę i graj. Bez rejestracji, bez logowania, bez podawania adresu e-mail.',
      },
      {
        title: 'Twój postęp należy do ciebie',
        text: 'Zostaje na twoim urządzeniu, a jego kopia zapasowa trafia na twoje konto iCloud lub Google — nie mamy serwerów, na które moglibyśmy go wysyłać.',
      },
    ],
  },
  games: {
    pixtangle: {
      genre: 'Łamigłówka logiczna shikaku',
      tagline: 'Potnij planszę. Patrz, jak rozkwita pixel art.',
      summary:
        'Podziel planszę na prostokąty — każda liczba to rozmiar jej własnego prostokąta. Wypełnij całą planszę, a łamigłówka rozkwitnie obrazkiem pixel art do twojej kolekcji.',
      platforms: 'iPhone, iPad i Android',
      keywords: [
        'shikaku',
        'łamigłówka shikaku',
        'łamigłówka z prostokątami',
        'łamigłówka logiczna',
        'gra logiczna',
        'łamigłówka liczbowa',
        'pixel art',
        'zagadki logiczne',
        'gry na myślenie',
        'gra',
        'gra mobilna',
        'darmowa gra',
        'gra offline',
      ],
      art: {
        alts: [
          'Plansza na poziomie Średni w trakcie rozwiązywania',
          'Gotowy obrazek pixel art „Sakura”',
          'Kolekcja obrazków pixel art według kategorii',
        ],
      },
      rules: {
        intro:
          'Pixtangle opiera się na shikaku — japońskiej łamigłówce logicznej na papier i ołówek, znanej też pod angielskimi nazwami Rectangles i Divide by Squares. Plansza to siatka z liczbami w niektórych komórkach: podziel ją na prostokąty tak, aby każda komórka należała do dokładnie jednego z nich.',
        steps: [
          'Przeciągnij palcem po planszy, aby narysować prostokąt wokół liczby.',
          'Każdy prostokąt zawiera dokładnie jedną liczbę…',
          '…a ta liczba to jego pole w komórkach.',
          'Wypełnij całą planszę, a pojawi się obrazek.',
        ],
        notes: [
          'Kwadraty też są prostokątami: 4 może mieć wymiary 2 × 2, ale i 1 × 4.',
          'Znak zapytania to prostokąt o nieznanym rozmiarze: też zawiera dokładnie jeden znak, ale jego pole wybierasz ty.',
        ],
        tips: [
          'Zacznij od liczb, które mieszczą się tylko na jeden sposób: liczba ściśnięta między krawędzią a sąsiadami często zostawia jeden możliwy kształt.',
          'Liczba pierwsza — 2, 3, 5, 7 — może być tylko prostą linią komórek: jednym wierszem albo jedną kolumną.',
          'Szukaj komórek, do których sięga tylko jedna liczba: muszą należeć do jej prostokąta.',
          'Duże liczby w rogach i przy krawędziach mają mało miejsca — sprawdzaj je wcześnie.',
          'Nie wiesz, co dalej? Podpowiedź podświetli jeden poprawny prostokąt, a dalej pójdziesz sam.',
        ],
        alt: 'Plansza Pixtangle sześć na sześć: pastelowe prostokąty z liczbami, jeden właśnie rysowany',
      },
      screenshots: [
        'Plansza na poziomie Średni w trakcie rozwiązywania',
        'Plansza sakury przed pierwszym prostokątem',
        'Gotowy obrazek pixel art „Sakura”',
        'Kolekcje obrazków pixel art według kategorii',
        'Kalendarz codziennego wyzwania',
        'Bieg w Maratonie: plansze na czas',
        'Sześć poziomów trudności klasycznych plansz',
      ],
      features: [
        {
          title: '270+ pixel artów',
          text: 'Dziesięć kategorii, od zwierząt po kosmos. Każdy obrazek to plansza w jego kształcie — rozwiąż ją, aby go pokolorować.',
        },
        {
          title: 'Nowe wyzwanie każdego dnia',
          text: 'Codzienna plansza o niepowtarzalnym kształcie. Podtrzymuj serię, by zdobywać większe nagrody.',
        },
        {
          title: 'Sześć poziomów trudności',
          text: 'Nieskończone klasyczne plansze, od szybkiej rozgrzewki po łamigłówki na poziomie Szalony, a do tego obrazki z Drogi mistrza za twoje zwycięstwa.',
        },
        {
          title: 'Polowanie na rzadkości',
          text: 'Od zwykłych po legendarne: ukończ całą kategorię, aby odblokować jej najrzadszy obrazek.',
        },
        {
          title: 'Osiągnięcia i rankingi',
          text: 'Game Center na iPhonie i iPadzie: dziesiątki osiągnięć i cotygodniowe rankingi do zdobywania.',
        },
        {
          title: 'Stworzona do relaksu',
          text: 'Ciemny i jasny motyw, łagodne dźwięki i wibracje. Bez konta, działa całkowicie offline.',
        },
      ],
      faq: [
        {
          q: 'Czym jest shikaku?',
          a: 'To łamigłówka logiczna z Japonii: podziel siatkę na prostokąty tak, aby każdy zawierał jedną liczbę równą jego polu. Nazywa się ją też Rectangles lub Divide by Squares.',
        },
        {
          q: 'Czy Pixtangle jest darmowa?',
          a: 'Tak. Pixtangle jest darmowa na iPhone, iPad i Android, z reklamami i opcjonalnymi zakupami w aplikacji — w tym z pakietem, który wyłącza reklamy między poziomami.',
        },
        {
          q: 'Czy działa offline?',
          a: 'Tak. Nie potrzebujesz konta i możesz grać bez internetu; postęp zostaje na urządzeniu i trafia do kopii zapasowej telefonu.',
        },
        {
          q: 'Jak trudno może być?',
          a: 'Sześć poziomów trudności prowadzi od małych plansz na poziomie Łatwy po duże plansze na poziomie Szalony, pełne znaków zapytania, a do tego codzienne wyzwanie, nowe każdego dnia, i Maraton na czas.',
        },
      ],
    },
    'stitch-tales': {
      genre: 'Haftowane obrazki logiczne',
      tagline: 'Każda łamigłówka to ścieg w większym obrazie.',
      summary:
        'Czytaj liczby przy wierszach i kolumnach, haftuj właściwe pola — a każdy rozwiązany obrazek logiczny zostanie wyhaftowany w scenie na twoim tamborku.',
      platforms: 'iPhone, iPad i Android',
      keywords: [
        'obrazki logiczne',
        'obrazek logiczny',
        'nonogram',
        'nonogramy',
        'picross',
        'japońskie krzyżówki',
        'haft krzyżykowy',
        'haft',
        'łamigłówka logiczna',
        'gra logiczna',
        'gry na myślenie',
        'gra',
        'gra mobilna',
        'darmowa gra',
        'gra offline',
      ],
      art: {
        alt: 'Tamborek z wyhaftowaną łąką: motyl, słońce, kwiaty i muchomor, który dopiero czeka na wyhaftowanie',
      },
      rules: {
        steps: [
          'Liczby przy każdym wierszu i kolumnie mówią, ile pól pod rząd wyhaftować w kolejnych odcinkach.',
          'Haftuj pola, które muszą być wypełnione, a te, które zostają puste, oznaczaj krzyżykiem.',
          'Uważaj — błędny ścieg kosztuje życie, jedno z wyhaftowanych serc.',
          'Rozwiąż planszę, a figura zostanie wyhaftowana w scenie na twoim tamborku.',
        ],
        alt: 'Prawie rozwiązany obrazek logiczny z kotem: pola wyhaftowane bordową nicią, krzyżyki w pustych',
      },
      features: [
        {
          title: 'Sceny do wyhaftowania',
          text: 'Kwitnąca łąka, Stonehenge, owocowy piknik, Układ Słoneczny, ogród japoński, domek dla lalek, zimowa wioska, dno morskie… i nie tylko.',
        },
        {
          title: 'Prawdziwe ściegi hafciarskie',
          text: 'Ścieg atłaskowy, łańcuszkowy, rybia ość i supełki francuskie — każda figura jest wyszyta własną nicią i ma własną fakturę.',
        },
        {
          title: 'Nieskończony wzornik',
          text: 'Po pierwszej scenie otwiera się wzornik z ludowymi motywami — a jego wzory nigdy się nie kończą.',
        },
        {
          title: 'Podpowiedzi, gdy utkniesz',
          text: 'Odkryj jedno pole albo całą linię i haftuj dalej.',
        },
        {
          title: 'Prezent każdego dnia',
          text: 'Wracaj codziennie po nagrodę, która rośnie razem z serią.',
        },
        {
          title: 'Przyjazna dla oczu',
          text: 'Łagodne lniane barwy, ciche dźwięki haftowania. Bez konta i bez internetu.',
        },
      ],
      supportNote: 'Możesz też napisać do nas z gry: „Profil” → „Napisz do nas”.',
    },
  },
};
