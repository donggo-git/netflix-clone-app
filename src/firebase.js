// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCeJVEtGXePht-4bAKtLo08Dw9EX5V_PJU",
    authDomain: "netflixcloneapp-e05c6.firebaseapp.com",
    projectId: "netflixcloneapp-e05c6",
    storageBucket: "netflixcloneapp-e05c6.appspot.com",
    messagingSenderId: "116475196406",
    appId: "1:116475196406:web:95ae5b0db5eddf3d2f0dd7",
    measurementId: "G-BBFVT647EY"
});
const db = firebase.firestore()

export { db }