// class constructor and static [ES6]
// ============================

/* Class :- class ke andar ke andar properties bhi add kar saktein 
            hai aur functions ko bhi add kar saktein hai.
            class ek object ki tarah work karta hai. */


/*
Question:- Constructor kab call hota hai?
Answer:- class se jaise hi ek object Initialize hoga/
        jo "new" keyword hota hai jaise hi kaam mein lete hai constructor call ho jata hai
*/

// user ke liye class ka use 

/* Rule :- encryptPassword ek method hai kyoki password clear 
           format to nahi likhoge isliye password ko encrpt kiya. */

//Username ko upper case mein kiya aise hi upper case ka use kart hai

/*           
class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

// isse ab ek user banaya

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername()); */


//=================
// behind the scene
// ================
/* User:- ek function hai lekin ye ek object ki tarah hi behave karta hai. isliye
.prototype ke use se ham function ko add kar sakte hai */

/* 
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername()); */



// ================== class second ====================


class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
} 

/* 
User ko teacher bana rahe hai isliye  
"extends keyword ka use hua hai."

Rule:- constructor ko overwrite karna chahoge kyoki teacher alag hi 
       constructor  hona chahiye technicaly.
 */

/* 
Rule:- "Super" keyword ka use jaise hi karenge pale vo user ke andar jayega username keyword ko set karega.
 */
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password  = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");

chai.addCourse();


// user se masalaChai ka use 

const masalaChai = new User("masalaChai");


// Check - masalaChai ke addCourse ka access hai ya nahi
// masalaChai.addCourse();

// Check - masalaChai ke logMe ka access hai ya nahi
masalaChai.logMe();



// Qus. chai equal hai masalChai ke .
console.log(chai === masalaChai); //false

// Qus. chai equal hai masalChai ke .
console.log(chai === Teacher); //false

/* 
Rule :- uska ek instance hoke aaya hai usko exact thoda lekar aaya hai isliye 
"instanceof" keyword ka use hota hai kya chai teacher se bani hai
 */

console.log(chai instanceof Teacher);


// ================== Next classb ======================

/* 
Rule:- ek user banaya aur usko ek unique id di
 */

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    createdId(){
        return `123`
    }
}