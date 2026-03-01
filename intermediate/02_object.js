
const mysyb=Symbol("key1");

const  jsUser={
    name:"saksham",
    "full name":"saksham yaadv",
    [mysyb]:"mykey1",
    age:20,
    location:"jaipur",
    email:"hitesh@oogle.com"
}

// two way to access the object element 
// 1 -> using objname.key 
// 2->using objname["key"]
// interview important question 

// to fix all the property of object use
// Object.freeze(jsUser);
jsUser.email="name@google.com"
console.log(jsUser);
// no change will be driven in obejct 



jsUser.greeting =function(){
    console.log("hello Js USER");
}

jsUser.greetingTwo =function(){
    console.log(`hello Js USER, ${this["full name"]}`);
}
console.log(jsUser.greetingTwo());

const  obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"C",
    4:"f"
}
// const obj3={obj1,obj2};
// it work like nested object 

const obj3=Object.assign({},obj1,obj2)
const obj4={...obj1,...obj2};
console.log(obj3);


console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));

console.log(obj3.hasOwnProperty("1"));



const course={
    coursename:"js in english",
    price:"9999",
    courseInstructor:"saksham ji"
}

// const {courseInstructor : instructor} =course meaning destructing 

console.log(instructor);
// object desturcting  upper wala part

// const navbar  = ({company}) =>{


// }
// navbar(company ="saksham")

// {
//     "name":"saksham",
//     "coursename":"js in hindi",
//     "price":"free"
// } json format API

