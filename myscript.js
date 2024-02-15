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