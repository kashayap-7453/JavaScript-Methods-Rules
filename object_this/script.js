// ----------- Object method this ------------

/*  Rule:- Alone this refers to the global object.
        (agar this ka use ham akele karte hai to ye window object 
         ko refer karta hai) */

// console.log(this);


/* Rule:- Agar regular function ke andar ham this keyword ka use 
          karte hai to " window object " ko refer karega 
 */

// function sum() {
//     var add = 2 + 2;
//     console.log("sum of two no. is " + add);
//     console.log(this);
// }

// sum();


/* Rule:- In a mehtod, this refers to the owner object. 
          (jab ek object ko banate hai aur us object ke andar ek 
           method ko create karte hai aur uske andar this object ko likhte hai
           to vo main object ko refer karta hai)
 */

// const mainObj = {
//     name: "Ram kumar",
//     qualif: "Arts",
//     sum: function(){
//         var add = 2 + 2;
//         console.log("sum of two no. is " + add);
//         console.log(this.name);
//         console.log(this);
//     }
// }

// mainObj.sum();


/* Rule :- regular function ke andar " this " ka use karte hai aur 
           "strict mode ka bhi use ho to" this undefined ko refer karega 
 */

// "use strict"

// function sum() {
//     var add = 2 + 2;
//     console.log("sum of two no. is " + add);
//     console.log(this);
// }

// sum();