/* bind() mehtod :- by this method, we can bind an object to a common function, so that the function gives different result when its need.*/ 

/* 
const youtuber = {
    name: "thapatechnical",
    content: "programming",
    feature: function(){
        console.log(`My favorite youtuber name is ${this.name}. He made videos on ${this.content} topics. `)
    }
}

youtuber.feature(); */

/* *************
"The bind() method takes an object as an first arguement and creates a new function"

bind() mehtod :- bind method ke andar jaise hi first arguement pass karte hai to ek new function automatic create ho jata hai .
but first arguement object hota hai


Rule:- youtuber.feature method represent youtuber object ko 
represent kar raha hai isliye first arguement "youtuber" object aayega
 

Rule:- youtuberFun ko call kiya kyoki bind method mein arguement pass karte hi automatic ek function create ho jata hai*/

// let youtuberFun = youtuber.feature.bind(youtuber);

// youtuberFun();

 



//==== Next

/* Rule:- har object ke saath function ko bind karna
 */

const youtuber = {
    name: "thapatechnical",
    content: "programming",
}

const youtuber1 = {
    name: "thapatechnical1",
    content: "programming1",
}

const youtuber2 = {
    name: "thapatechnical2",
    content: "programming2",
}



//function mein bhi parameter ko pass kar sakte hai
//rating parameter pass kiya leking isko access karne ke liye this ki need nahi

function features(rating){
    console.log(`My favorite youtuber name is ${this.name}. He made videos on ${this.content} topics. I will love to give ${rating} star. `)
}

//bind youtuber
let you1 = features.bind(youtuber);

you1(5);

//bind youtuber1
let you2 = features.bind(youtuber1);

you2(5);

//multiple objects ko ek function se bind kar saktein hai.
 