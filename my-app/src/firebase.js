import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDkUnREDQ6sTcOUS4Z0HBRdLvY2zeJQngc",
    authDomain: "tinder-clone-4496a.firebaseapp.com",
    projectId: "tinder-clone-4496a",
    storageBucket: "tinder-clone-4496a.appspot.com",
    messagingSenderId: "623981141477",
    appId: "1:623981141477:web:6f4eb5b703fefdfca4630c",
    measurementId: "G-JLY7MMMQ8N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const database = firebase.firestore()


export default database