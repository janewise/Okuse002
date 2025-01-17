import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; // Import the Realtime Database
import { getAuth } from "firebase/auth"; // Import Firebase Authentication

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDVgYnaCd7jAJlB75ZZnSfcUBLKgqSvvQ",
  authDomain: "okuse001.firebaseapp.com",
  databaseURL: "https://okuse001-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "okuse001",
  storageBucket: "okuse001.firebasestorage.app",
  messagingSenderId: "471062470806",
  appId: "1:471062470806:web:c9e03bbea044dad65ae2b7",
  measurementId: "G-P13EL3H9Q6"
};
  

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp); // Pass the initialized app to getAnalytics

// Initialize Realtime Database
const db = getDatabase(firebaseApp); // Initialize the Realtime Database

// Initialize Firebase Authentication
const auth = getAuth(firebaseApp); // Initialize Firebase Authentication

export { db, auth };
