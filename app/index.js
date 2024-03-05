import  express  from "express";
import cookieParser from 'cookie-parser';
//Fix para __direname
import path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import {methods as authentication} from "./controllers/authentication.controller.js"
import {methods as authorization} from "./middlewares/authorization.js";

//Server
const app = express();
app.set("port",4000);
app.listen(process.env.PORT || 4000);
console.log("Servidor corriendo en puerto",app.get("port"));

//Configuración
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(cookieParser())

//Rutas GET
app.get("/",authorization.soloPublico, (req,res)=> res.sendFile(__dirname + "/pages/login.html"));
app.get("/register",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/admin/register.html"));
app.get("/admin",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/admin/admin.html"));
app.get("/DS",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/admin/DS.html"));
app.get("/DSM",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/mesero/DS.html"));
app.get("/Productos",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/admin/Productos.html"));
app.get("/hospedaje",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/mesero/hospedaje.html"));
app.get("/DS-1",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-1.html"));
app.get("/HB-1",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/HB-1.html"));
app.get("/DS-1M",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/mesero/DS-1.html"));
app.get("/HB-1M",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/mesero/HB-1.html"));
app.get("/huespedes",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/admin/huespedes.html"))
app.get("/ventas",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/admin/ventas.html"))
app.get("/Bar",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/Bar.html"))
app.get("/Restaurante",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/Restaurante.html"))
//Rutas POST
app.post("/api/login",authentication.login);
app.post("/api/register",authentication.register);