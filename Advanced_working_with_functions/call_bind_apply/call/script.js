/* 
call :- 1. call method ka use "reference" ko hold rakhne ke liye kiya jata hai.
2. call ka use jab bhi karte hai tab firstparameter "this" ko 
optionally pass kar saktein hai. jisse vo current context ko access kar sake.

Defination of Reference :- uske andar jo variables declare ho rahe hai aur jo function call ho rahe hai ya fir jo bhi return ho raha hai.
 */


function SetUsername(username) {
    //COMPLEX DB calls
    this.username = username
}

function createUser(username, email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai)