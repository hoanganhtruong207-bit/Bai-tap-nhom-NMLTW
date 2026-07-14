document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);

  // 1. Lấy ID từ URL, nếu không có thì mặc định là "tiec-trang-mau"
  const movieId = urlParams.get("id") || "tiec-trang-mau";

  // 2. Tìm phim trong mảng allMovies (đảm bảo file chứa allMovies đã được load trước file này)
  const movie = allMovies.find((m) => m.id === movieId);

  if (movie) {
    // 3. Ghi đè thông tin cơ bản
    document.querySelector(".movie-title").innerText = movie.title;
    document.querySelector(".movie-description").innerText =
      movie.description || "";
    document.querySelector(".rating-value").innerText = movie.rating || "N/A";

    const detailContent = document.querySelector(".movie-detail-content");
    if (detailContent)
      detailContent.innerText = movie.detailInfo || "Đang cập nhật...";

    // 4. Ghi đè các thông số kỹ thuật
    document.querySelector(".year").innerText = movie.year || "";
    document.querySelector(".age-limit").innerText = movie.ageRestriction || "";
    document.querySelector(".duration").innerText = movie.duration || "";
    document.querySelector(".quality").innerText = movie.quality || "";

    // 5. Ghi đè ảnh
    const posterImg = document.querySelector("#movie-poster-img");
    if (posterImg) posterImg.src = movie.image;

    const backdrop = document.querySelector(".banner-backdrop");
    if (backdrop) backdrop.style.backgroundImage = `url(${movie.image})`;

    // 6. Render Lịch Chiếu
    const scheduleList = document.getElementById("schedule-list");
    if (scheduleList) {
      // Vì tất cả phim đều đã có schedule (nhờ bước auto-gán ở data.js),
      // bạn không cần kiểm tra if (movie.schedule) nữa, nó luôn tồn tại.
      scheduleList.innerHTML = `
        <div class="time-grid">
            ${movie.schedule.map((time) => `<button class="time-btn">${time}</button>`).join("")}
        </div>
      `;
    }
    // Gọi hàm render phim liên quan
    renderRelatedMovies(movie.id);
  } else {
    console.error("Không tìm thấy phim với ID:", movieId);
  }
});

function renderRelatedMovies(currentMovieId) {
  const moviesGrid = document.querySelector(".movies-grid");
  if (!moviesGrid) return;

  // 1. Làm sạch ID phim hiện tại
  const cleanCurrentId = String(currentMovieId).trim();

  // 2. Lọc bỏ phim hiện tại khỏi danh sách
  let otherMovies = allMovies.filter(
    (m) => String(m.id).trim() !== cleanCurrentId,
  );

  // 3. Xáo trộn ngẫu nhiên danh sách
  for (let i = otherMovies.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [otherMovies[i], otherMovies[j]] = [otherMovies[j], otherMovies[i]];
  }

  // 4. Render tối đa 5 phim liên quan
  moviesGrid.innerHTML = otherMovies
    .slice(0, 5)
    .map(
      (movie) => `
    <div class="movie-card">
        <a href="index.html?id=${movie.id}">
            <img src="${movie.image}" alt="${movie.title}">
            <h3 class="movie-card-title">${movie.title}</h3>
        </a>
    </div>
  `,
    )
    .join("");
}
