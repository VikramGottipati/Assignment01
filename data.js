const products = [
  {
    id: 1,
    name: "Library Stool Chair",
    image: "./images/image_1.png",
    price: 500,
    quantity: 2,
  },
  {
    id: 2,
    name: "Library Stool Chair",
    image: "./images/image_2.png",
    price: 900,
    quantity: 3,
  },
  {
    id: 3,
    name: "Library Stool Chair",
    image: "./images/image_3.png",
    price: 700,
    quantity: 2,
  },
  {
    id: 4,
    name: "Library Stool Chair",
    image: "./images/image_4.png",
    price: 1000,
    quantity: 2,
  },
  {
    id: 5,
    name: "Library Stool Chair",
    image: "./images/image_5.png",
    price: 800,
    quantity: 2,
  },
  {
    id: 6,
    name: "Library Stool Chair",
    image: "./images/image_6.png",
    price: 800,
    quantity: 2,
  },
  {
    id: 7,
    name: "Library Stool Chair",
    image: "./images/image_7.png",
    price: 800,
    quantity: 2,
  },
  {
    id: 8,
    name: "Library Stool Chair",
    image: "./images/image_8.png",
    price: 800,
    quantity: 2,
  },
];

let display = document.getElementById("display");
// console.log(display)
str = "";
function renderProducts(products) {
  products.map((e) => {
    str += ` <div class="container">
      <img src="${e.image}" alt="Chair" />
     <div class="content">
      <div>
          <p>${e.name}</p>
          <p>Rs.${e.price}</p>
        </div>
        <div><button data-id="${e.id}">ADD TO CART</button></div>
     </div>
    </div>`;
  });
  display.innerHTML = str;
}

let cart = [];
console.log(cart)
let s = "";
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  console.log(product);
  if (product) {
    cart.push(product);
    renderCart();
    s="";
}
console.log(cart)

}
display.addEventListener("click", (event) => {
    const productId = parseInt(event.target.getAttribute("data-id"));
    addToCart(productId);
  });
let displayCart = document.getElementById("display-cart");
// console.log(displayCart)
function renderCart() {
  cart.map((e) => {
    s += ` <div class="container">
          <img src="${e.image}" alt="Chair" />
         <div class="content">
          <div>
              <p>${e.name}</p>
              <p>${e.price}</p>
            </div>
            <div><button id="removeproduct">Remove</button></div>
            </div>
            </div>`;
  });

  displayCart.innerHTML = s;
//   renderCart();
}

renderProducts(products);


