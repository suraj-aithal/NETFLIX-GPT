// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu3POah54AH_ooWt4LO28nmxsnoHKFT34",
  authDomain: "netflixgpt-a4a50.firebaseapp.com",
  projectId: "netflixgpt-a4a50",
  storageBucket: "netflixgpt-a4a50.appspot.com",
  messagingSenderId: "838603315466",
  appId: "1:838603315466:web:22149bf03ab9c99cb082f3",
  measurementId: "G-01WSQCHE73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();