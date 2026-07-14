// --- Xử lý render danh sách phim liên quan ---
const moviesGrid = document.querySelector(".movies-grid");
if (moviesGrid && typeof relatedMovies !== "undefined") {
  moviesGrid.innerHTML = "";
  relatedMovies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";
    movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}" />
            <span class="movie-card-title">${movie.title}</span>
        `;
    moviesGrid.appendChild(movieCard);
  });
}

// --- Xử lý chuyển Tab ---
const tabItems = document.querySelectorAll(".tab-item");
const tabPanes = document.querySelectorAll(".tab-pane");
tabItems.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".tab-item.active").classList.remove("active");
    tab.classList.add("active");
    tabPanes.forEach((pane) => pane.classList.remove("active"));
    const targetTab = tab.getAttribute("data-tab");
    document.getElementById(`content-${targetTab}`).classList.add("active");
  });
});

// --- Xử lý xem Trailer ---
const btnWatchMovie = document.getElementById("btn-open-player");
const bannerMediaBox = document.getElementById("banner-media-box");
if (btnWatchMovie) {
  btnWatchMovie.addEventListener("click", () => {
    bannerMediaBox.innerHTML = `
        <div class="video-player-wrapper">
            <iframe 
                src="https://www.youtube.com/embed/nh0BklwPN9Q?autoplay=1" 
                title="Tiệc Trăng Máu Trailer" 
                frameborder="0" 
                allow="autoplay; encrypted-media" 
                allowfullscreen>
            </iframe>
        </div>
    `;
  });
}

// --- Xử lý Modal Đăng nhập ---
const btnLoginHeader = document.getElementById("btn-login-header");
const loginModal = document.getElementById("login-modal");
const btnCloseModal = document.getElementById("btn-close-modal");
const modalOverlay = document.getElementById("modal-overlay");
if (btnLoginHeader) {
  btnLoginHeader.addEventListener("click", () => {
    loginModal.classList.add("show");
    document.body.style.overflow = "hidden";
  });
}
if (btnCloseModal)
  btnCloseModal.addEventListener("click", () => {
    loginModal.classList.remove("show");
    document.body.style.overflow = "auto";
  });

// --- Render Lịch Chiếu & Xử lý Chuyển trang Đặt vé ---
document.addEventListener("DOMContentLoaded", () => {
  // 1. Render lịch chiếu
  const scheduleList = document.getElementById("schedule-list");
  if (scheduleList && typeof lichChieuData !== "undefined") {
    scheduleList.innerHTML = `
      <div class="time-grid">
        ${lichChieuData.times
          .map((time) => `<button class="time-view">${time}</button>`)
          .join("")}
      </div>
    `;
  }

  // 2. Chuyển trang Đặt vé
  const btnOpenBooking = document.getElementById("btn-open-booking");
  if (btnOpenBooking) {
    btnOpenBooking.addEventListener("click", () => {
      window.location.href = "booking.html";
    });
  }
});
