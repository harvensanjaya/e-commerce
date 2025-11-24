// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB-9_XzpHEB2Tiah92RqDUoqz5A2x2IWQ",
  authDomain: "e-commerce-921fe.firebaseapp.com",
  projectId: "e-commerce-921fe",
  storageBucket: "e-commerce-921fe.firebasestorage.app",
  messagingSenderId: "473503255600",
  appId: "1:473503255600:web:8d61e09f863ae17ee8b1f5",
  measurementId: "G-7KJKMR43MR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
