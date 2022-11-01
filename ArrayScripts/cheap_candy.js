"use sripts"

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    //       price ranges
];

let numProducts = products.length;
let cheapCandy = [];
let marsMurrie = [];
for (let i = 0; i < numProducts; i++) {
    if (Number(products[i].price) < 4) {
        cheapCandy.push(products[i].product);
    }
    if (products[i].product.indexOf("M&M") != -1) {
        marsMurrie.push(products[i].product);
    }
}
console.log(cheapCandy);
console.log(marsMurrie);
for (let i = 0; i < numProducts; i++) {
    if (products[i].product == "Swedish Fish") {
        console.log("Yes, we carry Swedish Fish.");
        break;
    }
}