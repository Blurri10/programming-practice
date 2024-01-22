const incrementP1 = document.querySelector('#p1_increment');
const incrementP2 = document.querySelector('#p2_increment');
const setGoal = document.querySelector('#set_score');
const reset = document.querySelector('#reset');

const p1 = document.querySelector('#p1');
let p1Score = 0;
const p2 = document.querySelector('#p2');
let p2Score = 0;
let goal = 3;
let isGameOver = false;

const resetGame = () => {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1.innerText = p1Score;
    p2.innerText = p2Score;
    p1.classList.remove('winner', 'loser');
    p2.classList.remove('winner', 'loser');
}

incrementP1.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === goal) {
            isGameOver = true;
            p1.classList.add('winner');
            p2.classList.add('loser');
        }
        p1.innerText = p1Score;
    }
})

incrementP2.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === goal) {
            isGameOver = true;
            p2.classList.add('winner');
            p1.classList.add('loser');
        }
        p2.innerText = p2Score;
    }
})

setGoal.addEventListener('change', function () {
    goal = parseInt(setGoal.value);
    resetGame();
})

reset.addEventListener('click', resetGame);