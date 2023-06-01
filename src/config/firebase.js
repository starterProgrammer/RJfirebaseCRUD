
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA-5eoTww5at12FhEH5hJ1BkZXnr21vJpg",
  authDomain: "fir-course-e51b8.firebaseapp.com",
  projectId: "fir-course-e51b8",
  storageBucket: "fir-course-e51b8.appspot.com",
  messagingSenderId: "225929023633",
  appId: "1:225929023633:web:974c84c68e66acdb9f6f30",
  measurementId: "G-S539LB1CR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()


export const db = getFirestore(app)
export const  storage = getStorage(app)