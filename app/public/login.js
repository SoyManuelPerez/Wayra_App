const mensajeError = document.getElementsByClassName("error")[0]
//Fix para __direname
import path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
document.getElementById("login").addEventListener("submit",async (e)=>{
  e.preventDefault();
  const user = e.target.children.user.value;
  const password = e.target.children.password.value;
  const res = await fetch(__dirname +"/api/login",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      user,password
    })
  });
  if(!res.ok) return mensajeError.classList.toggle("escondido",false);
  const resJson = await res.json();
  if(resJson.redirect){
    window.location.href = resJson.redirect;
  }
})
