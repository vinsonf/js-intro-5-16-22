// control flow

// what is control flow?

// control flow is the order in which the code is executed


// const canI = confirm("Can I?");
// const isSure = confirm("Are you sure?");

// // if (canI === true ) {
// //     console.log("yes");
// // }

// // if (canI === true) {
// //     console.log("I can");
// // } else {
// //     console.log("I can't");
// // }

// if (canI === true) {
//     console.log("I definitly can");
// } else if (isSure === true) {
//     console.log("maybe");
// } else if (isSure === canI) {
//     console.log("I don't know");
// }else {
//     console.log("I can't");
// }

// const favoriteLetter = prompt("What is your favorite letter?");
// switch(favoriteLetter) {
//     case 'a':
//         console.log('you typed a');
//         break;
//     case 'b':
//         console.log('you typed b');
//         break;
//     case 'c':
//         console.log('you typed c');
//         break;
//     default:
//         console.log('you typed something else');
// }

// // fetch('https://pokeapi.co/api/v2/pokemon/pikachu').then( function (data){
// //     return data.json();
// // }).then(pokemon => console.log(pokemon))


const date = new Date();
// date.setHours(10);
let greeting = '';

if (date.getHours() < 12) {
    greeting = 'Good Morning';
} else if (date.getHours() < 18) {
    greeting = 'Good Afternoon';
} else {
    greeting = 'Good Evening';
}

document.querySelector('h1').innerHTML = greeting;

console.log(greeting)
const button = document.querySelector('button');


switch(greeting) {
    case 'Good Morning':
        button.innerHTML = 'Order Breakfast';
        console.log('morning');
        break;
    case 'Good Afternoon':
        button.innerHTML = 'Order Lunch';
        console.log('afternoon');
        break;
    case 'Good Evening':
        button.innerHTML = 'Order Dinner';
        console.log('evening');
        break;
    default:
        console.log('default');
        button.innerHTML = 'Order Breakfast';
}

// let num1 = prompt('Enter a number');
// let num2 = prompt('Enter another number');

// if (isNaN(Number(num1)) || isNaN(Number(num2))) {
//     alert('hey enter a integer');
//     num1 = prompt('Enter a number');
//     num2 = prompt('Enter another number');
// }

// alert(parseInt(num1) + parseInt(num2));


// falsey values

// false
// 0
// ''

// null
// undefined
// NaN


// truthy values
// Everything else

// let num = getValidNumber();
// function getValidNumber() {
//     let num = prompt('Enter a number');
//     if (isNaN(Number(num))) {
//         alert('hey enter an integer');
//         return getValidNumber();
//     }
//     return num;
// }
// console.log('thank you for entering a valid number');

// function getNumber() {
//     switch (num) {
//         case '1':
//             console.log('one');
//             return 1;
//         case '2':
//             console.log('two');
//             break;
//         case '3':
//             console.log('three');
//             break;
//     }

//     console.log('the end...');
// }


let myName = prompt('What is your name?', '10');

alert(myName.split('').reverse().join(''));