const allMovies = [
  {
    id: "tiec-trang-mau",
    title: "TIỆC TRĂNG MÁU",
    image: "tiectrangmau.webp",
    year: 2020,
    ageRestriction: "T18",
    duration: "119 phút",
    quality: "HD",
    rating: "8.5/10",
    description:
      "Remake từ siêu phẩm Perfect Strangers, Tiệc Trăng Máu làm khuynh đảo phòng vé cuối 2020.",
    trailerUrl: "https://www.youtube.com/embed/nh0BklwPN9Q",
    genres: ["Phim Việt", "Hài", "Tâm lý"],
    schedule: [
      "09:00",
      "11:00",
      "13:30",
      "15:30",
      "16:00",
      "18:00",
      "20:30",
      "22:45",
    ],
    detailInfo:
      "Tiệc trăng máu không chỉ đơn thuần là một bộ phim giải trí, mà là một bữa tiệc tâm lý đầy ám ảnh, nơi sự gắn kết của tình bạn lâu năm bị đặt lên bàn cân chỉ bằng một trò chơi tưởng chừng vô hại. Trong buổi họp mặt tân gia tại căn hộ cao cấp của Nguyệt Ánh, nhóm bạn thân bảy người đã quyết định thực hiện một thử thách nguy hiểm: cùng nhau công khai mọi tin nhắn, cuộc gọi và thông báo đến từ điện thoại cá nhân trong suốt bữa tối. Thế nhưng, chính từ sự minh bạch đầy khiên cưỡng ấy, từng chiếc mặt nạ được gỡ xuống, bóc trần những bí mật kinh hoàng, những sự phản bội cay đắng và những góc khuất tăm tối ẩn sau vẻ ngoài hạnh phúc của mỗi người. Qua những lời thoại sắc bén và diễn xuất biến hóa của dàn sao đình đám, bộ phim đã khéo léo biến căn phòng ăn thành một chiến trường của sự nghi kỵ, nơi chiếc điện thoại trở thành quả bom nổ chậm, châm ngòi cho sự sụp đổ của lòng tin và đặt ra câu hỏi đầy ám ảnh về sự riêng tư trong thế giới hiện đại: Liệu chúng ta có thực sự thấu hiểu những người thân thiết nhất bên cạnh mình?",
  },
  {
    id: "nha-ba-nu",
    title: "NHÀ BÀ NỮ",
    image: "nhabanu.webp",
    year: 2023,
    ageRestriction: "T18",
    duration: "102 phút",
    quality: "HD",
    rating: "9.1/10",
    description:
      "Những mâu thuẫn thế hệ, những tổn thương chồng chất và tình thân đầy rạn nứt trong tiệm bánh canh cua của gia đình bà Nữ. Liệu sau những tranh cãi nảy lửa, họ có thể tìm lại được tiếng nói chung?",
    trailerUrl: "https://www.youtube.com/embed/IkaP0KJWTsQ",
    schedule: [
      "09:00",
      "11:00",
      "13:30",
      "15:30",
      "16:00",
      "18:00",
      "20:30",
      "22:45",
    ],
    detailInfo:
      "Phim xoay quanh cuộc sống gia đình của bà Ngọc Nữ, một người phụ nữ làm nghề bán bánh canh cua với tính cách cay nghiệt, độc đoán do những tổn thương trong quá khứ. Bà áp đặt sự kiểm soát lên các con, đặc biệt là Ngọc Nhi – cô con gái út. Sự xung đột lên đến đỉnh điểm khi Nhi yêu John, một chàng trai Việt kiều. Mối tình này không chỉ bị bà Nữ ngăn cấm mà còn là ngòi nổ cho những dồn nén, mâu thuẫn âm ỉ trong gia đình vốn đã đầy rạn nứt vì những khác biệt thế hệ và cách yêu thương 'độc hại'",
  },
  {
    id: "thua-me-con-di",
    title: "THƯA MẸ CON ĐI",
    image: "thuamecondi.webp",
    year: 2019,
    ageRestriction: "T18",
    duration: "100 phút",
    quality: "HD",
    rating: "9.2/10",
    description: "Một câu chuyện cảm động về gia đình...",
    trailerUrl: "https://www.youtube.com/embed/DkrxQbFwto0",
    schedule: [
      "09:00",
      "11:00",
      "13:30",
      "15:30",
      "16:00",
      "18:00",
      "20:30",
      "22:45",
    ],
    detailInfo:
      "Bộ phim mang màu sắc nhẹ nhàng, tĩnh lặng hơn, kể về Văn – một chàng trai trẻ từ Mỹ trở về Việt Nam sau nhiều năm xa cách, cùng với Ian, người yêu của cậu. Vì chưa muốn công khai bản thân với gia đình truyền thống ở quê nhà, Văn chỉ giới thiệu Ian là bạn thân. Sự xuất hiện của Ian trong căn nhà cổ kính, nơi có người mẹ đang kỳ vọng Văn sớm kết hôn, đã tạo ra những tình huống éo le, đầy xúc động. Đó là hành trình đi tìm sự chấp nhận, tình yêu thương và lòng thấu cảm giữa những người thân trong gia đình.",
  },
  {
    id: "bo-gia",
    title: "BỐ GIÀ",
    image: "bo-gia.jpeg",
    year: 2021,
    ageRestriction: "T13",
    duration: "128 phút",
    quality: "HD",
    rating: "8.0/10",
    trailerUrl: "https://www.youtube.com/embed/PDp4Ic8ZGUM",
    detailInfo:
      "Bố Già không chỉ là câu chuyện về một gia đình lao động nghèo ở xóm lao động, mà còn là bản tình ca đầy nước mắt về tình phụ tử. Ông Sang, người đàn ông luôn tự hào về sự hy sinh vô điều kiện cho anh em, con cái, lại dần trở nên lạc lõng trong chính căn nhà của mình vì sự bao đồng và cứng nhắc. Bộ phim là sự va chạm giữa thế hệ cũ nặng tình nghĩa và thế hệ trẻ đầy tư duy mới, nơi mỗi người đều có lý lẽ riêng nhưng lại thiếu đi sự thấu cảm. Qua từng thước phim, người xem sẽ thấy hình ảnh của chính mình trong những mâu thuẫn gia đình vụn vặt nhưng đầy tính sát thương.",
    description:
      "Bố Già kể về cuộc đời của ông Sang, một người cha nghèo khó làm nghề chở hàng thuê, luôn hết lòng hy sinh vì gia đình nhưng lại mang trong mình lối sống bao đồng và cứng nhắc.",
  },
  {
    id: "mat-biec",
    title: "MẮT BIẾC",
    image: "mat-biec.jpg",
    year: 2019,
    ageRestriction: "T13",
    duration: "117 phút",
    quality: "HD",
    rating: "8.2/10",
    trailerUrl: "https://www.youtube.com/embed/ITlQ0oU7tDA?si=nRDsq0kDxEhXbvin",
    detailInfo:
      "Dựa trên tiểu thuyết kinh điển của Nguyễn Nhật Ánh, Mắt Biếc là một khúc tình ca buồn về tình yêu đơn phương day dứt. Ngạn – chàng trai với đôi mắt chất chứa cả bầu trời hoài niệm – đã dành cả thanh xuân chỉ để yêu một đôi mắt biếc. Từ làng Đo Đo xanh mướt đến chốn đô thị hoa lệ, tình yêu của Ngạn vẫn vẹn nguyên dù lòng người đã thay đổi. Bộ phim là những mảng ký ức đẹp đến nao lòng về tuổi thơ, về mối tình đầu tinh khôi nhưng không thành, và là nỗi đau âm ỉ của kẻ luôn đứng sau nhìn người mình yêu hạnh phúc bên người khác.",
    description:
      "Dựa trên tiểu thuyết cùng tên của nhà văn Nguyễn Nhật Ánh, Mắt Biếc dẫn dắt người xem vào thế giới đầy mộng mơ và hoài niệm của Ngạn.",
  },
  {
    id: "em-la-ba-noi-cua-anh",
    title: "EM LÀ BÀ NỘI CỦA ANH",
    image: "em-la-ba-noi-cua-anh.jpg",
    year: 2015,
    ageRestriction: "T13",
    duration: "127 phút",
    quality: "HD",
    rating: "8.1/10",
    trailerUrl: "https://www.youtube.com/embed/jvB0ZrAqzkc?si=1eXQ_1Ale_WzyRUJ",
    detailInfo:
      "Mang đậm màu sắc giả tưởng hài hước, bộ phim là hành trình tìm lại tuổi trẻ đầy diệu kỳ của bà Đại – một người phụ nữ 70 tuổi sống trong sự cô độc và buồn tủi. Một biến cố bất ngờ xảy ra khi bà bỗng chốc trở lại hình hài của một cô gái 20 tuổi đầy nhựa sống. Từ đây, bà quyết định thay đổi cuộc đời, theo đuổi đam mê âm nhạc bị lãng quên và tìm thấy những giá trị chân thực của cuộc sống. Bộ phim vừa mang lại những tràng cười sảng khoái, vừa lấy đi nước mắt của khán giả khi gửi gắm thông điệp sâu sắc về sự hy sinh của người mẹ và giá trị của tuổi trẻ.",
    description:
      "Em là bà nội của anh mang đến câu chuyện giả tưởng đầy hài hước và ý nghĩa về bà Đại, một cụ già 70 tuổi khó tính bất ngờ được hồi xuân.",
  },
  {
    id: "song-lang",
    title: "SONG LANG",
    image: "song-lang.jpg",
    year: 2018,
    ageRestriction: "T16",
    duration: "101 phút",
    quality: "HD",
    rating: "8.3/10",
    trailerUrl: "https://www.youtube.com/embed/wX8nGJFGwaU?si=7Ky2-g49p4zcgdOS",
    detailInfo:
      "Song Lang là bức tranh đầy chất thơ, khắc họa mối nhân duyên kỳ lạ giữa hai con người ở hai thái cực đối lập: Dũng 'Thiên Lôi' – một tay đòi nợ thuê lạnh lùng và Linh Phụng – kép chính của một đoàn cải lương đang dần lụi tàn. Giữa không gian Sài Gòn những năm 80, sự gặp gỡ giữa họ đã tạo nên một sợi dây liên kết vô hình qua những làn điệu cải lương da diết. Phim không chỉ tôn vinh giá trị nghệ thuật dân tộc truyền thống mà còn là lời tự sự về nỗi cô đơn, sự lạc lõng và khao khát được thấu hiểu giữa những kiếp người vốn đã chịu quá nhiều tổn thương.",
    description:
      "Song Lang là bức tranh đầy chất thơ về nghệ thuật cải lương truyền thống thông qua cuộc gặp gỡ định mệnh giữa Dũng và Linh Phụng.",
  },
  {
    id: "tro-tan-ruc-ro",
    title: "TRO TÀN RỰC RỠ",
    image: "tro-tan-ruc-ro.jpg",
    year: 2022,
    ageRestriction: "T16",
    duration: "116 phút",
    quality: "HD",
    rating: "7.9/10",
    trailerUrl: "https://www.youtube.com/embed/Sx0gdaeeGi4?si=MGgmNWkyKE128aLP",
    detailInfo:
      "Lấy bối cảnh miền Tây sông nước, Tro tàn rực rỡ là câu chuyện về những người phụ nữ sống cam chịu bên cạnh những người đàn ông mang theo những vết sẹo trong tâm hồn. Ở xóm nhỏ ven biển, tình yêu không được đo bằng sự thấu hiểu mà bằng những hy sinh lặng thầm, những nỗi đau bị kìm nén và cả những ngọn lửa rực cháy trên nền tro tàn của sự tuyệt vọng. Bộ phim là một tác phẩm giàu tính triết lý, đầy ám ảnh với những hình ảnh ẩn dụ mạnh mẽ, khắc họa sâu sắc thân phận phụ nữ và những góc khuất trong mối quan hệ tình cảm đời thường.",
    description:
      "Tro tàn rực rỡ lấy bối cảnh tại một xóm nhỏ ven biển miền Tây, nơi cuộc đời của những người phụ nữ bị gắn chặt với những người đàn ông.",
  },
  {
    id: "nguoi-vo-cuoi-cung",
    title: "NGƯỜI VỢ CUỐI CÙNG",
    image: "nguoi-vo-cuoi-cung.jpg",
    year: 2023,
    ageRestriction: "T16",
    duration: "132 phút",
    quality: "HD",
    rating: "7.2/10",
    trailerUrl: "https://www.youtube.com/embed/JcJ-wemgVbQ?si=xdZwWaDp8KAdNKpP",
    detailInfo:
      "Lấy bối cảnh Việt Nam thời phong kiến, bộ phim là bi kịch về cuộc đời của Linh – người vợ lẽ của một quan tri huyện giàu có. Đối mặt với những hủ tục hà khắc và cuộc sống tù túng trong nhung lụa, Linh bị giằng xé giữa lòng ham muốn tự do và bổn phận gia đình. Cuộc gặp gỡ tình cờ với người yêu cũ đã thổi bùng lên ngọn lửa khao khát hạnh phúc, đồng thời kéo theo những âm mưu, sự trả thù đầy tàn nhẫn. Bộ phim là tiếng nói phẫn nộ trước những bất công đối với người phụ nữ xưa, là cuộc chiến giữa tình yêu chân thành và quyền lực đồng tiền.",
    description:
      "Người vợ cuối cùng là một bộ phim tâm lý cổ trang lấy bối cảnh Việt Nam thời phong kiến, kể về cuộc đời đầy bi kịch của Linh.",
  },
  {
    id: "ma-xo",
    title: "MA XÓ",
    image: "ma-xo.jpg",
    year: 2024,
    ageRestriction: "T18",
    duration: "95 phút",
    quality: "HD",
    rating: "7.5/10",
    trailerUrl: "https://www.youtube.com/embed/BTo23ZCJu6E?si=JDrg04exAKNbvCAf",
    description: "Một lời nguyền cổ xưa trỗi dậy tại vùng quê hẻo lánh...",
    detailInfo:
      "Ma Xó khai thác những nét văn hóa tâm linh huyền bí của vùng cao, nơi sự tĩnh lặng của núi rừng bị xáo trộn bởi những thế lực vô hình. Câu chuyện bắt đầu khi một nhóm bạn trẻ vô tình đánh thức một thực thể bị phong ấn lâu năm. Bộ phim là hành trình chạy trốn khỏi sự truy đuổi đầy ám ảnh và khám phá những bí mật kinh hoàng bị chôn vùi dưới lòng đất, đặt ra những thử thách về lòng can đảm và sự tồn vong.",
  },
  {
    id: "cuoc-chien-vuong-quyen",
    title: "CUỘC CHIẾN VƯƠNG QUYỀN",
    image: "cuoc-chien-vuong-quyen.jpg",
    year: 2024,
    ageRestriction: "T16",
    duration: "140 phút",
    quality: "4K",
    rating: "8.7/10",
    trailerUrl: "https://www.youtube.com/embed/nPh8wJnkJK0?si=K9_Y3njyuTj1VUSC",
    description: "Trận chiến giành ngai vàng đầy khốc liệt và mưu mô.",
    detailInfo:
      "Trong thế giới giả tưởng đầy khói lửa, Cuộc Chiến Vương Quyền vẽ nên bức tranh tráng lệ về lòng trung thành, sự phản bội và khát vọng quyền lực tột đỉnh. Khi đế chế cũ bắt đầu rạn nứt, những vị vua, nữ hoàng và các thế lực ngầm bước vào một trò chơi vương quyền không hồi kết. Với những cảnh quay hoành tráng và dàn nhân vật đa chiều, phim lột tả sự nghiệt ngã của chiến tranh và cái giá đắt đỏ mà mỗi người phải trả để bảo vệ vương miện trên đầu mình.",
  },
  {
    id: "doraemon-2026",
    title: "DORAEMON: NOBITA VÀ LÂU ĐÀI DƯỚI ĐÁY BIỂN",
    image: "doraemon-2026.jpg",
    year: 2026,
    ageRestriction: "P",
    duration: "102 phút",
    quality: "HD",
    rating: "9.0/10",
    trailerUrl: "https://www.youtube.com/embed/2Ox6aYmhxvw?si=lh-VS2ucBnVmKlZG",
    description:
      "Nhóm bạn Nobita dấn thân vào cuộc phiêu lưu dưới đáy đại dương để ngăn chặn âm mưu đen tối.",
    detailInfo:
      "Doraemon Movie 2026: Nobita Và Lâu Đài Dưới Đáy Biển là phần phim điện ảnh thứ 45, đưa khán giả trở lại với chuyến phiêu lưu huyền thoại dưới đại dương. Trong kỳ nghỉ hè, nhóm bạn Nobita đã gặp gỡ cư dân của Liên bang Mu và cùng nhau chiến đấu để bảo vệ Trái Đất trước sự trỗi dậy của Lâu đài quỷ. Với cốt truyện đầy tính hoài niệm và thông điệp ý nghĩa về tình bạn cũng như bảo vệ môi trường biển, bộ phim là một hành trình kỳ thú, đầy cảm xúc dành cho mọi thế hệ khán giả.",
  },
];
// Lịch chiếu mặc định dùng cho mọi phim không có schedule riêng
const DEFAULT_SCHEDULE = [
  "09:00",
  "11:00",
  "13:30",
  "15:30",
  "16:00",
  "18:00",
  "20:30",
  "22:45",
];

// Tự động gán lịch mặc định cho những phim chưa có schedule
allMovies.forEach((movie) => {
  if (!movie.schedule) {
    movie.schedule = DEFAULT_SCHEDULE;
  }
});
