/*
  -----------------------------
    Initial setup
  -----------------------------
* 1. console.firebase.google.com
  2. create project (skip google analytics)
  3. register app (create config)
  4. install firebase: npm install firebase
  5. add config file to your project
  6. danger: do not publish or make firebase config to public by pushing those to github
  
  -------------------------------
    Initgration
  -------------------------------
  7. Visit: Go to Docs > Build > Authentication > Web > Get Started
  8. export app from the firebase.config.js file: export default app
  9. Login.jsx: import getAuth from firebase/auth
  10. Creat const auth = getAuth(app)
  ------------------------------
    Provider setup
  ------------------------------
  11. import googleAuthProvider and create a new provider
  12. use signInWithPopUp and pass auth and provider
  13. activate signin method (google, facebook, github etc.)
  14. [vite] change 127.0.0.1 to localhost


  --------------------------------
    More Auth Provider
  --------------------------------
  1. activate the auth provider (create app, provide redirect url, client id, client secret)
  2. 


  */ 