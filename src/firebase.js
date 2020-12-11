import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpaBYVZOPmrJAbxHgc14IF9kXVEjutkNE",
    authDomain: "twitterclone-47f2f.firebaseapp.com",
    projectId: "twitterclone-47f2f",
    storageBucket: "twitterclone-47f2f.appspot.com",
    messagingSenderId: "296228919662",
    appId: "1:296228919662:web:6c1c2692451806567c497f",
    measurementId: "G-FCPMQ8CJ3L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;

  