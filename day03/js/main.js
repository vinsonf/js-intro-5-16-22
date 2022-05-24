const title = 'My page!';
const value = '1,0,2';
let answer = value.split(',');






console.log(`101010101`.replaceAll('0', 'x'));


const myAlert = alert('Welcome to my page!');

const myConfirm = confirm('Are you sure?');

const myPrompt = prompt('What is your name?');

console.log(myAlert, myConfirm, myPrompt);

answer = myPrompt;

document.querySelector('body').innerHTML = `<h1>Hello, ${answer}</h1>`; // this is putting the answer into the html



console.log(answer); // this is logging the answer to the console
