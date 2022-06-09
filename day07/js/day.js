// all about the dom;

// 1. how to create an element

const titleElement = document.createElement('h1');

// 2. how to add content to an element
titleElement.textContent = '<h1>Hello World</h1>';
// 2a. how to add content to an element
titleElement.innerHTML = '<p>Hello World</p>';


// 3. how to add an element to the DOM
document.body.appendChild(titleElement);
// 3a. how to add an element to the DOM
document.body.append(titleElement);
document.body.append('words');
// 3b. how to add an element to the DOM
document.body.prepend(titleElement);
document.body.prepend('words');

// titleElement.remove();

titleElement.style.color = 'red';
titleElement.style.backgroundColor = 'blue';
titleElement.style.fontSize = '50px';

titleElement.classList.add('title');
titleElement.classList.remove('title');
titleElement.classList.toggle('title');
titleElement.classList.toggle('title');
titleElement.classList.toggle('title');

titleElement.addEventListener('click', function() {
    console.log('clicked');
})

titleElement.addEventListener('mouseenter', function() {
    console.log('mouse entered');
});
titleElement.draggable = true;
titleElement.addEventListener('mouseleave', function() {
    console.log('mouse left');
});

titleElement.addEventListener('dragstart', function() {
    console.log('dragon started');
});


titleElement.addEventListener('dragend', function(event) {
    console.log('droped');
    console.log(event.target);
    ul.append(titleElement)
});

const ul = document.createElement('ul');
document.body.append(ul);
ul.style.backgroundColor = 'red';
ul.textContent = '<li>Hello</li><li>World</li>';

// listen fro drop event on ul
ul.addEventListener('drop', function(event) {
    console.log('droped');
    console.log(event.target);
})

// list of events
// click
// mouseenter
// mouseleave
// mouseover
// mouseout
// mousemove
// mousedown
// mouseup
// dblclick
// contextmenu
// keydown
// keyup
// keypress
// focus
// blur
// change
// input
// submit
// reset
// resize
// scroll
// load
// unload
// beforeunload
// hashchange
// pageshow
// pagehide
// online
// offline
// popstate
// storage
// dragstart
// drag
// dragenter
// dragleave
// dragover
// drop
// dragend
// orientationchange
// touchstart
// touchmove
// touchend
// touchcancel
// pointerlockchange
// pointerlockerror
// webglcontextlost
// webglcontextrestored
// webglcontextcreationerror
// webglcontextcreationerror

// const baseUrl = 'https://cat-fact.herokuapp.com';
// fetch(baseUrl + '/facts/random?amount=500&animal_type=cat,dog').then(function(res) {
//     return res.json()}
//     ).then((data) => {
   
//     data.forEach(function(fact) {
//         const el = document.createElement('div');
//         el.innerText = fact.text;
//         document.body.append(el);
//         const space = document.createElement('br');
//         document.body.append(space);

//     })


// });


