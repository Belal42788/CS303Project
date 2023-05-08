import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

// const firebaseConfig = {
//     apiKey: "AIzaSyCDQIa8F4YG_CbPnvjFww-IgY-EtZJjROE",
//     authDomain: "twsela-71a88.firebaseapp.com",
//     projectId: "twsela-71a88",
//     storageBucket: "twsela-71a88.appspot.com",
//     messagingSenderId: "1084505782046",
//     appId: "1:1084505782046:web:d41387c47d488afad5fb0f",
//     databaseURL: "https://twsela-71a88-default-rtdb.firebaseio.com/",
//     storageBucket: 'gs://twsela-71a88.appspot.com'
// };

const firebaseConfig = {

    apiKey: "AIzaSyDxlaGk7DxlCgkDNGvbCFVCcQ_D5cCf7Fk",
    authDomain: "luxury-c588e.firebaseapp.com",
    projectId: "luxury-c588e",
    storageBucket: "luxury-c588e.appspot.com",
    messagingSenderId: "466632948292",
    appId: "1:466632948292:web:522ca5dcae5cac3fd85a11",
    storageBucket:"gs://luxury-c588e.appspot.com"
};



const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);
const db = getFirestore(app);
export default auth;
export { database, storage, firebaseConfig, firebase, auth };