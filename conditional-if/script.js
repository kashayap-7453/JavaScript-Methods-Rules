// Rule :- If else statement 

// let age = 18;

// if(age >= 17){
//     console.log("you can vote!");
// }else{
//     console.log("you cannot vote!")
// }


// Rule :- If else statement se Logical and ki madad se do value ko check karna

// let age = 18;
// let hasVoterCar = "yes";

// if(age >= 18 && hasVoterCar == 'yes'){
//     console.log('you can vote.');
// }else{
//     console.log("you cannot vote.");
// }

// Rule :- If else if statement se Logical and ki madad se do value ko check karna
//         else if statment mein apni ichchha ke anusar value ko kitne bhi baar check kar saktein hain

/*
let age = 18;
let hasVoterCar = "no";

if(age >= 18 && hasVoterCar == 'yes'){

    console.log('you can vote.');

}else if(age >= 18 && hasVoterCar != 'yes') {

    console.log("Get your voter id card.");

}else{

    console.log("you cannot vote.");
}
*/


//Rule :- Nested if ka use karna

// let age = 18;
// let hasVoterCar = "no";

// if(age >= 18){

//     if(hasVoterCar == 'yes'){
//         console.log("you can vote.");
//     }else{
//         console.log("Get your voter id card.")
//     }

// }else{
//     console.log("you can not vote.");
// }


// Rule :- yadi account loggin hai to logout ka button aayega nahi to login ka
/*
let isLoggedin = 0;


if(isLoggedin == 0){
    document.write("Login");
}else{
    document.write("Logout");
};
*/

// ===============================
//       Ternary operator
// ===============================

// Rule :- Ternary operator ka use tab karte hai jab value assign karni ho
//         jab  code ek line ka ho
/*
let isLoggedin = 0;

let option = isLoggedin == 1 ? "Logout" : "Login";
//      condition                 true       false

document.write(option);
*/

// Rule :- Undefined situation se bachna

let user;

// user = "vishavjeet";

alert(user ?? "Guest User");