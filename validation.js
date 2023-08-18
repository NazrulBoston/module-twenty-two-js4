// // First step ----> akhane function ar moddhe duita number parameter nia hoese and 
// // call karar somoi number ar poriborte akta string dea hoese tokhon 
// // duita number k add na kare pasapasi bosie dibe. aisob vul theke safe thakar 
// //jonno validation kara hoi ja porer step kara hobe

// function add (num1, num2 ){
// return ( num1+ num2);

// }

// const result = add(12, '45')
// console.log(result)


// 2nd step ----> validation karbo

function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== "number") {
        return 'Please enter a number';
    }
    return (num1 + num2);
}

const result = add(12, 45)
console.log(result)


