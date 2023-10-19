// Rest parameter explain (thapa technical)

 /* 
 Arguements:- jab function ko call karte hai aur usmein jo 
              value pass karte hai usko function arguement boltein hai
 example ->        sum(1, 2, 3, 4, 5, 6)
                        (parameter)

 function define karna-
 example:-  function sum(a,b){
                console.log(a+b);
            }
            sum(1,2,3,4,5,6)
  */




//  es5 :- mein function ke all arguements ka total nikana
  
// function sum(a,b,c,d,e,f){
//     console.log(a+b+c+d+e+f);
// }

// sum(1,2,3,4,5,6);


/* 
//  es6 :- mein function ke all arguements ka total nikana

Rest parameter ek JavaScript feature hai jiska istemal 
functions mein multiple arguments ko ek array mein 
collect karne ke liye kiya jata hai. Rest parameter ka 
syntax ...restParamName hota hai. Isse aap functions ko 
flexible bana sakte hain aur dynamic tarike se arguments ko manage kar sakte hain.
 */

function sum(...inputs){
    console.log(...inputs);
    let total = 0;
    for(let i of inputs){
        total += i;
    }
    console.log(total);
}

// sum(1,2,3,4,5,6,7,8,9);

// for(let i of inputs):- inputs ki value i mein add ho jayegi



// Extra example 

function fun(a,b,...c) {
    console.log(`${a} ${b}`);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf('Edan'));
} 

fun('Ronaldo','Neymar','Pele','Messi','Edan');