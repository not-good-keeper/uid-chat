import { initializeApp } from "firebase/app";

const encryptedApiKey = require('../apiKey.json.enc');
const encryptedAuthDomain = require('../authDomain.json.enc');
const encryptedDatabaseURL = require('../databaseURL.json.enc');
const encryptedProjectId = require('../projectId.json.enc');
const encryptedStorageBucket = require('../storageBucket.json.enc');
const encryptedMessagingSenderId = require('../messagingSenderId.json.enc');
const encryptedAppId = require('../appId.json.enc');

const firebaseConfig = {
  apiKey: decrypt(encryptedApiKey),
  authDomain: decrypt(encryptedAuthDomain),
  databaseURL: decrypt(encryptedDatabaseURL),
  projectId: decrypt(encryptedProjectId),
  storageBucket: decrypt(encryptedStorageBucket),
  messagingSenderId: decrypt(encryptedMessagingSenderId),
  appId: decrypt(encryptedAppId)
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ... rest of your code


// Now you can use app, auth, db, and storage as you have them
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();


// Initialize Firebase


export { auth, db, storage };
