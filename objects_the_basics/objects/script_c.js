//---------------- Destructuring Object in javascript ------------------

//Destructuring mein value ko baar baar print karna

const course = { 
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor);
/*
objec ko destrue karna
ex. courseInstructor ke samne colon ka use kiya aur usko apne 
    hisab se naam de diya 
 */

// const {courseInstructor} = course
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);



// ---------------- React use -----------------
//react mein destructuring ke liye company ko curly brshes mein rakha hai

/* const navbar = ({company}) => {

}

navbar(company = "hitesh");

console.log(navbar); */