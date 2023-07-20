// Variables ingresadas por el usuario mediante un Prompt() para generar un objeto

const objUsuario = {

    nombre: nombre = prompt("Ingresa tu nombre:"),
  
    edad: edad = Number(prompt("Ingresa tu edad:")),
  
    juegoFavorito: favorito = prompt("Ingresa tu juego favorito:"),
  
};

const BLANCO = " ";

// Presentacion del usuario mediante prompt y alert

function presentacion(nombre, edad, favorito) {

    alert("Tu nombre es " + nombre + " tenes " + edad + " años y tu juego favorito es " + favorito);
    
    if (objUsuario.nombre.toLowerCase() === "eric") 
    
    {

        console.log("Bienvenido a Zona Gaming Tutor Eric");

    } 

    else if (objUsuario.nombre.toLowerCase() === "gabriel") 
    
    {

        console.log("Bienvenido de vuelta Jefe");

    }
    
    else 
    
    {

        console.log("Bienvenido a tu próxima página gaming favorita");

    }

}

presentacion(nombre, edad, favorito)

// Crear un usuario mediante prompt

let usuario = prompt("¿Desea crear un usuario? Si o No")

do {

    if (usuario.toLowerCase() == "si") {

        alert("Gracias, compartenos tu email para enviarte las respues al formulario de creacion de usuario")

        prompt("Indicanos tu email")

    }

    else if (usuario.toLowerCase() == "no") {

        alert("¡¡Te esperamos cuando quieras crear uno!!")

    }

    else {

        usuario = prompt("Por favor indique solamente si o no")

    }

} while (usuario.toLowerCase() !== "si" && usuario.toLowerCase() !== "no");

// Carrito de compras basado en lo visto en clase

let productos = [

    {

      nombreProducto: "Joystick PS4 Negro",

      precio: 35000,

    },

    {

      nombreProducto: "Joystick PS4 Azul",

      precio: 36000,

    },

    {

      nombreProducto: "Joystick PS5 Negro",

      precio: 43000,

    },

    {

      nombreProducto: "Joystick PS5 Blanco",

      precio: 45000,

    },

    {

      nombreProducto: "Joystick XBOX SX",

      precio: 45000,

    },

    {

      nombreProducto: "Joystick XBOX One",

      precio: 35000,

    },
    
];
  
let carrito = [];
  
function nuevo_producto() {

    let seleccion = prompt("Nuestros Joystick en stock son : Joystick PS4 Negro, Joystick PS4 Azul, Joystick PS5 Negro, Joystick PS5 Blanco, Joystick XBOX SX, Joystick XBOX One");
    
    producto = productos.find((p) => p.nombreProducto.toLowerCase() === seleccion.toLowerCase());

}
  
function sumar_al_carrito() {

    if (producto) {

      let cantidad = parseInt(prompt("Ingrese la cantidad que desea seleccionar:"));

      carrito.push({

        producto: producto.nombreProducto,

        cantidad: cantidad,

        subtotal: producto.precio * cantidad

      });

    } 

    else 

    {

      alert("El producto seleccionado no existe. Por favor, vuelva a intentarlo.");

    }
}
  
function confirmar_productos() {

    while (true) {

      nuevo_producto();

      sumar_al_carrito();
  
      if (!confirm("¿Desea agregar otro producto al carrito?")) {

        break;

      }
    }
}
  
function precio_total() {

    console.log("Carrito de compras:");

    carrito.forEach((item) => {

      console.log(`- ${item.cantidad} ${item.producto}: ${item.subtotal}`);

    });
  
    let total = carrito.reduce((sum, item) => sum + item.subtotal, 0);

    console.log(`Total a pagar: ${total}`);

    alert(`Total a pagar: ${total}`);

}
  
function vaciar() {

    carrito = [];

    console.log("El carrito ha sido vaciado.");

}
  
confirmar_productos();
  
  if (carrito.length > 0) {

    if (confirm("¿Desea vaciar el carrito?")) {

      vaciar();

    }

}
  
precio_total();