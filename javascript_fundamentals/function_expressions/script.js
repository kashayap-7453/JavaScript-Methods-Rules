// Immediately Invoked Function Expressions (IIFE)

/* IIFE :- global scope ke pollution se problem hoti hai kai baar 
           global scope ke variables ya jo bhi declaration ke pollution  ko hatane ke liye use kiya. */

//Example
/*

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

*/
// chai ke baad jo execution call lagaya tha use wrap karke 
// usko function ke turnat baad laga diya.

// IIFE  ka use arrow function mein karna 

// ( () => {
//     console.log(`DB CONNECTED TWO`);
// })();

// line break karne ke liye semicolon (;) ka use karte hai 


// name yaha as a arguemnt pass hua hai
// ( (name) => {
//     //Unnamed IIFE
//     console.log(`DB CONNECTED TWO ${name}`);
// })("hitesh");
// jo bhi exicute kar raha hai usko hitesh paramter de diya



// ============================
//         IIFE
// ============================

/*
let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(456)
        }, 4000)
    })
}

let f = async () => {
    
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
}

f();

*/
// ==== IIFE method se ====


let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(456)
        }, 4000)
    })
}

(async () => {
    
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
})();

// baad mein parenthesis se function ko call kiya hai