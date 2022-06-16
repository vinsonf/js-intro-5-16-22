
class Page {
  constructor(title, backgroundColor, textColor, list) {
    this.title = title;
    this.backgroundColor = backgroundColor;
    this.textColor = textColor;
    this.list = list;
  }
  render() {
    const body = document.body;
    body.innerHTML = "";
    myNav.render();
    const title = document.createElement("h1");
    title.innerText = this.title;
    body.style.backgroundColor = this.backgroundColor;
    body.style.color = this.textColor;
    body.appendChild(title);
    const ul = document.createElement("ul");
    body.appendChild(ul);
    this.list.forEach((item) => {
      const li = document.createElement("li");
      li.innerText = item;
      ul.appendChild(li);
    });
  }
}
const page1 = new Page('My Cool Website', 'black', 'red', ['item1', 'item2', 'item3', 'item4']);
const page2 = new Page('My Cool Website too', 'white', 'red', ['item1', 'item2', 'item3', 'item4']);
const page3 = new Page('My Cool Website three', 'pink', 'yellow', ['item1', 'item2', 'item3', 'item4']);
const page4 = new Page('My Cool Website four', 'blue', 'white', ['item1', 'item2', 'item3', 'about']);

class Navigation {
    constructor(pages) {
        this.pages = pages;
    }
    render() {
        const nav = document.createElement("nav");
        const ul = document.createElement("ul");
        nav.appendChild(ul);
        this.pages.forEach((page) => {
        const li = document.createElement("li");
        li.innerText = page.title;
        ul.appendChild(li);
        ul.style.display = "flex";
        ul.style.listStyleType = "none";
        ul.style.justifyContent = "space-around";
        li.addEventListener("click", () => {
            page.render();
        })
        });
        document.body.appendChild(nav);
    }
}

const myNav = new Navigation([page1, page2, page3, page4]);

page1.render();
page2.render();
page3.render();
page4.render();


const participants = ['chris', 'kenneth', 'michael', 'vinson'];

let i = -1;

function next() {
    i++;
    if (i >= participants.length) {
        i = 0;
    }
    console.log(participants[i]);
}