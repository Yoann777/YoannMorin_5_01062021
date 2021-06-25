//Variables

const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
let cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.products-center');
let cartItems = document.querySelector('.cart-items');
//const cartItems = document.querySelector('.cart-item');
//Cart
let cart = [];
//buttons
let buttonsDOM = [];

//getting products
class Products{
    async getProducts(){
        try {
            let result = await fetch('http://localhost:3000/api/teddies')
            let products = await result.json();            
            return products;
        } catch(error){
            console.log(error);
        }
    }
}

//display products
class UI{
    displayProducts(products){
        let result = '';
        products.forEach(product => {
            result += `
            <div class="col-12 col-md-6 col-lg-4 mt-2">
                <div class="card product">
                    <div class="img-container">
                        <img src=${product.imageUrl} />
                    </div>
                    <h3>Nom : ${product.name}</h3>
                    <span>Prix : ${product.price/100},00€</span>
                    <span>${product.description}</span>
                    <span>Référence : ${product._id}</span>
                    <!-- <label for="color">Couleur :</label> -->
                    <!-- <select name="color" id="color"> -->
                        <!-- <option disabled selected>Faites votre choix</option> -->
                        <!-- <option value="bleu">bleu</option> -->
                        <!-- <option value="rouge">rouge</option> -->
                        <!-- <option value="vert">vert</option> -->
                    <!-- </select> -->
                    <button class="bag-btn" data-id=${product._id}>Ajouter au panier <i class="fas fa-cart-plus"></i></button>
                    <p>Vous avez <span class="cart-items">0</span> article(s)</p>
                </div>
            </div>
            `;
        });
        productsDOM.innerHTML = result;
    }
    getBagButtons(){
        const buttons = [...document.querySelectorAll('.bag-btn')];
        buttonsDOM = buttons;
        buttons.forEach(button => {
            let id = button.dataset.id;
            let inCart = cart.find(item => item.id === id);
            //if(inCart){
            //    button.innerText = "Déjà au panier";
            //    button.disabled = true;
            //} 
            button.addEventListener("click",(event) => {
            //    event.target.innerText = "Déjà au panier";
            //    event.target.disabled = true;
                // get product from products
                let cartItem = {...Storage.getProduct(id),amount:1};
                // add product to the cart
                cart = [...cart, cartItem];
                // save cart in local storage
                Storage.saveCart(cart);
                // set cart values
                this.setCartValues(cart);
                // display cart item
                // show the cart
            });
        });
    }
    setCartValues(cart){
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map(item => {
            tempTotal += ((item.price)/100)*item.amount;
            itemsTotal += item.amount;
        });
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
        cartItems.innerText = itemsTotal;
        console.log(tempTotal/100 + ',00€');
    }
}

//local storage
class Storage{
    static saveProducts(products){
        localStorage.setItem("products",JSON.stringify(products));
    }
    static getProduct(id){
        let products = JSON.parse(localStorage.getItem('products'));
        return products.find(product => product._id === id);
    }
    static saveCart(){
        localStorage.setItem("cart",JSON.stringify(cart));
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    const ui = new UI();
    const products = new Products();
    
    //get all products
    products.getProducts().then(products => {
        ui.displayProducts(products);
        Storage.saveProducts(products);
    }).then(()=>{
        ui.getBagButtons();
    });
});