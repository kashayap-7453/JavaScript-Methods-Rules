// Loops ko Iteration and Iterator bhi bolte hai
/* 
for..loop :- Jaise hi for keyword ka use kiya uske baad index 
(variable) initialize hota hai. uske baad condition check hoti hai 
yadi condition true hoti hai to curly brushes mein jo bhi likha uska
Execution hoga example- console se print karna ya data base ko call 
karna hai . jaise hi call ho gaya to iteration end hone se pahle index ko badha deta hai.
fir yehi process chalti rahti hai*/


// for(let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element)
// }


// for loop mein condition add karna 
// (element == 5) condition true hone par if ki value 5 execute hone se pahle print hogi

// for(let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element)
// }


/* 
for..loop ke andar for..loop ka use karna :- jab do for loop ka use 
karte hai to do tarah ke loop banenge ek outer loop and ek inner loop
 */

// for (let i = 0; i <= 10; i++){
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value ${j} and inner loop ${i}`)
//     }
//     // debugger;
// }


// for..loop ke use table print karna 
// for (let i = 1; i <= 10; i++){
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + ' * ' + j + ' = ' + i*j);
//     }
// }



/* 
For..loop basic array ke upar kaam karne ki koshish karta hai
 */

// let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length)

// debugger;
// for (let index = 0; index < myArray.length; index++ ) {
//     const element = myArray[index];
//     console.log(element);
// }



/* 
break key word ka use: tab karte hai jab hamein complete array ko 
print nahi karna ho jaise keval kuch hi value ko print karna hai 
condition ture hone par 'if' ki value print hogi fir break par aate 
hi loop chalna band ho jayega.
 */

// for (let index = 1; index <= 20; index++) {
//     if(index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`value of i is ${index}`);
// }



/*continue : jis condition ke liye continue ka use vo value print 
nahi hogi baaki sabhi value print hogi
ye ek bar hi skip karega lekin lekin value ke false hone tak loop band bahi hoga*/

for (let index = 1; index <= 20; index++) {
    if(index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`value of i is ${index}`);
}