const cartProducts = document.getElementById('cart-products');

let cart = [];

const totalPrice = document.getElementById('totalPrice');

const productsList = document.getElementById('productos-container');
productsList.addEventListener('click', (e) => {
  if (e.target.classList.contains('addButton')) {
    console.log("carro")
    if (!isUserLogged()) {
      window.location.href = '/paginas/login.html';
      return;
    }
    const product = e.target.parentElement;
    const infoProduct = {
      name: product.querySelector('h4').textContent,
      quantity: 1,
      price: product.querySelector('p').textContent,
    }

    const isProductExist = cart.some((product) => product.name === infoProduct.name)
    if (isProductExist) {
      const products = cart.map((product) => {
        if (product.name === infoProduct.name) {
          product.quantity++;
          return product;
        } else {
          return product;
        }
      })
      cart = [...products]
    } else {
      cart = [...cart, infoProduct];
    }

    showHTMLProducts();
    updateCartAndSave();
  }
});

cartProducts.addEventListener('click', (e) => {
  if(e.target.classList.contains('icon-close')){
    const product = e.target.parentElement;
    const name = product.querySelector('h3').textContent;

    cart = cart.filter(product => product.name !== name);
    showHTMLProducts();
  }
});

const showHTMLProducts = () => {
  cartProducts.innerHTML = '';

  let total = 0;

  cart.forEach((product) => {
    const containerProduct = document.createElement('div');
    containerProduct.classList.add('cart-product');

    containerProduct.innerHTML = `
        <img src="./media/img/${getImageName(product.name)}">
        <div class="info-product">
          <button type="button" class="icon-close">X</button>  
          <h3 class="productName">${product.name}</h3>
          <p class="quantity">Cantidad: ${product.quantity}</p>
          <p class="price">${product.price} c/u</p>
        </div>
      `
    cartProducts.append(containerProduct);

    total += product.quantity * parseInt(product.price.slice(1));
  })

  totalPrice.innerText = `${total}`;
}

const getImageName = (productName) => {
  return productName.toLowerCase().split(' ').join('-') + '.jpg';
}


const saveCartToSessionStorage = () => {
  sessionStorage.setItem('cart', JSON.stringify(cart));
};


const getCartFromSessionStorage = () => {
  const cartFromStorage = sessionStorage.getItem('cart');
  if (cartFromStorage) {
    cart = JSON.parse(cartFromStorage);
    showHTMLProducts();
  }
};


window.addEventListener('load', getCartFromSessionStorage);

const updateCartAndSave = () => {
  showHTMLProducts();
  saveCartToSessionStorage();
};