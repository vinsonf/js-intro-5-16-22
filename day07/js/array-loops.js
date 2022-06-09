const array = [
{},
[],
1,
'a',
function () {},
true,
];

// ** THE MOST IMPORTANT PART OF A LOOP **
// ** IS TO MAKE SURE IT HAS A WAY TO BREAK OUT OF THE LOOP **


array.forEach(function(item, index) {
    console.log(item, index);
    if (index === 0) {
        console.log('this is the first item');
    }
    if (index === array.length - 1) {
        console.log('this is the last item');
    }
});

// for (let i = 55.2; i < 100; i+= 10.8){
//     console.log(i);
// }
let i = 55.2;
// while(i < 10){

//     i = Math.random() * 15;
//     console.log(i);
// }

do{
    i = Math.random() * 15;
    console.log(i);
} while(i < 10);


