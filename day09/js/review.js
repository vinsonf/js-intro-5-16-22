//  control flow
//  if, else, else if, switch, ternary


// if statement
// if (condition) { run this code }

if (true) {
    console.log('condition is truthy');
} 



// falsey values
// false, 0, '', null, undefined, NaN


// if else statement
if (false){
    console.log('condition is falsy');
} else {
    console.log('condition is false so this code will run');
}

// else if statement


if (1 === 2) {
    console.log('first condition is truthy');
} else if (2 === 3) {
    console.log('second condition is truthy and first condition is falsy');
} else if (3 === 4) {
    console.log('third condition is truthy and second condition is falsy and first condition is falsy');
} else {
    console.log('all conditions are falsy');
}

const grade = 'F';

switch (grade) {
    case 'A':
        console.log('you got an A:', grade);
        break;
    case 'B':
        console.log('you got a B:', grade);
        break;
    case 'C':
        console.log('you got a C:', grade);
        break;
    case 'D':
        console.log('you got a D:', grade);
        break;
    default:
        console.log('you got an F:', grade);

}

1 == 1 ? console.log('true'): console.log('false');

const age = 200;
if (typeof age !== 'number') {
    console.log('age is not a number');
}

const permitted = age > 17 ? "you are allowed" : "you are not allowed";

console.log(permitted);

// functions and methods
// functions
// function name(parameters) { return something }


function fizzBuzzValue(number = 14, fizz = 4, buzz = 9) {
    const age = 20;
    console.log(this)
    test();
    if (number % fizz === 0 && number % buzz === 0){
        return 'fizzbuzz';
    } else if (number % fizz === 0) {
        return 'fizz';
    } else if (number % buzz === 0) {
        return 'buzz';
    } else {
        return number;
    }
    function test(){
        console.log(age);
    }
 

}

console.log(fizzBuzzValue(5, 2, 3));

// methods are functions that are attached to objects

const player = {
    x: 0,
    y: 0,
    color: 'red',
    element: document.createElement('div'),
    move(x, y) {
        this.x += x;
        this.y += y;
    },
    render(color) {

        if (color){
            this.color = color;
        }
        document.body.append(this.element);
        this.element.style.position = 'absolute';
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
        this.element.style.backgroundColor = this.color;
        this.element.style.width = '50px';
        this.element.style.height = '50px';
    
    }
}

player.render('green');
player.move(100, 100);
player.render();
player.move(200, 200);
player.render('yellow');

function getAge(cb) {
    setTimeout(() => {
        cb(age);
    }, 1000);
}

// getAge(function(value) {
//     console.log(value);
// });

// getAge(value => console.log(value - 5));

// const agePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(age);
//     }, 5000);
//     reject('not right now')
// });

// agePromise
// .then( value => { return value + 5 })
// .then( value => { return value * 2 })
// .then( value => { return value - 5 })
// .then(value => console.log(value))
// .catch( err => console.warn(err));



// fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
// .then(data => {
//     console.log(data);
// }).catch( err => console.warn(err));

// arrays 
// arrays are objects that hold multiple values

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(myArray[4]);
console.log(myArray.length);
console.log(myArray[9]);


// for of loop is used to iterate over arrays

for (number of myArray) {
    console.log(number);
}

myArray.forEach(number => console.log(number));

// for loop
for (let i = 10; i  > -1; i--) {
    console.log(myArray[i]);
}

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

console.log(letters.concat(myArray));
console.log(letters.slice(0, 3).join(''));
let x = 200;
while(x > 100){
    console.log(x);
    x--;
}


class Player {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.element = document.createElement('div');
    }
    render() {
        document.body.append(this.element);
        this.element.style.position = 'absolute';
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
        this.element.style.backgroundColor = this.color;
        this.element.style.width = '100px';
        this.element.style.height = '100px';
    }
    move(x, y){
        this.x += x;
        this.y += y;
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
        this.render();
    }
}

const player2 = new Player(100, 100, 'blue');
player2.render();
player2.move(100, 100);
const player3 = new Player(200, 400, 'green');
player3.render();


class Enemy extends Player {
    constructor(x, y, color, speed) {
        super(x, y, color);
    }

    render() {
        document.body.append(this.element);
        this.element.style.position = 'absolute';
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
        this.element.style.backgroundColor = this.color;
        this.element.style.width = '20px';
        this.element.style.height = '20px';
    }
  
}

const enemy = new Enemy(0, 0, 'pink', 10);
enemy.render();
enemy.move(200, 200);