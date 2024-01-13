import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKf3NJTDjc1w4IAHPG-5DiKJEGLOHcUKk",
  authDomain: "chat-gpt-clone-fa160.firebaseapp.com",
  projectId: "chat-gpt-clone-fa160",
  storageBucket: "chat-gpt-clone-fa160.appspot.com",
  messagingSenderId: "870627947661",
  appId: "1:870627947661:web:c22705b4cffe348844dec4"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }