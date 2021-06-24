//Variables

const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.products-center');
//Cart
let cart = [];

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
            <div class="col-12 col-md-6 col-lg-4 mt-5">
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
                    <button class="button bag-btn" data-id=${product._id}>Ajouter au panier <i class="fas fa-cart-plus"></i></button>
                </div>
            </div>
            `;
        });
        productsDOM.innerHTML = result;
    }
}

//local storage
class Storage{}

document.addEventListener("DOMContentLoaded",()=>{
    const ui = new UI();
    const products = new Products();
    
    //get all products
    products.getProducts().then(products => ui.displayProducts(products))
});