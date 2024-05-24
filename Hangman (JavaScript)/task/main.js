const input = require('sync-input');

const words = ["python", "java", "swift", "javascript"];
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let won = 0;
let lost = 0;
let exit = false;

function randomWord(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

console.log(`H A N G M A N  // 8 attempts\n`);

while (!exit){
    let menu = input('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:');
    if (menu === 'exit'){
        exit = true;
    }
    if (menu === 'play'){
        play();
    }
    if (menu === 'results'){
        results();
    }
}

function play (){
    let attempts = 8;
    let chosenWord = randomWord(words);
    let wordLength = chosenWord.length;
    let dashes = "-".repeat(wordLength).split('');
    let usedLetters = [];

    while (attempts > 0) {
        console.log(dashes.join(''));
        let guess = input('Input a letter: ');

        if (guess.length !== 1){
            console.log('Please, input a single letter.');
            console.log();
            continue;
        }

        if (!alphabet.includes(guess)){
            console.log('Please, enter a lowercase letter from the English alphabet.');
            console.log();
            continue;
        }

        if (usedLetters.includes(guess)) {
            console.log(`You've already guessed this letter.`);
            console.log();
            continue;
        }

        usedLetters.push(guess);

        if (chosenWord.includes(guess)) {
            for (let i = 0; i < wordLength; i++) {
                if (chosenWord[i] === guess) {
                    dashes[i] = guess;
                }
            }
        } else {
            attempts -= 1;
            console.log(`That letter doesn't appear in the word.  // ${attempts} attempt${attempts === 1 ? '' : 's'}`);
        }

        console.log();

        if (!dashes.includes('-')) {
            won += 1;
            console.log(`You guessed the word ${chosenWord}!`);
            console.log('You survived!');
            return;  // Spiel beenden und zum Hauptmenü zurückkehren
        }
    }
    if(dashes.includes('-') && attempts === 0){
        lost += 1;
        console.log("You lost!");
    }
}

function results() {
    console.log(`You won: ${won} times.\nYou lost: ${lost} times.`);
}
