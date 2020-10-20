import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAYucS07-JNpjAEnpM9qBvwjMrQNJS1Zg",
  authDomain: "vuetalk-2e5dd.firebaseapp.com",
  databaseURL: "https://vuetalk-2e5dd.firebaseio.com",
  projectId: "vuetalk-2e5dd",
  storageBucket: "vuetalk-2e5dd.appspot.com",
  messagingSenderId: "786225454323",
  appId: "1:786225454323:web:3cc69e45a633e289b3ab86",
  measurementId: "G-M3VQS2R02L",
};

firebase.initializeApp(firebaseConfig);

export const fb = firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
