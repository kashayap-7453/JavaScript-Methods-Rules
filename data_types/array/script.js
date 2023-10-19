/*=============
     class 1    Dated Staurday-27-september-2023
===============
 Array Introduction
=============
code with harry
================== */

let marks_class_12 = [91, 82, 63, 84, false, "Not Present"];

/* console.log(marks_class_12);
console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log(marks_class_12[6]); // will be undefined because index 6 does not exist
marks_class_12[6] = 89;        // Adding a new value to the array
marks_class_12[0] = 96;       // changing the value of an array
// length mein element ko one se count kiya jata hai
 
console.log("The length of marks_class_12", marks_class_12.length); */

/*==========
   class 2       Dated Staurday-28-september-2023
=========== */

// Rule:-  .toString() mehtod array ko string mein change karta hai

/* let num = [1, 2, 3, 34 , 4]
let b = num.toString()   // b is now a string
console.log(b);
console.log(typeof b); */

// Rule:- .join() mehtod array mein har elment ke beech mein us
//    value ko add kar dega jo ".join" method mein put karenge

// let num = [1, 2, 3, 34 , 4]

// let c  = num.join("_");
// console.log(c);

// Rule:- pop() method original array se last element ko remove
//        karta hai aur original array ko update karta hai

// let num = [1, 2, 3, 34 , 4]
// let r = num.pop()
// console.log(r);

// Rule:- .push() method element ko last mein add karta hai

// let num = [1, 2, 3, 34, 4]
// let r = num.push(56)
// console.log(num, r);

// Rule:- .shift() method first element ko remove karta hai
//          ye original array ko modify karta hai

// let num = [1, 2, 3, 34, 4]
// let r = num.shift(56)
// console.log(num, r);

// Rule:- .unshift() method element ko starting mein add karta hai
//          ye original array ko modify karta hai  aur
//          array ki new lenght ko return karega

// let num = [1, 2, 3, 34, 4]
// let r = num.shift(56)
// console.log(num, r);

/*==========
   class 3       Dated Staurday-29-september-2023
=========== */

/* 
  Delete operator ka use :- se array ki length mein koi change 
  nahi aata hai.
  Delete operator se jab kisi element ko delete karte hai to 
  array ki length mein koi change nahi aata hai
 */

//   let num = [1, 2, 3, 5, 6, 7, 8, 9]
//   console.log(num.length);
//   delete num[0]
//   console.log(num.length)

/* 
Rule:- .concat() method do ya do se jyada array ko merge karne 
                ke use aata hai. aur ek naye array ko create 
                karta hai
 */
// Example 1

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

// let newArray = num.concat(num_more)
// console.log(newArray);

// Example 2
//  three array merge

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// let num_even_more = [111, 112, 113, 114, 115, 116, 117, 118, 119]

// let newArray = num.concat(num_more, num_even_more)

/* Rule next:-  .sort() method ye original array ko modify karta .
            ye method "Alphabetically" sort karta hai
*/

// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229];
// num.sort()
// console.log(num);

/* 
Rule :- Ascending order is rule mein (a - b) do digit ko compare 
        karta hai aur jo bhi digit chhoti hoti hai vo pahle aati hai
 */

// let compare = (a, b) => {
//   return a - b;
// };

// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229];
// num.sort(compare);
// console.log(num);

/* 
Rule :- Descending order is rule mein (b - a) do digit ko compare 
        karta hai aur jo bhi digit badi hoti hai vo pahle aati hai
 */

//   let compare = (a, b) => {
//    return b - a
//  }

// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229];
// num.sort(compare);
// console.log(num);



// Rule :- .reverse() method array ko ulta kar deta hai


//   let compare = (a, b) => {
//    return b - a
//  }

// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229];
// num.sort(compare);
// num.reverse();
// console.log(num);



/* ****************
Rule :- splice method mein index number 2 diay hai aur 3 .
        splice method index no. 2 ko delete karega aur is samet 3 
        element ko remove karega .
        index no 2 and 3 ke baad num.splice() method ke andar dijit 
        remaining hai vo sabhi add ho jayegi.
 */

// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229];
// num.splice(2, 3, 1021, 1022, 1023, 1024, 1025);
// console.log(num);


/* ****************
Rule :- slice method mein index number 3 diay hai aur 5 .
        splice method index no. 3 ko delete karega 4th ko 
        ye last index ko include nahi karta hai */

// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229];

// let newNum = num.slice(3, 5);
// console.log(newNum);
// console.log(num);



/*==========
   class 4   Dated Staurday-30-september-2023
=========== */



// Rule :- classical "for loop" all language mein samaan hot hai.
        //  ye zero se start karega aur total length se ek kam jayega .

// let num  = [3, 54, 1, 2, 4]

// for(let i = 0; i<num.length; i++){
//         console.log(num[i])
// }


// Rule :- for of loop array of items ko access karne short tareeka hai


// let num  = [3, 54, 1, 2, 4]

// for(let i of num){
//         console.log(i)
// }


// Rule :- for in loop :- array array ke andar bhi keys hoti hai .
        //     like 0, 1, 2, 3, 5 etc. 
        //     kyoki array ka object nahi hota hai.


// let num  = [3, 54, 1, 2, 4]

// for (let i in num){
//         // console.log(num[i])
//         console.log([i])
// }

// num[i] :- aise print karne par element print honge
// (i) :- aise print karne par keys print honge


 
/*  Rule :- forEach loop print karna num i multiply num i .
            for each method ke andar function ko add kiya jo har
            array element ke liye chalega.*/

// let num  = [3, 5, 1, 2, 4]

// num.forEach((element) => {
//         console.log(element * element)
// })



/*  Rule :- array.from() : yadi hamarein pass html collection hai to umein condition mein
            for in loop nahi chala sakte tab usmein array.from 
            chalana padega.*/

// let name = "Ram kumar"
// let arr = Array.from(name)
// console.log(arr);



/*==========
   class 5   Dated Staurday-30-september-2023
   Important class
=========== */
/* 
.map() method ek new array banata hai aur usko return karta hai.
.map() method mein teen argument ko pass kar saktein hai.
       (value, index, array)

forEach ek loop hai jo baar chalta hai aur har arrya element 
        ke liye kuch karta hai.
.forEach:- mein bhi teen argument ko pass kar saktein hai.
       (value, index, array)
 */


// let arr = [45, 23, 21]
// // console.log(arr)
// let a = arr.map((value, index, array) => {
//         console.log(value, index, array)
//         // return value + 1
//         return value + index
// })

// console.log(a);


/*Rule :- .filter() ka use tab karte hai jab 10 se chhote sankhaya
          chahiye leking 10 ke sthaan par koi bi sankhya ho sakti hai  */

// let arr = [45, 23, 21, 0, 3, 5]
// let a2 = arr.filter((a) => {
//         return a < 10
// })
// console.log(a2);


/*Rule :- .reduce() method mein alag se ek function banaya.
           aur usko pass kiy ".reduce()" mein 
           
Explain rule:- ismein pahle 1 and 2 ko include kiy fir jo value 
               aayi usmein 3 ko include kiya fir jo value ayi usemin 
               5 ko include kiya*/

// let arr = [1, 2, 3, 5, 2, 1]
 
// const reduce_func = (h1, h2) => {
//         return h1 + h2 
// }

// let newarr3 = arr.reduce(reduce_func)
// console.log(newarr3)


/* Or .reduce() method ka use aise bhi kar saktein 
lekin aise ye jyada difficult ho jata hai.*/

// let arr = [1, 2, 3, 5, 2, 1]
// let newarr3 = arr.reduce((h1, h2) => {
//         return h1 + h2
// })

// console.log(newarr3);





/*==========
   class 6 (Prctise set)  Dated Staurday-30-september-2023
=========== */

/*Question 1 :- Ek array of numbers banao aur user se input lo
                aur jo input user de raha hai usko array mein 
                add kar do .
  */

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// let a = prompt("Enter a number");

// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);



/*Question 2 :- Number ko add karte jou jab tak ko umein 0 Zero ko
                add nahi kiya jata hai.
Rule:-          do while loop se
  */

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let a;
// do{
//         a = prompt("Enter a number")
//         a = Number.parseInt(a)
//         arr.push(a)
// }while (a != 0);
// console.log(arr)



/* 
Question 3: - Filter for number divisible by to from a 
              given array
 */

// let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]
// let n = arr.filter((x) => {
//         return x%10 == 0
// });
// console.log(n);



/* 
Question 4: - Create an array of square of given numbers
note:- map aary return karta hai isliye .map ka use hoga
 */

// let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]
// let n = arr.map((x) => {
//         return x*x
// });
// console.log(n);



/* 
Question 5: - Ek array diya hai first and natural number ka 
              aur aapko reduce function ka use karke .
              factorial ko clalculate karna hai.
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let n = arr.reduce((x1, x2) => {
        return x1 * x2
});
console.log(n);