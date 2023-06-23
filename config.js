//firebase config key setup
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//configuration

const firebaseConfig = {
    apiKey: "AIzaSyCmfWbuGW1V2JJ_BOls4hiLMnrebxhAw88",
    authDomain: "test-75b52.firebaseapp.com",
    projectId: "test-75b52",
    storageBucket: "test-75b52.appspot.com",
    messagingSenderId: "724229095678",
    appId: "1:724229095678:web:cca61f3372ec8b02da25af",
    measurementId: "G-CD7GNXBELK"
  };

  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  export {firebase};