import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDbYJfYKhh2CS5WPPnwInai7tKpyz7qqMg",
    authDomain: "online-store-6cd13.firebaseapp.com",
    projectId: "online-store-6cd13",
    databaseURL:"https://online-store-6cd13.firebaseio.com",
    storageBucket: "online-store-6cd13.appspot.com",
    messagingSenderId: "132345857500",
    appId: "1:132345857500:web:d123cf322027126992fb19",
    measurementId: "G-BVZ7MR6ECS",
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};