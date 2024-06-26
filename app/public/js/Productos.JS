$(document).ready( function () {
    $('#productos').DataTable({
        lengthChange: false,
    });
} )
let Productos = JSON.parse(localStorage.getItem("inventario")) || [];
const formRegister = document.querySelector("#inventario");
const contenido = document.querySelector("#contenido");
function mostar() {
    let html  = "";

    Productos. forEach(({ id, Producto, Precio ,cantidad,tipo}) => {
        html += `
            <tr>
                <td>${Producto}</td>
                <td>${Precio}</td>
                <td>${cantidad}</td>
                <td>${tipo}</td>
                <td id="${id}">
                    <button type="button" class="btn btn-danger">Eliminar</button>
                </TD>
            </tr>
        `;
    });
    contenido. innerHTML = html;
}
formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    const Producto = e.target.Producto.value.trim();
    const Precio = e.target.Precio.value.trim();
    const cantidad = e.target.Cantidad.value.trim();
    const tipo = e.target.Tipo.value.trim();
    const Product = { id: crypto.randomUUID(),Producto, Precio,cantidad,tipo };
    Productos.push(Product);
    formRegister.reset();
    mostar();
    localStorage.setItem("inventario", JSON.stringify(Productos));
});
contenido.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-danger")) {
        const id = e.target.parentElement.id;
        const res = confirm("Estas seguro que quieres eliminar");

        if (!res) return;

        const newArray = Productos.filter((Productos) => Productos.id !== id);
        Productos = newArray;
        mostar();
        localStorage.setItem("inventario", JSON.stringify(Productos));
    }
});
mostar();