import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDMBxmB570zoKQlikkXz2uXeoD_MyXvcPM",
    authDomain: "e-commerce-39de8.firebaseapp.com",
    databaseURL: "https://e-commerce-39de8.firebaseio.com",
    projectId: "e-commerce-39de8",
    storageBucket: "e-commerce-39de8.appspot.com",
    messagingSenderId: "569559037126",
    appId: "1:569559037126:web:e52d10aa2c1f29100d13c7",
    measurementId: "G-VCVBC7YEGX"
};
  // Initialize Firebase

  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};