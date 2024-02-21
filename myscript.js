var total=0;

function login() {
    var Usuario = document.getElementById("Usuario");
    let mensajeE = document.querySelector('.mensajeE');
    let userinput = document.createElement("p");
    mensajeE.removeChild(mensajeE.firstChild);
    userinput.textContent=("Inicio Sesion: " + Usuario.value);
    mensajeE.appendChild(userinput);
    console.log("Inicio Sesion: ", Usuario.value);
    document.getElementById("Usuario").value = "";

}

function register() {
    var Usuario = document.getElementById("Usuario");
    let mensajeE = document.querySelector('.mensajeE');
    let userinput = document.createElement("p");
    mensajeE.removeChild(mensajeE.firstChild);
    userinput.textContent=("Registro Exitoso: " + Usuario.value);
    mensajeE.appendChild(userinput);
    console.log("Registro Exitoso: ", Usuario.value);
    document.getElementById("Usuario").value = "";
}

function additem(){
    var Producto = document.getElementById("Producto");
    var Precio = document.getElementById("Precio");
    total=total+parseFloat(Precio.value);
    var ProductoN=Producto.value;
    console.log(total + "  -  " + ProductoN);

    var resumen = document.querySelector('.Resumen');
    var productotxt = document.createElement("p");
    var preciotxt = document.createElement("p");
    var totaltxt = document.createElement("p");
    productotxt.textContent=(ProductoN + " - $");
    preciotxt.textContent=parseFloat(Precio.value);
    totaltxt.textContent=(total);
    resumen.appendChild(productotxt);
    resumen.appendChild(preciotxt);
    resumen.appendChild(totaltxt);
    
}