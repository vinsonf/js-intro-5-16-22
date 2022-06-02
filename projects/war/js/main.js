// playing cards have:
// text, suit, and color

const cardText = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const cardSuit = ['&hearts;', '&spades;', '&clubs;', '&diams;'];
const cardColor = ['Red', 'Black'];

let p1Card = null;
let p2Card = null;

const cards = [];

cardSuit.forEach(function(suit) {
    console.log(suit);
    cardText.forEach(function(text) {
        console.log(text + ' of ' + suit);
        const card = {
            text: text,
            suit: suit,
        };

        if (suit === '&hearts;' || suit === '&diams;') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }

        cards.push(card)
    });
});

console.log(cards);

const buttons = document.querySelectorAll('button');
const cardHolders = document.querySelectorAll('.card-holder');

console.log(buttons);
console.log(cardHolders);

buttons[0].addEventListener('click', function() {
    console.log('button 0 clicked');
    const randomCardIndex = randomCardNumber();
    p1Card = cards[randomCardIndex];
    cardHolders[0].innerHTML = `
    <div class="text ${p1Card.color}">${p1Card.text}</div>
    <div class="suit ${p1Card.color}">${p1Card.suit}</div>
    
    `;
 
});
buttons[1].addEventListener('click', function() {
    console.log('button 1 clicked');
    const randomCardIndex = randomCardNumber();
    cardHolders[1].innerHTML = `
    ${cards[randomCardIndex].text}
    ${cards[randomCardIndex].suit}
    `;
    p2Card = cards[randomCardIndex];
    if (p1Card.text === p2Card.text) {
        return alert('You have a tie!');
    }
    if (p1Card.text > p2Card.text) {
        console.log('p1 wins');
    } else {
        console.log('p2 wins');
    }
});

function randomCardNumber() {
    return Math.floor(Math.random() * cards.length);
}