import { auth, db } from "./script.js";

// Elements
const logoutBtn = document.getElementById("logout");
const chatRoomsSection = document.getElementById("chatRooms");
const directMessagesSection = document.getElementById("directMessages");

// Logout event
logoutBtn.addEventListener("click", async () => {
    try {
        await auth.signOut();
        console.log("User logged out");
        // Redirect to login page
        window.location.href = "login.html";
    } catch (error) {
        console.error("Logout error:", error.message);
    }
});

// Function to fetch and display chat rooms
const displayChatRooms = async () => {
    try {
        const querySnapshot = await db.collection("chatRooms").get();
        
        chatRoomsSection.innerHTML = ""; // Clear previous data

        querySnapshot.forEach((doc) => {
            const room = doc.data();
            const roomElement = document.createElement("div");
            roomElement.innerHTML = `
                <a href="chatroom.html?roomId=${doc.id}">
                    <h3>${room.name}</h3>
                    <p>${room.description}</p>
                </a>
            `;
            chatRoomsSection.appendChild(roomElement);
        });
    } catch (error) {
        console.error("Error fetching chat rooms:", error.message);
    }
};

// Function to fetch and display direct messages
const displayDirectMessages = async () => {
    try {
        const userId = auth.currentUser.uid;
        const querySnapshot = await db.collection("users").doc(userId).collection("directMessages").get();
        
        directMessagesSection.innerHTML = ""; // Clear previous data

        querySnapshot.forEach((doc) => {
            const message = doc.data();
            const messageElement = document.createElement("div");
            messageElement.innerHTML = `
                <a href="chatroom.html?roomId=${doc.id}">
                    <h3>${message.receiverName}</h3>
                    <p>Last message: ${message.lastMessage}</p>
                </a>
            `;
            directMessagesSection.appendChild(messageElement);
        });
    } catch (error) {
        console.error("Error fetching direct messages:", error.message);
    }
};

// Initial functions call
displayChatRooms();
displayDirectMessages();
