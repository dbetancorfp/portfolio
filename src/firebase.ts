import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { setLogLevel } from 'firebase/firestore';
setLogLevel('debug');

const firebaseConfig = {
    apiKey: "AIzaSyDwGVqfyTazrnTJIv7LwYbCTMCzgPw1M2I",
    authDomain: "contact-ad864.firebaseapp.com",
    projectId: "contact-ad864",
    storageBucket: "contact-ad864.firebasestorage.app",
    messagingSenderId: "1057585501647",
    appId: "1:1057585501647:web:6562aa9dce48142679aeba"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
