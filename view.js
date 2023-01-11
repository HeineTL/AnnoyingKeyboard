function spawnLetters(letter = "A", randomWidth, randomHeight) {

    document.getElementById("app").innerHTML += `<div class="letter ${letter}" style="left: ${randomWidth}px; top: ${randomHeight}px">${letter}</div>`;
    model.placedLetters.push({letter: letter, width: randomWidth, height: randomHeight});
}