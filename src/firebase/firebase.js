// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo6uvsXA9vEOHzfyuyIe-IPNWa6fZ5hSY",
  authDomain: "email-password-auth-9e33d.firebaseapp.com",
  projectId: "email-password-auth-9e33d",
  storageBucket: "email-password-auth-9e33d.firebasestorage.app",
  messagingSenderId: "872500527965",
  appId: "1:872500527965:web:12bc46a273db70d205deb4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
