const one = 1;
let score = 0;


const typesOfData = [
    0,
    false,
    '',
];

const TypesOfData = {
    numbers: 0,
    strings: '',
    booleans: false,
}

undefined
null
NaN;

let selectedPlayer;

// operators
// numbers: + - * / %
// strings: + = 
// numbers += -= *= /= %=

// popups
// alert('');
// const hasConfirmed = confirm('are you sure?');
// const player1Name = prompt('name','player 1' );

Math.random() * 10 // 0 - 10 (not including 10)
const date = new Date('12/30/00 09:30 PM');
console.log(date);

console.log(date.getHours())
if (date.getHours() > 12 && date.getHours() < 18) {
    console.log('after noon');

} else if(date.getHours() >= 18) {
    console.log('good evening')
}
 else {
    console.log('morning')
}


const day = date.getDay();
switch(day){
    case 0: 
        console.log('Sunday');
        break
    case 6: 
        console.log('saturday');
        break;
    default:
        console.log('some weekday')
}

// functions

function add(value, value2) {
 
    this.score += value + value2;
    console.log(this)
    return value + value2
}
console.log('runnings')

console.log(add(5, 7))

const user1 = {
    score: 0,
    addNumbers: add,
};

console.log(user1.addNumbers(2,2))
user1.addNumbers(5, 5)





let item = 'chair'
function myScope () {
    // let item = 'table';
    console.log(item)
}
console.log(item);

myScope();

fetch('https://geekwiseacademy.github.io/virtual-javascript/index.html').then(res => {
    return res.text()
}).then(data => {
    const template = document.createElement('div');
    template.innerHTML = data;
    template.querySelectorAll('.row').forEach(row => {
        console.log(row.innerHTML)
    })

});

