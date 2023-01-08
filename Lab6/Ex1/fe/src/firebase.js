import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCA3tauR4M1PpiU-Jmatd6GYIBO7PovNAA",
  authDomain: "webdev-a6248.firebaseapp.com",
  projectId: "webdev-a6248",
  storageBucket: "webdev-a6248.appspot.com",
  messagingSenderId: "599436492339",
  appId: "1:599436492339:web:987bec40bd14017f2b6d46",
  measurementId: "G-5YX279MGJ4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}