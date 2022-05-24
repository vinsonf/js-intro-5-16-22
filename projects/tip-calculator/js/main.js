const inputs = document.querySelectorAll('input'); // all of the inputs from html
 // the first paragraph from html
const subTotal = inputs[0]; // the first input from html
const tipPercentage = inputs[1]; // the second input from html
const total = inputs[2]; // the third input from html
const partySize = inputs[3]; // the fourth input from html




// story
subTotal.addEventListener('input', function() { // listen for the user to input something
    calculateTotal();
});

tipPercentage.addEventListener('input', function() { // listen for the user to input something
    calculateTotal();
});

partySize.addEventListener('input', function() {
   showResult();
});






function calculateTotal() {
    let currentTotal = Number(subTotal.value); // convert the input value to a number
    let tip = currentTotal * (Number(tipPercentage.value) / 100); // calculate the tip
    total.value = currentTotal + tip; // add the tip to the total
}

function showResult() {
    const p = document.createElement('p');
    document.querySelector('.tip-container').prepend(p);
    p.innerHTML = 'each person pays:  ' +  total.value / (Number(partySize.value));
}



