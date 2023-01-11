function randomNumber(maxNumber = 100) {
    return Math.floor(Math.random() * maxNumber) + 1;
}

generateLetters();
function generateLetters() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    for (let i = 0; i < model.letters.length; i++) {
        let randomWidth = randomNumber(width - 75);
        let randomHeight = randomNumber(height - 75);
        for(let y = 0; y < model.placedLetters.length; y++) {
            if((model.placedLetters[y].width == randomWidth)) {
                console.log("OMG JA");
                console.log(model.placedLetters[y].width);
                console.log(randomWidth);
                //Når widthen er helt lik
            }
        }
        spawnLetters(model.letters[i], randomWidth, randomHeight);
    }
}