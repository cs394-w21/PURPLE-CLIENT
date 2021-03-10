import firebase from "firebase/app";
import "firebase/database";
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCtB3GvE2gheB1FD0A8FPvAcIn8Z1bEtl4",
  authDomain: "purpleclient.firebaseapp.com",
  databaseURL: "https://purpleclient-default-rtdb.firebaseio.com",
  projectId: "purpleclient",
  storageBucket: "purpleclient.appspot.com",
  messagingSenderId: "373241951771",
  appId: "1:373241951771:web:7fde51d496ca5f24e4aabe"
};

firebase.initializeApp(firebaseConfig);

export { firebase };