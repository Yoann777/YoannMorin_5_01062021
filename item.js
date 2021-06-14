//Connexion à l'API
fetch("http://localhost:3000/api/teddies")
        .then(function(res){
                if(res.ok){
                        return res.json();
                }
        })
        .then(function(value){
                const nameItem = document.getElementById("teddie");
                nameItem.addEventListener("change", function(a){
                        let x = a.target.value-1;
                        if(x<0){
                                x=0;
                                alert("Ceci n'est pas un choix valable");
                                return x;
                        }
                        console.log(x);
                        document.getElementById("id").innerText = value[x]._id;
                        document.getElementById("name").innerText = value[x].name;
                        document.getElementById("price").innerText = value[x].price/100 + ',00€';
                        document.getElementById("description").innerText = value[x].description;
                        document.getElementById("image").innerText = value[x].imageUrl;
                        // document.getElementById("color").innerText = value[x].colors[0];
                        document.getElementById("color").innerText = value[x].colors;

                        




                        // affiche bien l'image, mais trop grande, et l'image ne se supprime pas en changeant la valeur du menu déroulant
                        // const image = `<img src="${value[x].imageUrl}" />`;
                        // document.getElementById("imageTeddy").insertAdjacentHTML('afterbegin',image);
                })
        })
        .catch(function(err){
                alert("Une erreur est survenue");
        });


        

        // let x = e.target.value;
        // console.log(x);
        // if(e.target.value == 1){
        //         console.log("test OK");
        // }else{
        //         console.log("erreur");
        // }