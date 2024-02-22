let ingreso = JSON.parse(localStorage.getItem("huespedes")) || [];
const tabla = document.querySelector("#huesped");
function mostaringreso() {
    let html  = "";
    ingreso. forEach(({ id, hb, Nombres ,Apellidos,Tipo,Documento}) => {
        html += `
            <tr>
                <td>${hb}</td>
                <td>${Nombres}</td>
                <td>${Apellidos}</td>
                <td>${Tipo}</td>
                <td>${Documento}</td>
                <td id="${id}">
                    <button type="button" class="btn btn-danger">Elminar</button>
                </td>
            </tr>
        `;
    });
    console.log(html)
    tabla.innerHTML = html;
};
mostaringreso();

