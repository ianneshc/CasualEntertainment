// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzImWOtsbSBtTOqET8R48q1E5eBCmkloY",
  authDomain: "casual-entertainment-e4c28.firebaseapp.com",
  projectId: "casual-entertainment-e4c28",
  storageBucket: "casual-entertainment-e4c28.appspot.com",
  messagingSenderId: "963995399808",
  appId: "1:963995399808:web:1460bc4e96fcafebbb5865",
  measurementId: "G-NSB41T7MMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);