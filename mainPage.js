function principalPage(){
	//création d'une section dans le template html
	const section = document.createElement("section");
	let main = document.querySelector("body main");
	main.appendChild(section);
	section.id = "mainPage";
	//création d'un container
	const container = document.createElement("div");
	document.getElementById("mainPage").appendChild(container);
	container.classList.add("container");
	//création d'une div row
	const mainRow = document.createElement("div");
	document.querySelector("#mainPage div.container").appendChild(mainRow);
	mainRow.classList.add("row");
	mainRow.classList.add("mainRow");
	//création d'une col
	const mainCol = document.createElement("div");
	document.querySelector("div.mainRow").appendChild(mainCol);
	mainCol.classList.add("col-12");
	mainCol.classList.add("mainCol");
	const secondRow = document.createElement("div");
	document.querySelector("div.mainCol").appendChild(secondRow);
	secondRow.classList.add("row");
	secondRow.classList.add("secondRow");




















	//Mise en place des liens vers autres pages
	const linkNorb = document.createElement("a");
	document.querySelector("div.secondRow").appendChild(linkNorb);
	linkNorb.setAttribute("href","https://www.porsche.com/france/");
	linkNorb.classList.add("linkNorb");
	linkNorb.classList.add("col-lg-4");
	linkNorb.classList.add("mt-5");
	const colNorb = document.createElement("div");
	document.querySelector("a.linkNorb").appendChild(colNorb);
	colNorb.classList.add("firstCol");
	colNorb.style.backgroundColor = "#ff7f00";




	const linkArny = document.createElement("a");
	document.querySelector("div.secondRow").appendChild(linkArny);
	linkArny.setAttribute("href","");
	linkArny.classList.add("linkArny");
	linkArny.classList.add("col-lg-4");
	linkArny.classList.add("mt-5");
	const colArny = document.createElement("div");
	document.querySelector("a.linkArny").appendChild(colArny);
	colArny.classList.add("secondCol");
	colArny.style.backgroundColor = "#ff7f00";




	const linkLC = document.createElement("a");
	document.querySelector("div.secondRow").appendChild(linkLC);
	linkLC.setAttribute("href","");
	linkLC.classList.add("linkLC");
	linkLC.classList.add("col-lg-4");
	linkLC.classList.add("mt-5");
	const colLC = document.createElement("div");
	document.querySelector("a.linkLC").appendChild(colLC);
	colLC.classList.add("thirdCol");
	colLC.style.backgroundColor = "#ff7f00";




	const linkGus = document.createElement("a");
	document.querySelector("div.secondRow").appendChild(linkGus);
	linkGus.setAttribute("href","");
	linkGus.classList.add("linkGus");
	linkGus.classList.add("col-lg-4");
	linkGus.classList.add("offset-lg-2");
	linkGus.classList.add("mt-5");
	const colGus = document.createElement("div");
	document.querySelector("a.linkGus").appendChild(colGus);
	colGus.classList.add("fourthCol");
	colGus.style.backgroundColor = "#ff7f00";




	const linkGarf = document.createElement("a");
	document.querySelector("div.secondRow").appendChild(linkGarf);
	linkGarf.setAttribute("href","");
	linkGarf.classList.add("linkGarf");
	linkGarf.classList.add("col-lg-4");
	linkGarf.classList.add("mt-5");
	const colGarf = document.createElement("div");
	document.querySelector("a.linkGarf").appendChild(colGarf);
	colGarf.classList.add("fifthCol");
	colGarf.style.backgroundColor = "#ff7f00";




















	//création des span dans les col



	const imgNorb = document.createElement("img");
	document.querySelector("div.firstCol").appendChild(imgNorb);
	imgNorb.setAttribute("src","images/teddy_1.jpg");
	imgNorb.setAttribute("alt", "Teddy Norbert");
	const spanNorb = document.createElement("span");
	document.querySelector("div.firstCol").appendChild(spanNorb);
	spanNorb.classList.add("norbert");
	spanNorb.innerHTML = "Norbert";



	const imgArny = document.createElement("img");
	document.querySelector("div.secondCol").appendChild(imgArny);
	imgArny.setAttribute("src","images/teddy_2.jpg");
	imgArny.setAttribute("alt", "Teddy Arnold");
	const spanArny = document.createElement("span");
	document.querySelector("div.secondCol").appendChild(spanArny);
	spanArny.classList.add("arnold");
	// spanArny.id = "result";
	spanArny.innerHTML = "Arnold";



	const imgLC = document.createElement("img");
	document.querySelector("div.thirdCol").appendChild(imgLC);
	imgLC.setAttribute("src","images/teddy_3.jpg");
	imgLC.setAttribute("alt", "Teddies Lenny and Carl");
	const spanLC = document.createElement("span");
	document.querySelector("div.thirdCol").appendChild(spanLC);
	spanLC.classList.add("leny&carl");
	spanLC.innerHTML = "Leny and Carl";



	const imgGus = document.createElement("img");
	document.querySelector("div.fourthCol").appendChild(imgGus);
	imgGus.setAttribute("src","images/teddy_4.jpg");
	imgGus.setAttribute("alt", "Teddy Gustav");
	const spanGus = document.createElement("span");
	document.querySelector("div.fourthCol").appendChild(spanGus);
	spanGus.classList.add("gustav");
	spanGus.innerHTML = "Gustav";



	const imgGarf = document.createElement("img");
	document.querySelector("div.fifthCol").appendChild(imgGarf);
	imgGarf.setAttribute("src","images/teddy_5.jpg");
	imgGarf.setAttribute("alt", "Teddy Garfunkel");
	const spanGarf = document.createElement("span");
	document.querySelector("div.fifthCol").appendChild(spanGarf);
	spanGarf.classList.add("garfunkel");
	spanGarf.innerHTML = "Garfunkel";
}