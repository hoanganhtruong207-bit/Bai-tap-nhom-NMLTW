const movieDetail = {
  id: "tiec-trang-mau",
  title: "TIỆC TRĂNG MÁU",
  year: 2020,
  ageRestriction: "T18",
  duration: "119 phút",
  quality: "HD",
  description:
    "Remake từ siêu phẩm Perfect Strangers, Tiệc Trăng Máu làm khuynh đảo phòng vé cuối năm 2020...",
  cast: ["Thu Trang", "Kiều Minh Tuấn", "Hồng Ánh"],
  director: "Nguyễn Quang Dũng",
  genres: ["Phim Việt", "Hài", "Tâm lý"],
  bannerUrl: "link_anh_nen_tiec_trang_mau.jpg",
};
const relatedMovies = [
  { id: "thua-me-con-di", title: "Thưa Mẹ Con Đi", image: "thuamecondi.webp" },
  {
    id: "nguoi-quen-xa-la",
    title: "Người Quen Xa Lạ",
    image: "nguoiquenxala.jpeg",
  },
  {
    id: "tho-oi",
    title: "Thỏ Ơi",
    image: "thooi.webp",
  },
  { id: "nang-3", title: "Nắng 3", image: "nang3.webp" },
  { id: "nha-ba-nu", title: "Nhà Bà Nữ", image: "nhabanu.webp" },
];

const lichChieuData = {
  title: "TIỆC TRĂNG MÁU",
  times: [
    "09:00",
    "11:00",
    "13:30",
    "15:30",
    "16:00",
    "18:00",
    "20:30",
    "22:45",
  ],
};

function renderSchedule() {
  const scheduleList = document.getElementById("schedule-list");
  if (!scheduleList) return;

  scheduleList.innerHTML = `
    <div class="time-grid">
      ${lichChieuData.times
        .map(
          (time) => `
        <div class="time-view">${time}</div>
      `,
        )
        .join("")}
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderSchedule();

  const btnBooking = document.getElementById("btn-open-booking");
  if (btnBooking) {
    btnBooking.addEventListener("click", () => {
      window.location.href = "booking.html";
    });
  }
});
