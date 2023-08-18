/*

fixed: per item wood requirements
1. chair -- 3 cft
2. table -- 10 cft
3. bed -- 50 cft
vary: quantity
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perCharirWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    chairWood = perCharirWood * chairQuantity;
    tableWood = perTableWood * tableQuantity;
    bedWood = perBedWood * bedQuantity;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;

    // console.log(chairQuantity, tableQuantity, bedQuantity);

}

const woodTotal = woodCalculator(1, 1, 1);
console.log(woodTotal);
