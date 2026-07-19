// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "aaftl-plugins.firebaseapp.com",
  projectId: "aaftl-plugins",
  storageBucket: "aaftl-plugins.firebasestorage.app",
  messagingSenderId: "770027518471",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);