// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCP_hcocbqa2WExUG5_iAl_A8BsEqbqJ0c",
  authDomain: "portfolio-b2c49.firebaseapp.com",
  projectId: "portfolio-b2c49",
  storageBucket: "portfolio-b2c49.firebasestorage.app",
  messagingSenderId: "203756255780",
  appId: "1:203756255780:web:98bc176747adef249f76b1"
};

// Inicializar Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Exportar Firestore
const db = getFirestore(firebaseApp);

export { db };

