// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9CsSZQvechTGuDSVp0XNamDQYI-OR5KE",
  authDomain: "chatvalencia-d1499.firebaseapp.com",
  projectId: "chatvalencia-d1499",
  storageBucket: "chatvalencia-d1499.appspot.com",
  messagingSenderId: "613289662676",
  appId: "1:613289662676:web:4a34b0a325d3ebd4a8c341"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);