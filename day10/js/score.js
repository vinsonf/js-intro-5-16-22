import { updateHighScore, updateScoreKeeper } from "./html.helpers.js";

export let highscore = localStorage.getItem('highscore') || 0;

updateHighScore(highscore);

export let score = 0;


export function updateScore() {
    score++;
    if (score > highscore) {
        highscore = score;
        localStorage.setItem('highscore', highscore);
    }

  
 
}