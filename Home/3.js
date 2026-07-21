/**
 * CREW3 CINEMA - MAIN JAVASCRIPT ENGINE
 * Quy chuẩn: Sử dụng Event Listener, Class Manipulation và DOM Traversal
 */

document.addEventListener("DOMContentLoaded", () => {
  // =========================================================================
  // 1. TÍNH CHẤT JS: XỬ LÝ HIỆU ỨNG HOVER TRÊN HEADER (CLASS MANIPULATION)
  // =========================================================================
  const headerLinks = document.querySelectorAll(
    ".horizontal-nav__link, .login",
  );

  headerLinks.forEach((link) => {
    // Cài đặt hiệu ứng chuyển động mượt mà sẵn bằng thuộc tính JS
    link.style.transition = "all 0.3s ease";

    // Lắng nghe hành vi di chuột vào -> Kích hoạt công tắc Class
    link.addEventListener("mouseenter", () => {
      link.classList.add("header-link--hover");
    });

    // Lắng nghe hành vi di chuột ra -> Tắt công tắc Class
    link.style.transformOrigin = "center";
    link.addEventListener("mouseleave", () => {
      link.classList.remove("header-link--hover");
    });
  });

  // =========================================================================
  // 2. TÍNH CHẤT RESPONSIVE: TỰ ĐỘNG ĐIỀU CHỈNH KÍCH THƯỚC KHI KÉO RA KÉO VÀO
  // =========================================================================
  function handleWindowResize() {
    const currentWidth = window.innerWidth;
    const pageBody = document.body;

    // Cơ chế tính toán cỡ chữ linh hoạt dựa trên độ rộng thực tế của trình duyệt
    if (currentWidth > 1200) {
      pageBody.style.fontSize = "16px";
    } else if (currentWidth <= 1200 && currentWidth > 768) {
      pageBody.style.fontSize = "14.5px"; // Giảm nhẹ cho màn hình Tablet
    } else {
      pageBody.style.fontSize = "13px"; // Thu nhỏ chữ để không vỡ dòng trên Mobile
    }
  }

  // Kích hoạt ngay khi tải trang và liên tục lắng nghe mỗi khi người dùng co giãn cửa sổ
  handleWindowResize();
  window.addEventListener("resize", handleWindowResize);

  // =========================================================================
  // 4. TÍNH NĂNG SEARCH ENGINE: TÌM KIẾM, ĐẨY MÀN HÌNH VÀ HIGHLIGHT PHIM
  // =========================================================================
  const searchField = document.querySelector(".form-search_input");
  const searchSubmitBtn = document.querySelector(".form-search_button");
  const movieItems = document.querySelectorAll(".list__item");

  function executeMovieSearch() {
    const queryClean = searchField.value.trim().toLowerCase();

    if (queryClean === "") {
      alert("Bạn chưa nhập tên bộ phim cần tìm kiếm!");
      return;
    }

    let matchCount = 0;

    movieItems.forEach((item) => {
      const boldTextTitle = item.querySelector("b");

      if (boldTextTitle) {
        const pureMovieName = boldTextTitle.innerText.toLowerCase();

        if (pureMovieName.includes(queryClean)) {
          matchCount++;
          // Đúng tính chất JS: Thêm class highlight được định nghĩa từ CSS vào
          item.classList.add("list__item--highlight");

          // Cuộn trang mượt mà đưa bộ phim đó ra chính giữa tầm mắt người dùng
          item.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
          // Xóa bỏ trạng thái nổi bật nếu không trùng từ khóa ở lượt tìm kiếm mới
          item.classList.remove("list__item--highlight");
        }
      }
    });

    // Đưa ra thông báo dựa trên số lượng phim tìm thấy
    if (matchCount === 0) {
      alert(
        `Rạp không tìm thấy siêu phẩm nào khớp với từ khóa: "${searchField.value}"`,
      );
    }
  }

  // Gắn cổng sự kiện Click cho nút kính lúp
  if (searchSubmitBtn && searchField) {
    searchSubmitBtn.addEventListener("click", executeMovieSearch);

    // Gắn cổng sự kiện gõ Enter trực tiếp trong ô Input
    searchField.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        event.preventDefault(); // Triệt tiêu hành vi tải lại trang mặc định của thẻ <form>
        executeMovieSearch();
      }
    });
  }

  // =========================================================================
  // 5. TÍNH NĂNG ĐỒNG BỘ DỮ LIỆU: LƯU TÊN PHIM VÀO LOCALSTORAGE KHI CLICK
  // =========================================================================

  // Hướng xử lý A: Người dùng click thẳng vào một trong các Banner đang chạy
  movieBanners.forEach((banner) => {
    const anchorTag = banner.querySelector("a");
    const imageTag = banner.querySelector("img");

    if (anchorTag && imageTag) {
      anchorTag.addEventListener("click", (e) => {
        // Đọc thuộc tính alt để biết chính xác là phim gì
        const targetedMovie = imageTag.getAttribute("alt");
        // Gửi tên phim lên bộ nhớ trình duyệt
        localStorage.setItem("movieName", targetedMovie);
        console.log(`Đã đồng bộ phim [${targetedMovie}] lên LocalStorage.`);
      });
    }
  });

  // Hướng xử lý B: Người dùng click vào tên phim trong Danh sách phim nổi bật
  movieItems.forEach((item) => {
    const clickableTitle = item.querySelector("b");
    if (clickableTitle) {
      clickableTitle.style.cursor = "pointer";
      clickableTitle.addEventListener("click", () => {
        const textMovieName = clickableTitle.innerText;
        localStorage.setItem("movieName", textMovieName);
        alert(
          `Hệ thống ghi nhận: Bạn đã chọn phim "${textMovieName}". Hãy sang trang lịch chiếu/đặt vé!`,
        );
      });
    }
  });
});
