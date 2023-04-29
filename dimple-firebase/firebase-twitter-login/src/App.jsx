import { useState } from 'react'
import './App.css'
import { TwitterAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase/firebase.config';

function App() {
  const auth = getAuth(app);
  const provider = new TwittegooAuthProvider();
  const [user, setUser] = useState(null);

  const handleTwitterLogin = () => {
    signInWithPopup(auth, provider)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      setUser(loggedUser);
    })
    .catch(error => {
      console.log("Error: ", error);
    })
  }

  return (
    <>
     
      <h1>Firebase + React</h1>
        <button onClick={handleTwitterLogin}>Login with Twitter</button>
      {
        user && <div className="card">
          <button>Logout</button>
          <h4>Name: {user.displayName}</h4>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      }
      

    </>
  )
}

export default App
