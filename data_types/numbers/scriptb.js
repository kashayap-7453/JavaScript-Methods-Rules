const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 23.8966;

console.log(otherNumber.toPrecision(4));

/* 
Zeros  ko gina tough hota hai isliye "US" and "INDIA" mein zero 
ko count karna
 */

const hundreds = 100000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));