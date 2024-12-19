import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCRXjRFYsx9hHshAWICAkR64_7r0an1Jxc",
  authDomain: "portfolio-86faf.firebaseapp.com",
  projectId: "portfolio-86faf",
  storageBucket: "portfolio-86faf.firebasestorage.app",
  messagingSenderId: "1033212153870",
  appId: "1:1033212153870:web:57e30cebe3d910ab76ec5f",
  measurementId: "G-MGD8Z9JW6D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, collection, addDoc, setDoc, doc };