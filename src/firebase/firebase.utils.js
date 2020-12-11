import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCSAYIPFxfQydUSv7u-4eZ33-4AeZRSrDU",
  authDomain: "painter-store.firebaseapp.com",
  projectId: "painter-store",
  storageBucket: "painter-store.appspot.com",
  messagingSenderId: "71946014246",
  appId: "1:71946014246:web:5f7efa472b4e705e12a0e7",
  measurementId: "G-6TP5ZDBZZX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
