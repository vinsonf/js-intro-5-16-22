const title = 'My page!';
const value = '1,0,2';
let answer = value.split(',');

console.log(`101010101`.replaceAll('0', 'x'));


// const myAlert = alert('Welcome to my page!');

// const myConfirm = confirm('Are you sure?');

// const myPrompt = prompt('What is your name?');

// console.log(myAlert, myConfirm, myPrompt);

// answer = myPrompt;

document.querySelector('body').innerHTML = `<h1>Hello, ${answer}</h1>`; // this is putting the answer into the html



console.log(answer); // this is logging the answer to the console


console.log(Math);

console.log(Math.abs(-5));

console.log(Math.acos(0.5));

console.dir(new Date())



const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


setInterval(() => {
    answer = new Date();
    document.querySelector('body').innerHTML = `<h1>This is the date information<h1>
    <p>Month: ${months[answer.getMonth()]}</p>
    <p>Day: ${answer.getDate()}</p>
    <p>Year: ${answer.getFullYear()}</p>
    <p>Hours: ${answer.getHours() % 12}</p>
    <p>Minutes: ${answer.getMinutes()}</p>
    <p>Seconds: ${answer.getSeconds()}</p>
    <p>${ String(answer.getHours() % 12).toString().padStart(2, '0') } : ${answer.getMinutes().toString().padStart(2, '0')} : ${answer.getSeconds().toString().padStart(2, '0')}</p>
    `;
    console.log('running..')
}, 1000);



