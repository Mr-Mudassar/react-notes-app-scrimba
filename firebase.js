import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzq3CEAUH1Ozwf00kjCd0YA5cF3ouVfsU",
  authDomain: "react-notes-545fe.firebaseapp.com",
  projectId: "react-notes-545fe",
  storageBucket: "react-notes-545fe.appspot.com",
  messagingSenderId: "982143340400",
  appId: "1:982143340400:web:06958e53f56ba3803109b5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const  notesCollection = collection(db,"notes")
 