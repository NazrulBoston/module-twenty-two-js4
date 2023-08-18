
// aikhane shoppingCart array ar moddhe kisu object declare kara hoese and
// totalCost akti function ar moddhe for loop use kar prothome objects k nea hoese
// then sum varialbe declare kare product ar price add kara hoese
const shoppingCart = [
    { name: 'shoe', price: 1200 },
    { name: 'shirt', price: 2200 },
    { name: 'pant', price: 3700 },
    { name: 'belt', price: 600 }
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum = sum + product.price;
         console.log(product)
    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log(expense);


