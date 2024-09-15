document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;
    const emailValue = emailInput.value;
    if (!validateEmail(emailValue)) {
      emailError.textContent = "Email invalid";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    const passwordValue = passwordInput.value;
    const passwordStrength = checkPasswordStrength(passwordValue);

    if (passwordStrength != "Strong") {
      passwordError.textContent = `Password ${passwordStrength}`;
      isValid = false;
    } else {
      passwordError.textContent = "";
    }

    if (isValid) {
      alert("Login Success");
    }
  });
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function checkPasswordStrength(password) {
  // Panjang minimal 8 karakter
  if (password.length < 8) {
    return "is too short";
  }

  // Harus mengandung setidaknya satu huruf besar
  if (!/[A-Z]/.test(password)) {
    return "must include at least 1 uppercase";
  }

  // Harus mengandung setidaknya satu huruf kecil
  if (!/[a-z]/.test(password)) {
    return "must include at least 1 lowercase";
  }

  // Harus mengandung setidaknya satu angka
  if (!/[0-9]/.test(password)) {
    return "must include at least 1 number";
  }

  return "Strong";
}

function togglePassword() {
  let passwordField = document.getElementById("password");
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}
