function sayHello() {
    console.log("say Hello World");
}

// setTimeout(sayHello, 1000);

function showScore(name, score) {
    console.log(`hello ${name} your score is ${score}`);
}

// setTimeout(showScore, 2000, 'vinita', 100)

const firstId = setTimeout(showScore, 1000, 'vinita', 100);
const secondId = setTimeout(showScore, 1000, 'Ravinder', 100);

console.log(firstId);
console.log(secondId);

clearTimeout(firstId);