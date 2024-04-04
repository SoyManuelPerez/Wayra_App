$(document).ready( function () {
    $('#productos').DataTable({
        lengthChange: false,
    });
} )
//Creacion de bases de datos locales
let Productos = JSON.parse(localStorage.getItem("inventario")) || [];
let Cuenta = JSON.parse(localStorage.getItem("CuentaDS30")) || []
let contador = JSON.parse(localStorage.getItem("contadorDS30")) || [];
let Registro = JSON.parse(localStorage.getItem("Registro")) || [];
let Suma = JSON.parse(localStorage.getItem("SumaDS30")) || [];
const contenido = document.querySelector("#contenido");
const contenidoC = document.querySelector("#contenidoC");
const contenidosuma = document.querySelector("#contenidosuma");
const pagofactura = document.querySelector("#factura")
if(parseInt(localStorage.getItem("SumaDS30"))!=1||Cuenta==[]){
    let ini = 0
Suma.push(ini)
localStorage.setItem("SumaDS30",Suma)}
//Para cuadno se paga la factura elimine toda la cuneta
pagofactura.addEventListener("click", (e) => {
    localStorage.removeItem("CuentaDS30"); 
    localStorage.removeItem("contadorDS30"); 
    window.location.reload();
    localStorage.setItem("contadorDS30",0); 
})
//Funcion para mostrar los productos
function mostar() {
    let html  = "";

    Productos. forEach(({ id, Producto, Precio ,tipo}) => {
        html += `
            <tr>
                <td >${Producto}</td>
                <td>${Precio}</td>
                <td>${tipo}</td>
                <td id="${id}">
                    <button type="button" class="btn btn-success">Agregar</button>
                </TD>
            </tr>
        `;
    });
    contenido. innerHTML = html;
}
//Funccion para mostra los productos en la cuenta
function mostar2() {
    let html  = "";
    Cuenta. forEach(({ id, Producto, Precio ,tipo}) => {
        html += `
            <tr>
                <td >${Producto}</td>
                <td>${Precio}</td>
                <td>${tipo}</td>
                <td id="${id}">
                <button type="button" class="btn btn-danger">Eliminar</button>
                    <button type="button" class="btn btn-success">Pago</button>
                </TD>
            </tr>
        `;
    });
    contenidoC. innerHTML = html;
}
//Funcion para mostra la suma de la cuenta
function mostar3() {
    let total = parseInt(localStorage.getItem("contadorDS30"))
    console.log()
    let html  = "";
        html += `
            <tr>
                <td >`+total+`</td>
            </tr>
        `;
    
    contenidosuma. innerHTML = html;
}
//Funcion para calcular la suma de la cuneta
function sumatoria(precio){
    if (parseInt(localStorage.getItem("SumaDS30"))==0){let sumatoria =[]
        sumatoria.push(precio)
        localStorage.setItem("contadorDS30",sumatoria)
        ini=1
        localStorage.removeItem("SumaDS30")
        let sum=[]
        sum.push(ini)
        localStorage.setItem("SumaDS30",sum)
        }
        else if(parseInt(localStorage.getItem("SumaDS30"))==1){
            let con = parseInt(localStorage.getItem("contadorDS30")) 
            let total= con + precio
            localStorage.setItem("contadorDS30",total)
        }
}
//Funcion para restar si ya se pago algun producto o se elimina 
function resta(valor){
            let con = parseInt(localStorage.getItem("contadorDS30"))
            let total= con - valor
            localStorage.setItem("contadorDS30",total)
            mostar3()
}

contenido.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-success")) {
        const id = e.target.parentElement.id;
        const Prod = Productos.find(((Productos) => Productos.id === id));
        const Producto = Prod.Producto;
        const Precio = Prod.Precio;
        const suma = parseInt(Prod.Precio);
        sumatoria(suma)
        const tipo = Prod.tipo
        const formUser = { id: crypto.randomUUID(),Producto, Precio, tipo };
        Cuenta.push(formUser);
        localStorage.setItem("CuentaDS30", JSON.stringify(Cuenta));
        mostar();
        mostar2()
        mostar3()
    }
});
contenidoC.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-danger")) {
        const id = e.target.parentElement.id;
        const res = confirm("Estas seguro que quieres eliminar");

        if (!res) return;
        const Prod = Cuenta.find(((Cuenta) => Cuenta.id === id));
        const valor = parseInt(Prod.Precio);
        resta(valor)
        const newArray = Cuenta.filter((Cuenta) => Cuenta.id !== id);
        Cuenta = newArray;
        mostar();
        mostar2()
        mostar3()
        localStorage.setItem("CuentaDS30", JSON.stringify(Cuenta));
    }
    
    if (e.target.classList.contains("btn-success")) {
        const id = e.target.parentElement.id;
        const Prod = Cuenta.find(((Cuenta) => Cuenta.id === id));
        const Producto = Prod.Producto;
        const Precio = Prod.Precio;
        const tipo = Prod.tipo
        var date = new Date();
        resta(Precio)
        const formatDate = (date)=>{
            let formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
                return formatted_date;
            }
        let fecha = formatDate(date);
        const formUser = { id: crypto.randomUUID(),Producto, Precio, tipo, fecha };
        Registro.push(formUser);
        localStorage.setItem("RegistroDS30", JSON.stringify(Registro));
        const newArray = Cuenta.filter((Cuenta) => Cuenta.id !== id);
        Cuenta = newArray;
        localStorage.setItem("CuentaDS30", JSON.stringify(Cuenta));
        mostar();
        mostar2()
    }
});
mostar();
mostar2()
mostar3()