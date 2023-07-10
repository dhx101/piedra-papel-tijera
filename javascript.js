/*
0 = Piedra
1 = Papel
2 = Tijera
*/

function getComputerChoice() {
    let numero = Math.floor(Math.random()*3)
    return numero
}

let playerChoice = prompt("Choose Rock, Paper, Scissors")

function transformPlayerChoice(playerChoice) {
    let promtPlayerChoice = playerChoice.toUpperCase()
    if (promtPlayerChoice == "ROCK") {
        let numPlayerChoice = 0
        return numPlayerChoice
    } else if (promtPlayerChoice == "PAPER") {
        let numPlayerChoice = 1
        return numPlayerChoice
    } else if ( promtPlayerChoice == "SCISSOR") {
        let numPlayerChoice = 2
        return numPlayerChoice
    } else {
        let numPlayerChoice = ("You didnt chose a avaliable choice")
        return numPlayerChoice
    }
    
}








document.write(playerChoice, transformPlayerChoice(playerChoice))