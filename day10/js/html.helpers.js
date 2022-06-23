export function updateH1(text) {
    const h1 = document.querySelector('h1');
    h1.innerHTML = text;
  }
  
export function updateH1Color(color) {
    const h1 = document.querySelector('h1');
    h1.style.color = color;
  }

  export function addClassToH1(className) {
    const h1 = document.querySelector('h1');
    h1.classList.add(className);
  }

  export function updateScoreKeeper(score) {
    const scoreKeeper = document.querySelector('#score-keeper');
    scoreKeeper.innerHTML = `score: ${score}`;
  }
  
  export function updateHighScore(score){
    const highScore = document.querySelector('#high-score');
    highScore.innerHTML = `high score: ${score}`;
  }