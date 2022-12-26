const gas = [20, 40, 100];
const food = [10, 40, 40];

function total(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    if (total > 100) {
        console.log('Hey listen you spending too much');
    } else {
        console.log('whoaaa!! you spending less than 100');

    }
    return total;
}
const calcFood = total(food);
const calcGas = total(gas);
const random = total([100, 98, 87, 67]);
console.log(calcFood, calcGas, random);
console.log({
    gas: calcGas,
    food: calcFood,
    random: random,
});