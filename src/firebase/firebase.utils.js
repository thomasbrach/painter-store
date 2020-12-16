//Initial config
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

// Sign in with Google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// Create user profile document
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

//Add collection and documents
export const addCollectionAndDocuments = async (
  collectionKey,
  documentsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  documentsToAdd.forEach((doc) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, doc);
  });
  return await batch.commit();
};

// Convert collections snapshot to map
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export default firebase;
