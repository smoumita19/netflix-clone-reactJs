// import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions
// import 'firebase/<PACKAGE>';


const firebaseConfig = {
    apiKey: "AIzaSyDYFXYYnfYYIQ0XeHlBpnTV019DMoBNAy4",
    authDomain: "netflix-clone-3efc8.firebaseapp.com",
    projectId: "netflix-clone-3efc8",
    storageBucket: "netflix-clone-3efc8.appspot.com",
    messagingSenderId: "585888328691",
    appId: "1:585888328691:web:28f6e467bfd3f250dc4086"
  };

//initializing firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//initializing database
const db = firebaseApp.firestore(); //write down about firestore
//authentication
const auth = firebase.auth();

//Can have one default export but many explicit export
export { auth };
export default db;