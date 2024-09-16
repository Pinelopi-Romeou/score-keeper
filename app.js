const resetBtn = document.querySelector('#reset')
const playTo = document.querySelector('#playTo')

const p1 = {
    score: 0,
    button: document.querySelector('#p1Btn'), 
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Btn'), 
    display: document.querySelector('#p2Display')
}

let winningScore = 3;
let isGameOver = false;

playTo.addEventListener('change', function () {
    winningScore = parseInt(this.value)   // select value is a string by default
    reset()
})

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('winner')
            opponent.display.classList.add('loser')
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }
}

p1.button.addEventListener('click', () => {
    updateScores(p1,p2)
})

p2.button.addEventListener('click', () => {
    updateScores(p2, p1)
})

resetBtn.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.display.classList.remove('winner', 'loser')
        p.button.disabled = false;
    }
}