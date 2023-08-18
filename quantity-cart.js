
// aikhane shoppingCart array ar moddhe kisu object declare kara hoese and
// totalCost akti function ar moddhe for loop use kar prothome objects k nea hoese
// sum namer akti variable declare kare product ar quantity k product price ar sathe 
// gun kare productToatal akti variable ar moddhe rakha hoese then retunrn kare 
// output dekhano hoese
const shoppingCart = [
    { name: 'shoe', price: 1200, quantity: 2 },
    { name: 'shirt', price: 2200, quantity: 5 },
    { name: 'pant', price: 3700, quantity: 3 },
    { name: 'belt', price: 600, quantity: 4},
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;

    }
    return sum;
}

const expense = totalCost(shoppingCart);
console.log(expense);


