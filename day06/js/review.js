const button = document.querySelector('button');
button.style.padding = '40px';
button.style.fontSize = '40px';
var i = 1;
button.addEventListener('click', function(){
    alert(string);
});


// data types in javascript

// primary data types

const name = 'John';

const string = 'hello' || "world" || `my name is ${name}`; // titles, names, etc.

const number = 0 || 1.2 || -99.1;

// arrays have an assumed key value pair (key === index)
const array = [1, true, 'hello'];

// objects have key value pairs
// objects have no assumed key
const object = {
    key: 'value',
};

console.log(array[3], object['key'], object.key, object.money);

//
undefined;
NaN;
null;

// falsey values
undefined;
NaN;
null;

false;
0;
'';
"";
``;

// truthy values
// everything else is truthy

// operators
// arithmetic
// + - * / %
// assignment
// += -= *= /= %=
// logical
// && || !
// comparison
// == === != !== > < >= <=

if (!name || name === 'you name here') {
    console.log('you forgot your name');
}


// if (name && age > 18) {
//     console.log('you are old enough to vote');
// }

if (0 === '0') {
    console.log('0 is equal to "0"');
}

// string methods

'abc'.length; // getter
'abc'.toUpperCase();
'abc'.toLowerCase();
'abc'.charAt(0);
'abc'.includes('b');
'abc'.indexOf('b');
'abc'.replace('b', 'x');
'abc'.split('b'); // returns an array
'     a b c    '.trim();
'abc'.padStart(10, '-');
'abc'.padEnd(10, 'x');

console.log('hello world world'.replaceAll('world', 'universe'));

// const returnedValueOfAlert = alert('hello');
// const returnedValueOfConfirm = confirm('are you sure?');
// const returnedValueOfPrompt = prompt('what is your name?');

// if (!returnedValueOfPrompt) {
//     console.log('you did not enter a name');
// }

// console.log( returnedValueOfAlert, returnedValueOfConfirm, returnedValueOfPrompt);




// Math properties

console.log(Math.random()); // random number between 0 and 1 (not including 1) (always a decimal)

console.log( Math.floor(1.9999999));
console.log( Math.ceil(1.00000001));
console.log( Math.round(1.4999)); // 

const date = new Date('1/1/1990 12:00:00');
console.log(date);

date.setDate(date.getDate() + 1000 + 3);

console.log(date);


if ( date.getDay() === 0 ) {
    console.log('today is sunday');
} else {
    console.log('today is not sunday');
}

if (date.getDay() === 3) {
    console.log('today is wednesday');
} else {
    console.log('today is not wednesday');
}


if (date.getDay() === 0) {
    console.log('today is a weekend');
} else if (date.getDay() === 6) {
    console.log('today is a weekend');
} else {
    console.log('today is not a weekend');
}

switch(date.getDay()) {
    case 0:
        console.log('today is Sunday');
        console.log('today is a weekend');
        break;
    case 6:
        console.log('today is Saturday');
        console.log('today is a weekend');
        break;
    case 1:
        console.log('today is Monday');
        console.log('today is not a weekend');
        break;
    case 2:
        console.log('today is Tuesday');
        console.log('today is not a weekend');
        break;
    case 3:
        console.log('today is Wednesday');
        console.log('today is not a weekend');
        break;
    case 4:
        console.log('today is Thursday');
        console.log('today is not a weekend');
        break;
    case 5:
        console.log('today is Friday');
        console.log('today is not a weekend');
        break;

    default:
        console.log('today is not a weekend');
}

// functions in javascript

function hello(param1, param2, param3) {
    console.log('hello');
    console.log((param1 + param2) / param3);
}

(function() {
    console.log('hello');
})();

() => {
    console.log('hello');
}

['a', 'b', 'c'].forEach((item) => {
    console.log(item);
})
hello( 6 , 12, 2);
hello(9, 5, 4);


// function expression
const myFunction = function() {
    console.log('hello');
};

const user = {
    myFunction: function() {
        console.log('hello');
    }
}