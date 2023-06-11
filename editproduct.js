
document.querySelector("#logout").addEventListener("click",()=>{
    alert("are you sure to Logout / Login Details was removed")
    localStorage.removeItem("loginData");
    window.location.href = "index.html";
})

function titleText(){
  let title = document.querySelector(".titlelive")   
  let price = document.querySelector(".pricelive")
  let discount = document.querySelector(".discountlive")
  let image = document.querySelector(".imagelive")

  
  title.innerText = document.querySelector(".title").value
  price.innerText = "₹" + document.querySelector(".price").value +"/-"
  discount.innerText = "(" + document.querySelector(".discount").value + " % Off)"
  image.src = document.querySelector(".imageurl").value
}

let products = []

function displayData(){
  if(localStorage.getItem('products')){
    products = JSON.parse(localStorage.getItem('products'))
    let productsHtml = ''
    products.forEach(product =>{
      productsHtml += `
        <div class="product">
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <p>${product.price}</p>
          <p>${product.discount}</p>
          <p>${product.category}</p>
          <img src="${product.imageurl}" alt="${product.title}">
        </div>
      `
    })
  }
}

document.querySelector('.addProduct').addEventListener('click', function(event) {
  event.preventDefault();

  let product = {
    title: document.querySelector('.title').value,
    description: document.querySelector('.description').value,
    price: document.querySelector('.price').value,
    discount: document.querySelector('.discount').value,
    category: document.querySelector('.category').value,
    imageurl: document.querySelector('.imageurl').value,
  };

  if (product.title.trim().length > 0 &&
      product.description.trim().length > 0 &&
      product.price.trim().length > 0 &&
      product.discount.trim().length > 0 &&
      product.category.trim().length > 0 &&
      product.imageurl.trim().length > 0) {

    let uniqueID = 'info' + Math.floor(Math.random() * 50);
    addNoteToLocalStorage(product, uniqueID);

    window.location.href = 'sellersProduct1.html'; 
  } else {
    alert('Data is empty! Fill all the details.');
  }
});


function addNoteToLocalStorage(product, UniqueID){
  product = {...product, UniqueID}
  products.push(product)    
  localStorage.setItem('products',JSON.stringify(products))
}
function removeElementFromNotesList(id){
  document.querySelector('.' + id).remove()
  products = JSON.parse(localStorage.getItem('products'))
  let index = products.findIndex(product => product.UniqueID == id)
  products.splice(index, 1)
  localStorage.setItem('products', JSON.stringify(products));
}
displayData()
