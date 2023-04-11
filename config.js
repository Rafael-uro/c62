import firebase from "firebase"

//inicialize seu banco de dados
 const firebaseConfig = {
 apiKey: "AIzaSyDoo-pKWx1nn2tiEYKOvXsaTs6XJis_nPE",
    authDomain: "c60-d821e.firebaseapp.com",
    databaseURL: "https://c60-d821e-default-rtdb.firebaseio.com",
    projectId: "c60-d821e",
    storageBucket: "c60-d821e.appspot.com",
    messagingSenderId: "902783751255",
    appId: "1:902783751255:web:c91801f48c8abf3e407f12"
 }
firebase.initializeApp(firebaseConfig);

  export default firebase.database()
 

  