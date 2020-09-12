import firebase from "firebase/app";
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBPLnQz7j84sIOSrZ4SCTtiY0GIX53UoyE",
  authDomain: "portofolio-2d4f9.firebaseapp.com",
  databaseURL: "https://portofolio-2d4f9.firebaseio.com",
  projectId: "portofolio-2d4f9",
  storageBucket: "portofolio-2d4f9.appspot.com",
  messagingSenderId: "660334475323",
  appId: "1:660334475323:web:d164a82d9f13042d52841e",
  measurementId: "G-45HD3Z6P6K",
};
// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const createDataInFirebase = (data) => {
  
    const createAt = new Date()
    console.log(db);
    
   return db.collection('Contact').add({
     data,
     createAt
   })
  
};


export default firebase;
