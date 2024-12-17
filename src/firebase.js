import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBPYTBNMC4Brbalrm8i0uCmVwztdg0xOo",
  authDomain: "kbaest2010.firebaseapp.com",
  projectId: "kbaest2010",
  storageBucket: "kbaest2010.appspot.com",
  messagingSenderId: "465535883519",
  appId: "1:465535883519:web:16bffcde2982a0e48f94ca",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
