//=========== map() ==============
// map ke map ka bhi use hota hai
//--> map ek call back function hai aur ye forEach se achha hota hai


// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Array ki pratyek value mein 10add kiya
// const newNums = myNumbers.map( (num) =>  num + 10 );


//{} jab scope ko open karte hai to return ka bhi use karte hai
// const newNums = myNumbers.map( (num) => {return num + 10});


/*  ------------ Chaining----------
 chaning ke anusar ek baar mein do se teen ya fir 
 usse jyada method ka use ek saath kar saktein hai. */

 /* .map mein num ko pass kiya fir num ko 10 se multiply kiya 
  to ye complete aaray ban gaya hai jisme 10 se multiply kiya 
  ismein fir se map method ka use hua hai to jo naya array create
  hua hai usmein "num" mein ek "1" add kiya . */

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  
 const newNums = myNumbers
                    .map( (num) => num * 10)
                    .map( (num) => num + 1)
 
// console.log(newNums);