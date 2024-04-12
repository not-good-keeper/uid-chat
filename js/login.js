import { auth } from "./script.js";

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = loginForm["email"].value;
    const password = loginForm["password"].value;

    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        console.log("Logged in:", userCredential.user);
        // Redirect to homepage
        window.location.href = "home.html";
    } catch (error) {
        console.error("Login error:", error.message);
        // Show an error message
    }
});
