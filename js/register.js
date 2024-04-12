import { auth, db } from "./script.js";

// Elements
const registerForm = document.getElementById("register-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("passwordr");
const confirmPasswordInput = document.getElementById("confirmPassword");
const displayNameInput = document.getElementById("displayName");
const registerError = document.getElementById("register-error");

// Register event
registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const displayName = displayNameInput.value;

    if (password !== confirmPassword) {
        registerError.textContent = "Passwords do not match";
        return;
    }

    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        
        // Update display name
        await user.updateProfile({
            displayName: displayName
        });

        // Create user document in Firestore
        await db.collection("users").doc(user.uid).set({
            displayName: displayName,
            email: email
        });

        console.log("User registered and logged in:", user.uid);
        // Redirect to home page
        window.location.href = "home.html";
    } catch (error) {
        console.error("Registration error:", error.message);
        registerError.textContent = error.message;
    }
});
