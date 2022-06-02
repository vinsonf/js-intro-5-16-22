const myBoolean = true || false;
const myString = 'single quotes' || "double quotes" || `backticks${myBoolean}`;
const myNumber = 1 || 2.7 || -3.01;


// organize your code
//               0, 1, 2, 3, 4
const myArray = [1, 2, 3, 4, 5];
const myObject = {
    'name': 'John',
    'age': 30,
    'isPresent': true
};

const key = 'isPresent';

console.log(myArray[1]);
console.log(myObject[key]); // bracket notation // works for both arrays and objects // have to use quotes

console.log(myObject.name); // dot notation // only works with objects

console.log(1 + 2 === '3'); // true

// operators

// + - * / % // arithmetic
// arithmetic assignment
// += -= *= /= %= 
// string operators
// + == != < > 
// comparison operators
// == === != !== < > <= >=
// logical operators
// && || ! 


// string methods
// .toUpperCase()
// .toLowerCase()
// .split() // splits a string into an array of substrings
// .join()
// .includes()
// .indexOf()
// .lastIndexOf()
// .charAt()
// .charCodeAt()
// .substring()
// .substr()
// .replace()
// .trim()
// .startsWith()
// .endsWith()
// .repeat()
// .concat()
// .slice()

// pop up methods

// alert(); // tells the user something
// confirm(); // asks the user a question (yes or now | true or false)
// prompt(); // asks the user for input (text) and returns the input as a string



// Math methods
// .abs()
// .acos()
// .asin()
// .atan()
// .atan2()
// .ceil()
// .cos()
// .exp()
// .floor()
// .log()
// .max()
// .min()
// .pow()
// .random()
// .round()


// Date methods
// .getDate()
// .getDay()
// .getFullYear()
// .getHours()
// .getMilliseconds()
// .getMinutes()
// .getMonth()
// .getSeconds()
// .getTime()
// .getTimezoneOffset()
// .getUTCDate()
// .getUTCDay()

// setters
// .setDate()
// .setFullYear()
// .setHours()
// .setMilliseconds()
// .setMinutes()
// .setMonth()
// .setSeconds()
// .setTime()
// .setUTCDate()
// .setUTCFullYear()

// days of the week in numbers 0-6
// sunday === noneday
// monday === oneday
// tuesday === twoday
// wednesday === threeday
// thursday === fourday
// friday === fiveday
// saturday === sixtureday

const days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
];
const dayIndex = new Date().getDay();
const day = days[dayIndex];
console.log(day);

const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
];

const monthIndex = new Date().getMonth();
const month = months[monthIndex];
console.log(month);

const today = new Date();

// what will it be in a hundred days?
today.setDate( today.getDate() + -130 );
console.log(today);


// control flow

if (today.getMonth() == 11) {
    console.log('it is summer');
} else if(today.getMonth() == 0) {
    console.log('it is january');
} else {
    console.log(today.getMonth())
}

debugger;
switch(today.getMonth() + 5) {
    case 0:
        console.log('it is january');
        break;
    case 1:
        console.log('it is february');
        break;
    case 2:
        console.log('it is march');
        break;
    case 3:
        console.log('it is april');
        break;
        default:
            console.log('it is not the beginning of the year');
}

