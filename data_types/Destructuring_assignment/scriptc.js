// =================  Array Destructuring ===================

/* 
Array ke andar likhe element ko kisi variable mein store karne karna (ES5) mein 
 */
// const myproglang = ['js', 'php', 'c', 'python', 'java'];


// var top1 = myproglang[0];
// var top2 = myproglang[1];
// var top3 = myproglang[2];

// console.log("My favorite programing language is " + top1);

/* 
ES6 mein array ko destructure karne ke liye serail wise likhna chahiye kyoki array ko jab destructure to vo index zero se hi value ko return karega .
Note :- yadi ismein "top1 " ke baad "top3" likhde vo phir bhi 
        index 1 ko access kar payega .
 */

// const myproglang = ['js', 'php', 'c', 'python', 'java'];

// let [top1, top2, top3, top4, top5] = myproglang;

// console.log("My favorite programing language is " + top1);
 

/* 
Rule:- First and last value ko access karna ho to ?
       pahle first name ko likhna hai jo array index zero ko access karega 
 */

const myproglang = ['js', 'php', 'c', 'python', 'java'];

let [top1,,,,toplast] = myproglang;
console.log(`My favorite language is ${top1} and my least favorite is ${toplast}`);
