import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC77769g2J2ALdnnlON5DC5qsHu13THEf4",
    authDomain: "tinder-clone-d5402.firebaseapp.com",
    projectId: "tinder-clone-d5402",
    storageBucket: "tinder-clone-d5402.appspot.com",
    messagingSenderId: "30756956697",
    appId: "1:30756956697:web:2eea51ebee5540ed495888",
    measurementId: "G-HX8PVC3VZQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };