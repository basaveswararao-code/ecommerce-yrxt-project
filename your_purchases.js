
// // local storegeto retrive

// const cartItems = JSON.parse(localStorage.getItem('cartItems'));
// const purchaseContainer = document.getElementById('purchasebox');

// let totalPrice = 0;

// if (!Array.isArray(cartItems) || !cartItems.length) {
//   console.error('No cart items found in localStorage');
// } else {
//   cartItems.forEach(item => {
//     const productContainer = document.createElement('div');
//     productContainer.classList.add('product-container');
//     const productImage = document.createElement('img');
//     productImage.src = item.image;
//     productContainer.appendChild(productImage);
//     const productPrice = document.createElement('p');
//     productPrice.textContent = `₹${item.price}`;
//     productContainer.appendChild(productPrice);
//     totalPrice += item.price;
//     purchaseContainer.insertBefore(productContainer, document.getElementById('ratethis'));
//   });
  
//   const totalPriceElement = document.createElement('h4');
//   totalPriceElement.textContent = `Total: $${totalPrice}/-`;
//   document.getElementById('ratethis').appendChild(totalPriceElement);
// }

// /// lagout the page

// document.querySelector("#lagout").addEventListener("click",()=>{
//   alert("are you sure to Logout / Login Details was removed")
//   localStorage.removeItem("loginData");
//   window.location.href = "index.html";
// })


// local storegeto retrive

const cartItems = JSON.parse(localStorage.getItem('cartItems'));
const purchaseContainer = document.getElementById('purchasebox');

let totalPrice = 0;

if (!Array.isArray(cartItems) || !cartItems.length) {
  console.error('No cart items found in localStorage');
} else {
  cartItems.forEach(item => {
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');
    const productImage = document.createElement('img');
    productImage.src = item.image;
    productContainer.appendChild(productImage);
    const productPrice = document.createElement('p');
    productPrice.textContent = `₹${item.price}`;
    productContainer.appendChild(productPrice);
    totalPrice += item.price;
    purchaseContainer.insertBefore(productContainer, document.getElementById('ratethis'));
  });
  
  const totalPriceElement = document.createElement('h4');
  totalPriceElement.textContent = `Total: $${totalPrice}/-`;
  document.getElementById('ratethis').appendChild(totalPriceElement);
}

// logout the page
document.querySelector("#logout").addEventListener("click", () => {
  alert("Are you sure you want to log out? Your login details will be removed.");
  localStorage.removeItem("loginData");
  window.location.replace("index.html");
});
