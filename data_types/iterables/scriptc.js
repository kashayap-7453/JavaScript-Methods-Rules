// var x = ["Apple", "Orange", "Grapes"];

// let y = x[Symbol.iterator]();

// isko baar print karne new value aayegi.
// console.log(y.next());



// Example 1 


/* ismein apne anusar kisi bhi value ko print kara saktein hai
yah par keval 3rd value print ki
.next()ko call karegenge tabhi print hogi */

// let numbers = [100, 200, 300];

// let iter = numbers[Symbol.iterator]();

// iter.next();
// iter.next();
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log(iter.next());

// hamein keval value ko hi print karna ho 
// console.log(iter.next().value);



// Example 2 
// Rule:- while(!result.done) jab tak value true nahi ho jati tab tak loop chalega.

// let numbers = [100, 200, 300];

// let iter = numbers[Symbol.iterator]();

// let result = iter.next();



// while(!result.done){
//     console.log(result.value);
//     result = iter.next();
// }


// Example 3 
// Rule:- String ke saath iterator ka use karna.

// let str = "Yahoo Baba";

// let iter = str[Symbol.iterator]();

// let result = iter.next();



// while(!result.done){
//     console.log(result.value);
//     result = iter.next();
// }




// Example 4
// Rule:- for...of loop se iterator ka use
//while loop se short hota for loop 

// let str = "Yahoo Baba";


// for (let char of str) {
//     console.log(char);
// }


// Example 4
// khud ka bhi iterator use kar saktein hai
/* 
1. nextNum 0 isliye liya kyoki index zero se start hota hai
 */

function numberIterator(arr) {
    var nextNum = 0;
    return {
        next(){
            if(nextNum < arr.length){
                return{
                    value : arr[nextNum++],
                    done : false
                }
            }else{
                return{
                    done : true
                }
            }
        }
        
    }
}


let numbers = [100, 200, 300, 400, 500];

let num = numberIterator(numbers);
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());