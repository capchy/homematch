// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-93648.firebaseapp.com",
  projectId: "mern-estate-93648",
  storageBucket: "mern-estate-93648.appspot.com",
  messagingSenderId: "250215171081",
  appId: "1:250215171081:web:173169dceb7e20d52324d8",
 
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);