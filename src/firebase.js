import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyALawoKm26CsDMNfnauBroM7oCo7VH6xRw",
  authDomain: "portfoliodew-93891.firebaseapp.com",
  projectId: "portfoliodew-93891",
  storageBucket: "portfoliodew-93891.firebasestorage.app",
  messagingSenderId: "160795048295",
  appId: "1:160795048295:web:e043474a61d405792817c2",
  measurementId: "G-CR6Z8QG5R2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const messageCollection = collection(db, "message");