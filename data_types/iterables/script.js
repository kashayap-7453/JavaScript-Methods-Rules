// Class 1
//  ========== Iterator  ===========

/* 
Iterator :- Data structure ko iterate karna ismein ye array ko iterate 
            kar rah hai ye array ki value ko ek ek kareke access kar raha 
            
        --> Iterator - jab iterator ka use karte hai to ham apne anusar kisi bhi value ko 
                     print kar saktein hai 
        --> lekin loop mein ek baar mein sabhi value print hoti hai.
 */
// function mein jo name "values" di uske sthaan par kuch bhi likh saktein hai
// let nextIndex = 0 ; isliye kiya kyoki array index zero "0" se start hotein hai

/* function fruitsIterator(values){
    let nextIndex = 0;
    //we will return an object
    return {
        next: function () {
            if (nextIndex < values.length) {
                //we will return below object
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else{
                //we will return below object with only done
                return {
                    done: true
                }
            }
        }
    }
}


const myArray = ['Apples', 'Grapes', 'Oranges', 'Bhindi'];
console.log("My array is ", myArray)

//Using the iterator 
const fruits = fruitsIterator(myArray);
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
 */