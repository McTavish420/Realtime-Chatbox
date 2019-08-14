import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCAYjZj2XRQ4mcBbOUvKhFKNIpbUheVNsM",
  authDomain: "chatbox-527e5.firebaseapp.com",
  databaseURL: "https://chatbox-527e5.firebaseio.com",
  projectId: "chatbox-527e5",
  storageBucket: "",
  messagingSenderId: "396762107586",
  appId: "1:396762107586:web:22ead636dfc9219b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

firebaseApp.firestore().settings({timestampsInSnapshots: true})

export default firebaseApp.firestore();
