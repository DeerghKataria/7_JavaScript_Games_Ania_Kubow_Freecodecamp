const computerChoice = document.getElementById('computer-choice')
const userChoice = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

// For picking all the buttons
const possibleChoices = document.querySelectorAll('button')

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e)))
// Continue video from 9:51
// https://www.youtube.com/watch?v=ec8vSKJuZTk&list=WL&index=769