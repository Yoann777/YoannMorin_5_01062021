const elt = document.querySelector('button');

elt.addEventListener('click', function(event){
    event.stopPropagation();
});

function addToCart(){
    if(confirm("test pour valider l'ajout au panier")){
        let essai = document.getElementsByClassName('name').textContent;
        console.log(essai);
    } else {
        console.log("test failed");
    }
    
};

