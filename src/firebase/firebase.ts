// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from "firebase/functions";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9QhECZXxXt3OJIMc6LApkacEGRyqs4lw",
  authDomain: "docu4rent-dev.firebaseapp.com",
  projectId: "docu4rent-dev",
  storageBucket: "docu4rent-dev.appspot.com",
  messagingSenderId: "815391296007",
  appId: "1:815391296007:web:7a524142bfaf69a8e038a2",
  measurementId: "G-7SF0SKXKHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const fbStorage = getStorage(app);
export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);
