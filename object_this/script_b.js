// Object method "this exercise" ---->>>>

/* Explain:- Regular function ko kahi par create karo vo keval 
             global object ko refer karega */

/* 
Rule:- yaha par ek object ke andar ek method ko create kiya aur 
       us method ke andar ek regular function ko create kiya lekin 
       regular function keveal global object ko hi refer karta hai.
*/

const mainObject = {
    name: "Ram kumar",
    qualif: "MCS",
    sum: function() {
        console.log(this.name);
        var add = 2 + 2;
        console.log("sum of two no. is " + add);
        console.log(this);

        function child() {
            var name = "kumar";
            console.log("child method name " + name);
            console.log(this);
        }
        child();
    }
}

mainObject.sum();

