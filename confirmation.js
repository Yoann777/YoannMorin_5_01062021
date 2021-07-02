const orderInformation = window.location.search.substr(1).split("&");
const orderId = orderInformation[0].replace("id=", "");
const totalPrice = orderInformation[1].replace("price=", "");
const userName = orderInformation[2].replace("user=", "");
document.querySelector("h1").textContent += " " + userName;
document.querySelector(".user").textContent += " " + userName;
document.querySelector(".order-id").innerHTML += " <br />" + orderId;
document.querySelector(".price").textContent += " " + totalPrice/100 + ",00€";
