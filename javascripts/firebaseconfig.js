import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js";



const firebaseConfig = {
  apiKey: "AIzaSyArHdqXrPK-9Z9_XJhuQ75-4t0Nt-HfU2g",
  authDomain: "spread-the-islam.firebaseapp.com",
  projectId: "spread-the-islam",
  storageBucket: "spread-the-islam.appspot.com",
  messagingSenderId: "522543136574",
  appId: "1:522543136574:web:ef38653df23d034f5f366f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

