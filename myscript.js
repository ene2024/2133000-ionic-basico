var total=0;

function additem(){
    var Producto = document.getElementById("Producto");
    var Precio = document.getElementById("Precio");
    if( Producto.value!== "" && Precio.value!== ""){
        total=total+parseFloat(Precio.value);
        var ProductoN=Producto.value;
        console.log(total + "  -  " + ProductoN);
    
        var carrito = document.querySelector(".carritoE");
        var prodcutoE = document.createElement('div');
        prodcutoE.setAttribute("class","productoE");
        var productoID = document.createElement("div");
        productoID.setAttribute("class", "productoDesc");
        var productoPR = document.createElement("div");
        productoPR.setAttribute("class", "productoPrec");
    
        var IDtxt = document.createElement("p");
        var PRtxt = document.createElement("p");
        IDtxt.textContent=(ProductoN);
        PRtxt.textContent=parseFloat(Precio.value);
        PRtxt.textContent=("$" + PRtxt.textContent);
        productoID.appendChild(IDtxt);
        productoPR.appendChild(PRtxt);
        prodcutoE.appendChild(productoID);
        prodcutoE.appendChild(productoPR);
        carrito.appendChild(prodcutoE);
    
        document.getElementById("Producto").value = "";
        document.getElementById("Precio").value = "";

        var totalcarrito=document.getElementById("total");
        totalcarrito.textContent=("Total: $" + total + " MXN");
    }
    
}