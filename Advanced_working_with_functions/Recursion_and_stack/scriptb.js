/* Question 1:-What is recursion data structure ?
   Answer:- ek aisa function jo khud ko baar=2 call karta rahta  
            hai. use recursion kahte hai.
 */

function apple(x){
    console.warn(x)
    if(x < 10){
        apple(x + 1);
    }
}

let data = 0;
// apple(data);

/* 
Example exaplain :-data ko hi function mein "x" mana hai
 */



// =========================================

/*  
Factorial : factorial nikalna jis bhi value ka factorial nikalna hai.
            us value ko ek minas karke multiply karna hota usko tab tak minas karke multiply karna hai jab tak 1 se multiply nahi karte.
*/

// example 
// question :-  5 ka factorial ?
// answer:- 5*4*3*2*1 = 120 factorial


// question :-  6 ka factorial ?
// answer:- 6*5*4*3*2*1 = 720 factorial


// function se factorial nikalna 

/* 
return aise kaam karega 
(return item*factorial(item-1))
return 5*factorial(5-1)*factorial(4-2)*factorial(3-3)*factorial(2-1)*factorial(1-1);
-> return 
 (jab value 0 aayegi to 1 return ka dega)
 */

//  example:-
function factorial(item){
    if(item == 0) {
        return 1
    }
    return item*factorial(item - 1)
}

let deta = 5;
console.warn(factorial(deta));