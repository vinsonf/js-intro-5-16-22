function addTwoNumbers(firstNumber, secondNumber, thirdNumber){
    console.log(this);
    return firstNumber + secondNumber + thirdNumber;
}

let answer = addTwoNumbers(1, 2, 5);
// let answer2 = addTwoNumbers(4, 3, 2);

// console.log('answer', answer, answer2);


const user = {
    firstName: 'joel',
    lastName: 'smith',
    age: 30,
    isPresent: true,
    getFullName: function(){
        return (this.firstName + ' ' + this.lastName).toUpperCase();
    },
    addTwoNumbers: addTwoNumbers
};

console.log('users full name', user.addTwoNumbers(1, 2, 3));

function testingScope() {
  
    let x = 20;
    let y = 30;

    if (true) {
        let x = 10;
        console.log(x, 'child');
    }

   
   function childScope() {
        console.log(x, 'child, scope');
    }

    childScope();
  
}



testingScope();

