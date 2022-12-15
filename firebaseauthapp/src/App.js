import { useEffect, useState } from "react";
import "./App.css";
import { signInWithGoogle } from "./FirebaseConfig";

function App() {

  const name = localStorage.getItem("name")
  const email = localStorage.getItem("email")
  const profilePhoto = localStorage.getItem("profilePic")




  return (
    <div className="App">
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <h1>  {name.toLocaleUpperCase()}</h1>
      <h1>   {email.toLocaleUpperCase()}</h1>
      {localStorage.getItem("flag") && <img src={profilePhoto}
        alt="Profile Photo" />}
    </div>
  );
}

export default App;