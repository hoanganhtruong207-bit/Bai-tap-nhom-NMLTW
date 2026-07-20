document.addEventListener("DOMContentLoaded", function () {
  
  // === 1. XỬ LÝ CHUYỂN ĐỔI ẨN / HIỆN POSTER VÀ TRAILER ===
  const watchMovieBtn = document.getElementById("btn-open-player");
  const posterImg = document.getElementById("poster-img");
  const posterTrailer = document.getElementById("poster-trailer");

  if (watchMovieBtn && posterImg && posterTrailer) {
    watchMovieBtn.addEventListener("click", function () {
      // Kiểm tra trạng thái hiển thị hiện tại của Trailer
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

  // === 2. XỬ LÝ ĐỔI TAB NỘI DUNG (TỔNG QUAN / CHI TIẾT) ===
  const tabItems = document.querySelectorAll(".movie-tabs .tab-item");
  const tabPanes = document.querySelectorAll(".tab-contents .tab-pane");

  tabItems.forEach(function (tab) {
    tab.addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn hành vi cuộn mặc định của đường dẫn neo #

      // Xóa trạng thái active cũ và thêm active vào tab vừa click
      tabItems.forEach(item => item.classList.remove("active"));
      this.classList.add("active");

      // Ẩn tất cả các khối nội dung tab hiện tại
      tabPanes.forEach(pane => pane.style.display = "none");

      // Xác định id đích từ thuộc tính data-tab để hiển thị khối phù hợp
      const targetTabId = this.getAttribute("data-tab");
      const targetContent = document.getElementById("content-" + targetTabId);

      if (targetContent) {
        targetContent.style.display = "block";
      }
    });
  });
});
