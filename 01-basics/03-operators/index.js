// Learn About Operators

// Assignment : =

let x = 5; // assign 5 to x
let y = 10;

let sumXY = x + y;
// console.log(sumXY);

// Addition : +
fetch("https://fakestoreapi.com/products")
  .then((resp) => resp.json())
  .then((products) => {
    if (Array.isArray(products)) {
      let pricesProducts = products.map((product) => product.price);
      let sumPrices = pricesProducts.reduce(
        (prevPrice, curPrice) => parseFloat(prevPrice) + parseFloat(curPrice),
        0
      );
      sumPrices = Math.round(sumPrices);
      console.log(`Sum of all products prices : ${sumPrices}$`);
    }
  })
  .catch((error) => console.log(error.message));

// Multiplication

const product = {};

let productName = prompt("What product you want to buy ?", "Kiwi");
let productQuantity = prompt("Type the quantity : ", 10);

if (productName && productQuantity) {
  product.name = productName;
  product.quantity = productQuantity;
  product.price = parseFloat(product.quantity) * 4;
}

alert(`${product.name} has cost ${product.price}$`);
