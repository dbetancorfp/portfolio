// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeOBpU0NSzc1jxgjMi_EO0aj7UMqUkCwA",
  authDomain: "dew-portafolio.firebaseapp.com",
  projectId: "dew-portafolio",
  storageBucket: "dew-portafolio.firebasestorage.app",
  messagingSenderId: "190288474147",
  appId: "1:190288474147:web:32210a1231ff8f6a31c196"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Connect with Firebase database
const db = getFirestore(app);

export default class DBConnection {
    constructor() {
        this.messagesCollection = collection(db, "messages"); 
    }

    async addFile(data) {
        try {
            const docRef = await addDoc(this.messagesCollection, data);
            console.log("Documento escrito con ID: ", docRef.id);
            return docRef.id;
        } catch (e) {
            console.error("Error añadiendo registro: ", e)
        }
    }
}
