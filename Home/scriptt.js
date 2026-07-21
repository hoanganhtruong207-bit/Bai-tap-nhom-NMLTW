// 1. KHAI BÁO CÁC PHẦN TỬ DOM

const elFormLogin = document.getElementById("loginForm");
const elFormRegister = document.getElementById("registerForm");

// Các ô nhập liệu Form Đăng Nhập
const elUserLogin = document.getElementById("loginUser");
const elPassLogin = document.getElementById("loginPass");

// Các ô nhập liệu Form Đăng Ký
const elPhoneReg = document.getElementById("regPhone");
const elNameReg = document.getElementById("regName");
const elPassReg = document.getElementById("regPass");
const elConfirmPassReg = document.getElementById("regConfirmPass");

// 2. CÁC HÀM TIỆN ÍCH & GIAO DIỆN

// Chuyển đổi qua lại giữa Form Đăng nhập và Đăng ký
function switchForm(formType) {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  // Reset các class lỗi/thành công khi chuyển đổi form theo class ".input-box"
  document.querySelectorAll(".input-box").forEach((box) => {
    box.classList.remove("invalid", "valid", "error", "success");
    // Xóa luôn nội dung lỗi cũ nếu có
    const msgEl = box.querySelector(".message");
    if (msgEl) msgEl.textContent = "";
  });

  if (formType === "register") {
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
  } else {
    registerForm.classList.remove("active");
    loginForm.classList.add("active");
  }
}

// Ẩn / Hiện mật khẩu khi bấm vào icon mắt
function togglePassword(inputId, icon) {
  const input = document.getElementById(inputId);
  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
}

// 3. CÁC HÀM HIỂN THỊ THÔNG BÁO

// Hàm hiển thị lỗi
function errorMessage(elmt, message) {
  const inputbox = elmt.parentElement;
  if (inputbox.classList.contains("success")) {
    inputbox.classList.remove("success");
  }
  inputbox.classList.add("error");

  const msgEl = inputbox.querySelector(".message");
  if (msgEl) {
    msgEl.textContent = message;
  }
}

// Hàm hiển thị thành công
function successMessage(elmt) {
  const inputbox = elmt.parentElement;
  if (inputbox.classList.contains("error")) {
    inputbox.classList.remove("error");
  }
  inputbox.classList.add("success");
}

// 4. CÁC HÀM KIỂM TRA DỮ LIỆU (Validation)

// Kiểm tra rỗng chung
function checkEmpty(elmt) {
  if (elmt.value.trim() === "") {
    errorMessage(elmt, "This field is required.");
    return false;
  } else {
    successMessage(elmt);
    return true;
  }
}

// Kiểm tra trùng khớp mật khẩu (Đăng ký)
function checkConfirmPass(elmtConfirm, elmtPass) {
  if (elmtConfirm.value.trim() === "") {
    errorMessage(elmtConfirm, "This field is required.");
    return false;
  } else if (elmtConfirm.value !== elmtPass.value) {
    errorMessage(elmtConfirm, "Wrong Password.");
    return false;
  } else {
    successMessage(elmtConfirm);
    return true;
  }
}

// 5. XỬ LÝ SỰ KIỆN SUBMIT FORMS

// XỬ LÝ ĐĂNG KÝ 
if (elFormRegister) {
  elFormRegister.addEventListener("submit", (evt) => {
    evt.preventDefault();

    // Thực thi kiểm tra từng trường dữ liệu
    checkEmpty(elPhoneReg);
    checkEmpty(elNameReg);
    checkEmpty(elPassReg);
    checkConfirmPass(elConfirmPassReg, elPassReg);

    // Quét tất cả các ".input-box" trong form đăng ký để xác định trạng thái hợp lệ
    const inputboxes = elFormRegister.querySelectorAll(".input-box");
    let isValid = true;
    inputboxes.forEach((box) => {
      if (!box.classList.contains("success")) {
        isValid = false;
      }
    });

    if (isValid) {
      // Gom dữ liệu người dùng đăng ký hợp lệ
      const accountData = {
        phone: elPhoneReg.value.trim(),
        name: elNameReg.value.trim(),
        password: elPassReg.value,
      };

      // Lưu dữ liệu giả lập xuống localStorage dưới dạng chuỗi JSON
      localStorage.setItem("userAccount", JSON.stringify(accountData));

      alert("Đăng ký tài khoản thành công! Cảm ơn bạn.");

      // Tự động chuyển người dùng sang form đăng nhập để trải nghiệm liên tục
      switchForm("login");
    }
  });
}

// XỬ LÝ ĐĂNG NHẬP 
if (elFormLogin) {
  elFormLogin.addEventListener("submit", (evt) => {
    evt.preventDefault();

    // Kiểm tra rỗng trước khi xử lý logic đăng nhập
    const isUserNotEmpty = checkEmpty(elUserLogin);
    const isPassNotEmpty = checkEmpty(elPassLogin);

    if (isUserNotEmpty && isPassNotEmpty) {
      // Truy xuất dữ liệu tài khoản đã đăng ký từ localStorage
      const savedAccount = JSON.parse(localStorage.getItem("userAccount"));
      const inputUserVal = elUserLogin.value.trim();
      const inputPassVal = elPassLogin.value;

      // BƯỚC 1: Kiểm tra xem hệ thống đã có tài khoản nào đăng ký chưa

      if (!savedAccount) {
        alert("Tài khoản chưa tồn tại. Vui lòng đăng ký trước!");
        errorMessage(elUserLogin, "Account not found.");
        return;
      }

      // BƯỚC 2: Kiểm tra Tên đăng nhập hoặc Số điện thoại có khớp không
      const isUserMatch = (inputUserVal === savedAccount.name || inputUserVal === savedAccount.phone);

      if (!isUserMatch) {
        alert("Tài khoản chưa tồn tại. Vui lòng đăng ký trước!");
        errorMessage(elUserLogin, "Account not found.");
        return; // Dừng xử lý tại đây, không kiểm tra mật khẩu nữa
      }

      // BƯỚC 3: Nếu tên/SĐT đã chính xác -> Tiến hành kiểm tra mật khẩu
      if (inputPassVal === savedAccount.password) {
        alert("Đăng nhập thành công!");

        // Ghi nhận trạng thái đã đăng nhập bằng cách lưu tên người dùng
        localStorage.setItem("currentUser", savedAccount.name);

        // Cập nhật ngay lập tức giao diện thanh Home Bar
        updateHomeBar();
       
        // (Tùy chọn) Chuyển hướng sang trang giới thiệu hoặc trang chủ sau khi thành công
         window.location.href = "1.html";
        
      } else {
        alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
        errorMessage(elPassLogin, "Incorrect username or password.");
      }
    }
  });
}

// 6. XỬ LÝ TRẠNG THÁI HIỂN THỊ HOME BAR (NAVBAR)

function updateHomeBar() {
  const currentUser = localStorage.getItem("currentUser");
  const authZone = document.getElementById("auth-zone"); // Thẻ div bọc ngoài nút Đăng nhập trên Navbar

  if (currentUser && authZone) {
    // Thay đổi cấu trúc HTML bên trong auth-zone để hiển thị tên và nút đăng xuất đồng bộ với Navbar
    authZone.innerHTML = `
      <div class="user-logged-in" style="display: flex; align-items: center; gap: 12px;">
        <span style="color: #fff; font-size: 0.95rem; font-weight: 500;">
          Xin chào, <b style="color: #e52f2f;">${currentUser}</b>
        </span>
        <a href="#" id="logoutBtn" style="color: #ff4d4d; text-decoration: none; font-size: 0.85rem; font-weight: bold; border-left: 1px solid #555; padding-left: 12px; transition: color 0.2s;">
          Đăng xuất <i class="fas fa-sign-out-alt"></i>
        </a>
      </div>
    `;

    // Thêm sự kiện hover cho nút Đăng xuất (chuyển đỏ nhạt hơn khi di chuột vào)
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener(
        "mouseenter",
        () => (logoutBtn.style.color = "#ff8080"),
      );
      logoutBtn.addEventListener(
        "mouseleave",
        () => (logoutBtn.style.color = "#ff4d4d"),
      );

      // Xử lý sự kiện click Đăng xuất
      logoutBtn.addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.removeItem("currentUser");
        location.reload(); // Reset trạng thái Navbar về lại nút "Đăng nhập"
      });
    }
  }
}

// Chạy kiểm tra trạng thái đăng nhập để giữ tên người dùng hiển thị mỗi khi tải trang
document.addEventListener("DOMContentLoaded", updateHomeBar);
