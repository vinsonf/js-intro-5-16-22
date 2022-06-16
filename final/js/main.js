const img = document.querySelector("img");
img.src = '../../magic/magic8ball_start.png';
img.width = 400;
const randomNumber = Math.floor(Math.random() * 20);
img.src = '../../magic/magic8ball_' + (randomNumber + 1) + '.png';


const magic8ballAnswers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "No!",
    "Not not at all",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "No!",
    "Not not at all",
];

const div = document.querySelector("div");
div.style.backgroundColor = "black";
div.style.color = "white";
div.style.padding = "20px";
div.style.borderRadius = "50%";
div.style.width = "400px";
div.style.height = "400px";
div.innerHTML =  magic8ballAnswers[randomNumber];
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";

