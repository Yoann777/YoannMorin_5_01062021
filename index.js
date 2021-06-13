async function norbert() {
    const teddies = await fetch('http://localhost:3000/api/teddies').then(function (response) {
        return response.json().then(json => json);
    });
    const teddie = await fetch('http://localhost:3000/api/teddies/5be9c8541c9d440000665243').then(function (response) {
        return response.json().then(json => json);
    });
    return (teddie);
}

norbert()
  .then(function(res) {
    document.getElementById("name1").innerHTML = 'Teddy ' + res.name;
    document.getElementById("price1").innerHTML = 'Prix ' + res.price/100 + ',00€';
    document.getElementById("description1").innerHTML = res.description;
});



async function arnold() {
    const teddies = await fetch('http://localhost:3000/api/teddies').then(function (response) {
        return response.json().then(json => json);
    });
    const teddie = await fetch('http://localhost:3000/api/teddies/5beaa8bf1c9d440000a57d94').then(function (response) {
        return response.json().then(json => json);
    });
    return (teddie);
}

arnold()
  .then(function(res) {
    document.getElementById("name2").innerHTML = 'Teddy ' + res.name;
    document.getElementById("price2").innerHTML = 'Prix ' + res.price/100 + ',00€';
    document.getElementById("description2").innerHTML = res.description;
});



async function LC() {
    const teddies = await fetch('http://localhost:3000/api/teddies').then(function (response) {
        return response.json().then(json => json);
    });
    const teddie = await fetch('http://localhost:3000/api/teddies/5beaaa8f1c9d440000a57d95').then(function (response) {
        return response.json().then(json => json);
    });
    return (teddie);
}

LC()
  .then(function(res) {
    document.getElementById("name3").innerHTML = 'Teddy ' + res.name;
    document.getElementById("price3").innerHTML = 'Prix ' + res.price/100 + ',00€';
    document.getElementById("description3").innerHTML = res.description;
});



async function gus() {
    const teddies = await fetch('http://localhost:3000/api/teddies').then(function (response) {
        return response.json().then(json => json);
    });
    const teddie = await fetch('http://localhost:3000/api/teddies/5beaabe91c9d440000a57d96').then(function (response) {
        return response.json().then(json => json);
    });
    return (teddie);
}

gus()
  .then(function(res) {
    document.getElementById("name4").innerHTML = 'Teddy ' + res.name;
    document.getElementById("price4").innerHTML = 'Prix ' + res.price/100 + ',00€';
    document.getElementById("description4").innerHTML = res.description;
});




async function garf() {
    const teddies = await fetch('http://localhost:3000/api/teddies').then(function (response) {
        return response.json().then(json => json);
    });
    const teddie = await fetch('http://localhost:3000/api/teddies/5beaacd41c9d440000a57d97').then(function (response) {
        return response.json().then(json => json);
    });
    return (teddie);
}

garf()
  .then(function(res) {
    document.getElementById("name5").innerHTML = 'Teddy ' + res.name;
    document.getElementById("price5").innerHTML = 'Prix ' + res.price/100 + ',00€';
    document.getElementById("description5").innerHTML = res.description;
});