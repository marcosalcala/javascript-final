class ProductManager {
  // inicializo el array de (objetos) productos
  initialize() {
    prods = [
      {
        id: "1",
        marca: "Nike",
        modelo: "Jordan Retro",
        img: "jordan-retro.png",
        precio: "$99.99",
        stock: "3",
      },
      {
        id: "2",
        marca: "Adidas",
        modelo: "Yeezy",
        img: "adidas-yeezy.png",
        precio: "$299.99",
        stock: "1",
      },
      {
        id: "3",
        marca: "Nike",
        modelo: "Air Force",
        img: "air-force.png",
        precio: "$79.99",
        stock: "7",
      },
      {
        id: "4",
        marca: "Nike",
        modelo: "Air Max",
        img: "air-max.png",
        precio: "$69.99",
        stock: "7",
      },
    ];

    this.loadProducts(prods);
  }

  loadProducts(products) {
    const productContainer = document.querySelector("#products");
    productContainer.innerHTML = "";

    if (products.length === 0) {
      alert("No content. Add products.");
    } else {
      products.forEach((element) => {
        let product = document.createElement("div");
        product.classList.add("product-card");
        product.setAttribute("id","prod"+element.id)
        product.innerHTML = `
                    <div class = "img-box"> 
                        <img src="./Assets/img/${element.img}" alt="Imagen del producto">
                    </div>
                    <div class = "content-box">
                        <h3>${element.marca} ${element.modelo}</h3>
                        <h4 class = "price">${element.precio}</h4>
                        <button href="#" class="buy">Buy Now</button>
                    </div>
                `;

        productContainer.appendChild(product);
      });
    }
  }
}
