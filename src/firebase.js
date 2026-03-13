// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3i1bZ1YE5Ht7EKP5QNKiJUVweYWx4gN0",
  authDomain: "my-react-firebase-app-b9124.firebaseapp.com",
  projectId: "my-react-firebase-app-b9124",
  storageBucket: "my-react-firebase-app-b9124.firebasestorage.app",
  messagingSenderId: "655070857393",
  appId: "1:655070857393:web:5155ba2339641b1e17ba90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();