let object = {};
for (let i = 0; i < localStorage.length; i++) {
    object[i] = JSON.parse(localStorage.key(i));
    console.log(object[i][0].id);
}
console.log(object);
let order_cart = document.querySelector('.order_cart');  
order_cart.innerHTML = '';
let count = 0;
async function cart(id) { 
    await fetch(`https://fakestoreapi.com/products/${id}`).then(response=>response.json()).then(json=>data = json);
    console.log(data); 
    let order_cart = document.querySelector('.order_cart');    
    order_cart.innerHTML += ` 
        <div class="card"> 
            <div class="image"><img src="${data.image}" alt="image"></div>
            <div class="title">${data.title}</div>
            <div class="size">${object[key][key].select}</div>
            <div class="quantity">${object[key][key].number}</div>
            <div class="price">${data.price}$</div>
        </div> 
    `; 
} 
let fullPrice = 0;
for (key in object) {
    cart(object[key][key].id);
    console.log(object[key][key].id);
    fullPrice += Number(object[key][key].price) * Number(object[key][key].number)
}
let full = document.querySelector('.full');  
full.innerHTML = fullPrice;