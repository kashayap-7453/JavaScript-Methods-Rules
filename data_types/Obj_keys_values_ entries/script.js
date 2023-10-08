/* 
JavaScript mein Object.keys(), Object.values(), aur 
Object.entries() methods objects ke properties ko access karne 
aur iterate karne ke liye istemal hote hain.
 */

//Object.keys();
//Object.values();
//Object.entries();



//Object.keys();
//Rule:- object ki keys ka array deta hai

// const obj = {
//     name: "ram",
//     age: 33,
//     gender: "male"
// }

// let keys = Object.keys(obj);
// console.log(keys);

// if(keys.length) {
//     console.log("keys are present")
// }else {
//     console.log("empty")
// }




//Object.values();
//Rule:- object ki values ka array deta hai
// (values.inclues()) ye mehtod value ko check karta hai

// const obj = {
//     name: "ram",
//     age: 33,
//     gender: "male"
// }

// let values = Object.values(obj);

// console.log(values);

// if(values.includes("ram")) {
//     console.log("ram is present.");
// }else {
//     console.log("ram is not present.")
// }


//Object.entrie();
//Rule:- object ki values ka array deta hai
// (values.inclues()) ye mehtod value ko check karta hai

const obj = {
    name: "ram",
    age: 33,
    gender: "male"
}

let entries = Object.entries(obj);

console.log(entries);


// Object ka destructuring
const person = {
    name: "John",
    age: 30,
    city: "New York",
    fullName: {
        firstName: "Ram",
        lastname: "kumar"
    },
    name: function(name) {
        console.log(`Hello and welcome ${name} kumar`)
    }
  };
  
console.log(person.name)

/*   // Object ke properties ko variables mein extract karke assign karna
  const { name, age, city } = person;
  
  console.log(name);  // Output: "John"
  console.log(age);   // Output: 30
  console.log(city);  // Output: "New York"
   */