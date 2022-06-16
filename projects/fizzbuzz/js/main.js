for(let i = 1; i <= 1; i++) {
    const li = document.createElement('li');
    if (i % 3 === 0 && i % 5 == 0) {
        li.innerText = 'fizzbuzz';
    } else if (i % 5 === 0) {
        li.innerText = 'buzz';
    }else if (i % 3 === 0) {
        li.innerText = 'fizz';
    } else {
        li.innerText = i;
    }
 
    document.body.appendChild(li);
}

const button = document.createElement('button');
button.innerText = 'Click me';
button.addEventListener('click', function() {
    fetch('https://pokeapi.co/api/v2/type/1?limit=10&&offset=20')
    .then(function(res) {return res.text()}).then( data => {
        document.body.innerHTML = data;
    });
})
document.body.appendChild(button);

const input = null;
const expected = [10, -65];

let positiveCount = 0;
let negativeSum = 0;

if (!input) {
    console.log([]);
}
input?.forEach(num => {
    if (num > 0) {
        positiveCount++;
    } else {
        negativeSum += num;
    }
})

console.log('answer', [positiveCount, negativeSum]);


/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.*/