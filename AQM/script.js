document.addEventListener("DOMContentLoaded", function () {
  
  // === 1. XỬ LÝ CHUYỂN ĐỔI POSTER / TRAILER ===
  const watchMovieBtn = document.getElementById("btn-open-player");
  const posterImg = document.getElementById("poster-img");
  const posterTrailer = document.getElementById("poster-trailer");

  if (watchMovieBtn && posterImg && posterTrailer) {
    watchMovieBtn.addEventListener("click", function () {
      if (posterTrailer.style.display === "none" || posterTrailer.style.display === "") {
        posterImg.style.display = "none";
        posterTrailer.style.display = "block";
        watchMovieBtn.innerText = "◀ Xem Poster";
      } else {
        posterImg.style.display = "block";
        posterTrailer.style.display = "none";
        watchMovieBtn.innerText = "▶ Xem phim";
      }
    });
  }

  // === 2. XỬ LÝ ĐỔI TAB (TỔNG QUAN / CHI TIẾT) ===
  const tabItems = document.querySelectorAll(".movie-tabs .tab-item");
  const tabPanes = document.querySelectorAll(".tab-contents .tab-pane");

  tabItems.forEach(function (tab) {
    tab.addEventListener("click", function (event) {
      event.preventDefault(); // Chặn hành vi cuộn trang của thẻ <a>

      // Cập nhật trạng thái active trên giao diện tab bấm
      tabItems.forEach(item => item.classList.remove("active"));
      this.classList.add("active");

      // Ẩn tất cả các nội dung tab
      tabPanes.forEach(pane => pane.style.display = "none");

      // Lấy id đích và hiển thị nội dung được chọn
      const targetTabId = this.getAttribute("data-tab");
      const targetContent = document.getElementById("content-" + targetTabId);

      if (targetContent) {
        targetContent.style.display = "block";
      }
    });
  });
});
