// for..Each loop
// ==============

// For..loop koi bhi value return nahi karta hai.

//exmaple
/* 
const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach( (item) => {
    console.log(item);
    return item
})

console.log(values); */


 /* filter() method ke use
 =========================== 
 Rule:- filter method :- call back function hai 
      filter mehtod ke andar har value ko access kiya jata hai.
      uske baad condtion ka use hota hai.

Rule:- fileter method mein ja curly braces ka use hota hai to return keyword ka use hota hai.
      
 */

/* 
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter( (num) => {
    return num > 4
})

console.log(newNums); */



/* for..each method se
========================
same example question for Each method se  */
/* 
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = []

myNums.forEach((num) => {
    if(num > 4){
        newNums.push(num)
    }
});

console.log(newNums) ; */

// Data base question filter based
// =================================

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1982, edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1992, edition: 20010},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1999, edition: 20014},
    {title: 'Book Five', genre: 'Science', publish: 1989, edition: 1996},
    {title: 'Book Six', genre: 'Fiction', publish: 2009, edition: 2009},
    {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
    {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
];

// // question1:- History books kis kis object mein hai ?
// const userBooks = books.filter( (bk) => bk.genre === "History");
// console.log(userBooks);

// question2:- 2000 ke baad published books kis kis object mein hai ?
const userBooks = books.filter( (bk) => {
    
});
console.log(userBooks);