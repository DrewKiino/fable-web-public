import firebase from 'firebase'
// Initialize Firebase
const config = {
    apiKey: "AIzaSyBwPDaX0w-pQ-3_6x9Nh25vo32r1qqSdR8",
    authDomain: "fable-server.firebaseapp.com",
    databaseURL: "https://fable-server.firebaseio.com",
    projectId: "fable-server",
    storageBucket: "fable-server.appspot.com",
    messagingSenderId: "915807704080"
};
const fire = firebase.initializeApp(config)
export default fire