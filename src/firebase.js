import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBz3gTeuB4oW8ym5kpfVvhczggHno5HFAA",
    authDomain: "contacto-portfolio-506db.firebaseapp.com",
    projectId: "contacto-portfolio-506db",
    storageBucket: "contacto-portfolio-506db.firebasestorage.app",
    messagingSenderId: "83728247344",
    appId: "1:83728247344:web:b6e23c4ecae897c1679bf5",
    measurementId: "G-8RBY6QJGR4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };