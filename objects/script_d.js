// ------------ Object references and copying ------------

//**** ismein loop ka use nahi karna hai object.assign ka use karna hai

/*
   ek object ko doosre object mein assign karna 
   :- yaha par ek meomory block ke do object hai
*/

// let users = {
//     name: "Example",
//     age: 67
// }

// let clone = user;
// clone.name("John")
// dono value mein change aayega
// console.log(clone, user)

/* 
//object ko iterate value ko one by one copy karn

clone = {};

for( let user in users ){
    clone[user] = users[user];
}

// iteratin statement ka use karke iski cloning kar saktein hai
clone.name = "peter";
console.log(users, clone);
 */



/* 
// Object.assing method se ham same kaam kar saktein hai
// is method se ham property bhi add kar saktein hai

clone = {};

// let property = {name2 : "john"};

// Object.assign(users , property);

//direct bhi property ko pass kiya ja sakta hai

Object.assign(users , {name2 : "John"});


console.log(users);
 */


/* 
// Naya object banana and period of object ko use karna

// let clone = Object.assign({}, users);
// clone.name = "peter";
// console.log(users, clone);

const person = {
    name: "John",
    lastName: "Doe"
};

person.name = "Robert";

console.log(person);
 */