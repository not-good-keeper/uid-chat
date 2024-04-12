import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "${{ secrets.FIREBASE_API_KEY }}",
  authDomain: "uidchat.firebaseapp.com",
  projectId: "uidchat",
  storageBucket: "uidchat.appspot.com",
  messagingSenderId: "283559039789",
  appId: "1:283559039789:web:c68696743f039b199639a4",
  databaseURL: "https://uidchat-default-rtdb.asia-southeast1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };




