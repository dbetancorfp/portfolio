import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDL7FeKIBRXFFwW6qnXSDQzraAqy6kB4sA",
  authDomain: "port-ee580.firebaseapp.com",
  projectId: "port-ee580",
  storageBucket: "port-ee580.firebasestorage.app",
  messagingSenderId: "786051063523",
  appId: "1:786051063523:web:b65de73fe8a27529106fd6"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);