
import { initializeApp } from "firebase/app";
import { collection, getFireStore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBqUPmN2b4vPQA8NvdfswP3Qm1GWAVDtrQ",
  authDomain: "notes-a51b3.firebaseapp.com",
  projectId: "notes-a51b3",
  storageBucket: "notes-a51b3.appspot.com",
  messagingSenderId: "934099219003",
  appId: "1:934099219003:web:fdfdbbbc989bbfbbf7621e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app)
const notesCollection = collection(app, 'collection')