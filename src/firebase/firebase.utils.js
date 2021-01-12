import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

const config = {
    apiKey: "AIzaSyBnY2Byty_juzq3a8sGqrW9PXDuYJDGFLM",
    authDomain: "shoppers-stop-fd52d.firebaseapp.com",
    projectId: "shoppers-stop-fd52d",
    storageBucket: "shoppers-stop-fd52d.appspot.com",
    messagingSenderId: "11199680910",
    appId: "1:11199680910:web:518a9b21af4929370d54df",
    measurementId: "G-PBC8JZWG3S"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
