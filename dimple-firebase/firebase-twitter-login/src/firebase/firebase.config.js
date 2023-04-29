// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxKfnhIkZ8N0vwCmXGV9tNqVDnMI54m9o",
  authDomain: "fir-twitter-login-80ffa.firebaseapp.com",
  projectId: "fir-twitter-login-80ffa",
  storageBucket: "fir-twitter-login-80ffa.appspot.com",
  messagingSenderId: "740480199989",
  appId: "1:740480199989:web:875c26e8100811cfc6b07c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;