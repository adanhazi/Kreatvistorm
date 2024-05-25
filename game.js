function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
function getPlayerGuess() {
    let input;
    do {
        input = prompt("Guess a number between 1 and 100:");
    } while (isNaN(input) || input < 1 || input > 100);
    return parseInt(input);
}
function checkGuess(guess, correctNumber) {
    if (guess < correctNumber) {
        return "Too low!";
    } else if (guess > correctNumber) {
        return "Too high!";
    } else {
        return "Correct!";
    }
}
function game() {
    const correctNumber = generateRandomNumber();
    let attempts = 0;
    let guess;
    let result;

    for (let i = 0; i < 10; i++) {
        guess = getPlayerGuess();
        result = checkGuess(guess, correctNumber);
        console.log(result);
        attempts++;

        if (result === "Correct!") {
            console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
            return;
        }
    }

    console.log(`Sorry, you've used all your attempts. The correct number was ${correctNumber}.`);
}
game();