/*  Symbol ke Description ko check karne ke leiye 
.description method ka use karte hai */


// let id = Symbol("Hello");

// console.log(id);

/*  document ke andar symbol ka use kane ke liye (.toString) mehtod 
 ka use karte hai */

// console.log(id.toString());



/* (.description) is method se symbol ke andar ka description 
prapt kar saktein hai
 Description method hai */
// console.log(id.description);



/* ============================
Object mein symbol ka use
============================ */
/* 
Object ke andar symbol ka use karne ke liye pale symbole ko define
karte phir object ke andar variable ko ko square bracket ke andar
likhte hai .
 */

let age = Symbol();

let user = {
    name: 'Yahoo Baba',
    class: 'Betch',
};

user[age] = 25;

console.log(user.class);
console.log(user[age]);

// object mein symbol ko add karna

// Rule:-

//mainObject + [vriable name] = "value";

// symbol ko declare karne ke liye

//mainObject + [vriable name] 