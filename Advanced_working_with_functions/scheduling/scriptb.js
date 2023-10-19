// setTimeout and setInterval

// setTimeout :-  function ko interval ke baad keval ek baar run karta hai

// clearTimeout :- interval ke baad function ko baar baar repeat karta hai.   


// Rule "setTimeout":- setTimeout mein pahle function pass hota hai fir time(milleseconds)

// function greet(){
//     console.log("Hello Good Morning")
// }
// setTimeout(greet, 5000);


/* Rule "setTimeout":- setTimeout mein pahle function pass hota hai fir time(milleseconds) 
setTimeout mein kitne bhi pararmeter aur arguements pass kar saktein hai */

// function greet(name, byeText){
//     console.log("Hello Good Morning " + name + " " + byeText)
// }
// setTimeout(greet, 5000, "Harry", "Take Care");

/* setTimeout(greet(), 12000);  setTimeout ke andar function call nahi hota keval uske naam ko pass karte hai */



/* clearTimeout -> return karta hai ek timerId, timerId ka use
===============
karke setTimeout ko clear kar saktein hai. 
 */
// function greet(name, byeText){
//     console.log("Hello good morning " + name + " " + byeText);
// }
// timeOut = setTimeout(greet, 5000, "Harry", "Take Care");
// console.log(timeOut);

// clearTimeout(timeOut);

// ================= setTimeout end ========

/* setInterval :- setInterval, interval ke baad value ko baar =2 print karta rahta hai 
*/

// function greet(name, byeText){
//     console.log("Hello good morning " + name + " " + byeText);
// }

// setInterval(greet, 1000, "Harry", "Good Night");


/*Rule- 
      setInterval return karta hai ek id setTimeout ki tarah id ko clearTimeout mein pass karne par value print nahi hogi*/

// clearTimeout ka use seInterval ke saath

// function greet(name, byeText){
//     console.log("Hello good morning " + name + " " + byeText);
// }

// intervalId = setInterval(greet, 1000, "Harry", "Good Night");
// clearInterval(intervalId);


// ================= setInterval end ========

function displayTime(){
    time = new Date();
    // console.log(time);
    document.getElementById('time').innerHTML = time;
}
setInterval(displayTime, 1000)