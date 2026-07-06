// ==========================================================
// 1. TỰ ĐỘNG NHẬN DỮ LIỆU TỪ TRANG CHI TIẾT PHIM (localStorage)
// ==========================================================
document.addEventListener("DOMContentLoaded", () => {
    loadBookingData();
});

function loadBookingData() {
    // Đọc dữ liệu từ localStorage được truyền từ trang chi tiết phim qua
    const bookingInfo = {
        movieName: localStorage.getItem("movieName") || "Chưa chọn phim",
        cinema: localStorage.getItem("cinema") || "CineGo Cinema",
        showtime: localStorage.getItem("showtime") || "Chưa chọn suất chiếu",
        seatList: localStorage.getItem("seatList") || "Chưa chọn ghế",
        ticketCount: parseInt(localStorage.getItem("ticketCount")) || 0,
        totalPrice: parseFloat(localStorage.getItem("totalPrice")) || 0
    };

    // Hiển thị ra các thẻ HTML tương ứng
    document.getElementById("movieName").innerText = bookingInfo.movieName;
    document.getElementById("cinema").innerText = bookingInfo.cinema;
    document.getElementById("showtime").innerText = bookingInfo.showtime;
    document.getElementById("seatList").innerText = bookingInfo.seatList;
    document.getElementById("ticketCount").innerText = bookingInfo.ticketCount + " vé";

    // Định dạng số tiền thành định dạng VNĐ (Ví dụ: 120.000đ)
    const formattedPrice = bookingInfo.totalPrice.toLocaleString("vi-VN") + "đ";
    document.getElementById("ticketPrice").innerText = formattedPrice;
    document.getElementById("totalPrice").innerText = formattedPrice;
}

// ==========================================================
// 2. XỬ LÝ HÀNH ĐỘNG KHI BẤM NÚT "XÁC NHẬN THANH TOÁN"
// ==========================================================
function payTicket() {
    // Kiểm tra xem người dùng đã tích chọn phương thức thanh toán chưa
    const selectedPayment = document.querySelector('input[name="payment"]:checked');

    if (!selectedPayment) {
        alert("⚠️ Hệ thống: Vui lòng lựa chọn một phương thức thanh toán trước khi tiếp tục!");
        return;
    }

    // Lưu phương thức thanh toán vừa chọn vào bộ nhớ để trang hóa đơn lấy ra dùng
    localStorage.setItem("chosenPayment", selectedPayment.value);

    // Chuyển hướng thẳng sang trang thông báo thành công success.html
    window.location.href = "success.html";
}