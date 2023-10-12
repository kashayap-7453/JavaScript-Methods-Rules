                    /* ===================
                        spread operator 
                    ==================== */
/* 
Spread operator aur spread syntax dono ek hi chiz ko refer karte hain, 
yani dono ek hi concept ko represent karte hain, aur inka matlab ek hi hota hai. 
Spread operator ya spread syntax, ... (three dots) ka use karte hain.

Iska matlab hai ki dono ke beech koi bhi antar nahi hai aur aap dono shabdon ka istemal 
ek hi chiz ko describe karne ke liye kar sakte hain. Spread operator ya spread syntax ka use 
array ya object ke elements ya properties ko copy karne ya alag variables mein spread karne mein hota hai, 
jisse aap un elements ya properties ke sath aasani se kaam kar sakte hain. */

// es5 
// ismein apply() mehtod ka use kiya apply() mehtod replace karta hai


function sum(a,b,c){
    console.log(a+b+c);
}

// sum(1,2,3);

var arrVal = [5,2,3];
sum.apply(null, arrVal);



// es6
function sum(a,b,c){
    console.log(a+b+c);
}

let arrValue = [5,2,3];
sum(...arrValue);



/* 
Rule:- 2 ya 2 se jyada Arrays ko merge karne ke liye Pahle 
       .concat() method ka use karte ab vo hi kaam spread Operator 
       se aur aasani se kar saktein .
 */

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];

// .concat method se 
// arr1 = arr1.concat(arr2);

// spread operator se 
arr1 = [...arr1,...arr2,...arr3];
console.log(arr1);


// spread operator ke use one array ki vlaue ko doosre array mein 
// pass karna aur do value ko extraa add karna 
// push mehtod ke use se value dono mein add ho jati hai 

// let arrc1 = [1,2,3]
// let arrc2 = arrc1;
// arrc2.push(4,5);
// console.log(arrc2);
// console.log(arrc1);

/* 
spread operator ke use se complete array two mein add kiya aur ,
koma dekar 4 , 5 likha dono value last mein add ho jayegi
 */

let arrc1 = [1,2,3]

let arrc2 = [...arrc1,4,5];
console.log(arrc2);
console.log(arrc1);