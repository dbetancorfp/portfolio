import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Importa Firestore
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBXTtXeNGWkBzJZHigihpmQnU565aEyDgo",
  authDomain: "compra-pokemon-ab1da.firebaseapp.com",
  projectId: "compra-pokemon-ab1da",
  storageBucket: "compra-pokemon-ab1da.firebasestorage.app",
  messagingSenderId: "662766810110",
  appId: "1:662766810110:web:f2d70ee9796f8f990dc6af",
  measurementId: "G-0PKE8CT13C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Inicializa Firestore

export { db }; // Exporta Firestore para usarlo en el proyecto
