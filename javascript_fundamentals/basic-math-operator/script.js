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

// =============================================


// Math Object In JavaScript ************

/* math ke sabhi formulas ko console par dekhne  ke liye 
   Example */

   let m = Math;
   console.log(m);
   
   //Printing the constants from Math Object
   
   // console.log("The value of Math.E is", Math.E)
   // console.log("The value of Math.PI is", Math.E)
   // console.log("The value of Math.LN2 is", Math.E)
   // console.log("The value of Math.SQRT1_2 is", Math.E)
   // console.log("The value of Math.LOG2E is", Math.E)
   
   
   // Math.pow() method ka use power nikalne ke liye hota hai 
   // ==========
   
   console.log("3 ki power 2", Math.pow(3, 2));
   console.log("2 ki power 10", Math.pow(2, 10));
   
   
   // Math.sqrt() method ka use squre root nikalne ke liye kiya jata hai 
   // ==========
   
   console.log("Square root of 36 is ", Math.sqrt(36))
   console.log("Square root of 64 is ", Math.sqrt(64))
   console.log("Square root of 50 is ", Math.sqrt(50))
   
   //ceil and floor
   console.log("5.8 rounded up to nearest integer is ", Math.ceil(5.8))
   console.log("5.8 rounded down to nearest integer is ", Math.floor(5.8))
   
   
   //Abs function :- Negative value ko positive banata hai
   console.log("Absolute value of 5.66 is ", Math.abs(5.66))
   console.log("Absolute value of 5.66 is ", Math.abs(-5.66))
   
   
   // Generating a random number
   let r = Math.random();
   console.log("The random number is ", r)
   //Random number b/w (a, b) = a (b-a)*Math.random()
   let a1 = 1;
   let b1 = 100;
   let r1_100 = a1 + (b1-a1)*Math.random();
   console.log("The random number is ", r1_100)