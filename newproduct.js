
document.querySelector("#logout").addEventListener("click",()=>{
  alert("are you sure to Logout / Login Details was removed")
  localStorage.removeItem("loginData");
  window.location.href = "index.html";
})

// // // function addingElementsFromLocalStorageTOScreen(){
// // //   if(localStorage.getItem('newly')){
// // //     let  newly = JSON.parse(localStorage.getItem('newly'))
// // //       newly.forEach(item=>{
// // //           renderSingleProduct(item , item.uniqueID)
// // //       })
// // //     }
// // // }

// // // document.querySelector('.addProduct').addEventListener('click', ()=> {
// // //   window.location.href = 'sellersProduct1.html'; 
// // //   working()

// // // });

// // // function working(){
// // //   const products= [];

// // //   let product = {
// // //      objectID: Math.floor(Math.random()*100),
// // //      category: document.querySelector('.category').value,
// // //      description: document.querySelector('.description').value ,
// // //      id:Math.floor(Math.random()*1000) ,
// // //      image : document.querySelector('.imageurl').value,
// // //      price: document.querySelector('.price').value,
// // //      discount : document.querySelector('.discount').value + '% OFF',
// // //      rating : { count : Math.floor(Math.random()*150) },
// // //      rate:  Math.random()*5,
// // //      title: document.querySelector('.title').value
// // //   }
  
// // //   products.push(product)

// // //  index.saveObjects(products).then(hits=>{
// // //      console.log(hits)
// // //      resultProducts(products)
// // //  });
// // // }

// // // function resultProducts(products){
// // //   products.forEach(product => {
// // //       storenewlyAddItems(product)
// // //     });
// // //   }
// // //   function storenewlyAddItems(product){
// // //     let uniqueID = Math.floor(Math.random()*100)
// // //     let item = {
// // //         title : product.title,
// // //         price : product.price,
// // //         discount: product.discount,
// // //         image:product.image
// // //     }
// // //     thisIsTimeToStoreProducts(item , uniqueID)
// // // }
// // // // creating object for new product's
// // //     let newly = [];

// // // function thisIsTimeToStoreProducts(item , uniqueID){
// // //     item = {...item , uniqueID}
// // //     newly.push(item)
// // //     localStorage.setItem('newly',JSON.stringify(newly))
// // //     // JSON.parse(localStorage.setItem('n'))
// // /
// // import algoliasearch from "algoliasearch";

// // const client = algoliasearch("34G6G1OF1Q", "865340a5845e23a4247fc0c40605081e");

// // const index = client.initIndex("starshopper");


// // let products = []

// // function displayData(){
// //   if(localStorage.getItem('products')){
// //     products = JSON.parse(localStorage.getItem('products'))
// //     let productsHtml = ''
// //     products.forEach(product =>{
// //       productsHtml += `
// //         <div class="product">
// //           <h2>${product.title}</h2>
// //           <p>${product.description}</p>
// //           <p>${product.price}</p>
// //           <p>${product.discount}</p>
// //           <p>${product.category}</p>
// //           <img src="${product.imageurl}" alt="${product.title}">
// //         </div>
// //       `
// //     })
// //   }
// // }
  
// // // //add product category

// // document.querySelector('.addProduct').addEventListener('click', function(event) {
// //   event.preventDefault();
// //   let product = {
// //     title: document.querySelector('.title').value,
// //     description: document.querySelector('.description').value,
// //     price: document.querySelector('.price').value,
// //     discount: document.querySelector('.discount').value,
// //     category: document.querySelector('.category').value,
// //     imageurl: document.querySelector('.imageurl').value,
// //   };

// //   if (product.title.trim().length > 0 &&
// //       product.description.trim().length > 0 &&
// //       product.price.trim().length > 0 &&
// //       product.discount.trim().length > 0 &&
// //       product.category.trim().length > 0 &&
// //       product.imageurl.trim().length > 0) {

// //     let uniqueID = 'info' + Math.floor(Math.random() * 500);
// //     addNoteToLocalStorage(product, uniqueID);

// //     window.location.href = 'sellersProduct1.html'; 
// //   } else {
// //     alert('Data is empty! Fill all the details.');
// //   }
// // });
  
// // function addNoteToLocalStorage(product, UniqueID){
// //   product = {...product, UniqueID}
// //   products.push(product)    
// //   localStorage.setItem('products',JSON.stringify(products))
// // }
// // function removeProductFromLocalStorage(id) {
// //   // Remove the product element from the DOM
// //   document.querySelector('.' + id).remove();

// //   // Remove the product from localStorage
// //   let products = JSON.parse(localStorage.getItem('products')) || [];
// //   products = products.filter(product => product.UniqueID !== id);
// //   localStorage.setItem('products', JSON.stringify(products));
// // }

// // removeProductFromLocalStorage(product.UniqueID);

// // //// from the live section
// // document.querySelector('.title').addEventListener('keyup',()=>{
// //   let livetitle = document.querySelector('.titlelive')
// //   livetitle.innerHTML = document.querySelector('.title').value
// // })
// // document.querySelector('.price').addEventListener('keyup',()=>{
// //   let liveprice = document.querySelector('.pricelive')
// //   liveprice.innerHTML = '$'+ document.querySelector('.price').value + '/-'
// // })
// // document.querySelector('.discount').addEventListener('keyup',()=>{
// //   let livediscount = document.querySelector('.discountlive')
// //   livediscount.innerHTML = '('+ document.querySelector('.discount').value +'% OFF)'
// // })
// // document.querySelector('.imageurl').addEventListener('keyup',()=>{
// //   let liveimg = document.querySelector('.imagelive')
// //   liveimg.src = document.querySelector('.imageurl').value
// // })
// // displayData()


// // // //lagout

// // document.querySelector("#logout").addEventListener("click",()=>{
// //   alert("are you sure to Logout / Login Details was removed")
// //   localStorage.removeItem("loginData");
// //   window.location.href = "index.html";
// // })


// // Get form inputs
// const title = document.querySelector('.title').value;
// const description = document.querySelector('.description').value;
// const price = document.querySelector('.price').value;
// const discount = document.querySelector('.discount').value;
// const category = document.querySelector('.category').value;
// const imageurl = document.querySelector('.imageurl').value;

// // Create new product object
// const product = {
//   title: title,
//   description: description,
// //   price: price,
// //   discount: discount,
// //   category: category,
// //   imageurl: imageurl
// // };

// // // Save product to Algolia index
// // import algoliasearch from "algoliasearch";
// // const client = algoliasearch("34G6G1OF1Q", "865340a5845e23a4247fc0c40605081e");
// // const index = client.initIndex("starshopper");

// // // const index = client.initIndex('products');
// // index.saveObject(product, (err, content) => {
// //   if (err) {
// //     console.error(err);
// //   } else {
// //     console.log(content);
// //   }
// // });

// // // Save product to local storage
// // localStorage.setItem('product', JSON.stringify(product));


// // // Get preview elements
// // const preview = document.querySelector('#product-preview');
// // const titleLive = preview.querySelector('.titlelive');
// // const priceLive = preview.querySelector('.pricelive');
// // const discountLive = preview.querySelector('.discountlive');
// // const imageLive = preview.querySelector('.imagelive');

// // // Update preview elements
// // titleLive.innerText = title;
// // priceLive.innerText = `₹${price}/-`;
// // if (discount) {
// //   discountLive.innerText = `(${discount}% Off)`;
// // } else {
// //   discountLive.innerText = '';
// // }
// // imageLive.src = imageurl;


// // Initialize Algolia client and index

// import algoliasearch from "algoliasearch";
// const client = algoliasearch("34G6G1OF1Q", "865340a5845e23a4247fc0c40605081e");
// const index = client.initIndex("starshopper");
// // Define variables for HTML elements
// const form = document.querySelector('#form');
// const title = document.querySelector('.title');
// const description = document.querySelector('.description');
// const price = document.querySelector('.price');
// const discount = document.querySelector('.discount');
// const category = document.querySelector('.category');
// const imageurl = document.querySelector('.imageurl');

// // Define variables for live preview HTML elements
// const liveTitle = document.querySelector('.titlelive');
// const livePrice = document.querySelector('.pricelive');
// const liveDiscount = document.querySelector('.discountlive');
// const liveImage = document.querySelector('.imagelive');

// // Define variables for local storage
// const products = JSON.parse(localStorage.getItem('products')) || [];

// // Add event listener for form submit
// form.addEventListener('submit', function(e) {
//   e.preventDefault();

//   // Create new product object
//   const newProduct = {
//     title: title.value,
//     description: description.value,
//     price: price.value,
//     discount: discount.value,
//     category: category.value,
//     imageurl: imageurl.value
//   };

//   // Add new product to Algolia index
//   index.saveObjects([newProduct], function(err, content) {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(content);
//   });

//   // Add new product to local storage
//   products.push(newProduct);
//   localStorage.setItem('products', JSON.stringify(products));

//   // Update live preview
//   liveTitle.textContent = newProduct.title;
//   livePrice.textContent = '₹' + newProduct.price + '/-';
//   if (newProduct.discount) {
//     liveDiscount.textContent = '(' + newProduct.discount + '% Off)';
//   } else {
//     liveDiscount.textContent = '';
//   }
//   liveImage.src = newProduct.imageurl;
// });






document.querySelector('.addProduct').addEventListener('click',()=>{
 window.location.href = "sellersProduct.html";
  working()

})

function addingElementsFromLocalStorageTOScreen(){
  if(localStorage.getItem('newly')){
    let  newly = JSON.parse(localStorage.getItem('newly'))
      newly.forEach(item=>{
          renderSingleProduct(item , item.uniqueID)
      })
    }
}


function working(){
  const products = [];

  let m = {
     objectID: Math.floor(Math.random()*100),
     category: document.querySelector('.category').value,
     description: document.querySelector('.description').value ,
     id:Math.floor(Math.random()*1000) ,
     image : document.querySelector('.imageurl').value,
     price: document.querySelector('.price').value,
     discount : document.querySelector('.discount').value + '% OFF',
     rating : { count : Math.floor(Math.random()*150) },
     rate:  Math.random()*5,
     title: document.querySelector('.title').value
  }
  

  const productsWithID = products.map((product) => ({
    product,
    uniqueID: Math.floor(Math.random() * 100),
  }));



   products.push(m)

 index.saveObjects(products).then(hits=>{
     console.log(hits)
     resultProducts(products)
     
 });
}
// function resultProducts(products){
//   products.forEach(m => {
//       renderSingleProduct(m)
//       storenewlyAddItems(m)
//     });
//   }

function resultProducts(productsWithID) {
  productsWithID.forEach((item) => {
    renderSingleProduct(item.product, item.uniqueID);
    storenewlyAddItems(item.product, item.uniqueID);
  });
}

function addingElementsFromLocalStorageTOScreen() {
  const storedData = localStorage.getItem('newly');

  if (storedData) {
    const newly = JSON.parse(storedData);

    newly.forEach(item => {
      renderSingleProduct(item, item.uniqueID);
    });
  }
}


function storenewlyAddItems(m){
  let uniqueID = Math.floor(Math.random()*100)
  let item = {
      title : m.title,
      price : m.price,
      discount: m.discount,
      image:m.image
  }
   thisIsTimeToStoreProducts(item , uniqueID)
}

let newly = [];

function thisIsTimeToStoreProducts(item , uniqueID){
    item = {...item , uniqueID}
    newly.push(item)
    localStorage.setItem('newly',JSON.stringify(newly))
}


// // //// from the live section
document.querySelector('.title').addEventListener('keyup',()=>{
   let livetitle = document.querySelector('.titlelive')
   livetitle.innerHTML = document.querySelector('.title').value
 })
document.querySelector('.price').addEventListener('keyup',()=>{
   let liveprice = document.querySelector('.pricelive')
liveprice.innerHTML = '$'+ document.querySelector('.price').value + '/-'
 })
document.querySelector('.discount').addEventListener('keyup',()=>{
   let livediscount = document.querySelector('.discountlive')
   livediscount.innerHTML = '('+ document.querySelector('.discount').value +'% OFF)'
})
 document.querySelector('.imageurl').addEventListener('keyup',()=>{
   let liveimg = document.querySelector('.imagelive')
   liveimg.src = document.querySelector('.imageurl').value
})












// document.querySelector('.addProduct').addEventListener('click',()=>{
//   location.href = "sellersProduct.html";
//    working()
 
//  })
 
//  function addingElementsFromLocalStorageTOScreen(){
//    if(localStorage.getItem('newly')){
//      let  newly = JSON.parse(localStorage.getItem('newly'))
//        newly.forEach(item=>{
//            renderSingleProduct(item , item.uniqueID)
//        })
//      }
//  }
 
 
//  function working(){
//    const products = [];
 
//    let m = {
//       objectID: Math.floor(Math.random()*100),
//       category: document.querySelector('.category').value,
//       description: document.querySelector('.description').value ,
//       id:Math.floor(Math.random()*1000) ,
//       image : document.querySelector('.imageurl').value,
//       price: document.querySelector('.price').value,
//       discount : document.querySelector('.discount').value + '% OFF',
//       rating : { count : Math.floor(Math.random()*150) },
//       rate:  Math.random()*5,
//       title: document.querySelector('.title').value
//    }
   
 
//    const productsWithID = products.map((product) => ({
//      product,
//      uniqueID: Math.floor(Math.random() * 100),
//    }));
 
 
 
//     products.push(m)
 
//   index.saveObjects(products).then(hits=>{
//       console.log(hits)
//       resultProducts(products)
      
//   });
//  }
//  // function resultProducts(products){
//  //   products.forEach(m => {
//  //       renderSingleProduct(m)
//  //       storenewlyAddItems(m)
//  //     });
//  //   }
 
//  function resultProducts(productsWithID) {
//    productsWithID.forEach((item) => {
//      renderSingleProduct(item.product, item.uniqueID);
//      storenewlyAddItems(item.product, item.uniqueID);
//    });
//  }
 
//  function addingElementsFromLocalStorageTOScreen() {
//    const storedData = localStorage.getItem('newly');
 
//    if (storedData) {
//      const newly = JSON.parse(storedData);
 
//      newly.forEach(item => {
//        renderSingleProduct(item, item.uniqueID);
//      });
//    }
//  }
 
 
//  function storenewlyAddItems(m){
//    let uniqueID = Math.floor(Math.random()*100)
//    let item = {
//        title : m.title,
//        price : m.price,
//        discount: m.discount,
//        image:m.image
//    }
//     thisIsTimeToStoreProducts(item , uniqueID)
//  }
 
//  let newly = [];
 
//  function thisIsTimeToStoreProducts(item , uniqueID){
//      item = {...item , uniqueID}
//      newly.push(item)
//      localStorage.setItem('newly',JSON.stringify(newly))
//  }
 
 
//  // // //// from the live section
//  document.querySelector('.title').addEventListener('keyup',()=>{
//     let livetitle = document.querySelector('.titlelive')
//     livetitle.innerHTML = document.querySelector('.title').value
//   })
//  document.querySelector('.price').addEventListener('keyup',()=>{
//     let liveprice = document.querySelector('.pricelive')
//  liveprice.innerHTML = '$'+ document.querySelector('.price').value + '/-'
//   })
//  document.querySelector('.discount').addEventListener('keyup',()=>{
//     let livediscount = document.querySelector('.discountlive')
//     livediscount.innerHTML = '('+ document.querySelector('.discount').value +'% OFF)'
//  })
//   document.querySelector('.imageurl').addEventListener('keyup',()=>{
//     let liveimg = document.querySelector('.imagelive')
//     liveimg.src = document.querySelector('.imageurl').value
//  })
 
