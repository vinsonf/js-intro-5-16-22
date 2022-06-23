export class Player{
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
    }


}