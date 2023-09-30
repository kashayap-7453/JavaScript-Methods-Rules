/*
Addition = +;
subtraction = -;
multiplication = *;
division = /;
modulus (Remainder) = %;
increement = ++;
decreement = --;
*/


//  Math.abs() method se Negative value keval positive hogi
 
console.log(Math.abs(-4));

/* 
Math.round(); is mehtod se yadi decimal ke baad ki value 5 se jyada
             hai to decimal se pahle ki value mein 1 add ho jayega.
:- yadi 5 se kam hai to decimal se pahli value mein koi change nai 
   hog aur decimal hat jayga.
 */

   console.log(Math.round(4.6));
   console.log(Math.round(4.2));


/* 
Math.ceil(); is mehtod se yadi decimal ke baad ki value .1 ya .1 se jyada
             hai to decimal se pahle ki value mein 1 add ho jayega.
 */

console.log(Math.ceil(4.2));


/* 
Math.floor(); is mehtod se  decimal kitni bhi ho ye decimal se pahli value mein 
              kuch bhi add nahi karega.
 */

console.log(Math.floor(4.2));
console.log(Math.floor(4.9));


// Math.min();
console.log(Math.min(4, 3, 6, 8));


// Math.max();
console.log(Math.max(4, 3, 6, 8));

/* Math.random() mehtod
============================

math.random():- is mehtod ke use se value 0 se lekar 10 tak aaygi
note:- value 0 n aaye isliye +1 add karenge
 */

console.log(Math.random());
console.log(Math.random() * 10 + 1);


 
/*  max and min value define
============================

is mehtod mein minimum and maximum value ko define kiya fir 
Math.ramdom() method ka use ismein max minas min plus one kiya aur
multiply kiya fir hamein min variable ko add kiya jisse ki 
sankhya 10 se kam na ho
 */


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

