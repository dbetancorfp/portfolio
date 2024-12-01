// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, Firestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBH7goSADxD-dGwkFsBaQPTYLOl4_Muu5k",
    authDomain: "portfolio-b2bd2.firebaseapp.com",
    projectId: "portfolio-b2bd2",
    storageBucket: "portfolio-b2bd2.firebasestorage.app",
    messagingSenderId: "450427428235",
    appId: "1:450427428235:web:51e5c389e77ff132ab238e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(app);

export { app, db };