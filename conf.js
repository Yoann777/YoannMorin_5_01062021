const url = "http://localhost:3000/api/teddies/";

const getItem = async (productUrl, productId) => {
     const response = await fetch(productUrl + productId);
     return await response.json();
};