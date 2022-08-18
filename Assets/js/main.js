// inicializacion de variables y llamado a metodo initialize de
let prods = [];
let cart = [];
let manager;

manager = new ProductManager();

manager.initialize();


const user = {}

user.name = prompt("Cual es tu nombre?");

user.age = prompt("Cual es tu edad?");

localStorage.setItem('currentUser', JSON.stringify(user));

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

console.log(currentUser);


