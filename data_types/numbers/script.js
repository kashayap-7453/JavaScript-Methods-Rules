
/* JavaScript Number Methods:
----->----->------->------->

    1. number()
    2. parseInt()
    3. parseFloat() 
    4. isFinite()
    5. isInteger()
    6. toFixed(x)
    7. toPrecision(x)
 */


/*
===========================
   1. Number() Function 
 ========================== */

// Number() Function mein Number ka first letter capital rahega

// let a = "99";
/* let a = true ;

let num = Number(a);

document.write(num + 10);  //result 109 */

/*===========================
   2. parseInt() Function 
  ========================== 
 parseInt():- ke use se "decimal" value return nahi karega
           aur yadi kisi value mein space hai to space ke 
           pahle vali value ko return karega */

// let a = 50;
// let a = 100.50;
// let a = "years 50";
/* let a = "50 years";

let num = parseInt(a);

document.write(num); */


/* ===========================
   3. parseFloat() Function 
 ========================== 

 parseFloat():- parseInt ki tarah hi work karta hai
                "ye keval decimal value ko bhi return karta hai" 
 */

// let a = "10.50";

// let num = parseFloat(a);

// document.write(num); 


/* ===========================
   4. isFinite() Function 
 ========================== 

 isFinite():- is Function se check karte hai ki given value
              finite hai ya nahi.
 */


// let a = Infinity; // Finite value nahi hai isliye false aayega
// let a = -100;      // Negative value to false aayega
/* let a = 100; 

let num = isFinite(a);

document.write(num);  //true */


/* ===========================
   4. Number.isInteger() Function 
 ========================== 

 isInteger():- is Function se check karte hai ki given value
              finite hai ya nahi.
 */


// let  a = 10-5;  // value true (positive value)
// let  a = 10.5;  // value false (negative value)
/* let  a = "Hello";  // value false (No Integer value (string))

var num = Number.isInteger(a);

document.write(num); */



/* ===========================
   5. toFixed() Function 
 ========================== 

 toFixed() :- ka use decimal ke baad ki value fix karne ke liye 
              use karte hai.
  */

/* var a = 5.56789;

var num = a.toFixed(2);
// var num = a.toFixed(3);

document.write(num);
 */


/* ===========================
   6. toPrecision() Function 
 ========================== 

 toPrecision() :- iseke use se ham jitne bhi value denge ye decimal
                  se pahle ki value aur baad wali vali dono value ka
                  total karke dega.
  */

/* var a = 5.56789;

var num = a.toPrecision(2);
// var num = a.toFixed(3);

document.write(num); */
              