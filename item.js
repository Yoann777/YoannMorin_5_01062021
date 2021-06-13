const optionItem = document.getElementById("teddies");

optionItem.addEventListener("change", function(e){
	document.getElementById("res-item").innerText = e.target.value;
});

// if(optionItem == "teddy_1"){
// 	optionItem.addEventListener("change", function(e){
// 		document.getElementById("res-item").innerText = e.target.value;
// 	}
// }else{
// 	optionItem.addEventListener("change", function(e){
// 		document.getElementById("res-item").innerText = "prends autre chose";
// 	}
// };




// optionItem.addEventListener("change", function(e){
// 	if(optionItem == "teddy_1"){
// 		document.getElementById("res-item").innerText = e.target.value;
// 	}else {




//   	document.getElementById("res-item").innerText = "prends autre chose";
//   }
//   });