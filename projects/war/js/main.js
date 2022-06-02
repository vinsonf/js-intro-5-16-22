// playing cards have:
// text, suit, and color

const cardText = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const cardSuit = ['&hearts;', '&spades;', '&clubs;', '&diamonds;'];
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

        if (suit === '&hearts;' || suit === '&hearts;') {
            card.color = 'Red';
        } else {
            card.color = 'Black';
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
    cardHolders[0].innerHTML = `
    <div class="text">${cards[randomCardIndex].text}</div>
    <div class="suit">${cards[randomCardIndex].suit}</div>
    
    `;
    p1Card = cards[randomCardIndex];
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