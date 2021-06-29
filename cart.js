// variables pour les articles du panier
const cart = document.querySelector("#cart");
// variables pour le prix total 
const cartTotal = document.getElementById("cart-total");
const form = document.querySelector("form");

const cartInformation = {
  contact: {},
  products: [],
};

// variable pour le prix total de la commande
let totalPrice = 0;

// On affiche les articles du panier
const displayCart = async () => {
  //On va chercher les objets dans le stockage local
  const cartItems = JSON.parse(localStorage.getItem("panier"));
  // conditions si le stockage local n'est pas vide
  if (Object.keys(cartItems).length > 0) {
    //on boucle pour afficher chaque article du panier
    for (let i = 0; i < Object.keys(cartItems).length; i++) {
      const itemId = Object.keys(cartItems)[i];
      //on récupère les informations des produits stockés
      const product = await getItem(itemId); 
      const teddyId = product._id;
      const teddyName = product.name;
      const teddyPrice = product.price;
      const teddyImg = product.imageUrl;
      const teddyQuantity = cartItems[itemId].quantity;
      // on envoit l'id du produit à cartInformation
      cartInformation.products.push(teddyId);
      //affichage des produits
      renderCart(teddyName, teddyPrice, teddyImg, teddyQuantity);

      //creation de constante pour supprimer ou ajouter des produits
      const remove = document.querySelectorAll(".remove")[i];
      const article = document.querySelectorAll("article")[i];
      const removeIcon = document.querySelectorAll(".fa-minus-circle")[i];
      const addIcon = document.querySelectorAll(".fa-plus-circle")[i];
      removeIcon.style.fontSize = "16px";
      addIcon.style.fontSize = "16px";
      deleteCart(remove, article, itemId);
      //lors du clique sur l'icone moins, on appel la fonction decrementItem
      decrementItem(removeIcon, article, itemId);
      //comme pour la décrémentation, il se passe la meme chose pourl'incrementation en cliquant sur l'icone plus
      incrementItem(addIcon, article, itemId); 
    }
  } else {
    //si le stockahe local est vide, on affiche que le panier est vide
    cart.textContent = "Votre panier est vide.";
    form.classList.add("invisible");
  }
};

// récupération des produits dans le stockage local
const getItem = async (productId) => {
  const response = await fetch("http://localhost:3000/api/teddies/" + productId);
  return await response.json();
};

//ci-dessous, on affiche les éléments du stockage local 
const renderCart = (productName, productPrice, imgUrl, productQuantity) => {
  //affiche les produits qu'il y a dans le panier
  const article = document.createElement("article");
  article.innerHTML = `
    <div class="row">
      <div class="col-12 mt-5">
        <div class="row">
          <div class="col-4">
            <img src=${imgUrl} alt=${productName} />
          </div>
          <div class="col-4 product-info">
            <p class="product-name">${productName}</p>
            <p class="product-price">${productPrice/100},00€</p>
          </div>
          <div class="col-4">
            <p class="quantity"><i class="fas fa-minus-circle"></i>${productQuantity}<i class="fas fa-plus-circle"></i></p>
            <p class="remove ">Supprimer</p>
          </div>
        </div>
      </div>
    </div>`;
  // On veut les articles avant d'afficher le prix total du panier. On insert donc article avant cartTotal
  cart.insertBefore(article, cartTotal);
  //on implémente le prix total 
  totalPrice += productPrice * productQuantity;
  //puis on récapitule le contenu du panier
  cartTotal.textContent = `Le montant du panier est de : ${totalPrice/100},00€`;
};


//si on veut supprimer un produit du panier
const deleteCart = (removeElt, container, productId) => {
  removeElt.addEventListener("click", async () => {
    const panier = JSON.parse(localStorage.getItem("panier"));
    if (panier === null) return;
    if (panier[productId] === undefined) return;
    else {
      delete panier[productId];
    }
    localStorage.setItem("panier", JSON.stringify(panier));
    // suppression du produit du stockage local
    container.remove(); //=>supprime le produit du DOM
    //on réactualise la page (identique à touche F5 ou bouton actualiser)
    location.reload(true);
  });
};

//décrémentation des produits dans le panier au clique sur moins. si = 0, on supprime le produit
const decrementItem = (removeIcon, container, productId) => {
  removeIcon.addEventListener("click", () => {
    const panier = JSON.parse(localStorage.getItem("panier"));
    if (panier === null) return;
    if (panier[productId] === undefined) return;
    if (panier[productId].quantity > 1) {
      panier[productId].quantity--;
    } else {
      delete panier[productId];
    }
    localStorage.setItem("panier", JSON.stringify(panier));
    // suppression du produit du stockage local
    container.remove(); //=>supprime le produit du DOM
    //on réactualise la page (identique à touche F5 ou bouton actualiser)
    location.reload(true);
  });
};

//incrémentation des produits dans le panier au clique sur plus
const incrementItem = (addIcon, container, productId) => {
  addIcon.addEventListener("click", () => {
    const panier = JSON.parse(localStorage.getItem("panier"));
    if (panier === null) return;
    if (panier[productId] === undefined) return;
    if (panier[productId].quantity >= 1) {
      panier[productId].quantity++;
    } else {
      delete panier[productId];
    }
    localStorage.setItem("panier", JSON.stringify(panier));
    // suppression du produit du stockage local
    container.remove(); //=>supprime le produit du DOM
    //on réactualise la page (identique à touche F5 ou bouton actualiser)
    location.reload(true);
  });
};

displayCart();


const containNumber = /[0-9]/; 
const regexEmail = /.+@.+\..+/; //forme d'une adresse mail. chaineDeCaractères + @ + chaineDeCaractères + . + chaineDeCaractères
const specialCharacter = /[$&+,:;=?@#|'<>.^*()%!"{}_"]/; //liste des caractères spéciaux

//vérification que la valeur n'est pas vide
const isNotEmpty = (value) => (value !== "" ? true : false);
//vérification que la chaine de caractère est assez longue. ici, au moins 2 caractères obligatoire
const isLongEnough = (value) => (value.length >= 2 ? true : false);
//vérification que la valuer ne contient pas de nombre
const doNotContainNumber = (value) =>
  !value.match(containNumber) ? true : false;
//Vérification que la valeur ne contient pas de caractères spéciaux
const doNotContainSpecialCharacter = (value) =>
  !value.match(specialCharacter) ? true : false;
//vérification qu'il s'agit bien d'un mail
const isValidEmail = (value) => (value.match(regexEmail) ? true : false);

//si toutes les conditions sont remplies, cela renverra true
const isValidInput = (value) =>
  isNotEmpty(value) &&
  isLongEnough(value) &&
  doNotContainNumber(value) &&
  doNotContainSpecialCharacter(value);

//on récupère les éléments du formulaire pour l'envoi vers le serveur 
const firstName = form.elements.firstName;
const lastName = form.elements.lastName;
const address = form.elements.address;
const city = form.elements.city;
const email = form.elements.email;
const btn = document.getElementById("btn");

//en cas d'erreur de saisie, on définit un message d'erreur pour les éléments du formulaire
const firstNameErrorMessage = document.getElementById("firstNameErrorMessage");
const lastNameErrorMessage = document.getElementById("lastNameErrorMessage");
const addressErrorMessage = document.getElementById("addressErrorMessage");
const cityErrorMessage = document.getElementById("cityErrorMessage");
const emailErrorMessage = document.getElementById("emailErrorMessage");

//on vérifie les données saisies par l'utilisateur
const formValidate = () => {
  if (isValidInput(firstName.value)) {
    firstNameErrorMessage.textContent = "";

    if (isValidInput(lastName.value)) {
      lastNameErrorMessage.textContent = "";

      if (isNotEmpty(address.value) && isLongEnough(address.value)) {
        addressErrorMessage.textContent = "";

        if (isValidInput(city.value)) {
          cityErrorMessage.textContent = "";

          if (isValidEmail(email.value)) {
            emailErrorMessage.textContent = "";

            return (cartInformation.contact = {
              // si tout les input sont valides, on renvoie l'objet contact à cartInformation
              firstName: firstName.value,
              lastName: lastName.value,
              address: address.value,
              city: city.value,
              email: email.value,
            });
          } else { //on indique pourquoi le formulaire ne peut être envoyé
            emailErrorMessage.textContent =
              "Merci de renseigner votre adresse mail !";
            email.focus();
            return false;
          }
        } else {
          cityErrorMessage.textContent = "Merci de renseigner votre ville !";
          city.focus();
          return false;
        }
      } else {
        addressErrorMessage.textContent = "Merci de renseigner votre adresse !";
        address.focus();
        return false;
      }
    } else {
      lastNameErrorMessage.textContent = " Merci de renseigner votre nom !";
      lastName.focus();
      return false;
    }
  } else {
    firstNameErrorMessage.textContent = "Merci de renseigner votre prénom !";
    firstName.focus();
    return false;
  }
};

// envoie des données à l'api
const postData = async (method, url, dataElt) => {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(dataElt),
  });
  return await response.json();
};

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  const validForm = formValidate(); // permet de valider le formulaire
  if (validForm !== false) {
    const response = await postData(
      "POST",
      "http://localhost:3000/api/teddies/order",
      cartInformation
    ); 
    // envoie des données au serveur
    window.location = `./confirmation.html?id=${response.orderId}&price=${totalPrice}&user=${firstName.value}`; // Redirige vers la page de confirmation de commande
    localStorage.removeItem("panier");
  }
});

if (!localStorage.getItem("panier")) {
  // vérifie que le stockage local est vide. si c'est le cas, on cache le formulaire et on insère le texte
  cart.textContent = "Votre panier est vide.";
  form.classList.add("invisible");
}