// <---------------->object literals<---------------->

// symbol ko pale define kiya jata hai fir baad
// mein object mein squre bracket mein use hoga(variable as a syntax likha jayega)
// Rule  - syntax ko likhne ka tareeka ex. [mySym]

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

/*
object ki value change karna aur 
object ko freeze karna taki baad mein us
value ko koi change nahi kar sakein
*/

JsUser.email = "hitesh@chatgpt.com"
//value ko add karne ke liye pahle freeze ko 
// comment karna hai
// Object.freeze(JsUser)       // Freeze object
console.log(JsUser);
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);


/* 
object ke andar kisi function add karna aur object ke andar 
function ko vaise hi access karte hai jaise ki 
normal function mein
*/

JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting());


/*
  object ke andar name ko reference karne ke this property ka use
  karenge kyoki this ke baad dot (.) ka use karte hi object ke 
  sabhi name aa jayenge
*/


JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());

console.log(JsUser);