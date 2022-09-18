import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCfoWmbY5WjRhzUo3X83YO8ZaQS4gcYq3Q",
  authDomain: "chat-9db38.firebaseapp.com",
  projectId: "chat-9db38",
  storageBucket: "chat-9db38.appspot.com",
  messagingSenderId: "840236184819",
  appId: "1:840236184819:web:c370cd619d3b3d70f2f386",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db  = getFirestore();