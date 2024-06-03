let data;
let array = [];
let object = {};
let count = 0;
localStorage.clear();

async function getProducts() {
    await fetch('https://fakestoreapi.com/products').then(response=>response.json()).then(json=>data = json);
    console.log(data);
    showProducts(data);
} 

getProducts();

function showProducts(data) { 
    const products = document.querySelector('.products'); 
    products.innerHTML = ''; 
    data.forEach((product) => { 
        const element = document.createElement('div'); 
        element.classList.add('product'); 
        element.innerHTML = ` 
            <div class="image"><img src="${product.image}" alt="image"></div>
            <div class="title">Title ${product.title}</div>
            <div class="category">Category ${product.category}</div>
            <div class="price">Price ${product.price}$</div>
            <div class="rating">Rate <span class="${getClassByRate(product.rating.rate)}">${product.rating.rate}</span> count ${product.rating.count} <span class="stars">${'★'.repeat(Math.floor(product.rating.rate))}</span></div>
        `; 
        element.addEventListener('click', () => {openModal(product.id)});
        products.appendChild(element); 
    });    
};

function getClassByRate(rating) { 
    if (rating >= 4.5) { 
        return 'green' 
    } else if (rating > 3) { 
        return 'orange' 
    } else { 
        return 'red' 
    } 
}

const modal = document.querySelector('.modal'); 
 
async function openModal(id) { 
    await fetch(`https://fakestoreapi.com/products/${id}`).then(response=>response.json()).then(json=>data = json);
    console.log(data);     
 
    modal.classList.add('show'); 
    document.body.classList.add('stop-scrolling'); 

    modal.innerHTML = ` 
        <div class="modal_card"> 
            <div class="image"><img src="${data.image}" alt="image"></div>
            <div class="title">Title ${data.title}</div>
            <div class="category">Category ${data.category}</div>
            <div class="description">Description ${data.description}</div>
            <div class="price">Price ${data.price}$</div>
            <div class="rating">Rate <span class="${getClassByRate(data.rating.rate)}">${data.rating.rate}</span> count ${data.rating.count} <span class="stars">${'★'.repeat(Math.floor(data.rating.rate))}</span></div> 
            <div class="order">
                <select class="select">
                    <option value="0">S</option>
                    <option value="1">M</option>
                    <option value="2">L</option>
                </select>
                <input type="number" value="1" class="number">
                <button class = "add"><img src="img/cart.png" alt="cart" class="cart"></button>
            </div>
            <button class="btn">Закрыть</button> 
        </div> 
    `; 
    const btn = document.querySelector('.btn'); 
    const cart = document.querySelector('.add');
    const select = document.querySelector('.select'); 
    const number = document.querySelector('.number');  
    btn.addEventListener('click', () => {closeModal()}); 
    cart.addEventListener('click', () => {
        object[count] = {
            'id' : id,
            'select' : select.options[select.selectedIndex].text,
            'number' : number.value,
            'price' : data.price
        }
        console.log(object); 
        console.log(JSON.stringify(object));
        localStorage.setItem(JSON.stringify(object), JSON.stringify(object)); 
        console.log(localStorage.key(JSON.stringify(object))); 
        count++;
    });
} 
 
function closeModal() { 
    modal.classList.remove('show'); 
    document.body.classList.remove('stop-scrolling'); 
} 
 
window.addEventListener('click', (event) => { 
    if (event.target == modal) { 
        closeModal(); 
    } 
}) 
 
window.addEventListener('keydown', (event) => { 
    if (event.keyCode == 27) { 
        closeModal(); 
    } 
}); 

let slides = document.querySelectorAll('.slide'); 
let currentIndex = 0; 
let prev = document.querySelector('.prev'); 
let next = document.querySelector('.next'); 

function updateSlide() { 
    slides.forEach((slide, index) => { 
        console.log(index, slide); 
        if (index === currentIndex) { 
            slide.classList.add('active'); 
        } else { 
            slide.classList.remove('active'); 
        } 
    }); 
} 

updateSlide(); 

function prevSlide() { 
    if (currentIndex === 0) { 
        currentIndex = slides.length - 1; 
    } else { 
        currentIndex--; 
    } 
    updateSlide(); 
} 

function nextSlide() { 
    if (currentIndex === slides.length - 1) { 
        currentIndex = 0; 
    } else { 
        currentIndex++; 
    } 
    updateSlide(); 
} 

prev.addEventListener('click', prevSlide); 
next.addEventListener('click', nextSlide); 

document.addEventListener('keydown', (event) => { 
    switch (event.key) { 
        case 'ArrowLeft':   
            prevSlide(); 
            break; 
        case 'ArrowRight':  
            nextSlide(); 
            break; 
    }
}); 

setInterval(nextSlide, 10000); 

let burger = document.querySelector('.burger'); 
let menu = document.querySelector('.mainmenu'); 
burger.addEventListener('click', () => { 
    menu.classList.toggle('active'); 
}); 