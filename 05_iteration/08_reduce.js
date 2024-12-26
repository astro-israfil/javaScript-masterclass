const cartItemsPrices = [10, 15, 20, 25, 30];

const total = cartItemsPrices.reduce(function (acc, price) {
    return acc + price;
}, 0);

console.log(total); // 100