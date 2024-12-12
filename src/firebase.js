import { initializeApp } from  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {  getFirestore,
    collection,
    doc,
    addDoc,
    getDoc,
    getDocs,
    setDoc, } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

    const firebaseConfig = {

      apiKey: "AIzaSyCtJE7U-RoGXBHQtu8MAVXCxF7ZcOqgJew",
    
      authDomain: "porfolio2-37af1.firebaseapp.com",
    
      projectId: "porfolio2-37af1",
    
      storageBucket: "porfolio2-37af1.firebasestorage.app",
    
      messagingSenderId: "456348925587",
    
      appId: "1:456348925587:web:43df1b6cccbe816bf51766",
    
      measurementId: "G-0Z1PM2PVNH"
    
    };
    
    


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, collection, addDoc,setDoc ,doc};