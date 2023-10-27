/* Array ko teen tarah se Iterate kar saktein hai
1 for loop se
2 forEach loop se
3 for..of loop se  */


//1 for loo
// let friends = ["Rohan", "Sanjeev", "Deepti", "Pooja", "Skillf"];
// for (let index = 0; index < friends.length; index++) {
//     console.log("Hello friend, " + friends[index])
    
// }

// 2 forEach
/* ********Modern JavaScript se
forEach loop har array ke element liye isko chala saktein ye for..loop se simple hota hai */

// let friends = ["Rohan", "Sanjeev", "Deepti", "Pooja", "Skillf"];
// friends.forEach(function f(element) {
//     console.log("Hello Friend, " + element + " to modern JavaScript");
// });


//3 for..of loop 
// for..of loop ke madad se aur aasani se iterate kar saktein hai

// let friends = ["Rohan", "Sanjeev", "Deepti", "Pooja", "Skillf"];
// for (element of friends) {
//     console.log("Hello Friend, " + element + " to modern JavaScript");
// }

// ------------Array Iterate end------


// ---------------Object Iterate start-------

let employee = {
    name: "Harry",
    salary: 2,
    channel: "CWH"
}
//for...in loop ki sahayta se object ko Iterate kar saktein hai

// Use this loop to iterate over objects in JavaScript

for(key in employee){
    // console.log(`The ${key} of employee is ${employee[key]}`);
}

// ---------------Object Iterate end-------

/* Loop :- jab bhi loop ka use karte hai to "++" required hota hai.
  yadi "++" ka use nahi karein to loop Infinite tak chalega */


//while loop
  
let i = 0;

while (i<4) {
    // console.log(`${i} is less than 4`)
    i++;
}


/* do while loop :-  do while loop ek baar jaroor chalta hai 
                     condition ture ho ya fir false */
                    

let j = 34;
do{
    console.log(`${j} is less than 4 and we are inside do while loop`)
}while(j < 4)