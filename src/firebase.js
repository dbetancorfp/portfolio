// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2df-IvryDuLmTwPEBhItBeqVDgg2hVX0",
  authDomain: "porfolio-41c41.firebaseapp.com",
  projectId: "porfolio-41c41",
  storageBucket: "porfolio-41c41.firebasestorage.app",
  messagingSenderId: "71072510058",
  appId: "1:71072510058:web:cecbf14b56fa95c2dc5a13",
  measurementId: "G-600SEZF3LX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };