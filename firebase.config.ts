import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_ZZ5JmLgbWsWViQebxlL_WpNtmveYKps",
  authDomain: "apex-45c51.firebaseapp.com",
  projectId: "apex-45c51",
  storageBucket: "apex-45c51.appspot.com",
  messagingSenderId: "930697478838",
  appId: "1:930697478838:web:cc9a3f157d0568b5e9dc17",
  measurementId: "G-TXS8T59ZPZ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
