// On récupère les paramètres de l'url
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const item = document.querySelector("#product .main-row");

// On affiche le produit
const displayProduct = async (apiUrl, elementId) => {
  const data = await getItem(apiUrl, elementId);

  // Si la longueur du tableau data est nulle, on affiche un message d'erreur à l'écran
  if (Object.keys(data).length === 0) { document.querySelector('h1').innerHTML = 'Article introuvable'; }
  else {
    renderItem(data);
    colorChoice(item, data.colors);
    addToCart(item, data);
  }
};
// Puis on récupère un teddy

// Crée l'affichage selon le produit dans le code html
const renderItem = (productData) => {
    item.innerHTML = `
    <div class="col-12 text-center your-item h2">Votre Teddy ${productData.name}</div>
    <div class="col-12 col-lg-10 offset-lg-1 mt-5">
      <div class="row item-teddy">
        <div class="col-12 col-lg-6">
          <div class="image">
            <img src="${productData.imageUrl}" alt="${productData.name}">
          </div>
        </div>
        <div class="col-12 col-lg-6 mt-3">
          <div class="item-info">
            <h2 class="item-title">${productData.name}</h2>
            <p class="price">${productData.price / 100},00€</p>
            <p class="description">${productData.description}</p>
          </div>
        </div>
      </div>
    </div>`;
};

// Choix de la couleur du produit
const colorChoice = (parentElt, productColors) => {
  // Création du menu déroulant pour le choix de la couleur
  const label = document.createElement("label");
  const select = document.createElement("select");

  label.setAttribute("for", "colors");
  label.textContent = "Couleur : ";
  select.id = "colors";
  document.querySelector("#product .item-info").appendChild(label).appendChild(select);

  productColors.forEach((productColor) => {
    const option = document.createElement("option");
    option.value = productColor;
    option.textContent = productColor;
    select.appendChild(option);
  });

  select.addEventListener("change", (e) => {
    colorChosen = e.target.value;
  });
};


// Ajout du produit au panier
const addToCart = (parentElt, productData) => {
  // Crée le bouton d'envoie du produit
  const btn = document.createElement("button");
  const div = document.createElement("div");
  btn.textContent = "Ajouter au panier";
  div.classList.add("add-to-cart");
  document.querySelector("#product .item-info").appendChild(div).appendChild(btn);

  // Valeur à envoyer au stockage local
  const product = {
    id: productData._id,
    name: productData.name,
    price: productData.price,
    imageUrl: productData.imageUrl,
    quantity: 1,
  };

  // après un clique, on envoi la valeur au stockage local
  btn.addEventListener("click", () => {
    // récupération du panier du stockage local
    let panier = JSON.parse(localStorage.getItem("panier"));
    if (panier === null) {
      panier = {};
    }
    // Ajout du produit au panier
    if (panier[product.id] !== undefined) {
      panier[product.id].quantity += 1;
    } else {
      panier[product.id] = product;
    }
    // suppression de la fonction bouton après un clique d'ajout
    localStorage.setItem("panier", JSON.stringify(panier));
    btn.textContent = "Produit ajouté :)";
    btn.setAttribute('disabled', true);
    btn.style.backgroundColor = "#0f0";
  });
};

displayProduct(url, id);
