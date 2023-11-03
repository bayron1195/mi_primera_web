//alert("Hola este es mi Javascript");
//let nombre = "Andres";
//nombre = "Andres";
//var nombre1 = "Andres";

//const nombre2 = "Andres";
//nombre2 ="Maria";

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

// Selecionar Elementos

//let contenidoTitulo = "Nombre";

//let titulo = document.querySelector(".logo ")
//titulo.innerHTML =contenidoTitulo;

//Condicionales
//let textoTitulo = titulo.innerText;
//console.log(textoTitulo);

//if(textoTitulo == "Nombre")
//{
    //titulo.innerHTML= "Otro";
//}else
//{
    //console.log("no se cumple")
//}


//Funciones 
//let nombre = "Bayron";
//let ciudad = "Aguazul";
//let gusto = "Warzone";

//let parrafo = document.querySelector(".parrafo2");

//function cambiarTexto(nombre, ciudad, gusto){
//let contenido = `Me llamo ${nombre}, naci en Colombia y vivo en ${ciudad}.
//me gusta los videojuegos como el ${gusto} y ver series animes. Me gusta mucho aprender a programar.`;
//return contenido;

//}
//parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);


let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};