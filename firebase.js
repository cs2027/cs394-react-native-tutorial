import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCNYUTrBZkYWE5684qxV2CxB8zk_5NphKs",
    authDomain: "cs394-react-native-tutorial.firebaseapp.com",
    databaseURL: "https://cs394-react-native-tutorial-default-rtdb.firebaseio.com",
    projectId: "cs394-react-native-tutorial",
    storageBucket: "cs394-react-native-tutorial.appspot.com",
    messagingSenderId: "228144073449",
    appId: "1:228144073449:web:182cfcf1e353aaee4b3e78",
    measurementId: "G-S7YLM29XDD"
};

firebase.initializeApp(firebaseConfig);

export { firebase };