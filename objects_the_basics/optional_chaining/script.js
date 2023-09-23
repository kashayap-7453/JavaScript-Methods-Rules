/*
  optional chaining ke use se jis value ke baad op.c. ka prayog hua hai
  yadi vo value exist karti hai to baad vaali value exist karegi nahi to 
  undefined ayega
 */

const user = {
    name: "Thapa",
    age: 28,
    address: {
        street: "Main St",
        city: "New Road",
        state: "PK",
        zipt: 10101,
    },
};

// console.log(user.address.city);

/* yadi address ke baad esi value ko pass kiy jaye jo exist nahi karti
to error aayega.
 => baad mein keval ek object rakha hai jo exist nahi karta tab bhi answer 
 undfined hi kuki baad mein keval ek object ko pass karta hai lekin beech mein 
 --> baad mein ek object aur rakha jo exist nahi karta ab error aaya
*/

// console.log(user.address.roadNumber.houseNumber);



// ========== Optional chainging =============

// optional chaining ke use se keval null ya undefined hi aata hai
//op.c ka use dot se pahle hota hai iska use kitni bhi baar kar saktein hai


// console.log(user.address.roadNumber?.houseNumber);


// uadi roadnumber exist karta to value karta to "houseNumber" ko refer karta


// console.log(user.address?.roadNumber?.houseNumber); 

//if address exist karega to roadNumber refer karega.

/* 
====================================
Array mein option chaining ka use
====================================
 */

/* 
Array object mein bhi object ki tarah hi op.c ka use hot ismein keval 
extra "square bracket([])" ka use hoga
 */

 const users = [
    {name: "John", age: 30},
    {name: "Johne", age: 25},
    {name: "Bob", age: 35},
 ];


//  Optional chaining  ke use se 

  
console.log(users[3]?.name);
 
 

 //op.c se pale if else ka use aise karte the

/*  if (users[3]) {
    console.log(users[3].name);
 }else{
    console.log(users[2].name);
 } */