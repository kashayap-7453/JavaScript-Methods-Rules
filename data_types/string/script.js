/* String ko do tarah se declare karte hai.
    1. const name = "hitesh";
    2. aise object ko declare kartein hai (given below) */


const gameName = new String("Hitesh-hc");


console.log(gameName[0]);
console.log(gameName.__proto__);


/* 
    Prototype mein aane wale sabhi mehtods ko .length ki tarah 
    use kar saktein hia.
 */
console.log(gameName.length);
console.log(gameName.toUpperCase());

// Rule:- charAt() method se check kartein hai ki kis index par kon sa 
    //   character hai 

console.log(gameName.charAt(2));


// .indexOf() method se character ka index number get karna

console.log(gameName.indexOf('t'));


// Rule:- .substring(start number, last number) is mehtod se  last
        //   number vali value se index number ek kam dega.

const newString = gameName.substring(0, 4);
console.log(newString);


// Rule :- .slice() method mein negative  value ka add kar saktein hai
// ex 

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);


// Rule :- .trim() mehtod exra spaces ko remove kar deta hai

const newStringOne = "  hitesh  ";
console.log(newStringOne);
console.log(newStringOne.trim());


/* 
Rule:- .replace() method yadi ham kisi file mein space dete hai to 
        use to url uski sthaan par "%20 " deta hai usko replace karne
        ke liye replace method ka use karte hai
 */

        const url = "https://hites.com/hitesh%20choudhary";
        
        console.log(url.replace('%20', '-'));
        
        console.log(url.includes('sundar'));


 /*  Rule:-  split() method ka use string ko array mein convert karne
            ke liye kiya jata hai 
            string ko array mein change karne ke liye "slace" and 
            comma (,) aadi ka hona chahiye */

const gameNameNew = new String("hitesh-hc-com");  

console.log(gameName.split("-"));