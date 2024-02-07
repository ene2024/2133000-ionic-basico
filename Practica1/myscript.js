function imprimir() {
    var textoingresado = document.getElementById("Texto").value;
    console.log("Texto Ingresado: ", textoingresado);
}

function limpiar() {
    document.getElementById("Texto").value = "";
    console.log("CLEAR!");
}

function theme() {
    var a = [];
    var l = [];
    for(var i=0; i<6;i++){
        a[i]=Math.floor(Math.random()*16);
        switch(a[i]){
            case 0: l[i]="0"; break;
            case 1: l[i]="1"; break;
            case 2: l[i]="2"; break;
            case 3: l[i]="3"; break;
            case 4: l[i]="4"; break;
            case 5: l[i]="5"; break;
            case 6: l[i]="6"; break;
            case 7: l[i]="7"; break;
            case 8: l[i]="8"; break;
            case 9: l[i]="9"; break;
            case 10: l[i]="A"; break;
            case 11: l[i]="B"; break;
            case 12: l[i]="C"; break;
            case 13: l[i]="D"; break;
            case 14: l[i]="E"; break;
            case 15: l[i]="F"; break;  
        }
    }

    var color = "#"+l[0]+l[1]+l[2]+l[3]+l[4]+l[5];
    console.log(color);
    document.body.style.backgroundColor = color;
    var Titulo = document.getElementById("Titulo");
    if(a[0]>7){
    console.log("CLARO");
    Titulo.style.color="#000000"
    }
    else{
    Titulo.style.color="#ffffff"
    console.log("OSCURO");
    }
}