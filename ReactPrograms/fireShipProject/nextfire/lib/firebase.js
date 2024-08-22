import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBzpKme-3uu3MdQsFsWpdvKOxZ8ml_KDkw",
    authDomain: "hxtsocial.firebaseapp.com",
    projectId: "hxtsocial",
    storageBucket: "hxtsocial.appspot.com",
    messagingSenderId: "45363534196",
    appId: "1:45363534196:web:8e801c0a89f407559e3421",
    measurementId: "G-ZNBXN8ZV8C"
};

if (!firebase.app.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

