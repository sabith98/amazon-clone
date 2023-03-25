// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

// import 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy_VeupJh7iBq75ipal04XpRle047iBnU",
  authDomain: "shashop-a341e.firebaseapp.com",
  projectId: "shashop-a341e",
  storageBucket: "shashop-a341e.appspot.com",
  messagingSenderId: "921224806933",
  appId: "1:921224806933:web:1c3042fc01aa0e2408441c",
  measurementId: "G-QX7YW3FB2L"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

// firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const db = firebase.firestore();

// const analytics = getAnalytics(app);

export { db, auth };