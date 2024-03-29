import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjWKudP8a12NaadhQJu5mutvtkLHjf1Io",
  authDomain: "dream-clothing-db-f2ba5.firebaseapp.com",
  projectId: "dream-clothing-db-f2ba5",
  storageBucket: "dream-clothing-db-f2ba5.appspot.com",
  messagingSenderId: "205974619100",
  appId: "1:205974619100:web:72eb8992c11606fb280519",
};

// Initialize Firebase
const firebaseAPP = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
