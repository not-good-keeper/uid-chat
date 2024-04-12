import { auth } from "./script.js";

const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = registerForm["email"].value;
    const password = registerForm["password"].value;
    const confirmPassword = registerForm["confirm-password"].value;

    if (password !== confirmPassword) {
        console.error("Passwords do not match");
        // Show an error message
        return;
    }

    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        console.log("Registered:", userCredential.user);
        // Redirect to homepage
        window.location.href = "home.html";
    } catch (error) {
        console.error("Registration error:", error.message);
        // Show an error message
    }
});
