let a = ["S", "W", "G"]
let n = prompt("How much times you want to play")
let score = 0
for (let i = 0; i < n; i++) {
    let bot = a[Math.floor(Math.random() * a.length)]
    let user = prompt("Enter a value from S,W,G")
    if (user == "S" && bot == "W") {
        score++
    } else if (user == "G" && bot == "W") {
        score--
    }
    else if (user == "S" && bot == "G") {
        score--
    }
    else if (user == "G" && bot == "S") {
        score++
    }
    else if (user == "W" && bot == "G") {
        score++
    }
    else if (user == "W" && bot == "S") {
        score++
    }
    alert("Your input is " + user + " and the bot input is " + bot)
}
alert("Your Score is " + score)