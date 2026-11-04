// Portuguese (Brazil) translation of en.mjs and the Pixtangle texts in games.mjs.
export default {
  code: 'pt',
  hreflang: 'pt',
  name: 'Português',
  ogLocale: 'pt_BR',
  ui: {
    skip: 'Pular para o conteúdo',
    navGames: 'Jogos',
    navContact: 'Contato',
    fineNoCookies: 'Este site não define cookies nem usa rastreadores.',
    fineTrademarks:
      'App Store é uma marca de serviço da Apple Inc. Google Play e o logotipo do Google Play são marcas comerciais da Google LLC.',
    appStoreAlt: 'Baixe {name} na App Store',
    googlePlayAlt: 'Baixe {name} no Google Play',
    comingSoon: 'Em breve {stores}',
    storeAppStore: 'na App Store',
    storeGooglePlay: 'no Google Play',
    and: 'e',
    freeOn: 'Grátis para {platforms}',
    howToPlay: 'Como jogar',
    tips: 'Dicas para resolver',
    faq: 'Perguntas e respostas',
    gallery: 'Mais de perto',
    screenshots: 'Capturas de tela',
    features: 'O que tem no jogo',
    support: 'Suporte',
    supportText:
      'Dúvidas, ideias ou algo não está funcionando? Escreva para nós — lemos todas as mensagens.',
    supportPage: 'Página de suporte',
    privacyPolicy: 'Política de privacidade',
    moreFrom: 'Outros jogos de {studio}',
    language: 'Idioma',
    gameTitle: '{name} — {genre} | {studio}',
    studioEyebrow: 'Estúdio independente de jogos',
    ourGames: 'Nossos jogos',
    howWeMake: 'Como fazemos nossos jogos',
    sayHello: 'Diga oi',
    sayHelloText:
      'Dúvidas, ideias, um bug — ou só uma palavra gentil. Escreva para o jogo que você joga: lemos todas as mensagens.',
    discover: 'Conheça {name}',
    docDescription: '{title} do {name}, jogo da {studio}.',
  },
  studio: {
    title: 'PAA Studios — jogos de quebra-cabeça pequenos e tranquilos',
    description:
      'A PAA Studios cria jogos de lógica aconchegantes para iPhone, iPad e Android: Pixtangle e Stitch Tales.',
    headline: 'Jogos de lógica\npequenos e [tranquilos].',
    intro:
      'Criamos quebra-cabeças de lógica aconchegantes para iPhone, iPad e Android. Cada um termina com uma pequena imagem — um bichinho em pixel art, uma borboleta bordada — e nunca há pressa para chegar lá.',
    principles: [
      {
        title: 'Funciona offline',
        text: 'Não precisa de conexão. Resolva quebra-cabeças no avião, no metrô ou onde não houver sinal algum.',
      },
      {
        title: 'Sem conta',
        text: 'Abra o jogo e jogue. Sem cadastro, sem login, sem ter que informar seu e-mail.',
      },
      {
        title: 'Seu progresso é seu',
        text: 'Ele fica no seu aparelho e tem backup na sua própria conta do iCloud ou do Google — não temos servidores para onde enviá-lo.',
      },
    ],
  },
  games: {
    pixtangle: {
      genre: 'Quebra-cabeça de lógica shikaku',
      tagline: 'Corte o tabuleiro. Veja o pixel art florescer.',
      summary:
        'Divida o tabuleiro em retângulos — cada número é o tamanho do seu próprio retângulo. Preencha o tabuleiro inteiro e o quebra-cabeça floresce em um pixel art para a sua coleção.',
      platforms: 'iPhone, iPad e Android',
      keywords: [
        'shikaku',
        'quebra-cabeça shikaku',
        'quebra-cabeça de retângulos',
        'jogo de lógica',
        'quebra-cabeça lógico',
        'jogo de números',
        'pixel art',
        'desafio mental',
        'jogo de raciocínio',
        'jogo',
        'jogo para celular',
        'jogo de quebra-cabeça',
        'jogo grátis',
        'jogo offline',
      ],
      art: {
        alts: [
          'Um tabuleiro de nível Médio em andamento',
          'O pixel art “Sakura” concluído',
          'A coleção de pixel arts por categoria',
        ],
      },
      rules: {
        intro:
          'Pixtangle é baseado no shikaku, um quebra-cabeça de lógica japonês de lápis e papel, também conhecido pelos nomes em inglês Rectangles e Divide by Squares. O tabuleiro é uma grade com números em algumas células: divida-o em retângulos de modo que cada célula pertença a exatamente um deles.',
        steps: [
          'Arraste o dedo pelo tabuleiro para desenhar um retângulo em volta de um número.',
          'Cada retângulo contém exatamente um número…',
          '…e esse número é a sua área em células.',
          'Cubra o tabuleiro inteiro e a imagem aparece.',
        ],
        notes: [
          'Quadrados também contam como retângulos: um 4 pode ser 2 × 2 ou 1 × 4.',
          'Um ponto de interrogação é um retângulo de tamanho desconhecido: ele também tem um único símbolo, mas a área é você quem decide.',
        ],
        tips: [
          'Comece pelos números que só cabem de um jeito: um número espremido entre a borda e os vizinhos muitas vezes deixa uma única forma possível.',
          'Um número primo — 2, 3, 5, 7 — só pode ser uma linha reta de células: uma linha ou uma coluna.',
          'Procure células que só um número consegue alcançar: elas têm que pertencer ao retângulo desse número.',
          'Números grandes nos cantos e nas bordas têm pouco espaço — tente-os logo no começo.',
          'Travou? Uma dica destaca um retângulo correto, e você continua a partir dali.',
        ],
        alt: 'Um tabuleiro de Pixtangle seis por seis: retângulos em tons pastel com números, um deles sendo desenhado',
      },
      screenshots: [
        'Um tabuleiro de nível Médio em andamento',
        'O tabuleiro da sakura antes do primeiro retângulo',
        'O pixel art “Sakura” concluído',
        'Coleções de pixel arts por categoria',
        'O calendário do desafio diário',
        'Uma partida de Maratona: tabuleiros contra o relógio',
        'Seis dificuldades de níveis clássicos',
      ],
      features: [
        {
          title: '270+ pixel arts',
          text: 'Dez categorias, de animais ao espaço. Cada arte é um tabuleiro no formato do desenho — resolva-o para colori-lo.',
        },
        {
          title: 'Um desafio novo todo dia',
          text: 'Um tabuleiro diário com formato único. Mantenha sua sequência para ganhar recompensas maiores.',
        },
        {
          title: 'Seis dificuldades',
          text: 'Níveis clássicos sem fim, de aquecimentos rápidos a desafios de quebrar a cabeça no Insano, além de artes do Caminho do mestre pelas suas vitórias.',
        },
        {
          title: 'Raridades para caçar',
          text: 'Do comum ao lendário: complete uma categoria inteira para desbloquear a sua arte mais rara.',
        },
        {
          title: 'Conquistas e rankings',
          text: 'Game Center no iPhone e no iPad: dezenas de conquistas e rankings semanais para escalar.',
        },
        {
          title: 'Feito para relaxar',
          text: 'Temas escuro e claro, sons suaves e vibração. Sem conta, funciona totalmente offline.',
        },
      ],
      faq: [
        {
          q: 'O que é shikaku?',
          a: 'Um quebra-cabeça de lógica do Japão: divida uma grade em retângulos de modo que cada um tenha um único número, igual à sua área. Também é chamado de Rectangles ou Divide by Squares.',
        },
        {
          q: 'Pixtangle é grátis?',
          a: 'Sim. Pixtangle é grátis para iPhone, iPad e Android, com anúncios e compras opcionais no app — incluindo um pacote que desativa os anúncios entre os níveis.',
        },
        {
          q: 'Funciona offline?',
          a: 'Sim. Não há conta e você pode jogar sem internet; seu progresso fica no seu aparelho e é salvo junto com o backup do seu celular.',
        },
        {
          q: 'Quão difícil fica?',
          a: 'Seis dificuldades levam você de pequenos tabuleiros no Fácil a grandes tabuleiros no Insano cheios de pontos de interrogação, além de um desafio diário novo todo dia e uma Maratona contra o relógio.',
        },
      ],
    },
    'stitch-tales': {
      genre: 'Nonograma em ponto cruz',
      tagline: 'Cada quebra-cabeça é um ponto de uma imagem maior.',
      summary:
        'Leia os números ao longo das linhas e colunas, preencha as casas certas — e cada nonograma resolvido é bordado numa cena do seu bastidor.',
      platforms: 'iPhone, iPad e Android',
      keywords: [
        'nonograma',
        'nonogram',
        'jogo de nonograma',
        'picross',
        'griddlers',
        'ponto cruz',
        'bordado',
        'quebra-cabeça de lógica',
        'jogo de lógica',
        'pixel art',
        'jogo',
        'jogo para celular',
        'jogo de quebra-cabeça',
        'jogo grátis',
        'jogo offline',
      ],
      art: {
        alt: 'Um bastidor com um campo florido bordado: uma borboleta, um sol, flores e um cogumelo ainda por bordar',
      },
      rules: {
        steps: [
          'Os números ao lado de cada linha e coluna são os trechos de casas preenchidas, em ordem.',
          'Borde as casas que precisam ser preenchidas; marque com uma cruz as que ficam vazias.',
          'Cuidado — um ponto errado custa uma vida, um dos seus corações bordados.',
          'Resolva a grade, e a figura é bordada na cena do seu bastidor.',
        ],
        alt: 'Um nonograma de um gato quase resolvido: casas bordadas em grená e cruzes nas vazias',
      },
      features: [
        {
          title: 'Cenas para bordar',
          text: 'Um campo florido, Stonehenge, um piquenique de frutas, o sistema solar, um jardim japonês, uma casa de bonecas, uma vila de inverno, o fundo do mar… e muito mais.',
        },
        {
          title: 'Pontos de bordado de verdade',
          text: 'Ponto cheio, ponto corrente, espinha de peixe e nó francês — cada figura é bordada com linha e textura próprias.',
        },
        {
          title: 'Uma toalha bordada sem fim',
          text: 'Depois da primeira cena, abre-se uma toalha bordada com motivos folclóricos — e os motivos nunca acabam.',
        },
        {
          title: 'Dicas quando você travar',
          text: 'Revele uma casa ou uma linha inteira e continue bordando.',
        },
        {
          title: 'Um presente todo dia',
          text: 'Volte todos os dias para ganhar uma recompensa que cresce com a sua sequência.',
        },
        {
          title: 'Descanso para os olhos',
          text: 'Tons suaves de linho, sons delicados de bordado, sem conta e sem precisar de internet.',
        },
      ],
      supportNote: 'Você também pode falar com a gente pelo jogo, em Perfil → Fale conosco.',
    },
  },
};
