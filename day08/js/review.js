const dataTypes = {
    primitives: {
        string: 'string',
        boolean: true,
        number: 1,
    },
    complex: {
        object: {},
        array: [],
    }
}

const operators = {
    arithmetic: {
        addition: '+',
        subtraction: '-',
        multiplication: '*',
        division: '/',
    },
    comparison: {
        equal: '==',
        strictEqual: '===',
        notEqual: '!=',
        strictNotEqual: '!==',
        greaterThan: '>',
        lessThan: '<',
        greaterThanOrEqual: '>=',
        lessThanOrEqual: '<=',

    },
    logical: {
        and: '&&',
        or: '||',
        not: '!',
    },
    assignment: {
        additionAssignment: '+=',
        subtractionAssignment: '-=',
        multiplicationAssignment: '*=',
        divisionAssignment: '/=',
        moduloAssignment: '%=',
    }
}

const truthiness = {
    truthy: {
        boolean: true,
        string: 'every string',
        number: Infinity,
    },
    falsy: {
        boolean: false,
        string: '',
        number: 0,
        object: null,
        undefined: undefined,
        NaN: NaN,
    }
}

const popups = {
    alert: {
        returns: undefined,
        arguments: 'string',
        description: 'alerts the user with a string message',
    },
    confirm: {
        returns: 'boolean',
        arguments: 'string',
        description: 'asks the user a question and returns true or false depending on clicking ok or cancel',
    },
    prompt: {
        returns: 'string',
        arguments: 'string',
        description: 'asks the user a question and returns the string they enter',
        onCancel: 'returns null',
        defaultValue: 'initial default value',
    }
}

const builtInObjects = {
    Math: {
        description: 'contains useful mathematical functions',
    },
    Date: {
        description: 'contains useful date functions',
    }
}

const controlFlow = {
    if: {
        description: 'if statement: if (condition) { statement }',
        condition: 'boolean',
        statement: 'block of code',
    },
    else: {
        description: 'else statement: if (condition) { statement } else { different statement }',
    },
    switch: {
        description: 'switch statement: switch (expression) { case value: statement; break; default: statement; break; }',
    },
    edgeCase: {
        description: 'when the user uses a value that is not in the case list',
        reason: 'if the user uses a value that is not in the case list, the program will continue to run',
    }
}


const debugging = {
    console: {
        description: 'console.log(data) prints data to the console',
    },
    debugger: {
        description: 'debugger; pauses the program and allows you to step through it while viewing variables',

    }
}

const scope = {
    global: {
        description: 'the global scope is the scope that is available to all code',
        globalVariables: 'nick names for data that is accessable from anywhere in the program',
        globalFunctions: `nick names for functions that are accessable from anywhere in the program`,
    },
    local: {
        description: 'the local scope is the scope that is available to code in the current function or object',
    },
}

const functionsVsMethods = {
    functions: {
        description: 'functions are a way to create a block of code that can be called later',
        arguments: 'arguments are the values that are passed into the function',
        returns: 'returns the value that is returned from the function',
        calling: 'calling a function is similar to calling a method',
    },
    methods: {
        description: 'everything we said about functions is also true for methods except that they are attached to objects',
       
    }
}

const asyncrhonous = {
    description: 'asynchronous code is code that runs in the background',
    callback: {
        description: 'callback functions are functions that are passed into another function as an argument to be called when the other function is finished',
    },
    promise: {
        description: 'promises are a way to handle asynchronous code',
        resolve: 'resolves a promise',
        reject: 'rejects a promise',
    },

}


// function getData(cb){
//     setTimeout(() => {
//         cb(dataTypes);
//     }, 5000);

// }
// getData(function(data) {
//     displayPrimitives(data.primitives);
// });

// getData(function(data){
//     diplayComplex(data.complex);
// })

// function displayPrimitives(primitives){
//     console.log(primitives);
// }
// function diplayComplex(complex){
//     console.log(complex);
// }

new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve(dataTypes);
    }, 5000)
}).then((data)=> data.primitives)
.then((primitives)=> primitives.number)
.then((string)=> console.log(string));

new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve(dataTypes);
    }, 5000)
}).then((data)=> data.complex)
.then((primitives)=> primitives.array)
.then((string)=> console.log(string));


fetch('http://pokeapi.co/api/v2/pokemon/')
.then(function(res) {
    console.log('fetching data', res);
    return res.json();
}).then( data => {
    console.log('data', data);
    return data.results[0]
}).then( poke => {
    console.log('poke', poke);
    return poke.url
}).then(function(url) {
    console.log('fetching data');
    return fetch(url);
}).then(res => {
    console.log('fetching data', res);
    return res.text();
}).then(data => {
    console.log('data', data);
});


const array = [1,2,3,4, 5]
array.forEach(function(item) {
    console.log(item);
})
console.log('\n')
for(let i = 1; i <= 7; i++) {
    console.log(i);
}
console.log('\n')

for( let num of array ){
    console.log(num);
}
console.log('\n')
let i = 0;
while(i < array.length) {

    i = Math.random() * 10;
    console.log(i);
}

// the dom
const ul = document.querySelector('ul'); // look for something on the page
console.log(ul);

const li = document.createElement('li'); // create a new element
console.log(li);

ul.appendChild(li); // add the new element to the page

li.innerText = '<p>Hello<p>'; // add text to the element

const anotherLi = document.createElement('li');
ul.appendChild(anotherLi);
anotherLi.innerHTML = '<h1>Goodbye</h1>';

li.addEventListener('click', () => {
    // li.remove();
    li.classList.toggle('done');
    li.style.padding = '100px';
    li.innerHTML = '<h1>Goodbye</h1>';
});