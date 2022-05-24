// Assign STRING VALUES ONLY to all of the following variables.
// Assign an adjective
let adj1 = 'black';
// Assign an adjective
let adj2 = 'gentle';
// Assign an adjective
let adj3 = 'spacious';
// Assign an adjective
let adj4 = 'cold';
// Assign an adjective
let adj5 = 'large';
// Assign an adjective
let adj6 = 'small';
// Assign an adverb
let adverb = 'roughly';
// Assign a color
let color = 'blue';
// Assign a noun
let noun1 = 'fish';
// Assign a noun
let noun2 = 'cat';
// Assign a noun
let noun3 = 'adult';
// Assign a noun
let noun4 = 'frisbee';
// Assign a noun
let noun5 = 'puppy';
// Assign a noun
let noun6 = 'car';
// Assign a number
let num = 6;
// Assign a plural noun
let pnoun1 = 'babies';

// Open your console to see the results!
// SPOILER ALERT: KEEP SCROLLING TO VIEW THE REST OF THE CODE





























const noun = 'person';

const username = 'joe';
const catchphrase = `I am a ${noun}`;

//Using template literals to plug in the values
let story = `It has often been said that a dog is a man's best ${catchphrase}. Dogs are very ${adj1} and can be taught many ${adj2}
tricks. A dog can be trained to carry a ${noun2} in his mouth.
If you throw his ${noun3}, he will run and fetch it. Dogs
will also bark ${adverb} if someone tries to break into your
${noun4} during the night. One of the most popular canine pets
today is the ${noun5} Spaniel. Spaniels have curly ${color}
coats and ${adj3} ears. They also have very ${adj4}
dispositions and live to be ${num} years old. Other popular dogs
are ${adj5} Terriers, German ${pnoun1}, and the
${adj6} Poodle. Every ${noun6} should have a loyal dog.`;

//Console log the completed story



document.querySelector('body').innerHTML = `<h2>${story}</h2>`;