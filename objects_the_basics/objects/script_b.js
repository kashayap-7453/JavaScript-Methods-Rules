/* 
object ko object literals  and singleton ki 
madd se declare karna 
1. singleton
2. Object. create
*/

/* Obect ko do tarah se declare kar saktein hai

1. singleton se 
ex. const tinderUser = new object()

2. Non singleton se 
ex. const tinderUser = {}
*/

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// object ke andar object(Nested object) ko declare karna  

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// value ko access karne karne ke liye dot (.) notation ka use
// karte hai

// console.log(regularUser.fullname);

// object ki nesting ko open karne ke liye ek aur dot lagate hain.

// console.log(regularUser.fullname.userfullname);

// dot(.) ka use ham apne anusar kitni bhi baar kar saktein hai



// arry ki tarah object ko combine karna and 
            // merge karna //

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

/* 
  ismein curly brushes {} empty object hair aur 
  obj1 and obj2 and obj4 source hai inka data 
  empty object mein store hoga .
  iska hi use achh hoga
 */
// const obj3 = Object.assign({}, obj1, obj2, obj4);
// console.log(obj3);


/* 
  empty object "{}" ka use n karne par value object 1 
  mein store hogi
 */
// const obj3 = Object.assign(obj1, obj2, obj4);
// console.log(obj3);

// merge karne ka best formula****************


const obj3 = {...obj1, ...obj2}
console.log(obj3);



// ----------- Array object ka use ---------

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// users ke andar first value ko access karne ke liye

users[1].email



// tinderUser ke andar check karna ki uske andar kya kya 

console.log(tinderUser);


// object ke andar ki total value, keys and entries get karna

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


// object ke andar check karna ki uske andar ye property hai ya nahi

console.log(tinderUser.hasOwnProperty("isLoggIn"));