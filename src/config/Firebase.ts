import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCTmjqtoa4gYlOkoAssZdbZZmu7YyJxFsw",
  authDomain: "mynotesapp-cc6e4.firebaseapp.com",
  databaseURL: "https://mynotesapp-cc6e4.firebaseio.com",
  projectId: "mynotesapp-cc6e4",
  storageBucket: "mynotesapp-cc6e4.appspot.com",
  messagingSenderId: "101478296502",
  appId: "1:101478296502:web:d90fe96e72aab76de8ef17",
  measurementId: "G-F3BCYP2B7Z"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
