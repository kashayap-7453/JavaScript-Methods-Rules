//=============//Set//============//

// Array :- array mein kitni bhi duplicate value ka use karte hai

/* Set :- 1. Set collection of unique value ka hota 
             if ismein duplicate value ko put karte hai to
             duplicate value automatic remove ho jati hai. 
             
           2. Set mein element ko add karna remove karna,
            size check karna ye sab kaam kar saktein hai.

           3. Set ke andar koi bhi unique value ko rakh saktein
              ho ex. string , number, boolean etc.*/


              
// let data = new Set([1, 4, 6, 7, 2, 10, 13, 1, 1, 1]);

//blank kiya
// let data = new Set();

//new value ko add karna
// data.add("hello");
// data.add("hi");

// complete data remove karna
// data.clear();

// data remove karna 
// data.delete("hi")

//ismein loop bhi chala saktein hai
// data.forEach((item) => {
//     console.warn(item)
// })

//ismein for loop bhi chala saktein hai
// for(x of data) {
//     console.warn(x)
// }

// console.warn(data);


//har ek value ko 10 se multiply karna "Set" ki.
// data.forEach( items => {
//     console.warn(items * 10);
// } )



// Array ko set mein convert karna.

// let arr = [10, 30, 40, 50, "a", "c"]
// arr = new Set(arr)
// console.warn(arr);



// "Set" ko array change karna.

// let data = new Set([20, 1, "abc", "yz"]);
// data = [...data];
// console.warn(data);