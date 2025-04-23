// Seleccionar el título y cambiar su texto
document.getElementById("tituloPrincipal").textContent = "Nuevo Título Cambiado";

// Seleccionar los párrafos y cambiar su color
let parrafos = document.getElementsByClassName("parrafo");
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].style.color = "blue"; // Puedes cambiar el color a cualquier otro
}

// Seleccionar los elementos <li> y agregar texto al final de cada uno
let elementosLista = document.querySelectorAll("ul li");
elementosLista.forEach((elemento, index) => {
    elemento.textContent += ` - Extra ${index + 1}`;
});