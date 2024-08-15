// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAh_Mb9R-KxNJ8edrP_NcQZ1yh8ILyJ4Yc",
  authDomain: "netflixgpt-4821e.firebaseapp.com",
  projectId: "netflixgpt-4821e",
  storageBucket: "netflixgpt-4821e.appspot.com",
  messagingSenderId: "559977760374",
  appId: "1:559977760374:web:62a078fbc69cb55a328157",
  measurementId: "G-0EFVV23CCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);