// SetTimeout :- kisi bhi task ko talne ke liye SetTimeout ka use karte hai

/* examplain 
           (setTimeout) setTimeout ke use se code ko 1second 
mein , two second ya jitna bhi samay dete hai tab uske baad code ko run kar saktein 
 */
// alert("Hello")

// setTimeout(function(){
//     alert("I am inside of settimeout")
// }, 2000);



// One(1)<-yaha par timer id hai (console mein print hoga)
/* 
clearTimeout() 
============== mein variable ka name "a" pass kiya to ye iska excecution ko rok dega.
clearTimeout ka use execution ko rokne ke liye hota hai */
// let a = setTimeout(function(){
//     alert("I am inside of settimeout")
// }, 2000);

// let b = prompt("Do you want to run the settimeout?")
// if("n" == b) {
//     clearTimeout(a)
// }

// console.log(a);


/* 
Rule :- ismein ham kitne bhi arguement de saktein hai.(1 and 2 ke baad) usi ke anusar ham parameter ko pass kar saktein hai
 */
// Example 1

// document.write("Hello")

// const sum = (a, b) => {
//     console.log("Yes I am running " + (a + b))
//     a + b
// }

// setTimeout(sum, 1000, 1, 2)
 


// Example 2

// Add Agruements and parameter in method

// document.write("Hello")

// const sum = (a, b, c, d) => {
//     console.log("Yes I am running " + (a + b + c + d))
//     a + b
// }

// setTimeout(sum, 1000, 1, 2, 4, 3)
 

// =========================================================

/* setInterval:-  ki itne second ke gap par run karte hi run karte hi raho
simple defination :- setInterval Infinite while loop ke andar time set hai jo har second mein chalta ja raha hai */


// setInterval(function (){
//     alert("setinterval")
// },3000)