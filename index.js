async function compute() {
    const teddies = await fetch('http://localhost:3000/api/teddies').then(function (response) {
        return response.json().then(json => json);
    });
    const teddie = await fetch('http://localhost:3000/api/teddies/5be9c8541c9d440000665243').then(function (response) {
        return response.json().then(json => json);
    });
    return (teddie);
}

compute()
  .then(function(res) {
    document.getElementById("name").innerHTML = 'Teddy ' + res.name;
    document.getElementById("price").innerHTML = 'Prix ' + res.price/100 + ',00€';
    document.getElementById("description").innerHTML = res.description;
});
