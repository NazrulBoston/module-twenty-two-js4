
// // find a cheapest phone from array of object

// // First step ---> akhane phones name akta array of object declare kara hoese and sobgulo object k 
// // for loop use kare output dekhano hoese
// const phones = [
//     { name: 'samsung', camera: 10, storage: '32gb', price: 36000, color: 'silver' },
//     { name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'silver' },
//     { name: 'iphone', camera: 10, storage: '32gb', price: 36000, color: 'silver' },
//     { name: 'Oppo', camera: 10, storage: '32gb', price: 36000, color: 'silver' },
//     { name: 'Nokia', camera: 10, storage: '32gb', price: 36000, color: 'silver' },
//     { name: 'lg', camera: 10, storage: '32gb', price: 36000, color: 'silver' },
// ];

// function cheapestPhone(phones) {
//     for (let i = 0; i < phones.length; i++) {
//         const phone = phones[i];
//         console.log(phone)
//     }
// }

// const mySelection = cheapestPhone(phones);
// console.log(mySelection)




// // 2nd step ----> akhane cheapest namer akta variable declare kara hoese and conditional use kore
// // cheapest phone ber kara hoese

// const phones = [
//     { name: 'samsung', camera: 10, storage: '32gb', price: 36000, color: 'silver' },
//     { name: 'Walton', camera: 16, storage: '32gb', price: 22000, color: 'silver' },
//     { name: 'iphone', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
//     { name: 'Oppo', camera: 14, storage: '32gb', price: 36000, color: 'silver' },
//     { name: 'Nokia', camera: 11, storage: '32gb', price: 36000, color: 'silver' },
//     { name: 'lg', camera: 8, storage: '32gb', price: 36000, color: 'silver' },
// ];

// function cheapestPhone(phones) {
//     let cheapest = phones[0];
//     for (let i = 0; i < phones.length; i++) {
//         const phone = phones[i];
//        if(phone.price < cheapest.price){
//         cheapest = phone;
//        }
//         // console.log(phone)
//     }
//     return cheapest;
// }

// const mySelection = cheapestPhone(phones);
// console.log(mySelection)


// part ---> akhane amra ber karbo kon phone ar camera sobchea beshi
// amra akhon ber karbo kon phone ar camera sobchea valo

const phones = [
    { name: 'samsung', camera: 10, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'Walton', camera: 16, storage: '32gb', price: 22000, color: 'silver' },
    { name: 'iphone', camera: 12, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'Oppo', camera: 14, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'Nokia', camera: 11, storage: '32gb', price: 36000, color: 'silver' },
    { name: 'lg', camera: 8, storage: '32gb', price: 36000, color: 'silver' },
];
function cheapestPhone(phones) {
    let largeCamera = phones[0]
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if(phone.camera > largeCamera.camera){
            largeCamera = phone;
        }
        // console.log(phone)
    }
    return largeCamera;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection)

