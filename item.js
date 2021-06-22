//Connexion à l'API
fetch("http://localhost:3000/api/teddies")
        .then(function(res){
                if(res.ok){
                        return res.json();
                }
        })
        .then(function(results){
                //const nameItem = document.getElementById("teddie");
                //On écoute les changements sur le select puis on défini une callback 
                //nameItem.addEventListener("change", function(a){
                        //On défini une variable x avec la valeur de la fonction qui prendra donc la "results" du select[0-x]
                        //let x = a.target.results;

                        //On écrit les valeurs des clés de la results du select 
                        //document.getElementById("id").innerText = results[x]._id;
                        //document.getElementById("name").innerText = results[x].name;
                        //Pour obtenir un prix cohérent, j'ai effectué cette petite formule
                        //document.getElementById("price").innerText = results[x].price/100 + ',00€';
                        //document.getElementById("description").innerText = results[x].description;
                        // document.getElementById("image").innerText = results[x].imageUrl;
                        //document.getElementById("color").innerHTML = results[x].colors;
                        
                        // Pour afficher l'image du Teddy, j'ai déterminé une balise img dans le html, puis je viens lui donner la valeur de la source de l'image
                        // sans la balise img, la valeur apparaissait, et quand on sélectionnait un autre Teddy, une deuxième image apparraissait
                        //probablement suite à la boucle ci-dessous
                        //let essai = document.querySelector("#image img");
                        //essai.setAttribute("src",results[x].imageUrl);
                        //essai.setAttribute("alt", "Teddy");


                        //Ce code fonctionne comme le while du dessous, mais on inverse le tableau de valeur en premier
                        //car on part d'une valeur élevée, puis on décrémente jusqu'à 0, en affichant le résultat

                        // const reversed = results[x].colors.reverse();
                        // let m = results[x].colors.length;
                        // while(m-1>=0){
                        //         let newOption = document.createElement("option");
                        //         document.getElementById("testColor").appendChild(newOption);
                        //         newOption.setAttribute("results",m-1);
                        //         newOption.innerText = results[x].colors[m-1];
                        //         m--;
                        // }

                        //code plus simple à lire, sans avoir besoin d'inverser le tableau avant. On aura juste à incrémenter
                        //let m=0;
                        //while(m<results[x].colors.length){
                                //let newOption = document.createElement("option");
                                //document.getElementById("color").appendChild(newOption);
                                //newOption.setAttribute("results",m);
                                //newOption.innerText = results[x].colors[m];
                                //m++;
                        //};
                //});


                //Boucle pour afficher les item de l'array de l'api
                // for(let i=0;i<results.length;i++){
                //         const newOption = document.createElement("option");
                //         document.getElementById("teddie").appendChild(newOption);
                //         newOption.setAttribute("results",i);
                //         newOption.innerHTML = `Teddy ${i+1}`;
                // };



                console.log(results);
                


                const row = document.querySelector("#itemPage .row");
                for(const teddy of results){
                        console.log(teddy);




                        let newCol = document.createElement('div');
                        newCol.classList.add('col-12');
                        newCol.classList.add('col-lg-4');
                        newCol.classList.add('mt-5');
                        let newCard = document.createElement('div');
                        newCard.classList.add('card');
                        let newImg = document.createElement("img");
                        newImg.setAttribute('alt','Teddy');
                        newImg.setAttribute('src',`${teddy.imageUrl}`);
                        let newName = document.createElement("p");
                        newName.innerText = `${teddy.name}`;
                        newName.classList.add('name');
                        let newPrice = document.createElement("p");
                        newPrice.innerText = `${teddy.price/100},00€`;
                        newPrice.classList.add('price');
                        let newDesc = document.createElement("p");
                        newDesc.innerText = `${teddy.description}`;
                        newDesc.classList.add('description');
                        let newRef = document.createElement("p");
                        newRef.innerText = `${teddy._id}`;
                        newRef.classList.add('refArticle');

                        newCard.append(newImg);
                        newCard.append(newName);
                        newCard.append(newPrice);
                        newCard.append(newDesc);
                        newCard.append(newRef);
                        newCol.append(newCard);
                        row.append(newCol);      
                };
        })
        //Si une erreur survient, on crée une alerte 
        .catch(function(err){
                alert("Une erreur est survenue");
        });
