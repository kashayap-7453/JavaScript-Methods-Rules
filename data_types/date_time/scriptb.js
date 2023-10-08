/* Date and Time :- 1. Javascript mein date ek object hai.
                    2. date ke sabhi method ko print karke dekhna hai 
                    3. Js mein jab Date ko koma "," dekar likhte ho tab "months" zero se start hotein hai lekin
                    jab dash "-" dekar likhte hai to months one se start hotein hai. */

/*Rule :- toLocaleString() ek better method iske andar object ko bhi define kar saktein hai  .
aur ismein ek baar mein kai properties ko define kiya ja sakta hai.
 mostimportant rule:________*/
                    
let newDated = new Date();

newDate.toLocaleString("default", {
    weekday: "long"
})

// let myDate = new Date();

//date ko string mein badalna
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// Date multiple types mein likha jata hai

// let myCreateDate = new Date(2023, 0, 23);
// let myCreateDate = new Date(2023, 0, 23, 5, 3);
// let myCreateDate = new Date("2023-01-14");
// let myCreateDate = new Date("01-14-2023");// India mein

// console.log(myCreateDate.toLocaleString());




/*  Date.now():-isse date milliseconds mein aaygi
================
Rule :- iska use tab hoga jab "pol" design karenge
.get.Time():- method se 1 january 1970 date ko nikalenge aur dono
ko compare karenge */


// let myCreateDate = new Date("01-14-2023");

// let myTimeStamp = Date.now();

// console.log(myTimeStamp)
// console.log(myCreateDate.getTime());

// jab current Date ya kis bhi date ko seconds mein change karte hai to answer decimal mein aata usko change karte hai(Math.floor) se.


// console.log(Math.floor(Date.now()/1000));

// full Time ko print karna 

// let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// aise access kar saktein hai self practice
// `${newDate.getDaty()} and the time is`


