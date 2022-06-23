import { updateHighScore, updateScoreKeeper } from "./html.helpers.js";
import { updateScore, score, highscore } from "./score.js";

export class Player{
    paused = false;
    constructor(color, x, y) {
        this.color = color;
        this.x = x;
        this.y = y;
        this.element = document.createElement('div');
        this.element.classList.add('player');
        this.element.style.backgroundColor = this.color;
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
        this.element.style.position = 'absolute';
        this.element.style.width = '50px';
        this.element.style.height = '50px';
        document.body.append(this.element);
        this.runGravity();
        this.element.addEventListener('click', () => {
            updateScore();
            updateScoreKeeper(score);
            updateHighScore(highscore);
        });
    }

    runGravity() {
       const intervalId = setInterval(() => {
              if(!this.paused) {
                this.y += 2.5;
                this.element.style.top = this.y + 'px';
              } else {
                console.log(this.paused);
              }

       }, 1000/60);

       const timeoutId = setTimeout(() => {
            clearInterval(intervalId);
            this.paused = true;
       }, 2000)

       clearTimeout(timeoutId);

    }


}