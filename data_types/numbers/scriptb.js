const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);

//to fixed ke andar ek property deni hoti hai jo hai number
//Ecomerse mein point ke baad keval do values aati hai
console.log(balance.toFixed(2));

const otherNumber = 23.8966;

console.log(otherNumber.toPrecision(4));

/* 
Zeros  ko gina tough hota hai isliye "US" and "INDIA" mein zero 
ko count karne ki short tricks
 */

const hundreds = 100000;
console.log(hundreds.toLocaleString());         //America ke anusar
console.log(hundreds.toLocaleString('en-IN'));  // India math ke anusar