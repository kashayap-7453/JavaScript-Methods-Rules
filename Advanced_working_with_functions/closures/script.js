// ========================
//    Lexical Scoping
// ========================
/* 
Explanation:- jab ek function ke andar ek ya do ya fir jitne function ko banaya jata hai tab do taraha ke 
function banege ek to "child function" doosra , "parent function" banega.
child function, apne parent function ke variables and other property  ko to access kar sakta hai 
leking parent function apne child function ke variables ko access nahi kar sakta .
aur do(two) child function aapas mein bhi variables ko access nahi kar saktein.
 */
// examples: 1

/* function init() {
    let name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    displayName();
}
init(); */

// examples: 1
/* function outer() {
    let username = "hitesh"
    // console.log("OUTER", secret);
    function inner(){
        let secret = "my123"
        console.log("inner", username);
    }
    function innerTwo(){
        console.log("innerTwo", username);
        // console.log(secret);
    }
    inner()
    innerTwo()
}
outer(); */


// ========================
//         Closures
// ========================
/* 
Defination - "myFunc()" ko excecute kiya hai aur return kiya hai inner function jiska naam
 "displayName" hai to keval inner function hi nahi jayega yadi "outer function" bhi exist 
 karta hai to outer function ka scope bhi jayega(complete lexical scope jata hai) aur.
 fir outer function bhi inner function ke variable ko access kar sakta hai.
 isko hi "closure" kahtein hai.
 */
// Example 1;

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return  displayName;
}

const myFunc = makeFunc();
// myFunc();


// Button script
// -------------
// document.getElementById("orange").onclick = function()
// {
//     document.body.style.backgroundColor = `orange`
// }

// document.getElementById("green").onclick = function()
// {
//     document.body.style.backgroundColor = `green`
// }


/* 
Rule :- .onclick ke saath hamesha function ka use hota hai
 */
// Quick handler ke use se multiple button ka use karna 
//-----------------------------------------------------

function clickHandler(color){
    //document.body.style.backgroundColor = `${color}`

    return function() {
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById('orange').onclick = clickHandler("orange");
document.getElementById('green').onclick = clickHandler("green");