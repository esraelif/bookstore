// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAraihi_Z6aV9ayDD1LmhuTgL9yPolly4U",
    authDomain: "mern-book-store-36bd5.firebaseapp.com",
    projectId: "mern-book-store-36bd5",
    storageBucket: "mern-book-store-36bd5.appspot.com",
    messagingSenderId: "67804204764",
    appId: "1:67804204764:web:e13f3c4ab930bedd6c6e19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;