document.addEventListener("DOMContentLoaded", () => {
  //  Xử lý chuyển Tab
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
});
