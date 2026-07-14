document.addEventListener("DOMContentLoaded", () => {
  // 1. Xử lý xem Trailer (Động)
  const btnWatchMovie = document.getElementById("btn-open-player");
  const bannerMediaBox = document.getElementById("banner-media-box");

  if (btnWatchMovie && bannerMediaBox) {
    btnWatchMovie.addEventListener("click", () => {
      const urlParams = new URLSearchParams(window.location.search);
      // Lấy ID từ URL, nếu không có thì lấy ID phim đầu tiên trong mảng allMovies (để tránh lỗi)
      const movieId =
        urlParams.get("id") ||
        (typeof allMovies !== "undefined" ? allMovies[0].id : "tiec-trang-mau");

      const movie = allMovies.find((m) => m.id === movieId);

      if (movie && movie.trailerUrl) {
        bannerMediaBox.innerHTML = `
                    <div class="video-player-wrapper">
                        <iframe src="${movie.trailerUrl}?autoplay=1" 
                                width="100%" height="400" frameborder="0" 
                                allow="autoplay; encrypted-media" 
                                allowfullscreen></iframe>
                    </div>`;
      } else {
        alert("Rất tiếc, phim này chưa có trailer!");
      }
    });
  }

  // 2. Xử lý chuyển Tab
  const tabItems = document.querySelectorAll(".tab-item");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabItems.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();

      // Xóa active cũ
      document.querySelector(".tab-item.active")?.classList.remove("active");
      document.querySelector(".tab-pane.active")?.classList.remove("active");

      // Thêm active cho tab mới
      tab.classList.add("active");
      const targetTab = tab.getAttribute("data-tab");
      document.getElementById(`content-${targetTab}`)?.classList.add("active");
    });
  });

  // 3. Xử lý Modal Đăng nhập
  const btnLoginHeader = document.getElementById("btn-login-header");
  const loginModal = document.getElementById("login-modal");
  const btnCloseModal = document.getElementById("btn-close-modal");

  if (btnLoginHeader && loginModal) {
    btnLoginHeader.addEventListener("click", () => {
      loginModal.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  }

  if (btnCloseModal && loginModal) {
    btnCloseModal.addEventListener("click", () => {
      loginModal.classList.remove("show");
      document.body.style.overflow = "auto";
    });
  }
});
