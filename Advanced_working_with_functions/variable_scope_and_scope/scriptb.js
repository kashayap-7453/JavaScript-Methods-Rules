/* 
Curly braces ko almost har programing language mein "Scope" boltein hai
.curly braces ka use jab function and If..else ke saath hota hai to isko "scope" boltein hai.

.Object - curly braces ka use object mein bhi hota hai lekin usko object declaration kahte hai.
 */

// example:-

/* 
Javascript mein code ka use nahi karna chahiye kyoki iska use function ke kiya jaye ya fir function ka baha ye keval global scope ke roop mein hi use hoga.
 */

if(true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

/* Nested Scope 
================
Nested function mein child element parent element ke variable ko 
access kar sakta hai */


function one() {
    const username = "hitesh"
 
    function two() {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(webiste);

    two()

}

one();


// block scope mein varaible ko access karna 

/*block scope mein bhi function ki tarah hi variabl ko access karte hai 
 */

if(true) {
    const username = "hitesh"
    if(username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website)
}

// console.log(username);



// +++++++++++++++++++ interesting concept ++++++++++++++++++++++

/*Hoisting :-  jaha par excecution context banata hia ki
        declaration se pahle aap usko use nahi kar saktein hai
*/

/* Normal function: normal function mein declaration se pale and baad 
 mein dono tarah se value print kar saktein hai*/


console.log(addone(5))
function addone(num){
    return num + 1
}

/*Expression :- expression mein declaration se pahle value ko print nahi kar saktein. 
 */

// addTwo(5);
const addTwo = function(num) {
    return num + 2
}
console.log(addTwo(5));