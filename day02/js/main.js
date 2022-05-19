document.querySelector('button').innerHTML = 'Click me!';

// prepare a kid for school or life

// 1 how to say no
false; // no
// 2 how to say yes
true; // yes

// numbers
0;
1;
2;
3;

// alphabet
firstLettersOfTheAlphabet = 'abc';
instructorsFirstName = 'Vinson';

// Data Types
// 1. String
'abc';
"Vinson";
`unique power`;
// 2. Number
0.3793;
// 3. Boolean
true;
false;
sushi = 'sushi';

undefined;
// 4. Array/ list
let listOfFavoriteFoods = ['sushi', 'pizza', 'ice cream'];
listOfFavoriteFoods = ['sushi', 'pizza', 'ice cream', 'sushi'];
// 5. Object/ dictionary
person = {
    name: 'Vinson',
    age: '23',
}


// console.log(1 + 1);
// console.log( 5 - 2);
// console.log( 3 * 4);
// console.log( 10 / 2);
// console.log( 18 % 12);


 let score = 0;

 console.log(score + 5);

 console.log(score);

 score += 10;

console.log(score);

score += 20;

console.log(score);

score -= 5;

console.log(score);

score /= 5;

console.log(score);

score *= 2;

console.log(score);


// questions 
// ---conditionals

document.querySelectorAll('li').forEach( li => {
    li.addEventListener('click', function() {
        li.innerText = 'clicked';
        score += 10;
        document.querySelector('p').innerText = 'score: ' + score;
    });
});


console.log('hello ' + 'world');

console.log(5 + ' days')


