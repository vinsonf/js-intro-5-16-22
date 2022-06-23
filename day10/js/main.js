import {updateH1, updateH1Color, addClassToH1} from './html.helpers.js';
import {Player} from './player.js';




updateH1('Hello World');
updateH1Color('red');

setTimeout(() => {
    addClassToH1('slide');
}, 10000);






const player1 = new Player('red', 200, 100);
const player2 = new Player('blue', 300, 100);