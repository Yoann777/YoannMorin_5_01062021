//Connexion à l'API
fetch("http://localhost:3000/api/teddies")
        .then(function(res){
                if(res.ok){
                        return res.json();
                }
        })
        .then(function(value){
                const nameItem = document.getElementById("teddie");
                //On écoute les changements sur le select puis on défini une callback 
                nameItem.addEventListener("change", function(a){
                        //On défini une variable x avec la valeur de la fonction qui prendra donc la "value" du select[0-x]
                        let x = a.target.value;

                        //On écrit les valeurs des clés de la value du select 
                        document.getElementById("id").innerText = value[x]._id;
                        document.getElementById("name").innerText = value[x].name;
                        //Pour obtenir un prix cohérent, j'ai effectué cette petite formule
                        document.getElementById("price").innerText = value[x].price/100 + ',00€';
                        document.getElementById("description").innerText = value[x].description;
                        // document.getElementById("image").innerText = value[x].imageUrl;
                        document.getElementById("color").innerHTML = value[x].colors;
                        
                        // Pour afficher l'image du Teddy, j'ai déterminé une balise img dans le html, puis je viens lui donner la valeur de la source de l'image
                        // sans la balise img, la valeur apparaissait, et quand on sélectionnait un autre Teddy, une deuxième image apparraissait
                        //probablement suite à la boucle ci-dessous
                        let essai = document.querySelector("#image img");
                        essai.setAttribute("src",value[x].imageUrl);
                        essai.setAttribute("alt", "Teddy");


                        //Ce code fonctionne comme le while du dessous, mais on inverse le tableau de valeur en premier
                        //car on part d'une valeur élevée, puis on décrémente jusqu'à 0, en affichant le résultat

                        // const reversed = value[x].colors.reverse();
                        // let m = value[x].colors.length;
                        // while(m-1>=0){
                        //         let newOption = document.createElement("option");
                        //         document.getElementById("testColor").appendChild(newOption);
                        //         newOption.setAttribute("value",m-1);
                        //         newOption.innerText = value[x].colors[m-1];
                        //         m--;
                        // }

                        //code plus simple à lire, sans avoir besoin d'inverser le tableau avant. On aura juste à incrémenter
                        let m=0;
                        while(m<value[x].colors.length){
                                let newOption = document.createElement("option");
                                document.getElementById("color").appendChild(newOption);
                                newOption.setAttribute("value",m);
                                newOption.innerText = value[x].colors[m];
                                m++;
                        };
                });

                //Boucle pour afficher les item de l'array de l'api
                for(let i=0;i<value.length;i++){
                        const newOption = document.createElement("option");
                        document.getElementById("teddie").appendChild(newOption);
                        newOption.setAttribute("value",i);
                        newOption.innerHTML = `Teddy ${i+1}`;
                };
        })
        //Si une erreur survient, on crée une alerte 
        .catch(function(err){
                alert("Une erreur est survenue");
        });


function addToCart(){
        let newSpan = document.createElement("span");
        document.getElementById("add").appendChild(newSpan);
        newSpan.innerHTML = "<br />Ce bouton n'est pas encore actif. il récupère les informations 'id, name, price', les ajoutent dans un tableau, utilise json stringify puis les envoi au serveur pour les réutiliser sur la page panier";
}
