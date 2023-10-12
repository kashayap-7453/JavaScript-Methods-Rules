/* 
====================  Set ======================
--> Set ka use unique value ko store karne ke liye hota hai
--> ismein same value ko do baar add nahi kar saktein hai */

const mySet = new Set(); //Initialize an empty set
console.log("The set looks like", mySet);

// Adding values to this set
mySet.add("this");
mySet.add("My name");
mySet.add("this");
mySet.add("that");
mySet.add(35);
mySet.add(true);
mySet.add(false);
console.log("The set looks like this now", mySet);

//Set ka size check karna .
console.log(mySet.size)

//. has ka use value ko check karne ke liye karte hai
console.log(mySet.has(35))


// Set()

// let mySet2 = new Set([1, 45, 'this', false, {a:4, b:8}]);
// console.log("New Set", mySet2);

console.log('Before removal', mySet.has('that2'));
mySet.delete("that2")
console.log('After removal', mySet.has('that2'))




// ==================== Iterating a Set ======================

// for of loop ki madad se "set" ko iterate karna.

for(let item of mySet) {
    console.log("Item is :", item);
}


// for..Each ki madad se set ko iterate karna.

mySet.forEach((item) => {
    console.log("Item is :", item)
})