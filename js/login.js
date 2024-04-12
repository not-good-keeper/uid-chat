import { auth } from "./script.js";

// Elements
const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginError = document.getElementById("login-error");

// Login event
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const email = emailInput.value;
    const password = passwordInput.value;

    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        console.log("User logged in:", userCredential.user.uid);
        // Redirect to home page
        window.location.href = "home.html";
    } catch (error) {
        console.error("Login error:", error.message);
        loginError.textContent = error.message;
    }
});
