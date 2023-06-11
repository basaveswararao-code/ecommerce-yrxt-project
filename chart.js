/// algoila import

import algoliasearch from "algoliasearch";

const client = algoliasearch("34G6G1OF1Q", "865340a5845e23a4247fc0c40605081e");

const index = client.initIndex("starshopper");

//creaste emepty products array

let data = []

let boxsRootElement = document.querySelector('.boxs')


// fetch

fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(json=>{
        data = json;
        console.log(data)
})


// serch 

document.querySelector('#searchInput').addEventListener('keyup', () =>{
    let searchTerm = document.querySelector('#searchInput').value;
    let boxsArray = []

    index.search(searchTerm).then(response =>{
        renderProducts(response.hits)
    })

});

  // price less + greter than product
document.querySelector(".pricelessthan").addEventListener("keyup", ()=> {
    let priceless = document.querySelector('.pricelessthan').value;
    let boxsArray = []
    if(priceless.trim().length>0){
        boxsArray=data.filter(product=>(product.price) <= priceless)
        renderProducts(boxsArray)
    }
})
document.querySelector('.pricegreaterthan').addEventListener('keyup', ()=>{
    let presmore = document.querySelector('.pricegreaterthan').value;
    let boxsArray = []
    if(presmore.trim().length>0){
        boxsArray=data.filter(product=>(product.price) > presmore)
        renderProducts(boxsArray)
    }
})

//select items price ,discount ,a- z, z - a

document.querySelector("#SelectItem").addEventListener("change", () => {

    let myoption = document.querySelector("#SelectItem") 
    let sortedata = []     
    alert("filtering products by " + myoption.value)

    if(myoption.value === "price"){
         sortedata = data.sort((a, b) => {  return a.price - b.price})
        renderProducts(sortedata)            
     }else if(myoption.value == "discount"){           
        sortedata = data.sort((a, b) => {  return a.discount - b.discount})
       renderProducts(sortedata)          
     }else if(myoption.value == "atoz"){
       sortedata = data.sort(function(a,b){ return a.title.localeCompare(b.title)})
       renderProducts(sortedata)          
     }else if(myoption.value == "ztoa"){
         sortedata = data.sort( function(a,b) {return  b.title.localeCompare(a.title)})
         renderProducts(sortedata)
     }
})

//sort the items

document.querySelector('.mensBox').addEventListener('click',()=>{
    let mensthings=[]
    mensthings=data.filter(product=>(product.category).includes('men'))
    renderProducts(mensthings)
    console.log(mensthings)
})
document.querySelector('.jeweleryBox').addEventListener('click',()=>{
    let Jeluraythings=[]
    Jeluraythings=data.filter(product=>(product.category).includes('jewelery'))
    renderProducts(Jeluraythings)
    console.log(Jeluraythings)
})
document.querySelector('.electronicsbox').addEventListener('click',()=>{
    let electronicsthings=[]
    electronicsthings=data.filter(product=>(product.category).includes('electronics'))
    renderProducts(electronicsthings)
    console.log(electronicsthings)
})
document.querySelector('.shirtsbox').addEventListener('click',()=>{
    let shirtsthings=[]
    shirtsthings=data.filter(product=>(product.category).includes('shirts'))
    renderProducts(shirtsthings)
    console.log(shirtsthings)
})
document.querySelector('.womensBox').addEventListener('click',()=>{
    let womensthings=[]
    womensthings=data.filter(product=>(product.category).includes('women'))
    renderProducts(womensthings)
    console.log(womensthings)
})
document.querySelector('.officalJoketsbox').addEventListener('click',()=>{
    let joketsthings=[]
    joketsthings=data.filter(product=>(product.category).includes('jokets'))
    renderProducts(joketsthings)
    console.log(joketsthings)
})


//render the products

function renderProducts(products){
    document.querySelectorAll('.box').forEach(prod => {
        prod.remove()
    })
    products.forEach(product => {
        renderSingleProduct(product)
    })


}

// create products


function renderSingleProduct(product){
    let productID=Math.floor(Math.random()*10)

    let boxDiv = document.createElement('div')
    boxDiv.classList.add('box',productID)
    let boxImage = document.createElement('img')
    let boxTitle = document.createElement("h3")
    let boxPrice = document.createElement("p")
    let boxDiscount = document.createElement("span")
    let boxPurchase = document.createElement("button")
    boxPurchase.setAttribute("class" ,"AddToCart")

    boxImage.src = product.image;
    boxTitle.innerText = product.title;
    boxPrice.innerText = "₹ " + product.price +"/-"    
    if (product.discount !== undefined) {
        boxDiscount.innerText = "(" + product.discount +"% Off)"    
    }
    boxPurchase.innerHTML = "Add Cart"

    boxPurchase.addEventListener('click', () => {
        boxPurchase.innerHTML = "Added"
        // Add the product to local storage
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        let cartItem = {
            id: productID,
            image: product.image,
            title: product.title,
            price: product.price ,
            quantity: 1 
        };
        cartItems.push(cartItem);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }); 
    boxDiv.appendChild(boxImage);   
    boxDiv.appendChild(boxTitle)
    boxDiv.appendChild(boxPrice)
    boxPrice.appendChild(boxDiscount);
    boxPrice.appendChild(boxDiscount)
    boxDiv.appendChild(boxPurchase)

    boxsRootElement.appendChild(boxDiv)
}   

// clik go to the cart page

document.querySelector("#cartpage").addEventListener("click",()=>{
    window.location.href = "purchasepage.html"
})















// /// algoila import

// import algoliasearch from "algoliasearch";

// const client = algoliasearch("34G6G1OF1Q", "865340a5845e23a4247fc0c40605081e");

// const index = client.initIndex("starshopper");

// //creaste emepty products array

// let data = []

// let boxsRootElement = document.querySelector('.boxs')


// // fetch

// fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(json=>{
//         data = json;
//         console.log(data)
// })


// // serch 

// document.querySelector('#searchInput').addEventListener('keyup', () =>{
//     let searchTerm = document.querySelector('#searchInput').value;
//     let boxsArray = []

//     index.search(searchTerm).then(response =>{
//         renderProducts(response.hits)
//     })

// });

//   // price less + greter than product
// document.querySelector(".pricelessthan").addEventListener("keyup", ()=> {
//     let priceless = document.querySelector('.pricelessthan').value;
//     let boxsArray = []
//     if(priceless.trim().length>0){
//         boxsArray=data.filter(product=>(product.price) <= priceless)
//         renderProducts(boxsArray)
//     }
// })
// document.querySelector('.pricegreaterthan').addEventListener('keyup', ()=>{
//     let presmore = document.querySelector('.pricegreaterthan').value;
//     let boxsArray = []
//     if(presmore.trim().length>0){
//         boxsArray=data.filter(product=>(product.price) > presmore)
//         renderProducts(boxsArray)
//     }
// })

// //select items price ,discount ,a- z, z - a

// document.querySelector("#SelectItem").addEventListener("change", () => {

//     let myoption = document.querySelector("#SelectItem") 
//     let sortedata = []     
//     alert("filtering products by " + myoption.value)

//     if(myoption.value === "price"){
//          sortedata = data.sort((a, b) => {  return a.price - b.price})
//         renderProducts(sortedata)            
//      }else if(myoption.value == "discount"){           
//         sortedata = data.sort((a, b) => {  return a.discount - b.discount})
//        renderProducts(sortedata)          
//      }else if(myoption.value == "atoz"){
//        sortedata = data.sort(function(a,b){ return a.title.localeCompare(b.title)})
//        renderProducts(sortedata)          
//      }else if(myoption.value == "ztoa"){
//          sortedata = data.sort( function(a,b) {return  b.title.localeCompare(a.title)})
//          renderProducts(sortedata)
//      }
// })

// //sort the items

// document.querySelector('.mensBox').addEventListener('click',()=>{
//     let mensthings=[]
//     mensthings=data.filter(product=>(product.category).includes('men'))
//     renderProducts(mensthings)
//     console.log(mensthings)
// })
// document.querySelector('.jeweleryBox').addEventListener('click',()=>{
//     let Jeluraythings=[]
//     Jeluraythings=data.filter(product=>(product.category).includes('jewelery'))
//     renderProducts(Jeluraythings)
//     console.log(Jeluraythings)
// })
// document.querySelector('.electronicsbox').addEventListener('click',()=>{
//     let electronicsthings=[]
//     electronicsthings=data.filter(product=>(product.category).includes('electronics'))
//     renderProducts(electronicsthings)
//     console.log(electronicsthings)
// })
// document.querySelector('.shirtsbox').addEventListener('click',()=>{
//     let shirtsthings=[]
//     shirtsthings=data.filter(product=>(product.category).includes('shirts'))
//     renderProducts(shirtsthings)
//     console.log(shirtsthings)
// })
// document.querySelector('.womensBox').addEventListener('click',()=>{
//     let womensthings=[]
//     womensthings=data.filter(product=>(product.category).includes('women'))
//     renderProducts(womensthings)
//     console.log(womensthings)
// })
// document.querySelector('.officalJoketsbox').addEventListener('click',()=>{
//     let joketsthings=[]
//     joketsthings=data.filter(product=>(product.category).includes('jokets'))
//     renderProducts(joketsthings)
//     console.log(joketsthings)
// })


// //render the products

// function renderProducts(products){
//     document.querySelectorAll('.box').forEach(prod => {
//         prod.remove()
//     })
//     products.forEach(product => {
//         renderSingleProduct(product)
//     })


// }

// // create products


// function renderSingleProduct(product){
//     let productID=Math.floor(Math.random()*10)

//     let boxDiv = document.createElement('div')
//     boxDiv.classList.add('box',productID)
//     let boxImage = document.createElement('img')
//     let boxTitle = document.createElement("h3")
//     let boxPrice = document.createElement("p")
//     let boxDiscount = document.createElement("span")
//     let boxPurchase = document.createElement("button")
//     boxPurchase.setAttribute("class" ,"AddToCart")

//     boxImage.src = product.image;
//     boxTitle.innerText = product.title;
//     boxPrice.innerText = "₹ " + product.price +"/-"    
//     if (product.discount !== undefined) {
//         boxDiscount.innerText = "(" + product.discount +"% Off)"    
//     }
//     boxPurchase.innerHTML = "Add Cart"

//     boxPurchase.addEventListener('click', () => {
//         boxPurchase.innerHTML = "Added"
//         // Add the product to local storage
//         let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//         let cartItem = {
//             id: productID,
//             image: product.image,
//             title: product.title,
//             price: product.price ,
//             quantity: 1 
//         };
//         cartItems.push(cartItem);
//         localStorage.setItem('cartItems', JSON.stringify(cartItems));
//         }); 
//     boxDiv.appendChild(boxImage);   
//     boxDiv.appendChild(boxTitle)
//     boxDiv.appendChild(boxPrice)
//     boxPrice.appendChild(boxDiscount);
//     boxPrice.appendChild(boxDiscount)
//     boxDiv.appendChild(boxPurchase)

//     boxsRootElement.appendChild(boxDiv)
// }   

// // clik go to the cart page

// document.querySelector("#cartpage").addEventListener("click",()=>{
//     location.href = "purchasepage.html"
// })