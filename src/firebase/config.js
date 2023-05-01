// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA-Hz00bgNU-Cm5rLFFoor0hE8eIfQrBqE", 
  authDomain: "octopus-store.firebaseapp.com",
  projectId: "octopus-store",
  storageBucket: "octopus-store.appspot.com",
  messagingSenderId: "110760567193",
  appId: "1:110760567193:web:46e63e5219e0459cd5b308"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const dataBase = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()