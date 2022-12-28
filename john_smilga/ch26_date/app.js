const months = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'Octuber',
    'November',
    'Decmber'
]
const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thrusday',
    'Friday',
    'Saturday',
    'Sunday'
]
const date = new Date();
console.log(date);

const month = date.getMonth()
console.log(months[month]);

const day = date.getDay()
console.log(days[day]);

console.log(date.getDate());
console.log(date.getFullYear());
console.log(`${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}`);