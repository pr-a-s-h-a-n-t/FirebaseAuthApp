// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdEVntv47I3OsAVPGoD83bH7QcwV5R-zk",
    authDomain: "workplace-e5010.firebaseapp.com",
    projectId: "workplace-e5010",
    storageBucket: "workplace-e5010.appspot.com",
    messagingSenderId: "445046801166",
    appId: "1:445046801166:web:f65d28bd4bfe85ef098d5f",
    measurementId: "G-YYR6MFFMV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result)
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;

            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("profilePic", profilePic);
            const val = localStorage.setItem("flag", true);
            window.location.reload()



        }).catch((errror) => {
            console.log(errror)
        })
}

