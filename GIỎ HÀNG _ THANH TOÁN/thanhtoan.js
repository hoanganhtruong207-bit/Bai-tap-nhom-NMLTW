document.addEventListener("DOMContentLoaded", () => {
    loadBookingData();
});

function loadBookingData() {
    const bookingInfo = {
        movieName: localStorage.getItem("movieName") || "Chưa chọn phim",
        cinema: localStorage.getItem("cinema") || "CineGo Cinema",
        showtime: localStorage.getItem("showtime") || "Chưa chọn suất chiếu",
        seatList: localStorage.getItem("seatList") || "Chưa chọn ghế",
        ticketCount: parseInt(localStorage.getItem("ticketCount")) || 0,
        totalPrice: parseFloat(localStorage.getItem("totalPrice")) || 0
    };
    document.getElementById("movieName").innerText = bookingInfo.movieName;
    document.getElementById("cinema").innerText = bookingInfo.cinema;
    document.getElementById("showtime").innerText = bookingInfo.showtime;
    document.getElementById("seatList").innerText = bookingInfo.seatList;
    document.getElementById("ticketCount").innerText = bookingInfo.ticketCount + " vé";
    const formattedPrice = bookingInfo.totalPrice.toLocaleString("vi-VN") + "đ";
    document.getElementById("ticketPrice").innerText = formattedPrice;
    document.getElementById("totalPrice").innerText = formattedPrice;
}
function payTicket() {
    const selectedPayment = document.querySelector('input[name="payment"]:checked');

    if (!selectedPayment) {
        alert("⚠️ Hệ thống: Vui lòng lựa chọn một phương thức thanh toán trước khi tiếp tục!");
        return;
    }
    localStorage.setItem("chosenPayment", selectedPayment.value);
    window.location.href = "success.html";
}