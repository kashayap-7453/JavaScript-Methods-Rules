/* 
jab hamko pata ho ki do se jyada object mein same property aur 
method hai to unki keval value change hai
tab "constructor" ka use karte hai
 */


// in dono example mein keval value change hui hai agar aisa 10 bar
// karna ho tab "constructor method ka use hoga"
/* 
var student1 = {
    firstName: "vishwajeet",
    lastName: "kumar",
    age: 25, 
    class:5
}

var student2 = {
    firstName: "ajeet",
    lastName: "kumar",
    age: 20, 
    class:3
}
 */

/* -----------------------------------
        object constructor
----------------------------------- */

/* 
 jab bhi constructor ka use karte hai tab function name ko capital 
 rakhte hai taki pata ho ki ye constructor hai yar fir normal function
 isse code quality mein bhi achchhi hoti hai.
 */

// function Student(first, last, age, cls){
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.class = cls;
// }


/* jab constructor mein koi property ya fir method ko add kate hai
to vo sabhi mein add hoga
 */

function Student(first, last, age, cls){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
    this.nationality = "Indian";
    this.name = function(){
        return this.firstName + " " + this.lastName;
    }
}

// ye upar diya hua complete "Object constructor function" hai

// Real objec create karna
// aise hi ham jite chahe object create kar saktein hai

var student1 = new Student("vishwajeet", "kumar", 25, 5);
// var student1 = new Student("ajeet", "kumar", 22, 3);
// var student1 = new Student("jeet", "kumar", 18, 10);

//Rule student1 mein ek property add ki

// student1.nationality = "Inian";


//Rule student1 mein method ko add karna

// student1.name = function(){

//     return this.firstName + " " + this.lastName;
// }

console.log(student1); 
