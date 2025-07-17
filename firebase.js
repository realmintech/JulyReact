// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "my-project-c415e.firebaseapp.com",
  projectId: "my-project-c415e",
  storageBucket: "my-project-c415e.firebasestorage.app",
  messagingSenderId: "126960941569",
  appId: "1:126960941569:web:c6128fff6c475e4c4e1e00",
  measurementId: "G-1LFEX802DE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const rtdb = getDatabase(app); // for real-time location
export const storage = getStorage(app);
