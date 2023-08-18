// // First part ---> names namer akti array declare kara hoese then
// // function ar vitor for loop chalano hoese and function ar vitor print kara hoese

// const names = ['abul', 'babul', 'kabul', 'sabul', 'nabul', 'pagol', 'tagol', 'babul', 'kabul', 'sabul'];

// function removeDuplicate(names) {
//     for (let i = 0; i <= names.length; i++) {
//         const name = names[i];
//         console.log(name);
//     }
// }
// const uniqeNames = removeDuplicate(names);



// 2nd part ---> akthon conditional use kara hobe and function ar value
// return kara hobe
const names = ['abul', 'babul', 'kabul', 'sabul', 'nabul', 'pagol', 'tagol', 'babul', 'kabul', 'sabul'];

function removeDuplicate(names) {
    const unique = [];   // new atka array deelare kara hoese for uniqe nam rakar jonno
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (unique.includes(name) === false) { // ai unique namer array ar moddhe jodi includes j nam ti ase oita === false hoi
            unique.push(name);                  //tahole unique namer array ar moddhe push kare dibo ai nam take
        }
    }
    return unique;
}
const uniqeNames = removeDuplicate(names);
console.log(uniqeNames);