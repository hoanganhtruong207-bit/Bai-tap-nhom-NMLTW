// Chuyển đổi qua lại giữa Form Đăng nhập và Đăng ký
function switchForm(formType) {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  // Reset các class lỗi khi chuyển đổi form
  document.querySelectorAll(".input-group").forEach((group) => {
    group.classList.remove("invalid", "valid");
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

// Xử lý sự kiện Submit Form Đăng Nhập
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn trang bị reload lại

  const user = document.getElementById("loginUser");
  const pass = document.getElementById("loginPass");
  let isValid = true;

  // Kiểm tra rỗng ô tài khoản
  if (user.value.trim() === "") {
    user.parentElement.classList.add("invalid");
    isValid = false;
  } else {
    user.parentElement.classList.remove("invalid");
    user.parentElement.classList.add("valid");
  }

  // Kiểm tra rỗng ô mật khẩu
  if (pass.value.trim() === "") {
    pass.parentElement.classList.add("invalid");
    isValid = false;
  } else {
    pass.parentElement.classList.remove("invalid");
    pass.parentElement.classList.add("valid");
  }

  // Nếu thông tin đầy đủ, bắn alert thành công đúng mẫu ảnh số 4
  if (isValid) {
    alert("You have submitted successfully. Thank you.");
  }
});

// Xử lý sự kiện Submit Form Đăng Ký
document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const phone = document.getElementById("regPhone");
    const name = document.getElementById("regName");
    const pass = document.getElementById("regPass");
    const confirmPass = document.getElementById("regConfirmPass");

    const phoneError = document.getElementById("regPhoneError");
    const nameError = document.getElementById("regNameError");
    const passError = document.getElementById("regPassError");
    const confirmPassError = document.getElementById("regConfirmPassError");

    let isValid = true;

    // Validate Số điện thoại
    if (phone.value.trim() === "") {
      phoneError.innerText = "This field is required.";
      phone.parentElement.className = "input-group invalid";
      isValid = false;
    } else {
      phone.parentElement.className = "input-group valid";
    }

    // Validate Họ tên
    if (name.value.trim() === "") {
      nameError.innerText = "This field is required.";
      name.parentElement.className = "input-group invalid";
      isValid = false;
    } else {
      name.parentElement.className = "input-group valid";
    }

    // Validate Mật khẩu
    if (pass.value.trim() === "") {
      passError.innerText = "This field is required.";
      pass.parentElement.className = "input-group invalid";
      isValid = false;
    } else {
      pass.parentElement.className = "input-group valid";
    }

    // Validate Nhập lại mật khẩu khớp hay không
    if (confirmPass.value.trim() === "") {
      confirmPassError.innerText = "This field is required.";
      confirmPass.parentElement.className = "input-group invalid";
      isValid = false;
    } else if (confirmPass.value !== pass.value) {
      confirmPassError.innerText = "Wrong Password."; // Hiển thị lỗi khớp như mẫu ảnh số 3
      confirmPass.parentElement.className = "input-group invalid";
      isValid = false;
    } else {
      confirmPass.parentElement.className = "input-group valid";
    }

    // Bắn alert thành công khi thông tin đăng ký hợp lệ
    if (isValid) {
      alert("You have submitted successfully. Thank you.");
    }
  });
