import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyD6Blly0Zi9VruUMtZg2_R009hYAgczqBg",
  authDomain: "my-movies-9569a.firebaseapp.com",
  databaseURL: "https://my-movies-9569a.firebaseio.com",
  projectId: "my-movies-9569a",
  storageBucket: "my-movies-9569a.appspot.com",
  messagingSenderId: "691351968776"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
