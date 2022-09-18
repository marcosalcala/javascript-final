class ProductManager {
  // inicializo el array de (objetos) productos
  initialize() {
    // implementacion de llamadas para carga de los productos desde mi db.json 
    fetch(url)

    .then  ( response => response.json())
    .then ( data => {
      prods = data.products;

      this.loadProducts(prods);
      this.showCart;
    })

  }
  // funcion de carga de los productos
  loadProducts(products) {

    // selecciono al div contenedor por id, y lo reseteo
    const productContainer = document.querySelector("#products");
    productContainer.innerHTML = "";

    // de haber productos cargados en el array, por cada uno, genero elemento contenedor y seteo contenido html
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
                        <a href="javascript:addProduct(${element.id})" class="buy"><i class="fa-solid fa-cart-plus"></i></a>
                    </div>
                `;

        productContainer.appendChild(product);
      });
    }
  }

  addToCart(productDetails) {
    // agrego el producto deseado al carrito
    cart.push (productDetails);
    
    // confirmo al usuario que el producto fue agregado implementando SweetAlert2
    // luego voy a agregarla a remover productos, limpiar el carrito, y confirmar compra
    const Toast1 = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })
    
    Toast1.fire({
      icon: 'success',
      title: 'Producto añadido al carrito!'
    })

    // genero el contenido html relacionado al articulo agregado al carrito
    let cartContent = document.querySelector('#cart');
    cartContent.innerHTML = "";

    cart.forEach((element) => {

      const cartProduct = document.createElement("div");
      cartProduct.classList.add("cart-product")

      cartProduct.innerHTML = `
      <div class = "cart-product-image"> 
        <img src="${element.img}" alt="Imagen del producto"> 
      </div>
      <div class = "cart-product-name">${element.modelo}</div>
      <div class = "cart-product-price">${element.precio}</div>
      `;
    
      cartContent.appendChild(cartProduct)

    });

  }

}
