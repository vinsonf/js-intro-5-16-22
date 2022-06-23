
const players = ['x', 'o'];
let turn = 0;

const scores = {
    x: 0,
    o: 0
}


class TicTacToeButton{

    constructor(){
     this.button = document.createElement('button');
        this.button.innerHTML = '=';
        document.querySelector('#tic-tac-toe').append(this.button);
        this.button.addEventListener('click', () => {
            this.button.innerHTML = players[turn];
            checkForWinner();
            turn++;
            if (turn >= players.length) {
                turn = 0;
            }
        
        })
    }
}

for (let i = 0; i < 9; i++) {
    new TicTacToeButton();
}

function checkForWinner(){
    const buttons = document.querySelectorAll('button');
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];

        function value(letter){
            return buttons[letter].innerHTML;
        }
        if (value(a) === value(b) &&value(a) === value(c) && value(a) !== '=') {
            scores[value(a)]++;
            alert(`${buttons[a].innerHTML} wins! score: ${scores[value(a)]}`);
            buttons.forEach(button => {
                button.innerHTML = '=';
            });
            console.log(scores);
        }
    }
}