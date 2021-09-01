import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIZL1qtM9cgAZHcPre1vaTeh9NT_GFd_c",
  authDomain: "vue-blog-app-b7665.firebaseapp.com",
  projectId: "vue-blog-app-b7665",
  storageBucket: "vue-blog-app-b7665.appspot.com",
  messagingSenderId: "11598730490",
  appId: "1:11598730490:web:ea34d21530421adbcc2543",
};

const firebaseInitApp = firebase.initializeApp(firebaseConfig);

export default firebaseInitApp.firestore();
