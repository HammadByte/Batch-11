 
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

 
 const firebaseConfig = {
   apiKey: "AIzaSyDZ97U890CkVPR2EOrJXdqiswEo0uxtBo0",
   authDomain: "my-first-project-7cf06.firebaseapp.com",
   projectId: "my-first-project-7cf06",
   storageBucket: "my-first-project-7cf06.appspot.com",
   messagingSenderId: "859300926872",
   appId: "1:859300926872:web:9aeb01f7b6b9b67aaa47ed",
   measurementId: "G-VDPKMB98ZR"
 };

 
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);


 let sbtn