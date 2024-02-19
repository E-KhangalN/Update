// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAcQ160abJANh6O58k8xwj9PbFLjCuxPz4",

  authDomain: "instagram-e7562.firebaseapp.com",

  projectId: "instagram-e7562",

  storageBucket: "instagram-e7562.appspot.com",

  messagingSenderId: "324308355589",

  appId: "1:324308355589:web:7bc6cd4cca45ed0fe5ea6c",

  measurementId: "G-7FB62LE1K3",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
