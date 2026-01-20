
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const messageBox = document.getElementById("message");
const forgotLink = document.getElementById("forgotPassword");

forgotLink.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Password reset functionality will be available soon.");
});

loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    messageBox.style.display = "block";
    if (email === "" || password === "") {
        messageBox.textContent = "All fields are required";
        messageBox.className = "message error";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        messageBox.textContent = "Please enter a valid email address";
        messageBox.className = "message error";
        return;
    }

    messageBox.textContent = "Login successful! Redirecting...";
    messageBox.className = "message success";

    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 800);
});
