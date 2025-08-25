// Import the functions you need from the SDKs you need
import { initializeApp ,getApp , getApps} from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkoO1pHE25v8ry_ND-yUoWJJUF-GAAs9k",
  authDomain: "prepwise-8b85a.firebaseapp.com",
  projectId: "prepwise-8b85a",
  storageBucket: "prepwise-8b85a.firebasestorage.app",
  messagingSenderId: "259993117960",
  appId: "1:259993117960:web:a3947f12b13747f4b378bd",
  measurementId: "G-B5KSQ6TTV9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);