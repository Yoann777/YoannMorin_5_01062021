// Ici, on affiche tous les produits, puis on boucle dessus
const displayProducts = async () => {
  const products = await getProducts(url);
  if (products && products.length > 0) {
    products.forEach((product) => {
      renderProduct(product.name, product._id, product.imageUrl, product.price);
    });
  }
};

// Ici, on récupère les produits disponibles via l'API

function getProducts(apiUrl) {
  //pour retourner les résultats, on retourne le fetch. Il s'agit d'une promesse, d'où await getArticles()
  return fetch(apiUrl)
    //ci-dessous, les fonctions que fetch va executer quand il aura récupéré les données
    //1er then, la réponse de la requête
    .then(function (response) {
      //fichier transformé en json
      return response.json();
    })
    //on récupère tous les articles
    .then(function (products) {
      //vérif avec console.log que le fetch fonctionne bien
      console.log(products)
      return products
    })
    //si un problème quelconque survient, on affiche une erreur
    .catch(function (error) {
      document.querySelector('h1').textContent = "Oops, un problème est survenu. Teddies non trouvés";
    })
}

// Fourni l'affichage d'un produit
function renderProduct(productName, productId, productImg, productPrice) {

  document.querySelector('#main .row').innerHTML += `
    <div class="col-12 col-sm-6 col-lg-4 mt-5">
        <div class="card">
            <img src=${productImg} alt=${productName} />
            <div class="info-teddy">
                <h2>${productName}</h2>
                <span>${productPrice / 100},00€</span>
            </div>
            <button class="product_link" type="button" onclick="window.location.href='product.html?id=${productId}'">Voir le produit</button>
        </div>
    </div>
    `
}

displayProducts();
