import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Importa las funciones necesarias
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Tu configuración de Firebase obtenida del panel de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDcdClxJ4WuwWsCDbiiizWjGLSeBl8HJCU",
    authDomain: "portafolio-alg.firebaseapp.com",
    projectId: "portafolio-alg",
    storageBucket: "portafolio-alg.firebasestorage.app",
    messagingSenderId: "609924729470",
    appId: "1:609924729470:web:71269baa8205495460e62f"
};  

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };
