// ES6 se pahle functions ka use

//Example 1
/*
function hello(){
    console.log("Hello");
}

hello();
*/

//Example 2
/*
let hello = function() {
    console.log("Hello");
}

hello();
*/


/*
// ES6 se pahle functions ka use
// Yahoo Baba ko dikhane ke liye name parameter ka use hua hai

let welcome = function(name){
    return `Hello & Welcome ${name}`;
}

console.log(welcome("Yahoo Baba"));
*/


// ==========================
//      Arrow Functions
// ==========================

// Example 2
// Rule:- Arrow functions ka use ES6 mein hua

// let hello = () => console.log("Hello");
// hello();


// Example 2

// let welcome = (name) => {
//     return `Hello & Welcome ${name}`;
// }

// console.log(welcome("Yahoo Baba"));



// Example 3
// Ek baar mein do parameter ka use karna

// let welcome = (name, age) => {
//     return `Hello & Welcome ${name} - ${age}`;
// }

// console.log(welcome("Yahoo Baba", 25));


// ===============================

// const sayHello = (name, greeting) => console.log(greeting + " " + name);
// sayHello("Harry", "Good Afternoon");


// this total object ko reffer karta hai

// const x = {
//     name: "Harry",
//     role: "Js Developer",
//     exp: 30,
//     show: function() {
//         console.log(`The name is ${this.name}\nThe role is ${this.role}`)
//     }

// }

// x.show();z