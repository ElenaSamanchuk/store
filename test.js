/*
let cart = document.querySelectorAll('.add-cart');
let products = [{
        name: 'Product 1',
        tag: 'product1',
        price: 2,
        inCart: 0
    },
    {
        name: 'Product 2',
        tag: 'product2',
        price: 1,
        inCart: 0
    },
    {
        name: 'Product 3',
        tag: 'product3',
        price: 4,
        inCart: 0
    }
]
for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}
const onLoadCartNumbers = () => {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
const cartNumbers = (product) => {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}
const setItems = (product) => {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}
const totalCost = (product) => {
    let cartCost = localStorage.getItem('totalCost');
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }
}
const displayCart = () => {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.products');
    let finalTotal = document.querySelector('.granTotalContainer');
    let cartCost = localStorage.getItem('totalCost');
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <tr>
                <td>
                    <svg class="bi bi-x-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"/>
                    </svg>
                    <img class="imgCart" src="/assets/img/${item.tag}.jpg">
                </td>
                <td>
                    $${item.price},00
                </td>
                <td>
                    <svg class="bi bi-arrow-left-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.646 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L6.207 7.5H11a.5.5 0 0 1 0 1H6.207l2.147 2.146z"/>
                    </svg>
                        <span>${item.inCart}</span>
                    <svg class="bi bi-arrow-right-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8.354 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L9.793 7.5H5a.5.5 0 0 0 0 1h4.793l-2.147 2.146z"/>
                    </svg>
                </td>
                <td>
                    $${item.inCart * item.price},00
                </td>
            </tr>`
        });
        finalTotal.innerHTML += `
                <h4 class="granTotalTitle">
                    FINAl COST
                </h4>
                <h4>
                    $${cartCost},00
                </h4>`
    }
    paymentProcess(cartCost, cartItems);
}. 
const paymentProcess = (total, items)=>{
    ATHM_Checkout = {
        env: 'sandbox',
        publicToken: 'sandboxtoken01875617264',
        timeout: 600, //seconds
        orderType: '',
        theme: 'btn', // btn | btn-dark | btn-light
        lang: 'en', // es=spanish  en=english
        total: 1,
        subtotal: 0,
       items: [
       ],
        onCompletedPayment: function(response)
        {
            alert (JSON.stringify(response)); 
        },
        onCancelledPayment: function(response)
        {
            alert (JSON.stringify(response));
        },
        onExpiredPayment: function(response)
        {
            alert (JSON.stringify(response));
        }
    }
    const athMovil = ATHM_Checkout;
    athMovil['total'] = total;
    athMovil['items'] = items;
    console.log(athMovil);
}
onLoadCartNumbers();
displayCart();
let carts = document.querySelectorAll('.cart');
let products = [
   {
      name : 'Funky Shirt Yellow',
      tag : 'f1',
      price : 650,
      inCart : 0
   },
   {
      name : 'Funky Shirt Cream',
      tag : 'f2',
      price : 650,
      inCart : 0
   },
   {
      name : 'Funky Shirt Grey',
      tag : 'f3',
      price : 650,
      inCart : 0
   },
   {
      name : 'Funky Shirt White',
      tag : 'f4',
      price : 650,
      inCart : 0
   },
   {
      name : 'Funky Shirt Purple',
      tag : 'f5',
      price : 650,
      inCart : 0
   },
   {
      name : 'Funky Shirt',
      tag : 'f6',
      price : 400,
      inCart : 0
   },
   {
      name : 'Funky Pant',
      tag : 'f7',
      price : 400,
      inCart : 0
   },
   {
      name : 'Ladies wear',
      tag : 'f8',
      price : 300,
      inCart : 0
   },
]
for(let i=0; i<carts.length; i++) {
   carts[i].addEventListener('click', () => {
      cartNumbers(products[i]);
      totalCost(products[i]);
   })
}
function onLoadCartNumbers() {
   let productNumbers = localStorage.getItem('cartNumbers');
   if(productNumbers) {
      document.querySelector('#cnt').textContent = productNumbers;
   }
}
function cartNumbers(product) {
   console.log("The product is : ", product);
   let productNumbers = localStorage.getItem('cartNumbers');
   productNumbers = parseInt(productNumbers);
   if(productNumbers) {
      localStorage.setItem('cartNumbers', productNumbers+1);
      document.querySelector('#cnt').textContent = productNumbers + 1;
   }
   else {
      localStorage.setItem('cartNumbers', 1);
      document.querySelector('#cnt').textContent = 1;
   }
   setItems(product);
}
function setItems(product) {
   let cartItems = localStorage.getItem('productsInCart');
   cartItems = JSON.parse(cartItems);
   if(cartItems != null) {
      if(cartItems[product.tag] == undefined) {
         cartItems = {
            ...cartItems,
            [product.tag] : product
         }
      }
      cartItems[product.tag].inCart += 1;
   }
   else {
      product.inCart = 1;
      cartItems = {
         [product.tag] : product
      }
   }
   localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCost(product) {
   let cartCost = localStorage.getItem('totalCost');
   if(cartCost != null) {
      cartCost = parseInt(cartCost);
      localStorage.setItem("totalCost",cartCost+product.price);
   }
   else {
      localStorage.setItem("totalCost",product.price); 
   }
}
function displayCart() {
   let cartItems = localStorage.getItem("productsInCart")
   cartItems = JSON.parse(cartItems);
   console.log(cartItems);
   let productContainer = document.querySelector(".products");
   let cartCost = localStorage.getItem('totalCost');
   if(cartItems && productContainer) {
      productContainer.innerHTML = '';
      Object.values(cartItems).map(item => {
         productContainer.innerHTML += `
         <div class="product">
            <button class="btn" onclick='deleteFromCart(${JSON.stringify(item)})'>Delete</button>
            <img src="./img/products/${item.tag}.jpg">
            <span>${item.name}</span>
            <div class="price">₹${item.price}/-</div>
            <div class="quantity">
               <ion-icon name="caret-back"></ion-icon>
               <span>${item.inCart}</span>
               <ion-icon name="caret-forward"></ion-icon>
            </div>
            <div class="total">
            ₹${item.inCart * item.price}/-
            </div>
         </div>
         `;
      });
      productContainer.innerHTML += `
         <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
               Cart Total
            </h4>
            <h4 class="basketTotal">
               ₹${cartCost}/-
            </h4>
         </div>
      `;
   }
}
function deleteFromCart(item) {
   let cartItems = JSON.parse(localStorage.getItem('productsInCart'));
   delete cartItems[item.tag];
   localStorage.setItem('productsInCart', JSON.stringify(cartItems));
   let productNumbers = localStorage.getItem('cartNumbers');
   productNumbers = parseInt(productNumbers);
   if (productNumbers) {
     localStorage.setItem('cartNumbers', productNumbers - item.inCart);
     document.querySelector('#cnt').textContent = productNumbers - item.inCart;
   }
   let cartCost = localStorage.getItem('totalCost');
   if (cartCost != null) {
     cartCost = parseInt(cartCost);
     localStorage.setItem('totalCost', cartCost - (item.price * item.inCart));
   }
 
   displayCart();
}
onLoadCartNumbers();
displayCart();
*/