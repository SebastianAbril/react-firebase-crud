// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsUCSqmOE7xzG0qo0KlQCwD_5C9TY8NeI",
  authDomain: "fb-crud-react-9aca4.firebaseapp.com",
  projectId: "fb-crud-react-9aca4",
  storageBucket: "fb-crud-react-9aca4.appspot.com",
  messagingSenderId: "108526327957",
  appId: "1:108526327957:web:4a045ccd293e5e2aa5e39c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = app.firestore();