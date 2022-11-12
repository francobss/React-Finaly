// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfE-DWeBBBLMel2Z1WBci0ge20MmZKcME",
    authDomain: "sneackers-import.firebaseapp.com",
    projectId: "sneackers-import",
    storageBucket: "sneackers-import.appspot.com",
    messagingSenderId: "180918963200",
    appId: "1:180918963200:web:e65da9871f3e6763335ce5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)