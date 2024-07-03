import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth , signInWithEmailAndPassword , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyAYqBlFVIXqcId0hdrC_DZot5TRS36zoTk",
  authDomain: "my-first-project-537d3.firebaseapp.com",
  projectId: "my-first-project-537d3",
  storageBucket: "my-first-project-537d3.appspot.com",
  messagingSenderId: "390742298581",
  appId: "1:390742298581:web:de82112f0a26ebbfc5b75c",
  measurementId: "G-HXJP6YJNN9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


let email = document.querySelector('#semail')
let password = document.querySelector('#spassword')
let sbtn = document.querySelector('#sbtn')
sbtn.addEventListener('click' , ()=>{ 
    
    
createUserWithEmailAndPassword(auth, email.value, password.value)

  .then((userCredential) => {
    
    const user = userCredential.user;
    
  })
 
  .catch((error) => {
    console.log(error);
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
  });
  

})

let npassword = document.querySelector("#npassword")
let nemail = document.querySelector("#nemail")
let nbtn = document.querySelector("#nbtn")
nbtn.addEventListener('click' , ()=>{
    
    signInWithEmailAndPassword(auth, nemail.value, npassword.value)
      .then((userCredential) => {
        
        const user = userCredential.user;
        
      })
      .catch((error) => {
       console.log(error);
       Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      });
})

