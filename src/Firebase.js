import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuWRFmpFRsr_jTcp4tdmJUrPrZCBt16vc",
  authDomain: "reactjs-beer-punk.firebaseapp.com",
  projectId: "reactjs-beer-punk",
  storageBucket: "reactjs-beer-punk.appspot.com",
  messagingSenderId: "159666891150",
  appId: "1:159666891150:web:675d5b875b409722031cdf",
  measurementId: "G-4WTTWKL48C",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
