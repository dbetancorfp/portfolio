// Importar Firebase desde npm en lugar de una URL remota
import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  doc, 
  addDoc, 
  setDoc 
} from "firebase/firestore";

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

export { db, collection, addDoc, setDoc, doc };


