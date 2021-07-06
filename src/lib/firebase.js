// libs
import firebase from "firebase";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBC0xE857UXPJssWAbaXgeiRiDas_In9n8",
  authDomain: "chat-app-e1d5e.firebaseapp.com",
  projectId: "chat-app-e1d5e",
  storageBucket: "chat-app-e1d5e.appspot.com",
  messagingSenderId: "867988543551",
  appId: "1:867988543551:web:3cfacd979aaee2351d008a",
  measurementId: "G-7RBKCR1GCF",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };
export default firebase;
