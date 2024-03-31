import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";

const config = {
  apiKey: "AIzaSyDS9VKg7B4Lk2O6RckIxmWN3I3gKaLV7S4",
  authDomain: "fir-auth-project-bd13a.firebaseapp.com",
  projectId: "fir-auth-project-bd13a",
  storageBucket: "fir-auth-project-bd13a.appspot.com",
  messagingSenderId: "918344248875",
  appId: "1:918344248875:web:20e1009ac727a78871446e",
  measurementId: "G-FTXZCNSC3N"
};


// Initialize Firebase app
const app = firebase.initializeApp(config);

// Get Firebase authentication instance
const auth = getAuth(app);

// Function to register a new user
const registerUser = (name: string, email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up successfully
      const user = userCredential.user;
      console.log('User signed up successfully:', user);
      // Additional logic after successful registration
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('User registration error:', errorCode, errorMessage);
      // Handle registration error
    });
};

// Function to sign in an existing user
const signInUser = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      console.log('User signed in successfully:', user);
      // Additional logic after successful sign-in
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('User sign-in error:', errorCode, errorMessage);
      // Handle sign-in error
    });
};

export { app, auth, registerUser, signInUser };