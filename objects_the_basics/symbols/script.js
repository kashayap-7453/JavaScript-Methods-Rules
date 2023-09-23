/* 
Symbols :- symbols ek primitive hai bilkul "Boolean", "undfined" abd
"NaN",ki tarah hotein hai
****five primitive hotein sixth object aur 7va symbol
 */

const sym1 = Symbol('My identifier');
const sym2 = Symbol('My identifier');

// console.log("symbol is", sym1);
// console.log("Type of symbol is",typeof sym1);


console.log(sym1 === sym2);
// false

// Symbols apne aap mein Unique hote hai isliye answer false aaya



// ********** aisi condition mein baaki sabhi ka answer true ayega

// Example:

/* 
const a = "this is"
const b = "this is"

console.log(a === b)
console.log(null === null )
console.log(undefined === undefined )
 */


const k1 = Symbol();
const k2 = Symbol();

//object create
//object mein Symbols ko add karne ke liye "square bracket use karte hai"
myObj = {};

myObj[k1] = "Ram";
myObj[k2] = "Rohan";


console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);


//symbol ko get karne ke liye is method ka use nahi kar sakte
// example
// console.log(myObj.k1);
// console.log(myObj["k1"]);

//ye dono mehtod same hai



// -----Symbols ko for in loop mein ignore kiya jata hai

for(key in myObj){
    console.log(key, myObj[key]);
}

//JSON.stringify:- object ko JSON mein generate karta hai

console.log(JSON.stringify(myObj));



