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


/* Rule:- jab ek method pahle se bana ho to usko doosre object 
mein access karene ke liye call method ka use karte hai

explain call rule:- method ke owner object ka name dot method ka 
naam uske baad dot lagar call aayega Phir parenthesis ke andar us 
object ka naam likhna jiske andar method ko access karna hai .complete
 */

/* 
Rule:- function mein jo parameter pass hue unke liye function ko   
call karte hai tab arguement de saktein hai.

Rule:- .call method mein 1st arguement mein to object ka naam 
likhte hai .fir function jaise arguement likhte hai vaise hi call 
method mein first arguement object ka naam baad mein parameter pass honge.

 */
const youtuber2 = {
    name: "kuchbhi",
    content: "programming@vlog"
}

youtuber1.feature.call(youtuber2, 5, "subscribe");