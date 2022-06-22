// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5YtzsJUhYXzHRbhQsHieS3NzdXRA6pEU",
  authDomain: "react-firebase-f0be2.firebaseapp.com",
  projectId: "react-firebase-f0be2",
  storageBucket: "react-firebase-f0be2.appspot.com",
  messagingSenderId: "897722136221",
  appId: "1:897722136221:web:46d2df7e6018089a3b0674",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
