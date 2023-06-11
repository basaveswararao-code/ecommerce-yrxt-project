document.querySelector('.six').style.display = 'none'
document.querySelector('.seven').style.display = 'none'
// log out button
document.querySelector('.logoutbuttons').addEventListener('click',()=>{
    alert("Do you lagout 😃")
    localStorage.removeItem("sellerloginData");
    window.location.href = "index.html";
})

document.querySelector('#addcart').addEventListener('click',()=>{
  window.location.href = "sellersProduct.html";
     working()
})


// add new product button
document.querySelector('#addnewproductbutton').addEventListener('click',()=>{
    document.querySelector('.five').style.display = 'none'
    document.querySelector('.seven').style.display = 'none'
    document.querySelector('.six').style.display = 'block'
    
})
// this function is to create chart 

new Chart("salesChart", {
  type: "bar",
  data: {
    labels:  ["Item1", "Item2", "Item3", "Item4", "Item5","Item6","item7"],
    datasets: [{
      label : 'product 1 ',
      backgroundColor: "orange",
      data:  [28, 55, 68, 41, 81 , 99 , 20 , 30 , 10 , 44 , 56, 139]
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "sales "
    }
  }
});

// to add a product by seller to website
import algoliasearch from "algoliasearch"
const client = algoliasearch("34G6G1OF1Q", "865340a5845e23a4247fc0c40605081e");
const index = client.initIndex("starshopper");

document.querySelector('.addproduct').addEventListener('click',()=>{
    document.querySelector('.five').style.display = 'block'
    document.querySelector('.seven').style.display = 'none'
    document.querySelector('.six').style.display = 'none'
    // addEventListener('New Product Added For Shopper"s')

    product_are_working()
    //  document.querySelector('#newcategory').value = ''

})
// adding newly added products From Local Storage TO Screen
function addingLocalStorageTOScreen(){
    if(localStorage.getItem('newly')){
      let  newly = JSON.parse(localStorage.getItem('newly'))
        newly.forEach(item=>{
            renderSingleProduct(item , item.uniqueID)
        })
      }
}
// adding new product function
function product_are_working(){
    const products = [];
  
    let m = {
       objectID: Math.floor(Math.random()*100),
       category: document.querySelector('#newcategory').value,
       description: document.querySelector('#newdescription').value ,
       id:Math.floor(Math.random()*1000) ,
       image : document.querySelector('#newimage').value,
       price: document.querySelector('#newprice').value,
       discount : document.querySelector('#newdiscount').value + '% OFF',
       rating : { count : Math.floor(Math.random()*150) },
       rate:  Math.random()*5,
       title: document.querySelector('#newtitle').value
    }
    
     products.push(m)

   index.saveObjects(products).then(hits=>{
       console.log(hits)
       resultProducts(products)
       
   });
}
function resultProducts(products){
    products.forEach(m => {
        renderSingleProduct(m)
        storenewlyAddItems(m)
      });
    }
// adding new products to localstorage 
function storenewlyAddItems(m){
    let uniqueID = Math.floor(Math.random()*100)
    let item = {
        title : m.title,
        price : m.price,
        discount: m.discount,
        image:m.image
    }
     StoreProducts(item , uniqueID)
}
// creating object for new product's
    let newly = [];

function StoreProducts(item , uniqueID){
    item = {...item , uniqueID}
    newly.push(item)
    localStorage.setItem('newly',JSON.stringify(newly))
    // JSON.parse(localStorage.setItem('n'))
}
// 
function renderSingleProduct(m,uniqueID){
    let resultdiv = document.createElement('div')
    resultdiv.className = 'products'
    resultdiv.dataset.uniqueID = uniqueID;
    document.querySelector('#newlyaddproductsdiv').appendChild(resultdiv)

    let resultimage = document.createElement('img')
    resultimage.src = m.image
    resultdiv.appendChild(resultimage)

    let productName = document.createElement('h4')
    productName.innerHTML = m.title
    resultdiv.appendChild(productName)

    let pricediv = document.createElement('div')
    pricediv.className = 'price'
    resultdiv.appendChild(pricediv)

    let productPrice = document.createElement('h2')
    productPrice.innerHTML = '$'+ m.price + '/-'
    pricediv.appendChild(productPrice)

    let productdiscount = document.createElement('h5')
    productdiscount.innerHTML = '('+ m.discount +')'
    pricediv.appendChild(productdiscount)
    
    let deleteButton = document.createElement('button')
    deleteButton.setAttribute('class','delete')
    deleteButton.innerHTML = 'Delete'
    deleteButton.dataset.uniqueID = m.uniqueID;
    resultdiv.appendChild(deleteButton)
    deleteButton.addEventListener('click',()=>{
        const uniqueID = deleteButton.dataset.uniqueID;
        console.log('delete clicked for', uniqueID)
        deleteProduct(uniqueID);
        resultdiv.remove();
    })



    let editbutton = document.createElement('button')
    editbutton.setAttribute('class','editbutton')
    editbutton.innerHTML = 'Edit'
    editbutton.dataset.uniqueID = m.uniqueID;
    resultdiv.appendChild(editbutton)
    editbutton.addEventListener('click',()=>{
        console.log('edit clicked');
        document.querySelector('.five').style.display = 'none'
        document.querySelector('.six').style.display = 'none'
        document.querySelector('.seven').style.display = 'block'
        NewAddProduct(m)
        newAddedProducttoupdatelivePreview(m)
        updateProduct();
    })


}

function deleteProduct(uniqueID) {
    const productIndex = newly.findIndex(item => item.uniqueID === uniqueID);
    if (productIndex !== -1) {
      newly.splice(productIndex, 1);
      localStorage.setItem('newly', JSON.stringify(newly));
    }
  }
  

document.querySelector('#productupdatebutton').addEventListener('click',()=>{
    document.querySelector('.five').style.display = 'block'
    document.querySelector('.seven').style.display = 'none'
    document.querySelector('.six').style.display = 'none'

})


function updateProduct() {
    const uniqueID = document.querySelector('#productuniqueid')
    const productIndex = newly.findIndex(item => item.uniqueID === uniqueID);
    if (productIndex !== -1) {
      const updatedProduct = {
        title: document.querySelector('#producttitle').value,
        price: document.querySelector('#productprice').value,
        discount: document.querySelector('#productdiscount').value,
        image: document.querySelector('#productimage').value,
        uniqueID: uniqueID
      };
      newly[productIndex] = updatedProduct;
      if (productId != null) {
        var id = productId.value;
      }
      localStorage.setItem('newly', JSON.stringify(newly));
      renderSingleProduct(updatedProduct, uniqueID);
    }
  }
  



//  to update product newlyadded by seller
function NewAddProduct(m){
    document.querySelector('#updatetitle').value = m.title
    document.querySelector('#updatecategory').value = m.category
    document.querySelector('#updatedescription').value = m.description
    document.querySelector('#updateprice').value = m.price
    document.querySelector('#updatediscount').value = m.discount
    document.querySelector('#updateimage').value = m.image
}
// into live
function newAddedProducttoupdatelivePreview(m){
    document.querySelector('#updatelivetitle').innerHTML = m.title
    document.querySelector('#updateliveprice').innerHTML = m.price + '/-'
    document.querySelector('#updatelivediscount').innerHTML = '(' + m.discount +')'
    document.querySelector('#updateliveimage').src = m.image

}


// // the below live section belong's to update product
document.querySelector('#updatetitle').addEventListener('keyup',()=>{
    let updatelivetitle = document.querySelector('#updatelivetitle')
    updatelivetitle.innerHTML = document.querySelector('#updatetitle').value
})
document.querySelector('#updateprice').addEventListener('keyup',()=>{
    let updateliveprice = document.querySelector('#updateliveprice')
    updateliveprice.innerHTML = '$'+document.querySelector('#updateprice').value + '/-'
})
document.querySelector('#updatediscount').addEventListener('keyup',()=>{
    let updatelivediscount = document.querySelector('#updatelivediscount')
    updatelivediscount.innerHTML = '$'+document.querySelector('#updatediscount').value + '/-'
})
document.querySelector('#updateimage').addEventListener('keyup',()=>{
    let updateliveimage = document.querySelector('#updateliveimage')
    updateliveimage.src = document.querySelector('#updateimage').value 
})


// the below live section belong's to add new product
document.querySelector('#newtitle').addEventListener('keyup',()=>{
    let livetitle = document.querySelector('#livetitle')
    livetitle.innerHTML = document.querySelector('#newtitle').value
})
document.querySelector('#newprice').addEventListener('keyup',()=>{
    let liveprice = document.querySelector('#liveprice')
    liveprice.innerHTML = '$'+ document.querySelector('#newprice').value + '/-'
})
document.querySelector('#newdiscount').addEventListener('keyup',()=>{
    let livediscount = document.querySelector('#livediscount')
    livediscount.innerHTML = '('+ document.querySelector('#newdiscount').value +'% OFF)'
})
document.querySelector('#newimage').addEventListener('keyup',()=>{
    let liveimg = document.querySelector('#liveimage')
    liveimg.src = document.querySelector('#newimage').value
})

addingLocalStorageTOScreen()

































// document.querySelector('.six').style.display = 'none'
// document.querySelector('.seven').style.display = 'none'
// // log out button
// document.querySelector('.logoutbuttons').addEventListener('click',()=>{
//     alert("Do you lagout 😃")
//     localStorage.removeItem("sellerloginData");
//     window.location.href = "index.html";
// })

// document.querySelector('#addcart').addEventListener('click',()=>{
//     location.href = "sellersProduct.html";
//      working()
// })


// // add new product button
// document.querySelector('#addnewproductbutton').addEventListener('click',()=>{
//     document.querySelector('.five').style.display = 'none'
//     document.querySelector('.seven').style.display = 'none'
//     document.querySelector('.six').style.display = 'block'
    
// })
// // this function is to create chart 

// new Chart("salesChart", {
//   type: "bar",
//   data: {
//     labels:  ["Item1", "Item2", "Item3", "Item4", "Item5","Item6","item7"],
//     datasets: [{
//       label : 'product 1 ',
//       backgroundColor: "orange",
//       data:  [28, 55, 68, 41, 81 , 99 , 20 , 30 , 10 , 44 , 56, 139]
//     }]
//   },
//   options: {
//     legend: {display: false},
//     title: {
//       display: true,
//       text: "sales "
//     }
//   }
// });

// // to add a product by seller to website
// import algoliasearch from "algoliasearch"
// const client = algoliasearch("34G6G1OF1Q", "865340a5845e23a4247fc0c40605081e");
// const index = client.initIndex("starshopper");

// document.querySelector('.addproduct').addEventListener('click',()=>{
//     document.querySelector('.five').style.display = 'block'
//     document.querySelector('.seven').style.display = 'none'
//     document.querySelector('.six').style.display = 'none'
//     // addEventListener('New Product Added For Shopper"s')

//     product_are_working()
//     //  document.querySelector('#newcategory').value = ''

// })
// // adding newly added products From Local Storage TO Screen
// function addingLocalStorageTOScreen(){
//     if(localStorage.getItem('newly')){
//       let  newly = JSON.parse(localStorage.getItem('newly'))
//         newly.forEach(item=>{
//             renderSingleProduct(item , item.uniqueID)
//         })
//       }
// }
// // adding new product function
// function product_are_working(){
//     const products = [];
  
//     let m = {
//        objectID: Math.floor(Math.random()*100),
//        category: document.querySelector('#newcategory').value,
//        description: document.querySelector('#newdescription').value ,
//        id:Math.floor(Math.random()*1000) ,
//        image : document.querySelector('#newimage').value,
//        price: document.querySelector('#newprice').value,
//        discount : document.querySelector('#newdiscount').value + '% OFF',
//        rating : { count : Math.floor(Math.random()*150) },
//        rate:  Math.random()*5,
//        title: document.querySelector('#newtitle').value
//     }
    
//      products.push(m)

//    index.saveObjects(products).then(hits=>{
//        console.log(hits)
//        resultProducts(products)
       
//    });
// }
// function resultProducts(products){
//     products.forEach(m => {
//         renderSingleProduct(m)
//         storenewlyAddItems(m)
//       });
//     }
// // adding new products to localstorage 
// function storenewlyAddItems(m){
//     let uniqueID = Math.floor(Math.random()*100)
//     let item = {
//         title : m.title,
//         price : m.price,
//         discount: m.discount,
//         image:m.image
//     }
//      StoreProducts(item , uniqueID)
// }
// // creating object for new product's
//     let newly = [];

// function StoreProducts(item , uniqueID){
//     item = {...item , uniqueID}
//     newly.push(item)
//     localStorage.setItem('newly',JSON.stringify(newly))
//     // JSON.parse(localStorage.setItem('n'))
// }
// // 
// function renderSingleProduct(m,uniqueID){
//     let resultdiv = document.createElement('div')
//     resultdiv.className = 'products'
//     resultdiv.dataset.uniqueID = uniqueID;
//     document.querySelector('#newlyaddproductsdiv').appendChild(resultdiv)

//     let resultimage = document.createElement('img')
//     resultimage.src = m.image
//     resultdiv.appendChild(resultimage)

//     let productName = document.createElement('h4')
//     productName.innerHTML = m.title
//     resultdiv.appendChild(productName)

//     let pricediv = document.createElement('div')
//     pricediv.className = 'price'
//     resultdiv.appendChild(pricediv)

//     let productPrice = document.createElement('h2')
//     productPrice.innerHTML = '$'+ m.price + '/-'
//     pricediv.appendChild(productPrice)

//     let productdiscount = document.createElement('h5')
//     productdiscount.innerHTML = '('+ m.discount +')'
//     pricediv.appendChild(productdiscount)
    
//     let deleteButton = document.createElement('button')
//     deleteButton.setAttribute('class','delete')
//     deleteButton.innerHTML = 'Delete'
//     deleteButton.dataset.uniqueID = m.uniqueID;
//     resultdiv.appendChild(deleteButton)
//     deleteButton.addEventListener('click',()=>{
//         const uniqueID = deleteButton.dataset.uniqueID;
//         console.log('delete clicked for', uniqueID)
//         deleteProduct(uniqueID);
//         resultdiv.remove();
//     })



//     let editbutton = document.createElement('button')
//     editbutton.setAttribute('class','editbutton')
//     editbutton.innerHTML = 'Edit'
//     editbutton.dataset.uniqueID = m.uniqueID;
//     resultdiv.appendChild(editbutton)
//     editbutton.addEventListener('click',()=>{
//         console.log('edit clicked');
//         document.querySelector('.five').style.display = 'none'
//         document.querySelector('.six').style.display = 'none'
//         document.querySelector('.seven').style.display = 'block'
//         NewAddProduct(m)
//         newAddedProducttoupdatelivePreview(m)
//         updateProduct();
//     })


// }

// function deleteProduct(uniqueID) {
//     const productIndex = newly.findIndex(item => item.uniqueID === uniqueID);
//     if (productIndex !== -1) {
//       newly.splice(productIndex, 1);
//       localStorage.setItem('newly', JSON.stringify(newly));
//     }
//   }
  

// document.querySelector('#productupdatebutton').addEventListener('click',()=>{
//     document.querySelector('.five').style.display = 'block'
//     document.querySelector('.seven').style.display = 'none'
//     document.querySelector('.six').style.display = 'none'

// })


// function updateProduct() {
//     const uniqueID = document.querySelector('#productuniqueid')
//     const productIndex = newly.findIndex(item => item.uniqueID === uniqueID);
//     if (productIndex !== -1) {
//       const updatedProduct = {
//         title: document.querySelector('#producttitle').value,
//         price: document.querySelector('#productprice').value,
//         discount: document.querySelector('#productdiscount').value,
//         image: document.querySelector('#productimage').value,
//         uniqueID: uniqueID
//       };
//       newly[productIndex] = updatedProduct;
//       if (productId != null) {
//         var id = productId.value;
//       }
//       localStorage.setItem('newly', JSON.stringify(newly));
//       renderSingleProduct(updatedProduct, uniqueID);
//     }
//   }
  



// //  to update product newlyadded by seller
// function NewAddProduct(m){
//     document.querySelector('#updatetitle').value = m.title
//     document.querySelector('#updatecategory').value = m.category
//     document.querySelector('#updatedescription').value = m.description
//     document.querySelector('#updateprice').value = m.price
//     document.querySelector('#updatediscount').value = m.discount
//     document.querySelector('#updateimage').value = m.image
// }
// // into live
// function newAddedProducttoupdatelivePreview(m){
//     document.querySelector('#updatelivetitle').innerHTML = m.title
//     document.querySelector('#updateliveprice').innerHTML = m.price + '/-'
//     document.querySelector('#updatelivediscount').innerHTML = '(' + m.discount +')'
//     document.querySelector('#updateliveimage').src = m.image

// }


// // // the below live section belong's to update product
// document.querySelector('#updatetitle').addEventListener('keyup',()=>{
//     let updatelivetitle = document.querySelector('#updatelivetitle')
//     updatelivetitle.innerHTML = document.querySelector('#updatetitle').value
// })
// document.querySelector('#updateprice').addEventListener('keyup',()=>{
//     let updateliveprice = document.querySelector('#updateliveprice')
//     updateliveprice.innerHTML = '$'+document.querySelector('#updateprice').value + '/-'
// })
// document.querySelector('#updatediscount').addEventListener('keyup',()=>{
//     let updatelivediscount = document.querySelector('#updatelivediscount')
//     updatelivediscount.innerHTML = '$'+document.querySelector('#updatediscount').value + '/-'
// })
// document.querySelector('#updateimage').addEventListener('keyup',()=>{
//     let updateliveimage = document.querySelector('#updateliveimage')
//     updateliveimage.src = document.querySelector('#updateimage').value 
// })


// // the below live section belong's to add new product
// document.querySelector('#newtitle').addEventListener('keyup',()=>{
//     let livetitle = document.querySelector('#livetitle')
//     livetitle.innerHTML = document.querySelector('#newtitle').value
// })
// document.querySelector('#newprice').addEventListener('keyup',()=>{
//     let liveprice = document.querySelector('#liveprice')
//     liveprice.innerHTML = '$'+ document.querySelector('#newprice').value + '/-'
// })
// document.querySelector('#newdiscount').addEventListener('keyup',()=>{
//     let livediscount = document.querySelector('#livediscount')
//     livediscount.innerHTML = '('+ document.querySelector('#newdiscount').value +'% OFF)'
// })
// document.querySelector('#newimage').addEventListener('keyup',()=>{
//     let liveimg = document.querySelector('#liveimage')
//     liveimg.src = document.querySelector('#newimage').value
// })

// addingLocalStorageTOScreen()
