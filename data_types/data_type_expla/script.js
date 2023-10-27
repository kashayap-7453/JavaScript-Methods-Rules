/* Question:- JavaScript master kaise kare?
   Answer :-  javascript master karne ke liye do(two) topic mein master karni hogi .
   1.objects mein
   2.browser ke web events ya browser events mein mastry karni hai */

/*  Data Types ke do bhaag hote hai.
    1. Primitive
    2. Reference

    
    1 Primitive ke types:-        2. Reference ke types:-
    [1]. String                   []. Object             
    [2]. Number                   []. Array
    [3]. Boolean                  []. Function
    [4]. Null                       
    [5]. Undefined                    
    [6]. BigInt                     
    [7]. Symbol                  
    
 */

/* 
String Data Types
=====================

String double quotes and single quotes mein likha jata hai */ 

let firstName = "Elon";  // Double quotes

let lastName = "Musk";  // Single quotes



/*
Number Data Types
=====================

Number represents integer and floating-point numbers*/

let num1 = 96;  // Integer value

let num2 = 96.19;  // Floating



/*
Boolean Data Types
=====================

The Boolean type has two value: true and false. */

let learning = true; 

let completed = false;  

// example:-
let x = 20 < 10;

console.log(x);


/*
Undefined Data Types
=====================

If a letiable is declared but the value is not assigned,
then the value of that letiable will be undefined. 
:- And the data type is also undefined */


let age; 
console.log(age);
console.log(typeof age);


/*
Null Data Types
=====================

In the Javascript, null is a special value 
that represents empty or unknown value */


 console.log(null == undefined);





//  ===================================================================

/* Primitive
Number type:-

let a = 10;       //whole Number
let a = 10.45;    //Decimal Number
let a = 5e3;      //5000 //5 * 10^3 expnent
let a = 34e-5;    //0.00034 expnent
 */


/* Constructor
Object type:-

let a = new Number(10);
let a = new Number(10.45);
let a = new Number(5e3);
 */