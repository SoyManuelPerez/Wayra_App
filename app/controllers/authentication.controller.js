import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const usuarios = [{
  user: "admin",
  type: "admin",  
  password: "$2a$05$nLY2It8riku2vwwDIINdgO/XIyPXRg1Gn9LFgnhwKqC4TwcAwEUL2"
},{
  user: "mesero",
  type: "mesero",
  password: "$2a$05$nLY2It8riku2vwwDIINdgO/XIyPXRg1Gn9LFgnhwKqC4TwcAwEUL2"
  
},{
  user: "bar",
  type: "bar",
  password: "$2a$05$nLY2It8riku2vwwDIINdgO/XIyPXRg1Gn9LFgnhwKqC4TwcAwEUL2"
  
},{
  user: "restaurante",
  type: "restaurante",
  password: "$2a$05$nLY2It8riku2vwwDIINdgO/XIyPXRg1Gn9LFgnhwKqC4TwcAwEUL2"
  
}]

async function login(req,res){
  console.log(req.body);
  const user = req.body.user;
  const password = req.body.password;
  if(!user || !password){
    return res.status(400).send({status:"Error",message:"Los campos están incompletos"})
  }
  const usuarioAResvisar = usuarios.find(usuario => usuario.user === user);
  if(!usuarioAResvisar){
    return res.status(400).send({status:"Error",message:"Error durante login"})
  }
  const loginCorrecto = await bcryptjs.compare(password,usuarioAResvisar.password);
  if(!loginCorrecto){
    return res.status(400).send({status:"Error",message:"Error durante login"})
  }
  const token = jsonwebtoken.sign(
    {user:usuarioAResvisar.user},
    process.env.JWT_SECRET,
    {expiresIn:process.env.JWT_EXPIRATION});

    const cookieOption = {
      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
      path: "/"
    }
    res.cookie("jwt",token,cookieOption);
if(usuarioAResvisar.type === "admin"){
  res.send({status:"ok",message:"Usuario loggeado",redirect:"/admin"});
}else if(usuarioAResvisar.type === "mesero"){
  res.send({status:"ok",message:"Usuario loggeado",redirect:"/hospedaje"});
}   else if(usuarioAResvisar.type === "bar"){
  res.send({status:"ok",message:"Usuario loggeado",redirect:"/Bar"});
} else if(usuarioAResvisar.type === "restaurante"){
  res.send({status:"ok",message:"Usuario loggeado",redirect:"/Restaurante"});
}
}

async function register(req,res){
  const user = req.body.user;
  const password = req.body.password;
  const type = req.body.type;
  console.log(user)
  console.log(password)
  console.log(type)
  if(!user || !password || !type){
    return res.status(400).send({status:"Error",message:"Los campos están incompletos"})
  }
  const usuarioAResvisar = usuarios.find(usuario => usuario.user === user);
  if(usuarioAResvisar){
    return res.status(400).send({status:"Error",message:"Este usuario ya existe"})
  }
  const salt = await bcryptjs.genSalt(5);
  const hashPassword = await bcryptjs.hash(password,salt);
  const nuevoUsuario ={
    user, type, password: hashPassword
  }
  usuarios.push(nuevoUsuario);
  console.log(usuarios);
  return res.status(201).send({status:"ok",message:`Usuario ${nuevoUsuario.user} agregado`,redirect:"/admin"})
}

export const methods = {
  login,
  register
}