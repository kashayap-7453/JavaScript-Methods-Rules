//   Apply() mehod in javascript
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Rule:- The apply() method is similar to the call() method.
// The call() mehtod takes arguments separately.
// The apply() mehtod takes arguements as an array.

/* Rule:- apply() method mein arguements ko array mein pass karte hai*/

// Call method in javascript
//====================

const youtuber1 = {
    name: "ThapaTechnical",
    content: "Programming",
    feature: function(rating,support){
        console.log(`very friendly way of teaching. ${this.name} is my fav ${this.content} channel. I will love to give ${rating} star. Please ${support} ${this.name} channel.`);
    }
}


// youtuber1.feature(5, "subscribe");



const youtuber2 = {
    name: "kuchbhi",
    content: "programming@vlog"
}


// call() method ka use
// youtuber1.feature.call(youtuber2, 5, "subscribe");

// apply() method ka use
youtuber1.feature.apply(youtuber2,[5, "subscribe"]);


// ============ Other rule 

// Rule:- Math.max ka use maximum number nikalne ke liye karte hai.
//   lekin Array mein iska use nahi hota hai
//Example_____

let max = Math.max(1,2,3);
console.log(max);


// Rule:- Math.max.apply() method se array ki maximum value ko 
//    access kiya jata hai.

let arrMax = Math.max.apply(null,[1,2,3,4,5,6]);
console.log(arrMax);