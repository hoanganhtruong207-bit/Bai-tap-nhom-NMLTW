// ==========================
// NHẬN DỮ LIỆU TỪ CÁC TRANG TRƯỚC
// ==========================

const movieName =
localStorage.getItem("movieName") || "Chưa chọn phim";

const cinema =
localStorage.getItem("cinema") || "CGV CineGo";

const showtime =
localStorage.getItem("showtime") || "Chưa có suất chiếu";

const seatList =
localStorage.getItem("seatList") || "Chưa chọn ghế";

const ticketCount =
localStorage.getItem("ticketCount") || 0;

const totalPrice =
localStorage.getItem("totalPrice") || 0;


// ==========================
// HIỂN THỊ THÔNG TIN
// ==========================

document.getElementById("movieName").innerText =
movieName;

document.getElementById("cinema").innerText =
cinema;

document.getElementById("showtime").innerText =
showtime;

document.getElementById("seatList").innerText =
seatList;

document.getElementById("ticketCount").innerText =
ticketCount + " vé";

document.getElementById("ticketPrice").innerText =
Number(totalPrice).toLocaleString("vi-VN") + "đ";

document.getElementById("totalPrice").innerText =
Number(totalPrice).toLocaleString("vi-VN") + "đ";


// ==========================
// THANH TOÁN
// ==========================

function payTicket(){

    const paymentMethod =
    document.querySelector(
        'input[name="payment"]:checked'
    );

    if(!paymentMethod){

        alert(
            "Vui lòng chọn phương thức thanh toán!"
        );

        return;
    }

    alert(
        "🎉 Thanh toán thành công!\n\n" +
        "Phim: " + movieName +
        "\nGhế: " + seatList +
        "\nSố lượng vé: " + ticketCount +
        "\nTổng tiền: " +
        Number(totalPrice)
        .toLocaleString("vi-VN") + "đ"
    );

    localStorage.clear();
}


// ==========================
// QUAY LẠI
// ==========================

document.querySelector(".back-btn")
.addEventListener("click", () => {

    history.back();

});