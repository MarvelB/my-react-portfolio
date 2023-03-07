import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDainxATHvCE9sSWuatEiTGEv-RLqQnswE",
    authDomain: "bmaravilladev.firebaseapp.com",
    projectId: "bmaravilladev",
    storageBucket: "bmaravilladev.appspot.com",
    messagingSenderId: "481420732346",
    appId: "1:481420732346:web:3e9192a4fc46e8c0439f83"
};

// Initialize firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const projectFirestore = firebase.firestore();

const projectAuth = firebase.auth();

export { projectFirestore, projectAuth }