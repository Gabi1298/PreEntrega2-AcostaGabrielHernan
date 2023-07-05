let nombre = prompt("Ingresa tu nombre");

let edad = Number(prompt("Ingresa tu edad"));

let favorito = prompt("Ingresa tu juego favorito");

const BLANCO = " ";

function presentacion(nombre, edad, favorito) {

    alert("Tu nombre es " + nombre + " tenes " + edad + " años y tu juego favorito es " + favorito);
    
}

presentacion(nombre, edad, favorito)

console.log("¡¡Hola!!" + BLANCO + nombre);

console.log("¡Vaya tienes" + BLANCO + edad + BLANCO + "de edad!");

if (nombre.toLowerCase() == "eric") {

    console.log("Bienvenido a Zona Gaming Tutor Eric");

}

else if (nombre.toLowerCase() == "gabriel") {

    console.log("Bienvenido de vuelta Jefe");

}

else {

    alert("Bienvenido a tu proxima pagina gaming favorita");

}

let usuario = prompt("¿Desea crear un usuario? Si o No")

do {

    if (usuario.toLowerCase() == "si") {

        alert("Gracias por crear un usuario")

    }

    else if (usuario.toLowerCase() == "no") {

        alert("¡¡Te esperamos cuando quieras crear uno!!")

    }

    else {

        usuario = prompt("Por favor indique solamente si o no")

    }

} while (usuario.toLowerCase() !== "si" && usuario.toLowerCase() !== "no");