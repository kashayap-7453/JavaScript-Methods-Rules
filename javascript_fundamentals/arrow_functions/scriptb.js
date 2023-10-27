// Arrow function in javascript
// ============================
/* 
Current context:-(jis scope ke andar ham kaam kar rahe hai usko current content scope kahte hai.)
current context ko access karne ke liye this ka prayog karte hai
*/ 

// context boltein hai value ko 

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessae: function() {
        console.log(`${this.username}, welcome to website`);
    }
}

// user.welcomeMessae();
// user.username = "sam"; //username ko change kiya hai
// user.welcomeMessae();

// console.log(this) // this empty object ko refer karta hai
 
// ****** browser ke andar global object window object hota hai.



// this ke use se function ke andar current context ko access nahi kar sakte .
// function chai() {
//     let username  = "hitesh"
//     console.log(this.username);
// }

// ================= Arrow function ===============

// example1 
// const chai = function() {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai();

// Arrow function 
// const chai = () => {
//     let username = "hitesh"
//     console.log(this)
// }
// chai()

//***** basic arrow function */

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))


//**** ek hota 'Implicit return' :- iska use tab karte hai jab code keval ek line ka ho ismein curly bruces ka use nahi karna padta aur jab curly bruces ka use nahi karte to return ke bhi need nahi hoti*/

// Example1 and example2 dono hi same hai 

// example1
// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(3, 4))

// example2
// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3, 4))