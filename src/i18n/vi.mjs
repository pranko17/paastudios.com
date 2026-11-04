// Vietnamese translation of en.mjs and the Pixtangle texts in games.mjs.
export default {
  code: 'vi',
  hreflang: 'vi',
  name: 'Tiếng Việt',
  ogLocale: 'vi_VN',
  ui: {
    skip: 'Chuyển đến nội dung',
    navGames: 'Trò chơi',
    navContact: 'Liên hệ',
    fineNoCookies: 'Trang web này không đặt cookie và không dùng công cụ theo dõi.',
    fineTrademarks:
      'App Store là nhãn hiệu dịch vụ của Apple Inc. Google Play và biểu trưng Google Play là nhãn hiệu của Google LLC.',
    appStoreAlt: 'Tải {name} trên App Store',
    googlePlayAlt: 'Tải {name} trên Google Play',
    comingSoon: 'Sắp ra mắt trên {stores}',
    storeAppStore: 'App Store',
    storeGooglePlay: 'Google Play',
    and: 'và',
    freeOn: 'Miễn phí trên {platforms}',
    howToPlay: 'Cách chơi',
    tips: 'Mẹo giải đố',
    faq: 'Hỏi đáp',
    gallery: 'Xem cận cảnh',
    screenshots: 'Ảnh chụp màn hình',
    features: 'Có gì trong trò chơi',
    support: 'Hỗ trợ',
    supportText:
      'Bạn có câu hỏi, ý tưởng hay gặp sự cố? Hãy viết cho chúng tôi — chúng tôi đọc mọi tin nhắn.',
    supportPage: 'Trang hỗ trợ',
    privacyPolicy: 'Chính sách quyền riêng tư',
    moreFrom: 'Thêm trò chơi từ {studio}',
    language: 'Ngôn ngữ',
    gameTitle: '{name} — {genre} | {studio}',
  },
  games: {
    pixtangle: {
      genre: 'Giải đố logic Shikaku',
      tagline: 'Cắt lưới ô. Ngắm pixel art nở rộ.',
      summary:
        'Chia bảng thành các hình chữ nhật — mỗi con số là kích thước của chính hình chữ nhật chứa nó. Lấp kín cả lưới và câu đố sẽ nở thành một bức pixel art cho bộ sưu tập của bạn.',
      platforms: 'iPhone, iPad và Android',
      keywords: [
        'shikaku',
        'giải đố shikaku',
        'câu đố hình chữ nhật',
        'trò chơi logic',
        'giải đố logic',
        'câu đố số',
        'pixel art',
        'trò chơi trí tuệ',
        'rèn luyện trí não',
      ],
      art: {
        alts: [
          'Một bảng mức Trung bình đang được giải',
          'Bức pixel art hoa anh đào đã hoàn thành',
          'Bộ sưu tập pixel art theo danh mục',
        ],
      },
      rules: {
        intro:
          'Pixtangle dựa trên Shikaku, một trò giải đố logic trên giấy bút của Nhật Bản, trong tiếng Anh còn được gọi là Rectangles hay Divide by Squares. Bảng là một lưới ô, một số ô có ghi số: hãy chia bảng thành các hình chữ nhật sao cho mỗi ô thuộc về đúng một hình.',
        steps: [
          'Kéo ngón tay trên bảng để vẽ hình chữ nhật bao quanh một con số.',
          'Mỗi hình chữ nhật chứa đúng một con số…',
          '…và con số đó là diện tích của nó tính theo ô.',
          'Phủ kín cả bảng, và bức tranh sẽ hiện ra.',
        ],
        notes: [
          'Hình vuông cũng được tính là hình chữ nhật: số 4 có thể là 2 × 2 hoặc 1 × 4.',
          'Dấu chấm hỏi là một hình chữ nhật chưa biết kích thước: nó vẫn chứa đúng một ký hiệu, còn diện tích do bạn quyết định.',
        ],
        tips: [
          'Bắt đầu với những con số chỉ đặt được theo một cách: con số bị kẹp giữa mép bảng và các số bên cạnh thường chỉ còn một hình dạng.',
          'Số nguyên tố — 2, 3, 5, 7 — chỉ có thể là một đường thẳng các ô: một hàng hoặc một cột.',
          'Tìm những ô mà chỉ một con số với tới được: chúng chắc chắn thuộc hình chữ nhật của số đó.',
          'Số lớn ở góc và dọc mép bảng có ít chỗ để đặt — hãy thử chúng sớm.',
          'Bị kẹt? Gợi ý sẽ làm sáng một hình chữ nhật đúng, và bạn tiếp tục từ đó.',
        ],
        alt: 'Bảng Pixtangle sáu nhân sáu: các hình chữ nhật màu pastel có số, một hình đang được vẽ',
      },
      screenshots: [
        'Một bảng mức Trung bình đang được giải',
        'Bảng hoa anh đào trước hình chữ nhật đầu tiên',
        'Bức pixel art hoa anh đào đã hoàn thành',
        'Các bộ sưu tập pixel art theo danh mục',
        'Lịch thử thách hằng ngày',
        'Một lượt Marathon: giải bảng chạy đua với thời gian',
        'Sáu mức độ khó của các màn cổ điển',
      ],
      features: [
        {
          title: '270+ bức pixel art',
          text: 'Mười danh mục, từ động vật đến vũ trụ. Mỗi bức tranh là một bảng có hình dạng của chính nó — giải xong để tô màu.',
        },
        {
          title: 'Thử thách mới mỗi ngày',
          text: 'Một bảng hằng ngày với hình dạng độc đáo. Giữ chuỗi ngày để nhận phần thưởng lớn hơn.',
        },
        {
          title: 'Sáu mức độ khó',
          text: 'Các màn cổ điển vô tận, từ khởi động nhẹ nhàng đến những câu đố hóc búa mức Điên rồ, cùng các bức tranh Con đường bậc thầy nhận được nhờ chiến thắng.',
        },
        {
          title: 'Săn độ hiếm',
          text: 'Từ thường đến huyền thoại: hoàn thành trọn một danh mục để mở khóa bức tranh hiếm nhất của nó.',
        },
        {
          title: 'Thành tích và bảng xếp hạng',
          text: 'Game Center trên iPhone và iPad: hàng chục thành tích và bảng xếp hạng hằng tuần để leo hạng.',
        },
        {
          title: 'Sinh ra để thư giãn',
          text: 'Giao diện tối và sáng, âm thanh nhẹ nhàng và rung phản hồi. Không cần tài khoản, chơi hoàn toàn ngoại tuyến.',
        },
      ],
      faq: [
        {
          q: 'Shikaku là gì?',
          a: 'Một trò giải đố logic đến từ Nhật Bản: chia lưới ô thành các hình chữ nhật sao cho mỗi hình chứa một con số duy nhất bằng diện tích của nó. Trò này còn được gọi là Rectangles hay Divide by Squares.',
        },
        {
          q: 'Pixtangle có miễn phí không?',
          a: 'Có. Pixtangle miễn phí trên iPhone, iPad và Android, có quảng cáo và mua hàng trong ứng dụng tùy chọn — trong đó có gói tắt quảng cáo giữa các màn.',
        },
        {
          q: 'Có chơi ngoại tuyến được không?',
          a: 'Có. Không cần tài khoản và bạn có thể chơi không cần internet; tiến trình được lưu trên thiết bị và được sao lưu cùng bản sao lưu của điện thoại.',
        },
        {
          q: 'Trò chơi khó đến mức nào?',
          a: 'Sáu mức độ khó đưa bạn từ những bảng Dễ nhỏ đến những bảng Điên rồ lớn đầy dấu chấm hỏi, cùng thử thách hằng ngày mới mỗi ngày và Marathon tính giờ.',
        },
      ],
    },
  },
};
