import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBBwJqAZK34q4sojH8sF1lvdxqeiQVWFG8",
    authDomain: "netflix-9c7a9.firebaseapp.com",
    databaseURL: "https://netflix-9c7a9.firebaseio.com",
    projectId: "netflix-9c7a9",
    storageBucket: "netflix-9c7a9.appspot.com",
    messagingSenderId: "66595471041",
    appId: "1:66595471041:web:4c66bfeb5614b7c3b7de40",
    measurementId: "G-G37BBB4EVP"
};

const firebase = Firebase.initializeApp(config);



export { firebase };