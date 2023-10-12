/* 
    Reckursion: When Function call iteself
    otherwise it will get called for infinite time
    If a function call itself then there must be an end poin
 */

/* 
Recursion :- Jab ek function apne aap ko call karta hai aur baar-barr call karta hai to vo Infinity tak chalta rahta hai.
 */

/* 
Recursion:- Condition ke hisaab se function ko recursively call karna but waha par ek condition hogi agar condition true hui to function ko return kar dega aur function chalna band ho jayega.
 */

// function demo() {
//   //function with defination
//   console.log("Hello and Welcome");
//   //   demo();
// }

// demo();

/*Return (return;) blank hai to ye function ko call karega .
 */
let counter = 1;
function demo(number) {
  if (counter > number) {
    return;
  }
  console.log("Hello and Welcome" + counter);
  counter++;
  demo(number);
}

// demo(10);