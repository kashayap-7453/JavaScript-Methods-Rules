//  Closures in javascript

// Rule "let" ka block scope hota hai
/* 
Example (1) explain: jab kisi function return kartei hai to vo function 
to return to hoga hi saath hi saath uska lexical scope bhi return 
hoga.
jis function ko return karte kartein hai uske variable ko bhi access kar saktein hai
 */
/* 
message = "Good Global"
function hello1(){
    let message = "Good Morning"
     
    // let message = "Good Afternoon"
    console.log("Hello 1:" + message)
    let c = function hello2() {
        console.log("I am c " + message)
    }
    return c
}

c = hello1();
c();

 */


/* 
Rule :- jab bhi closure return hota hai to usi ke saath hi lexical  
environment ke "refrences" bhi return hotein hai 
ismein name variable ki value ko change kiya.
 */
// function init() {
//     let name = 'Mozilla'
//     function displayName() {
//         console.log(name);
//     }
//     name = "harry"
//     return displayName;
// }
// let c = init();
// c()

//function ke andar function, function ke andar function bhi closure banate hai.
/* 
jab "x" ko return karenge to x to return hoga saath hi uska lexical 
scope bhi return hoga 
Note;- y ke andar "a" nahi hai vo apne parent ka "a " use kar rahi 
yadi "y" ke paas a nahi hi to vo dekhega ki vo mere parent evironment mein hai(lexical parent mein hai ya nahi ye dekhega). fir 
global variable mein check karega.
 */

function returnFunc() {
    const x = () => {
        let a = 1
        console.log(a)
        const y = () => {
            //let a = 2
            console.log(a)
            const z = () => {
                // let a = 3
                console.log(a)
            }
            z()
        }
        a = 999
        y()
    }
    return x
}

let a = returnFunc()
a();