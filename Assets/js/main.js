// inicializacion de variables y llamado a metodo initialize de
let prods = [];
let cart = [];
let manager;

const url = './Assets/js/db.json'


document.addEventListener('DOMContentLoaded', () => {

    manager = new ProductManager();
    manager.initialize();
})


// funcion para agregar efectivamente un producto al carrito

function addProduct (id) {
    // selecciono al id que contiene prod + el parametro
    const prodToAdd = document.querySelector('#prod'+id)

    // genero un nuevo producto a traves de la clase proveniente del js externo para volcar el contenido
    let product = new Product (id, prodToAdd.querySelector("h3").textContent, prodToAdd.querySelector(".price").textContent.substring(1,7), prodToAdd.querySelector("img").src);
    console.log(product)

    // llamo a la funcion proveniente de la clase ProductManager correspondiente
    manager.addToCart(product);
}

// definiendo selectores varios
const cartButton = document.getElementById("cartIcon");
const cartModal = document.querySelector("#cartModal");
const closeButton = document.getElementById("closeButton")
const confirmButton = document.getElementById("confirm")
let cartContent = document.querySelector('#cart');


// pequeña funcion para mostrar la ventana modal del cart, desde el icono en navbar
const showCart = function () {
    cartModal.classList.remove("hidden")
    cartModal.classList.add("cart-modal")
}

// funcion para cerrar el carrito
const closeCart = function () {
    cartModal.classList.add("hidden")
    cartModal.classList.remove("cart-modal")
}

// llamadas a las funciones
cartButton.addEventListener('click', showCart)
closeButton.addEventListener('click', closeCart)



// funcion para finalizar la compra y vaciar el carrito
confirmButton.addEventListener('click', () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Su compra ha sido procesada, a la brevedad recibira un mail de confirmación',
        showConfirmButton: false,
        timer: 1500
      })
    closeCart();
    cartContent.innerHTML = "";
})

