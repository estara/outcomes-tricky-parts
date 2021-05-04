function guessingGame() {
    const randNum = Math.random()*100;
    let count = 1;
    let won = false;
    return function game(num) {
        let result
        if (won) {return "The game is over, you already won!"}
        if (num < randNum) {result = `${num} is too low!`;}
        else if (num > randNum) {result = `${num} is too high!`;}
        else {result = `You win! You found ${num} in ${count} guesses.`; won = true;}
        count++
        return result
    };
}

module.exports = { guessingGame };
