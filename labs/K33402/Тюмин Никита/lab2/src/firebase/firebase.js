import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAHej2dnt5SgPrrllr5rvCgGAVNKIBjakA",
  authDomain: "musec-a84ea.firebaseapp.com",
  projectId: "musec-a84ea",
  storageBucket: "musec-a84ea.appspot.com",
  messagingSenderId: "260194696890",
  appId: "1:260194696890:web:fcf2ecc158bf52d6168c83"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore service
const db = getFirestore()
const auth = getAuth()
const storage = getStorage()

export {
  auth as auth,
  db as db,
  storage as storage,
}