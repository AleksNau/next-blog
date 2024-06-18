// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "my-blog-424410.firebaseapp.com",
    projectId: "my-blog-424410",
    storageBucket: "my-blog-424410.appspot.com",
    messagingSenderId: "186604767311",
    appId: "1:186604767311:web:8c6be9175c006638fe023a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);