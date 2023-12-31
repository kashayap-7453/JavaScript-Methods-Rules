/*     ============  Maps in javascript ===========
We can use any type of key of value:-
function, string, blank object bhi use kar saktein hai as a key. */

//Empty map Object

const myMap = new Map();

const key1 = 'myStr', key2 = {}, key3 = function(){};

// Setting map values :- jo keys difine ki unko map method mein add kiya
myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is a blank object');
myMap.set(key3, 'This is an empty function');

console.log(myMap);


//Getting the values from a Map:-(Map ki value ko prapt (get) karna)
//Aise hi sabhi keys ko get kar saktein hai.

let value1 = myMap.get(key1);
console.log(value1);

//Get the size of the Map :- map ka size nikalna
console.log(myMap.size);

// You can loop using for..of to get keys and values   
for (let [key, value] of myMap) {
    console.log(key, value);
}

//Get only keys
for (let key of myMap.keys()) {
    console.log('key is', key);
}

// Get only values
for (let value of myMap.values()) {
    console.log('value is', value )
}


//Rule:- You can loop through a map using for each loop
/* 
 most importan rule:- .forEach mein "value" ko pahle 
                       likhna hai aur key ko baad mein likhna hai
 */

myMap.forEach((value, key) => {
    console.log('key is', key);
    console.log('value is', value);
})


//converting map to an array
let myArray = Array.from(myMap);
console.log('Map to array is ', myArray);

//converting map keys to an array
let myKeysArray = Array.from(myMap.keys());
console.log('Map to keys array is ', myKeysArray);

//converting map values to an array
let myValuesArray = Array.from(myMap.values());
console.log('Map to values array is ', myValuesArray);
