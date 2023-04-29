import { useState } from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import './App.css'
import app from './firebase/firebase.config';

function App() {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  
 

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
        setQuiz(false);
      })
      .catch(error => {
        console.log("Error: ", error);
      })
  }

  return (
    <>

      <h1>Vite + Firebase</h1>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      {
      user &&
        <div className="card">
          <button>Sign Out</button>
          <h4> User: {user.displayName}</h4>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
        
      }
      
 
    </>
  )
}

export default App
