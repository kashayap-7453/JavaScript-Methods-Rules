/*

let day = 3;
let dayName;

switch(day){
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tudesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Aisa din nahi hai";
}

console.log(dayName);

*/

// =========================
//       Else if method
// =========================
/*

let input;

input = "y";

if(input === 1){
    document.write("continue....");
}else if(input === "y"){
    document.write("continue....");
}else if(input === "yes"){
    document.write("continue....");
}else if(input === 0){
    document.write("End....");
}else if(input === "n"){
    document.write("End....");
}else if(input === "no"){
    document.write("End....");
}else {
    document.write("Wrong input");
}

*/


// =========================
//      switch statement
// =========================

/*

let input;

input = 1;

switch(input){
    case 1:
        document.write("continue....");
        break;
    case "y":
        document.write("continue....");
        break;
    case "yes":
        document.write("continue....");
        break;
    case 0:
        document.write("End....");
        break;
    case "n":
        document.write("End....");
        break;
    case "no":
        document.write("End....");
        break;
    default:
        document.write("wrong input");
        break;
}

*/

// jav value same ho to short mein likhna isse bhi answer same aayega.



let input;

input = "no";

switch(input){
    case 1:
    case "y":
    case "yes":
        document.write("continue....");
        break;
    case 0:
    case "n":
    case "no":
        document.write("End....");
        break;
    default:
        document.write("wrong input");
        break;
}