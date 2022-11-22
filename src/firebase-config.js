// import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider} from  "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwKIO3yVmPrbwzL7fkrHcePsh50rST67E",
  authDomain: "projectblog-4ddca.firebaseapp.com",
  projectId: "projectblog-4ddca",
  storageBucket: "projectblog-4ddca.appspot.com",
  messagingSenderId: "339554449668",
  appId: "1:339554449668:web:2f786202ebf11d275f7851"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();