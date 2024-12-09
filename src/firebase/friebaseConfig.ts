// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWAUUiV9XNCmuJe1YxketQIdsUzdJrQF4",
  authDomain: "portfolio-9f1af.firebaseapp.com",
  projectId: "portfolio-9f1af",
  storageBucket: "portfolio-9f1af.firebasestorage.app",
  messagingSenderId: "133670320627",
  appId: "1:133670320627:web:d545cc87ab7f9d07cffa86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };