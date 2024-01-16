// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnwXPlkQi8-a5rZY2aF61RLDTEQWBTBSo",
  authDomain: "trivia-app-4e1a0.firebaseapp.com",
  projectId: "trivia-app-4e1a0",
  storageBucket: "trivia-app-4e1a0.appspot.com",
  messagingSenderId: "822946036854",
  appId: "1:822946036854:web:e98400ef1d000b30b3f357"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//init firestore servicie
const db = getFirestore();
export default db