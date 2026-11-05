// Czech translation of en.mjs and the Pixtangle texts in games.mjs.
export default {
  code: 'cs',
  hreflang: 'cs',
  name: 'Čeština',
  ogLocale: 'cs_CZ',
  ui: {
    skip: 'Přejít na obsah',
    navGames: 'Hry',
    navContact: 'Kontakt',
    fineNoCookies: 'Tento web nepoužívá cookies ani sledovací nástroje.',
    fineTrademarks:
      'App Store je servisní známka společnosti Apple Inc. Google Play a logo Google Play jsou ochranné známky společnosti Google LLC.',
    appStoreAlt: 'Stáhnout {name} v App Storu',
    googlePlayAlt: 'Stáhnout {name} na Google Play',
    comingSoon: 'Již brzy {stores}',
    storeAppStore: 'v App Storu',
    storeGooglePlay: 'na Google Play',
    and: 'a',
    freeOn: 'Zdarma pro {platforms}',
    howToPlay: 'Jak hrát',
    tips: 'Tipy k řešení',
    faq: 'Otázky a odpovědi',
    gallery: 'Zblízka',
    screenshots: 'Snímky obrazovky',
    features: 'Co najdeš uvnitř',
    support: 'Podpora',
    supportText: 'Máš otázku, nápad nebo ti něco nefunguje? Napiš nám — čteme každou zprávu.',
    supportPage: 'Stránka podpory',
    privacyPolicy: 'Zásady ochrany osobních údajů',
    moreFrom: 'Další hry od {studio}',
    language: 'Jazyk',
    gameTitle: '{name} — {genre} | {studio}',
    studioEyebrow: 'Nezávislé herní studio',
    ourGames: 'Naše hry',
    howWeMake: 'Jak je děláme',
    sayHello: 'Napiš nám',
    sayHelloText:
      'Otázka, nápad, chyba — nebo jen milé slovo. Napiš na adresu hry, kterou hraješ: čteme každou zprávu.',
    discover: 'Objev {name}',
    docDescription: '{title} hry {name} od {studio}.',
  },
  studio: {
    title: 'PAA Studios — malé, klidné logické hry',
    description:
      'PAA Studios tvoří útulné logické hlavolamy pro iPhone, iPad a Android: Pixtangle a Stitch Tales.',
    headline: 'Malé, [klidné]\nlogické hry.',
    intro:
      'Tvoříme útulné logické hlavolamy pro iPhone, iPad a Android. Každý hlavolam končí malým obrázkem — zvířátkem v pixel artu nebo vyšitým motýlem — a nikam se přitom nemusí spěchat.',
    principles: [
      {
        title: 'Hraje se offline',
        text: 'Připojení není potřeba. Lušti v letadle, v metru nebo tam, kde není vůbec žádný signál.',
      },
      {
        title: 'Bez účtů',
        text: 'Otevři hru a hraj. Bez registrace, bez přihlašování a bez zadávání e-mailové adresy.',
      },
      {
        title: 'Tvůj postup patří tobě',
        text: 'Zůstává ve tvém zařízení a zálohuje se do tvého vlastního iCloudu nebo účtu Google — nemáme žádné servery, kam bychom ho posílali.',
      },
    ],
  },
  games: {
    pixtangle: {
      genre: 'Logický hlavolam shikaku',
      tagline: 'Rozřež mřížku. Sleduj, jak rozkvete pixel art.',
      summary:
        'Rozděl pole na obdélníky — každé číslo udává velikost svého obdélníku. Vyplň celou mřížku a hlavolam rozkvete v pixel art do tvé sbírky.',
      platforms: 'iPhone, iPad a Android',
      keywords: [
        'shikaku',
        'hlavolam shikaku',
        'hlavolam s obdélníky',
        'logická hra',
        'logický hlavolam',
        'hlavolam s čísly',
        'pixel art',
        'trénink mozku',
        'hra',
        'mobilní hra',
        'hlavolamy',
        'hra zdarma',
        'hra bez internetu',
        'offline hra',
      ],
      art: {
        alts: [
          'Pole na obtížnost „Střední“ s rozpracovanými obdélníky',
          'Hotový pixel art „Sakura“',
          'Sbírka pixel artů podle kategorií',
        ],
      },
      rules: {
        intro:
          'Pixtangle vychází ze shikaku, japonského logického hlavolamu na tužku a papír, známého také pod anglickými názvy Rectangles a Divide by Squares. Hrací pole je mřížka s čísly v některých políčkách: rozděl ji na obdélníky tak, aby každé políčko patřilo právě do jednoho z nich.',
        steps: [
          'Tažením prstu přes pole nakresli obdélník kolem čísla.',
          'Každý obdélník obsahuje právě jedno číslo…',
          '…a toto číslo je jeho obsah v políčkách.',
          'Pokryj celé pole a objeví se obrázek.',
        ],
        notes: [
          'Čtverce se počítají jako obdélníky: 4 může být 2 × 2, ale i 1 × 4.',
          'Otazník značí obdélník neznámé velikosti: i ten obsahuje právě jedno zadání, ale jeho obsah volíš ty.',
        ],
        tips: [
          'Začni čísly, která se vejdou jen jedním způsobem: číslo sevřené okrajem pole a sousedy často připouští jediný tvar.',
          'Prvočíslo — 2, 3, 5, 7 — může být jen rovná řada políček: jeden řádek nebo jeden sloupec.',
          'Hledej políčka, na která dosáhne jen jedno číslo: ta musí patřit do jeho obdélníku.',
          'Velká čísla v rozích a u okrajů nemají kam uhnout — zkus je co nejdřív.',
          'Nevíš kudy kam? Nápověda ukáže jeden správný obdélník a dál už to zvládneš.',
        ],
        alt: 'Pole Pixtangle šest na šest: pastelové obdélníky s čísly, jeden se právě kreslí',
      },
      screenshots: [
        'Pole na obtížnost „Střední“ s rozpracovanými obdélníky',
        'Pole Sakury před prvním obdélníkem',
        'Hotový pixel art „Sakura“',
        'Sbírky pixel artů podle kategorií',
        'Kalendář denní výzvy',
        'Běh v Maratonu: pole za polem proti času',
        'Šest obtížností klasických úrovní',
      ],
      features: [
        {
          title: '270+ pixel artů',
          text: 'Deset kategorií od zvířat po vesmír. Každý obrázek je pole ve svém vlastním tvaru — vyřeš ho a vybarvíš ho.',
        },
        {
          title: 'Každý den nová výzva',
          text: 'Denní pole jedinečného tvaru. Udrž sérii a odměny porostou.',
        },
        {
          title: 'Šest obtížností',
          text: 'Nekonečné klasické úrovně od rychlé rozcvičky po oříšky na obtížnost „Šílená“ a k tomu obrázky z Cesty mistra za tvé výhry.',
        },
        {
          title: 'Lov na vzácnosti',
          text: 'Od běžných po legendární: dokonči celou kategorii a odemkni její nejvzácnější obrázek.',
        },
        {
          title: 'Úspěchy a žebříčky',
          text: 'Game Center na iPhonu a iPadu: desítky úspěchů a týdenní žebříčky, ve kterých můžeš stoupat výš a výš.',
        },
        {
          title: 'Pro odpočinek',
          text: 'Tmavý a světlý motiv, jemné zvuky a vibrace. Bez účtu, funguje plně offline.',
        },
      ],
      faq: [
        {
          q: 'Co je shikaku?',
          a: 'Logický hlavolam z Japonska: rozděl mřížku na obdélníky tak, aby každý obsahoval jediné číslo, které se rovná jeho obsahu. Říká se mu také Rectangles nebo Divide by Squares.',
        },
        {
          q: 'Je Pixtangle zdarma?',
          a: 'Ano. Pixtangle je zdarma pro iPhone, iPad a Android, s reklamami a volitelnými nákupy v aplikaci — mezi nimi je i balíček, který vypne reklamy mezi úrovněmi.',
        },
        {
          q: 'Funguje i offline?',
          a: 'Ano. Nepotřebuješ účet a můžeš hrát bez internetu; tvůj postup zůstává v zařízení a zálohuje se spolu se zálohou telefonu.',
        },
        {
          q: 'Jak těžké to je?',
          a: 'Šest obtížností tě provede od malých polí na obtížnost „Lehká“ až po velká pole na „Šílená“ plná otazníků. K tomu denní výzva, každý den nová, a Maraton na čas.',
        },
      ],
    },
    'stitch-tales': {
      genre: 'Vyšívané malované křížovky',
      tagline: 'Každý hlavolam je steh ve větším obrázku.',
      summary:
        'Čti čísla u řádků a sloupců, vyšívej správná políčka — a každá vyřešená křížovka se vyšije do scény ve tvém vyšívacím rámečku.',
      platforms: 'iPhone, iPad a Android',
      keywords: [
        'malované křížovky',
        'malovaná křížovka',
        'japonské křížovky',
        'nonogram',
        'nonogramy',
        'picross',
        'křížkový steh',
        'vyšívání',
        'logická hra',
        'logický hlavolam',
        'hlavolam s čísly',
        'pixel art',
        'hra',
        'mobilní hra',
        'hra zdarma',
        'hra bez internetu',
      ],
      art: {
        alt: 'Vyšívací rámeček s vyšitou loukou: motýl, slunce, květiny a muchomůrka, kterou ještě zbývá vyšít',
      },
      rules: {
        steps: [
          'Čísla u každého řádku a sloupce udávají v daném pořadí úseky vyplněných políček.',
          'Vyšij políčka, která musí být vyplněná; ta, která zůstanou prázdná, označ křížkem.',
          'Pozor — špatný steh tě stojí život, jedno z vyšitých srdíček.',
          'Vyřeš mřížku a motiv se vyšije do scény ve tvém rámečku.',
        ],
        alt: 'Téměř vyřešená malovaná křížovka s kočkou: políčka vyšitá granátovou nití, v prázdných křížky',
      },
      features: [
        {
          title: 'Scény k vyšívání',
          text: 'Rozkvetlá louka, Stonehenge, ovocný piknik, Sluneční soustava, japonská zahrada, domeček pro panenky, zimní vesnice, mořské dno — a další.',
        },
        {
          title: 'Opravdové vyšívací stehy',
          text: 'Plný steh, řetízkový steh, rybí kost a francouzské uzlíky — každý motiv je vyšitý vlastní nití a s vlastní strukturou.',
        },
        {
          title: 'Nekonečný vzorník',
          text: 'Po první scéně se otevře vzorník s lidovými vzory — a jeho vzory nikdy nedojdou.',
        },
        {
          title: 'Nápovědy, když nevíš kudy kam',
          text: 'Odkryj jedno políčko nebo celou linii a vyšívej dál.',
        },
        {
          title: 'Každý den dárek',
          text: 'Vracej se každý den pro odměnu, která roste s tvou sérií.',
        },
        {
          title: 'Šetrné k očím',
          text: 'Jemné lněné barvy, tiché zvuky stehů, bez účtu a bez internetu.',
        },
      ],
      supportNote: 'Napsat nám můžeš i ze hry: Profil → Napiš nám.',
    },
  },
};
