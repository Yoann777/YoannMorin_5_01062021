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
                        let x = a.target.value;

                        document.getElementById("id").innerText = value[x]._id;
                        document.getElementById("name").innerText = value[x].name;
                        document.getElementById("price").innerText = value[x].price/100 + ',00€';
                        document.getElementById("description").innerText = value[x].description;
                        document.getElementById("image").innerText = value[x].imageUrl;
                        document.getElementById("color").innerText = value[x].colors;

                        //test
                        // for(let j=0;j<value[x].colors.length;j++){
                        //         const newOption = document.createElement("option");
                        //         document.getElementById("color").appendChild(newOption);
                        //         newOption.setAttribute("value",j);
                        //         newOption.innerHTML = value[x].colors[j];

                        // };
                        //test


                        // affiche bien l'image, mais trop grande, et l'image ne se supprime pas en changeant la valeur du menu déroulant
                        // const image = `<img src="${value[x].imageUrl}" />`;
                        // document.getElementById("imageTeddy").insertAdjacentHTML('afterbegin',image);
                })


                        console.log(value.length);

                        for(let i=0;i<value.length;i++){
                                const newOption = document.createElement("option");
                                document.getElementById("teddie").appendChild(newOption);
                                newOption.setAttribute("value",i);
                                newOption.innerHTML = `Teddy ${i+1}`;

                        };
        // console.log(objet[i].couleur);


        })
        .catch(function(err){
                alert("Une erreur est survenue");
        });


