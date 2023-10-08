/* WeakSet :- weakset mein keval object ko store kar saktein hai
             iterate nahi kar saktein. 
             iske andar for..each and for..of loop ka use nahi hota  */

let ws = new WeakSet();
var obj1 = { name: "Tiger" };
var obj2 = {};
ws.add(obj1);
ws.add(obj2);
console.log(ws);

//   object ko check karna
console.log(ws.has(obj1));

/* WeakMap :- weakMap mein keval object ko store kar saktein hai
             iterate nahi kar saktein. 
             iske andar for..each and for..of loop ka use nahi hota  */

let wm = new WeakMap();
var obj3 = { name: "Ajay" };
var obj4 = {};
wm.set(obj3, "Private");
wm.set(obj4, "Private data");
console.log(wm);

//   object ko check karna
console.log(wm.has(obj4));
