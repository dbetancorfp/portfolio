
import { initializeApp } from  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {  getFirestore,
    collection,
    doc,
    addDoc,
    getDoc,
    getDocs,
    setDoc, } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC2Nmsb5Lfl04A-BT1sXd6TUD5fU-MfWq0",
    authDomain: "portfolio-64567.firebaseapp.com",
    projectId: "portfolio-64567",
    storageBucket: "portfolio-64567.firebasestorage.app",
    messagingSenderId: "1037991672637",
    appId: "1:1037991672637:web:f57257dec41a268fd3a354"
  };


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, collection, addDoc,setDoc ,doc};

