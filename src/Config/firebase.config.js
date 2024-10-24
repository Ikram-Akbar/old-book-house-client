// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_L76cXtoSJL1XnkICZGkP9K71-SztCCs",
    authDomain: "old-book-house-a13c8.firebaseapp.com",
    projectId: "old-book-house-a13c8",
    storageBucket: "old-book-house-a13c8.appspot.com",
    messagingSenderId: "302893943305",
    appId: "1:302893943305:web:913bdcc3bd371df91686d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;