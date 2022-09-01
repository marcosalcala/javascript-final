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
