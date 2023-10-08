// Date and Time
// time ka reference (Thu Jan 01 1970 05:30:01 GMT+0530 (India Standard Time) se liya jata hai


let now = new Date();
// console.log(now);

//yaha se time ka reference liya jata hai
let dt = new Date(0);
// console.log(dt);

// Date ko likhkar day ko bhi access kar saktein hai

// let newDate = new Date("2029-09-30");
// console.log(newDate);
// document.write(newDate);


// Date and time ko aise bhi likh saktein hai 
// let newDate = new (year, month, date, hours, minutes, seconds, milliseconds);
let newDate = new Date(3020, 4, 6, 9, 2, 34);
// console.log(newDate);

let yr = newDate.getFullYear();
// console.log("The year is", yr)

let dat = newDate.getDate();
// console.log("The date is", dat)

let month = newDate.getMonth();
// console.log("The month is", month)

let hours = newDate.getHours();
// console.log("The hours is", hours)

/* 
    .Set() method mein yadi limit se jyada value di jati hai to   ye apne aap ko time ke anusar change kar leta hai.
*/