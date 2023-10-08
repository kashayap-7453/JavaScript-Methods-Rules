// ================== Object Destructurring in Es6 ============

// const bioData = {
//   name: "Ram",
//   age: 20,
//   deg: "MCS",
// };

/* Rule :- yadi ismein name key ki value ko access karna ho 
        tab (bioData.name) likhna hoga.
isko destructuring mein bahut aasani se likha ja sakta hai */

// ex
// console.log(`my name is ${bioData.name}`);

/* Rule:- destructuring object : object ko destructrue ko karne ke
          keys ko curly brushes mein serial vise likhna hai aur
          is equal to likhkar object ke name ko likhna hai.*/

// const bioData = {
//   name: "Ram",
//   age: 20,
//   deg: "MCS",
// };

// let { name, age, deg } = bioData;

// console.log(
//   `my name is ${name}. MY age is ${age} and My Highest qual. is ${deg}.`
// );

/* 
 Rule :ko destructure karna second method se (not use full)
 */

//  let name, age, deg;

//  ({name, age, deg} = bioData);

//  console.log(
//     `my name is ${name}. MY age is ${age} and My Highest qual. is ${deg}.`
//   );

/* 
Rule :- Properties ko bhi rename kiya ja sakta hai
************
// properties ko rename karke usko pahle name(property) se 
   bhi access kar saktein hai.
 */

// const bioData = {
//     name: "Ram",
//     age: 20,
//     deg: "MCS",
// };


// let { name: myName, age: ages, deg } = bioData;

// console.log(
//   `my name is ${myname}. MY age is ${ages} and My Highest qual. is ${deg}.`
// );

/* 
Rule :- Object ke andar object ka use (multiple object use)
 */

const bioData = {
    name: "Ram", 
    age: 20,
    deg: "BA",
    hobb: {
        first: "playing",
        sec: "web designing"
    }
}

let {name:myName, age:ages, deg, hobb} = bioData;

// console.log(`my name is ${myName}. my age is ${ages} and My highest qualification is ${deg}. I love making ${hobb.sec}`);