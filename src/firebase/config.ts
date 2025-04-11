// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmNuTIbP6sU7bzpytj5Ry2BpugsDOg-ck",
  authDomain: "tsvalterationsandformalwear.firebaseapp.com",
  projectId: "tsvalterationsandformalwear",
  storageBucket: "tsvalterationsandformalwear.firebasestorage.app",
  messagingSenderId: "701557124789",
  appId: "1:701557124789:web:a61a0c3f7185518edc58fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);