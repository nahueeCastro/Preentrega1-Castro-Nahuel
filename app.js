//Declaracion de variables

const precioA = Number(100);
const precioB = Number(200);
const precioC = Number(300);
const precioD = Number(400);

let subtotal = Number();

//Ingreso de nombre

let nombreIngresado = prompt ("Ingresa tu nombre");
if (nombreIngresado !=""){
    alert("Bienvenidx " + nombreIngresado + " al simulador de carrito de compras.");
} else if (nombreIngresado=""){
    alert ("No ingresaste tu nombre");
}

//Declaración de función

function solicitarProducto (){
    let productoSeleccionado = prompt(`Indica el número correspondiente al producto que deseas agregar a tu compra. Para salir ingresa ESC. 
    1) Producto A 
    2) Producto B 
    3) Producto C 
    4) Producto D`);
    switch (productoSeleccionado){
        case "1": 
            subtotal = subtotal + precioA;
            break;
        case "2": 
            subtotal = subtotal + precioB;
            break;
        case "3": 
            subtotal = subtotal + precioC;
            break;
        case "4": 
            subtotal = subtotal + precioD;
            break;
        default:
            alert(`No ingresaste una opcion válida.`)
            solicitarProducto();
            break;
    }
    let seguirComprando = prompt (`El precio subtotal del producto seleccionado es $` + subtotal + ". Seguir comprando? (S/N)")
        if (seguirComprando == "S" || seguirComprando == "s"){
            solicitarProducto();
    }
    else if (seguirComprando == "N" || seguirComprando == "n") {
        alert ("El precio total es de $"+subtotal + ". Gracias por tu compra, " + nombreIngresado);
    }
}

//Llamado a la función
solicitarProducto();