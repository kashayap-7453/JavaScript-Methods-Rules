/* Variable scope JavaScript mein ek ahem concept hai jo batata 
hai ki ek variable kis kshetra mein (scope) valid hai aur kahan 
se us variable ko access kiya ja sakta hai. JavaScript mein do 
prakar ke variable scopes hote hain: Global Scope aur Local Scope.  */

/* Global Scope (ग्लोबल स्कोप): Agar ek variable ko bina kisi     
function ke ya code block ke andar declare kiya jaye, toh us     
variable ka scope global hota hai, yani is variable ko poore     
program ke andar access kiya ja sakta hai. */

// example

// var globalVariable = 10;
// function displayGlobalVariable() {
//   console.log(globalVariable);
// }
// displayGlobalVariable();
// ====================================================

/* Global Varialbe :- kisi variable ko jab function ke bahar 
  ==================  banate hai vah global variable kahlata hai.
aur us variable ki value ko poore program mein kahi se bhi access 
kiya ja sakta hai . global variable ka scope global hota hai .

"global variable" jinka scope global hota hai vo tab tak valid ya 
available rahte hai jab tak complete window open rahti hai
jab window ya tab ko close karte hai to global variable delete ho jatein hai .
Agar aap new page open karte hai to global variable ka scope nay page mein bhi bana rahta hai.
 */

// Example
//global varialbe ko inside and outside dono tarah se access kiya
//ja sakta hai aur other function mein bhi access kar saktein hai
// saath hi block mein bhi access kiya ja sakta hai

// **Globla variable ka use tab karte hai jab ek variable ko poore program mein kai baar access karna ho.

/* 
var i = "I am globa variable"; //Global varialbe

function show() {
    document.write(i + "<br>"); //Inside function 
}
show();
document.write(i + "<br>");  // Out side function

// 2nd function
function disp() {
    document.write(i + "<br>"); //Inside function
}
disp();

if(true) {
    document.write(i + "<br>");  //inside block
}
 */

/* 
Local Scope :- Function ke andar jab kisi variable ko banate hai 
==============to usko local varialbe kahte hai.
        local variable function ke execute hone ke saat hi banta hai aur 
        function khatam hotein hi destroy ho jata hai.
        Local variable ka use jis function mein hota usko keval vo hi 
        function access kar saktein hai .
        function ke bahar ya fir other function usko access nahi kar sakta.
***** Ek function ke andar jab local variable bana rahe aur "var" 
        keyword ka use nahi karein to  vo local variable na hokar globla varialbe hoga.


 */

// example:-
// Global variable hai kyoki iskein andar "var keyword ka use hua hai"

/* function add(b) {
  a = 10; //Global Variable
  return a + b;
}
document.write(add(20));  */



function show(){
    //Global variable
    j = "I am Global variable inside Function";
    document.write(j + "<br>");
}
show();

document.write(j + "<br>");

function disp(){
    document.write(j + "<br>");
}
disp();

// If block mein bhi access kar saktein hai

if(true){
    document.write(j + "<br>");
}

// Local variable
// Example

/* function show() {
    //Local variable
    var j = "I am Local Variable.";
    document.write(j + "<br>");
}
show(); */

//Local varaible ko function ke baha se access nahi kiya ja sakta.
// document.write(j + "<br>");