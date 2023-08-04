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

    let cartCountElement = document.getElementById("cart-count");

    cartCountElement.textContent = "Productos en carrito: " + getTotalQuantity();

    let cartListElement = document.getElementById("cart-list");
    cartListElement.innerHTML = "";

    let cartItems = getCartItemsWithQuantities();

    cartItems.forEach(function (cartItem) {

        let liElement = document.createElement("li");

        liElement.textContent = cartItem.product + " - Cantidad: " + cartItem.quantity;

        let removeButton = document.createElement("button");

        removeButton.textContent = "Eliminar";

        removeButton.setAttribute("data-product", cartItem.product); 

        // Usamos data-product en lugar de data-index
        removeButton.addEventListener("click", removeFromCart);


        liElement.appendChild(removeButton);
        cartListElement.appendChild(liElement);

    });

    updateTotal();

}

// Función para actualizar el total de la compra

function updateTotal() {

    let total = 0;

    getCartItemsWithQuantities().forEach(function (cartItem) {

        if (prices.hasOwnProperty(cartItem.product)) {

            total += prices[cartItem.product] * cartItem.quantity;

        }

    });

    let totalElement = document.getElementById("cart-total");

    totalElement.textContent = "$" + total.toFixed(2);

}

// Función para obtener la cantidad total de un producto en el carrito

function getTotalQuantity() {

    let totalQuantity = 0;

    getCartItemsWithQuantities().forEach(function (cartItem) {

        totalQuantity += cartItem.quantity;

    });

    return totalQuantity;

}

// Función para eliminar un producto del carrito

function removeFromCart(event) {

    let product = event.target.getAttribute("data-product");

    let index = cart.indexOf(product);

    if (index !== -1) {

        cart.splice(index, 1);

        updateCart();

        updateTotal();

    }
}

// Función para obtener la lista de productos en el carrito con cantidades

function getCartItemsWithQuantities() {

    let itemsWithQuantities = [];

    cart.forEach(function (cartItem) {

        let existingItem = itemsWithQuantities.find(item => item.product === cartItem);

        if (existingItem) {

            existingItem.quantity++;

        } else {

            itemsWithQuantities.push({ product: cartItem, quantity: 1 });

        }

    });

    return itemsWithQuantities;
}

// Manejador de eventos cuando se carga la ventana

window.onload = function () {

    let addToCartButtons = document.querySelectorAll(".add-to-cart-button");

    addToCartButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            let product = button.getAttribute("data-product");

            addToCart(product);

        });

    });
    
};