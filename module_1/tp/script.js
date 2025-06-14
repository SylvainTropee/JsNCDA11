import {dico} from "./dico.js";

let randomWord = getRandomWord()
let attempt = 5

function displayRandomWord() {
    document.getElementById('wordToFind').innerText = randomWord.replace(/\w/gi, '_')
}

function getRandomWord() {
    const index = Math.round(Math.random() * dico.length)
    return dico[index]
}


function generateLetters() {

    for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {

        const button = document.createElement('button')
        const letter = String.fromCharCode(i)
        button.innerText = letter
        document.getElementById('letters').append(button)

        button.addEventListener('click', checkLetter)
    }
}

function checkLetter(event) {
    console.log(event.target.innerText)
    const letter = event.target.innerText
    let isLetterOk = false
    let randomDomWord = document.getElementById('wordToFind').innerText.split("")
    for (let i = 0; i < randomDomWord.length; i++) {
        if (randomWord[i] === letter) {
            randomDomWord[i] = letter
            isLetterOk = true
        }
    }
    document.getElementById('wordToFind').innerText = randomDomWord.join('')

    if (!isLetterOk) {
        document.getElementById('attempt').innerText = --attempt
    }

    checkWin()
}

function checkWin() {

    if (attempt > 0 && randomWord === document.getElementById('wordToFind').innerText) {
        alert("T'es un champion, champion")
    }

    if(attempt <= 0){
        alert("Rejoue ! :)")
    }

}

window.onload = function () {
    generateLetters()
    displayRandomWord()
    document.getElementById('reset').addEventListener('click', function (){
        window.location.reload()
    })
}

