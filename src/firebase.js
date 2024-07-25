// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZqIjM4w34B-bVBdUxPceV8sQC4Ten50M",
  authDomain: "pinkysingh-portfolio.firebaseapp.com",
  projectId: "pinkysingh-portfolio",
  storageBucket: "pinkysingh-portfolio.appspot.com",
  messagingSenderId: "599400011875",
  appId: "1:599400011875:web:404c7116bd6c462b8b4056"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();