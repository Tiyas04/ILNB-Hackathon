// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , createUserWithEmailAndPassword} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1i3OXiWjnlHIEz6-L_Hs6_ncLtlLdd5M",
  authDomain: "hackathon-1-1e2b8.firebaseapp.com",
  projectId: "hackathon-1-1e2b8",
  storageBucket: "hackathon-1-1e2b8.firebasestorage.app",
  messagingSenderId: "450044191056",
  appId: "1:450044191056:web:3fbd6d59964a1725ebcc55",
  databaseURL:"https://hackathon-1-1e2b8-default-rtdb.firebaseio.com",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth=getAuth();
// export default app;


export const app = initializeApp(firebaseConfig);
export const FirebaseProvider = (props) =>{
  const signupUserWithEmailAndPassword = (email,password)=>
    createUserWithEmailAndPassword(firebaseAuth, email , password);
  return 
}



// FOR AUTHENTIICATION\\
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
