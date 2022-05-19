const inputs = document.querySelectorAll('input'); // all of the inputs from html
const p = document.querySelector('p'); // the first paragraph from html

const subTotal = inputs[0]; // the first input from html
const tipPercentage = inputs[1]; // the second input from html
const total = inputs[2]; // the third input from html
const partySize = inputs[3]; // the fourth input from html

subTotal.addEventListener('input', function() { // listen for the user to input something
    calculate();
});

tipPercentage.addEventListener('input', function() { // listen for the user to input something
    calculate();
});

partySize.addEventListener('input', function() {
    p.innerHTML = total.value / (Number(partySize.value));

});

function calculate() {
    let currentTotal = Number(subTotal.value); // convert the input value to a number
    let tip = currentTotal * (Number(tipPercentage.value) / 100); // calculate the tip
    total.value = currentTotal + tip; // add the tip to the total
}



