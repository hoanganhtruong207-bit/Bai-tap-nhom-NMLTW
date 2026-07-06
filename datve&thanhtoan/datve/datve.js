
let selectedSeats = [];
let totalPrice = 0;

document.addEventListener("DOMContentLoaded", () => {
    initDates();
    initTheaters();
    initSeats();
});

// Tạo danh sách ngày
function initDates() {
    const dateList = document.getElementById('date-list');
    const today = new Date();
    const daysOfWeek = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

    for (let i = 0; i < 7; i++) {
        let d = new Date(today);
        d.setDate(today.getDate() + i);
        
        let day = d.getDate().toString().padStart(2, '0');
        let month = (d.getMonth() + 1).toString().padStart(2, '0');
        
        let btn = document.createElement('button');
        btn.className = 'btn-select' + (i === 0 ? ' active' : '');
        btn.innerHTML = `${day}/${month}<br>${daysOfWeek[d.getDay()]}`;
        
        btn.onclick = function() {
            document.querySelectorAll('#date-list .btn-select').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        };
        dateList.appendChild(btn);
    }
}

// 2. Xử lý click chọn rạp
function initTheaters() {
    document.querySelectorAll('#theater-list .btn-select').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('#theater-list .btn-select').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Chuyển đổi giữa bước 1 và bước 2
function goToStep2(time) {
    // Cập nhật thông tin rạp và thời gian
    const activeTheater = document.querySelector('#theater-list .active').innerText;
    const dateMonth = document.querySelector('#date-list .active').innerHTML.split('<br>')[0];
    const currentYear = new Date().getFullYear();
    document.getElementById('info-theater').innerText = activeTheater;
    document.getElementById('info-time').innerText = time;
    document.getElementById('info-date').innerText = dateMonth + '/' + currentYear;
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
}

function goToStep1() {
    document.getElementById('step1').style.display = 'block';
    document.getElementById('step2').style.display = 'none';
}

//Khởi tạo sơ đồ ghế
function initSeats() {
    const seatMap = document.getElementById('seat-map');
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    rows.forEach(row => {
        let rowDiv = document.createElement('div');
        rowDiv.className = 'seat-row';
        
        // Nhãn hàng A, B, C..
        let rowLabel = document.createElement('div');
        rowLabel.className = 'row-label';
        rowLabel.innerText = row;
        rowDiv.appendChild(rowLabel);

        // Hàng H là Sweetbox (5 ghế đôi), các hàng khác 10 ghế
        let numSeats = (row === 'H') ? 5 : 10;

        for (let i = 1; i <= numSeats; i++) {
            let seat = document.createElement('div');
            let typeClass = '';
            let price = 0;

            // Phân loại ghế
            if (row >= 'A' && row <= 'D') { typeClass = 'thuong'; price = 50000; }
            else if (row >= 'E' && row <= 'G') { typeClass = 'vip'; price = 70000; }
            else if (row === 'H') { typeClass = 'sweetbox'; price = 100000; }

            seat.className = `seat ${typeClass}`;
            seat.dataset.id = `${row}${i}`;
            seat.dataset.price = price;
            seat.innerText = i;

            // Giả lập 20% ghế đã được mua
            if (Math.random() < 0.2) {
                seat.className = 'seat sold';
            }

            seat.onclick = () => toggleSeat(seat);
            rowDiv.appendChild(seat);
        }
        seatMap.appendChild(rowDiv);
    });
}

// 5. Logic chọn/bỏ chọn ghế
function toggleSeat(seat) {
    if (seat.classList.contains('sold')) return; // Không cho chọn ghế đã bán

    const seatId = seat.dataset.id;
    const price = parseInt(seat.dataset.price);

    if (seat.classList.contains('selected')) {
        seat.classList.remove('selected');
        selectedSeats = selectedSeats.filter(id => id !== seatId);
        totalPrice -= price;
    } else {
        seat.classList.add('selected');
        selectedSeats.push(seatId);
        totalPrice += price;
    }
    
    updateBookingInfo();
}

//Cập nhật thông tin dưới Action Bar
function updateBookingInfo() {
    document.getElementById('info-seats').innerText = selectedSeats.length > 0 ? selectedSeats.join(', ') : 'Chưa chọn';
    document.getElementById('info-total').innerText = totalPrice.toLocaleString('vi-VN') + ' đ';
}

//Xử lý nút Thanh toan
function checkout() {

     const movieName =
        localStorage.getItem("movieName");

    const cinema =
        document.querySelector("#theater-list .active").innerText;

    const showtime =
        document.getElementById("info-time").innerText;

    const seatList =
        document.getElementById("info-seats").innerText;

    const totalPrice =
        parseInt(
            document.getElementById("info-total")
            .innerText
            .replace(/[^\d]/g, "")
        );

    let ticketCount;

    if (seatList === "") {
        ticketCount = 0;
    } else {
        ticketCount = seatList.split(",").length;
    }

    localStorage.setItem("movieName", movieName);
    localStorage.setItem("cinema", cinema);
    localStorage.setItem("showtime", showtime);
    localStorage.setItem("seatList", seatList);
    localStorage.setItem("ticketCount", ticketCount);
    localStorage.setItem("totalPrice", totalPrice);

    window.location.href = "../thanhtoan/index.html";
}