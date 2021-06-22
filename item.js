(async function() {
    const teddies = await getTeddies()
    console.log(teddies)
    for(teddy of teddies){
        displayTeddy(teddy)
    }
})()

function getTeddies(){
    return fetch("http://localhost:3000/api/teddies")
        .then(function(response){
            return response.json()
        })
        .then(function(teddies){
            return teddies
        })
        .catch(function(error){
            alert(error)
        })
}

function displayTeddy(teddy){
    const templateElt = document.getElementById("templateTeddy")
    const cloneElt = document.importNode(templateElt.content, true)

    cloneElt.getElementById("card__img").innerHTML = `<img alt="teddy" src="${teddy.imageUrl}" />`
    cloneElt.getElementById("card__name").textContent = teddy.name
    cloneElt.getElementById("card__price").textContent = teddy.price/100 + ',00€'
    cloneElt.getElementById("card__id").textContent = teddy._id
    cloneElt.getElementById("card__desc").textContent = teddy.description
    cloneElt.getElementById("card__button").textContent = "Ajouter au panier"

    document.getElementById("row").appendChild(cloneElt)
}