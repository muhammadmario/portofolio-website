import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCav0mli_lUcg3s_pkK4_juOjpBjS0pCwM",
    authDomain: "react-contact-form-7259f.firebaseapp.com",
    projectId: "react-contact-form-7259f",
    storageBucket: "react-contact-form-7259f.appspot.com",
    messagingSenderId: "904330161206",
    appId: "1:904330161206:web:679acc96a6fa2948643c97",
    measurementId: "G-MQBD4KV16S"
})

var db = firebaseApp.firestore()

export {db}