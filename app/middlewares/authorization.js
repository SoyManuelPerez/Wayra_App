import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import {usuarios} from "./../controllers/authentication.controller.js";

dotenv.config();

function soloAdmin(req,res,next){
  const logueado = revisarCookie(req);
  if(logueado) return next();
  return res.redirect("/")
}

function soloPublico(req,res,next){
  const logueado = revisarCookie(req);
  if(!logueado.opcion) return next();
  if(logueado.type==="admin"){
    return res.redirect("/admin")
  }else if(logueado.type==="mesero"){
    return res.redirect("/hospedaje")
  }
  
}

function revisarCookie(req){
  try{
    const cookieJWT = req.headers.cookie.split("; ").find(cookie => cookie.startsWith("jwt=")).slice(4);
    const decodificada = jsonwebtoken.verify(cookieJWT,process.env.JWT_SECRET);
    const usuarioAResvisar = usuarios.find(usuario => usuario.user === decodificada.user);
    if(!usuarioAResvisar){
      return false
    }
    return {opcion:true,type:usuarioAResvisar.type};
  }
  catch{
    return false;
  }
}


export const methods = {
  soloAdmin,
  soloPublico,
}