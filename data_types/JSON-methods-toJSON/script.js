/* 
                JSON methods, toJSON :[ most Important ]
 
XML =>Shop services ke jamane mein XML API ka use karate the jo XML return
karti thi vo shop technologies par aadharit hoti thi 
-> XML ki human read ability bhaut kam hai
1. XML ek language ha.
2. XML ek markup language hai.
3. XML support karta hai "Comments and namespaces ko"


JSON (JavaScript Object Notation)  => 
  (1)   JSON ekdam strict forword hai read ability mein bhi aur use ability mein bhi achha hai JSON javascript mein object ki tarah likhi jati hai
  (2)   jSON  ka use Data ko stroe karna aur Exchange karne ke liye
  (3)   jSON  ka use javascript mein object ki tarah hota hai lekin ismein "key" and "value" dono  double quotation mein likhi jatai hai
  (4)   JSON "text based format" hai ye koi language nahi hai
  (5)   JSON support nahi karta hai "Comments and namespaces ko"
 */

/* 
Question:- What is API ?

Answer:- API (Application Program Interface) 
        hamne koi ek website banai ya to e-commerse pe ya fir kisi bhi topic par website banai aur
        aur iske andar jo programmin language use ki vo server sight hai "PHP".
        ismein jo database use hua hai vo hai "MYSQL" aur
        aap isi website ki do app bhi bana chahte hai
        (i) Android App :- android app banane ke liye "Android language" ka use hoga
        (ii) iPhone App :- iPhone App banane ke liye "Swift language" ka use hoga

---->    Ek question udhta hai ki jo Data hum website par dekhte hai vo hi Data App mein bhi dikhana chahte hai.
----->   Android app aur iPhone App seedhe se "MYSQL" ke data ko access nahi kar sakti 
         kyoki "MySqL" ke andar apni ek alag library hai uske alag databases  hai jiko vo use karti hai.
----->   Yaha par ham same hi data base use karna chahte hai "MYSQL" ke liye
------>   Aisa karne ke liye ham ek program likhte hai usko basicly "API" boltein hai
------>  API teeno program (Android App, Website iPhone App) se 
request leta hai vo request kaisi bhi bhi ho sakti hai (jo bhi ham code mein kaam karte hai)
jaise code ko update karna, delete karna, request karna vo
 ye request lekar "MYSQL " ko bhejta hai
 -----> MYSQL jo uski request hoti ahi usi request ke according data provide karta hai joki uska hota hai response uske 
          baad jo hamara api hota hai jaha se bhi request aayi hoti
          hai vaha par API , JSON ka data leta hai 
          vohi same JSON ka data kahi par bhi use kar saktein hai 
          website ke andar , Android App ke andar bhi
 */ 

//   ========*====*======*=====*======*======*=======*======
/* 

 */
{
        "name": "Harry",
        "score": 11.75,
        "isAdmin": false,
        "license": null,
        "shopItem": ["food", "clothes", "sunflower oil"],
        "myObj": {
                "name": "nested",
                "marks": 45,
                "shopItem": ["food", "clothes", "sunflower oil"]
        }
}

