// simple method

// let a = 1;
// let b = 2;
// let c = 3;

// console.log("One plus Average of a and b is ", 1 + (a + b)/2);
// console.log("One plus Average of a and b is ", 1 + (b + c)/2);
// console.log("One plus Average of a and b is ", 1 + (a + c)/2);


// function ki help se method ko baar baar repeat nahi karna padega

/*
function onePlusAvg(x, y){
    console.log("Done");
    return 1 + (x + y) / 2
}

let a = 1;
let b = 2;
let c = 3;

console.log("One plus Average of a and b is ", onePlusAvg(a, b));
console.log("One plus Average of a and b is ", onePlusAvg(b, c));
console.log("One plus Average of a and b is ", onePlusAvg(a, c));
*/

// Arrow function ke use khud se function ko create karna
// *** js mein khud se function ko create karna chahiye.
// -----------------------------

//Example


// const hello = () => {
//     console.log('Hey how are you.');
//     return "hi"
// }

// let v = hello();
// console.log(v);

/*

// Rule :- use functions 

function addTwoNumbers(number1, number2){
    //                     (parameter)
    console.log(number1 + number2);
}

addTwoNumbers(3, 5);
//         (arguments)

*/




//   Result : ke baad kuch bhi print nahi hota hai
// ----------------// ----------------//------------ 
/*

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // console.log("Hitesh");
    // return result;
    return number1 + number2
}

const result = addTwoNumbers(3, 5);

*/

//Example 1

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh"));

//Example 2- if ke use parameter ko check karna
//           console.log ke baad mein return method ka use karne ke baad 
//           ye apne se baad vaali value ko nahi aane dega


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
        //    return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage());



// (username === undefined) ka short method (!username)
// sam ka use karte hi yadi user koi value put nahi karta to value sam aaygi 
// value likhe par "sam" value overright ho jayegi


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());