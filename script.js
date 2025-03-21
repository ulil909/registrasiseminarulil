document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("regForm");
    const submitBtn = document.getElementById("submitBtn");
    const successMsg = document.getElementById("successMsg");

    const nama = document.getElementById("nama");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const dob = document.getElementById("dob");
    const phone = document.getElementById("phone");

    const namaError = document.getElementById("namaError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const dobError = document.getElementById("dobError");
    const phoneError = document.getElementById("phoneError");

    function validateForm() {
        let isValid = true;

        if (nama.value.length < 3) {
            namaError.textContent = "Nama minimal 3 karakter";
            isValid = false;
        } else {
            namaError.textContent = "";
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            emailError.textContent = "Format email tidak valid";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        if (password.value.length < 8) {
            passwordError.textContent = "Password minimal 8 karakter";
            isValid = false;
        } else {
            passwordError.textContent = "";
        }

        if (confirmPassword.value !== password.value) {
            confirmPasswordError.textContent = "Password tidak cocok";
            isValid = false;
        } else {
            confirmPasswordError.textContent = "";
        }

        const birthYear = new Date(dob.value).getFullYear();
        if (birthYear > 2006 || !dob.value) {
            dobError.textContent = "Tidak boleh melebihi 2006";
            isValid = false;
        } else {
            dobError.textContent = "";
        }

        const phonePattern = /^[0-9]{8,11}$/;
        if (!phonePattern.test(phone.value)) {
            phoneError.textContent = "Format nomor HP tidak valid (Indonesia)";
            isValid = false;
        } else {
            phoneError.textContent = "";
        }

        submitBtn.disabled = !isValid;
    }

    form.addEventListener("input", validateForm);

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        successMsg.style.display = "block";
        form.reset();
        submitBtn.disabled = true;
    });
});
