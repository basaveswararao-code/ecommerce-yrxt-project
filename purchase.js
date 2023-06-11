


const cartItems = JSON.parse(localStorage.getItem('cartItems'));
const tbody = document.getElementById('cart-items');

let totalPrice = 0;
let totalQuantity = 0;

cartItems.forEach(item => {
  const tr = document.createElement('tr');
  const title = document.createElement('td');
  title.textContent = item.title;
  const price = document.createElement('td');
  price.textContent = item.price;
  const quantity = document.createElement('td');
  quantity.textContent = item.quantity;
  tr.appendChild(title);
  tr.appendChild(quantity);
  tr.appendChild(price);
  tbody.appendChild(tr);

  totalPrice += item.price * item.quantity;
  totalQuantity += parseInt(item.quantity);
});

//implement the total count of the products values


const tr = document.createElement('tr');
const totalLabel = document.createElement('td');
totalLabel.colSpan = 1;
totalLabel.textContent = 'Total';
const totalQuantityCell = document.createElement('td');
totalQuantityCell.textContent = totalQuantity;
const totalPriceCell = document.createElement('td');
totalPriceCell.textContent = totalPrice;
tr.appendChild(totalLabel);
tr.appendChild(totalQuantityCell);
tr.appendChild(totalPriceCell);
tbody.appendChild(tr);
 

// // go to purchase produts page

// document.querySelector("#purchase").addEventListener("click",()=>{
//     alert("Yes! you are purchasing and look for purchase items and previues purchase")
//     location.href ="yourPurchase.html"
// })

// //logout page

// document.querySelector("#lagout").addEventListener("click",()=>{
//   alert("are you sure to Logout / Login Details was removed")
//   localStorage.removeItem("loginData");
//   window.location.href = "index.html"
// })



// go to purchase produts page
document.querySelector("#purchase").addEventListener("click",()=>{
  alert("Yes! you are purchasing and look for purchase items and previues purchase");
  window.location.replace("yourPurchase.html");
});

//logout page
document.querySelector("#lagout").addEventListener("click",()=>{
  alert("are you sure to Logout / Login Details was removed");
  localStorage.removeItem("loginData");
  window.location.assign("index.html");
});
