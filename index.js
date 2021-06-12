async function compute() {
    const teddies = await fetch('http://localhost:3000/api/teddies').then(function (response) {
        return response.json().then(json => json);
    });
    const teddie = await fetch('http://localhost:3000/api/teddies/5beaa8bf1c9d440000a57d94').then(function (response) {
        return response.json().then(json => json);
    });
    return (teddie);
}

compute()
  .then(function(res) {
    document
      .getElementById("result")
      .innerText = res.name + '';
});