document.querySelector("#logout").addEventListener("click",()=>{
  console.log("clickeed")
    alert("are you sure to Logout / Login Details was removed")
    localStorage.removeItem("loginData");
    window.location.href = "index.html";
})

var xValues = ["Item1", "Item2", "Item3", "Item4", "Item5"];
var yValues = [28, 55, 68, 41, 81];
var barColors = ["orange", "orange", "orange", "orange", "orange"];

var mychart = new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Sales "
    }
  }
});
// Access the data property of mychart, not myChart
mychart.data.datasets[0].data[0] = 15;
mychart.update();

/// go to the new product page
document.querySelector("#newproduct").addEventListener("click",()=>{
  // alert("are you  Add New Product?");
  // window.location.href = "newproduct.html";
  window.location.replace("newproduct.html");


}) 

addingElementsFromLocalStorageTOScreen()


function renderSingleProduct(product, uniqueID) {
  const boxes = document.querySelector('.boxes');
  const box = document.createElement('div');
  const img = document.createElement('img');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  const span = document.createElement('span');
  const superatebutttons = document.createElement('div');
  const editButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  box.classList.add('box');
  img.src = product.image;
  h3.textContent = product.title;
  p.textContent = '$' + product.price + ' ';
  span.textContent = product.discount;
  editButton.textContent = 'Edit';
  deleteButton.textContent = 'Delete';

  superatebutttons.appendChild(editButton);
  superatebutttons.appendChild(deleteButton);

  box.appendChild(img);
  box.appendChild(h3);
  p.appendChild(span);
  box.appendChild(p);
  box.appendChild(superatebutttons);

  boxes.appendChild(box);

  // add uniqueID to the HTML element for future reference
  box.setAttribute('data-unique-id', uniqueID);
}

function resultProducts(products) {
  products.forEach((m) => {
    const uniqueID = Math.floor(Math.random() * 100);
    renderSingleProduct(m, uniqueID);
    storenewlyAddItems(m, uniqueID);
  });
}




// let products = JSON.parse(localStorage.getItem("products")) || [];


// let boxesContainer = document.querySelector(".boxes");


// function renderSingleProduct(m){
  
//   let box = document.createElement("div");
//   box.classList.add("box");
//   document.querySelector(".box").appendChild(box);

//   let image = document.createElement("img");
//   image.src = product.imageurl;
//   image.alt = product.title;
//   box.appendChild(image);
  
//   let title = document.createElement("h3");
//   title.textContent = product.title;
//   box.appendChild(title);
  
//   let price = document.createElement("p");
//   price.innerHTML = `$${product.price} <span>(${product.discount}% OFF)</span>`;
//   box.appendChild(price);
  
//   let superatebutttons = document.createElement("div");
//   superatebutttons.id = "superatebutttons";
  
//   let editButton = document.createElement("button");
//   editButton.textContent = "Edit";
//   editButton.id = "edit";
//   superatebutttons.appendChild(editButton);
  
//   let deleteButton = document.createElement("button");
//   deleteButton.textContent = "Delete";
//   deleteButton.id = "delete";
//   superatebutttons.appendChild(deleteButton);
  
//   box.appendChild(superatebutttons);
//   boxesContainer.appendChild(box);
  
//   // Add event listeners for edit and delete buttons
//   editButton.addEventListener("click", () => {
//     location.href = "editproduct.html";
//     editProduct(product);
//   });

//   deleteButton.addEventListener("click", () => {
//     removeProductFromLocalStorage(product.UniqueID);
//   });


//  }


// products.forEach(product => {


//   let box = document.createElement("div");
//   box.classList.add("box");
  
//   let image = document.createElement("img");
//   image.src = product.imageurl;
//   image.alt = product.title;
//   box.appendChild(image);
  
//   let title = document.createElement("h3");
//   title.textContent = product.title;
//   box.appendChild(title);
  
//   let price = document.createElement("p");
//   price.innerHTML = `$${product.price} <span>(${product.discount}% OFF)</span>`;
//   box.appendChild(price);
  
//   let superatebutttons = document.createElement("div");
//   superatebutttons.id = "superatebutttons";
  
//   let editButton = document.createElement("button");
//   editButton.textContent = "Edit";
//   editButton.id = "edit";
//   superatebutttons.appendChild(editButton);
  
//   let deleteButton = document.createElement("button");
//   deleteButton.textContent = "Delete";
//   deleteButton.id = "delete";
//   superatebutttons.appendChild(deleteButton);
  
//   box.appendChild(superatebutttons);
//   boxesContainer.appendChild(box);
  
//   // Add event listeners for edit and delete buttons
//   editButton.addEventListener("click", () => {
//     location.href = "editproduct.html";
//     editProduct(product);
//   });

//   deleteButton.addEventListener("click", () => {
//     removeProductFromLocalStorage(product.UniqueID);
//   });
// });









// let products = JSON.parse(localStorage.getItem("products"));


// ///new add , up dated
// let products = JSON.parse(localStorage.getItem("products"));
// let boxesContainer = document.querySelector(".boxes");
// // products.forEach(product => {
// function renderSingleProduct(product) {
//   let box = document.createElement("div");
//   box.classList.add("box");
  
//   let image = document.createElement("img");
//   image.src = product.imageurl;
//   image.alt = product.title;
//   box.appendChild(image);
  
//   let title = document.createElement("h3");
//   title.textContent = product.title;
//   box.appendChild(title);
  
//   let price = document.createElement("p");
//   price.innerHTML = `$${product.price} <span>(${product.discount}% OFF)</span>`;
//   box.appendChild(price);
  
//   let superatebutttons = document.createElement("div");
//   superatebutttons.id = "superatebutttons";
  
//   let editButton = document.createElement("button");
//   editButton.textContent = "Edit";
//   editButton.id = "edit";
//   superatebutttons.appendChild(editButton);
  
//   let deleteButton = document.createElement("button");
//   deleteButton.textContent = "Delete";
//   deleteButton.id = "delete";
//   superatebutttons.appendChild(deleteButton);
  
//   box.appendChild(superatebutttons);
//   boxesContainer.appendChild(box);
//   editButton.addEventListener("click",()=>{
//     location.href = "editproduct.html"
//     editProduct(product)
//   })
//   deleteButton.addEventListener("click",()=>{
//     console.log("delete product")
//     let products = JSON.parse(localStorage.getItem("products"));
//     let updatedProducts = products.filter(p => p.id !== product.id);
//     localStorage.setItem("products", JSON.stringify(updatedProducts));
//     box.remove();
//   })
// };


// const { Chart } = require("chart.js")
// var xValues = ["Item1", "Item2", "Item3", "Item4", "Item5"];
// var yValues = [28, 55, 68, 41, 81];
// var barColors = ["orange", "orange", "orange", "orange", "orange"];

// var mychart = new Chart("myChart", {
//   type: "bar",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors,
//       data: yValues
//     }]
//   },
//   options: {
//     legend: {display: false},
//     title: {
//       display: true,
//       text: "Sales "
//     }
//   }
// });
// myChart.data.datasets[0].data[0] = 15;
// myChart.update();
