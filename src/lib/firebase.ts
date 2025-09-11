// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIIYFwsYg-HaZBcSJ50q7GGFDiRyAj0s0",
  authDomain: "virofund-9decf.firebaseapp.com",
  projectId: "virofund-9decf",
  storageBucket: "virofund-9decf.firebasestorage.app",
  messagingSenderId: "957883740913",
  appId: "1:957883740913:web:e087af32d5d7f3b55f2f50",
  measurementId: "G-NLTY8XZJ4R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { analytics, db };
