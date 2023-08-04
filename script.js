let cart = [];

    // Productos y precios

let prices = {

    "Joystick PS4 - Camuflado Rojo": 28500,

    "Joystick PS4 - Blanco": 26500,

    "Joystick PS4 - Negro": 25500,

    "Joystick PS4 - Rojo": 26500,

    "Joystick PS5 - Rosa":35500,

    "Joystick PS5 - Blanco":32500,

    "Joystick PS5 - Negro":33500,

    "Joystick Xbox Series X - Azul":36500,

    "Joystick Xbox Series X - Blanco":33500,

    "Joystick Xbox Series X - Negro":33500,
};

// Función para agregar un producto al carrito

function addToCart(product) {

    cart.push(product);

    updateCart();

    updateTotal();

}

// Función para actualizar el carrito

function updateCart() {
    
    let cartListElement = document.getElementById("cart-list");

    cartListElement.innerHTML = "";

    for (let i = 0; i < cart.length; i++) {

        let cartItem = document.createElement("li");

        cartItem.textContent = cart[i];
        
        let removeButton = document.createElement("button");

        removeButton.textContent = "Eliminar";

        removeButton.setAttribute("data-index", i);

        removeButton.addEventListener("click", removeFromCart);

        cartItem.appendChild(removeButton);
        cartListElement.appendChild(cartItem);

    }
    
    let cartCountElement = document.getElementById("cart-count");

    cartCountElement.textContent = cart.length;

}

// Función para actualizar el total de la compra

function updateTotal() {

    let total = 0;

    for (let i = 0; i < cart.length; i++) {

        let product = cart[i];

        if (prices.hasOwnProperty(product)) {

            total += prices[product];

        }

    }
    
    let totalElement = document.getElementById("cart-total");
    totalElement.textContent = "$" + total.toFixed(2);

}

// Función para eliminar un producto del carrito
function removeFromCart(event) {

    let index = event.target.getAttribute("data-index");

    cart.splice(index, 1);

    updateCart();

    updateTotal();

}

// Manejador de eventos cuando se carga la ventana

window.onload = function() {

    let addToCartButtons = document.querySelectorAll(".add-to-cart-button");

    addToCartButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            let product = button.getAttribute("data-product");

            addToCart(product);

        });

    });

};