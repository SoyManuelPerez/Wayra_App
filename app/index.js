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
app.get("/DS-1M",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/mesero/DS-1.html"));
app.get("/HB-1M",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/mesero/HB-1.html"));
app.get("/huespedes",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/admin/huespedes.html"))
app.get("/ventas",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/admin/ventas.html"))
app.get("/Bar",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/Bar.html"))
app.get("/Restaurante",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/Restaurante.html"))
//Habitacions
app.get("/HB-1",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/HB-1.html"));
app.get("/HB-2",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/HB-2.html"));
app.get("/HB-3",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/HB-3.html"));
app.get("/HB-4",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/HB-4.html"));
app.get("/HB-5",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/HB-5.html"));
app.get("/HB-6",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/HB-6.html"));
app.get("/HB-7",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/HB-7.html"));
app.get("/HB-8",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/HB-8.html"));
app.get("/HB-9",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/HB-9.html"));
app.get("/HB-10",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/HB-10.html"));
app.get("/HB-11",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/HB-11.html"));
app.get("/HB-12",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/HB-12.html"));
app.get("/HB-13",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/HB-13.html"));
//cabañas
app.get("/CB-14",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/CB-14.html"));
app.get("/CB-15",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/CB-15.html"));
app.get("/CB-16",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/CB-16.html"));
app.get("/CB-17",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/CB-17.html"));
app.get("/CB-18",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/CB-18.html"));
app.get("/CB-19",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/CB-19.html"));
app.get("/CB-20",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/CB-20.html"));
app.get("/CB-21",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/CB-21.html"));
app.get("/CB-22",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/CB-22.html"));
app.get("/CB-23",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/CB-23.html"));
app.get("/CB-24",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/CB-24.html"));
app.get("/CB-25",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/CB-25.html"));
//DiasSol
app.get("/DS-1",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-1.html"));
app.get("/DS-2",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-2.html"));
app.get("/DS-3",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-3.html"));
app.get("/DS-4",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-4.html"));
app.get("/DS-5",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-5.html"));
app.get("/DS-6",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-6.html"));
app.get("/DS-7",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-7.html"));
app.get("/DS-8",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-8.html"));
app.get("/DS-9",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-9.html"));
app.get("/DS-10",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-10.html"));
app.get("/DS-11",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-11.html"));
app.get("/DS-12",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-12.html"));
app.get("/DS-13",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-13.html"));
app.get("/DS-14",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-14.html"));
app.get("/DS-15",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-15.html"));
app.get("/DS-16",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-16.html"));
app.get("/DS-17",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-17.html"));
app.get("/DS-18",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-18.html"));
app.get("/DS-19",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-19.html"));
app.get("/DS-20",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-20.html"));
app.get("/DS-21",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-21.html"));
app.get("/DS-22",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-22.html"));
app.get("/DS-23",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-23.html"));
app.get("/DS-24",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-24.html"));
app.get("/DS-25",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-25.html"));
app.get("/DS-26",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-26.html"));
app.get("/DS-27",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-27.html"));
app.get("/DS-28",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-28.html"));
app.get("/DS-29",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-29.html"));
app.get("/DS-30",authorization.soloAdmin,(req,res)=> res.sendFile(__dirname + "/pages/DS-30.html"));
//Rutas POST
app.post("/api/login",authentication.login);
app.post("/api/register",authentication.register);