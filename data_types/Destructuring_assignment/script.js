/* 
pahle array ko destructure kiya fir jo value remaining this uske 
liye three dot and rest likha jisse remaining value array 
mein convert hogi
 */

// let arr = [3, 5, 8, 9, 12, 14];
// let [a, b, c, d, ...rest] = arr
//aise bhi value ko access kar saktein hai .
// let a = arr[0]
// let b = arr[1]
// console.log(a, b, c, d, rest);

/* Rule :- value a ki aur keval rest ki value print karni ho 
          tab b, c, and d ko blank rakhna hai(empty).
 */

//   let [a, , , ...rest] = arr;
//   console.log(a, rest);



/* Example 2 
             Similarly we can desturcture objects on the left hand
             side of the assignment.*/

let {a, b} = { a: 1, b: 5}
// console.log(a, b);


/*  ==================== New lesson (Spread Operator)==============
Array ko object mein convert karna
 - object mein convert karne ke liye three dot plus array ka name use hoga
Rule:{...arr1} */

// let arr1 = [3, 5, 8]
// let obj1 = { ...arr1 }
// console.log(obj


/* 
Rule:- Array ki value ko function mein convert karna;
      Array ke andar olready teen values aur function bhi teen 
      value leta hai to teeno value function mein pass karna
 */

// let arr1 = [3, 5, 8];

// function sum(v1, v2, v3) {
//     return v1 + v2 + v3
// }

// console.log(sum(...arr1));



/* most important rule **********
Rule:-{ ...obj2, name: "John"} isse object mein name key ki 
      value change ho jayegi jo pahle harry thi vo john hogi.
      ismein ek se jyada value ko change kiya ja sakta hai
 */

      let obj2 = {
        name: "Harry",
        company: "Company xyz",
        address: "xyz"
      }

     //  console.log({...obj2, name: "John"})