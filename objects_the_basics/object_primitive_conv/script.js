// Rule :- kisi bhi value ko number mein covert karna 
// Datat type :- Number() se

// let score = "33";

// Boolean value 
// let score = true;

// undefined and null
// let score = undefined;
// let score = null;



// code ka type do tarah se check karte hai
// console.log(typeof score);
// console.log(typeof(score));

/*
Rule:- Data type, "Number()" method se kisi bhi value ko Number mein
       convert karte hai to ye Gurantee rahti hai ki vo keval number 
       mein change hoga
 */

// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);



/* Boolean value mein convert karna:- 
   jab 1 ko boolean mein covert karte hai to true aayega 
   aur 0 ko boolean mein convert karte hai to false aayega
 */
 
//string
// let isLoggedIn = "hitesh";

//Number
// let isLoggedIn = 1;

//empty ka conversion karna
// let isLoggedIn = "";

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


/* 
String mein coversion karna
============================== */

let someNumber = 33;

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);