// if
const isUserLoggedIn=true
const temperature=41

if(temperature<50){
    console.log("less than 50");
}else{
    console.log("temperture is greater than 50");
}
if(isUserLoggedIn){

}
// <,>,<=,>=,==,!=,===

// ===  "strict check" IT WILL ALSO CHECK THE data type OF BOTH 

// if(2=="2"){
//     console.log("executed");
// }
// if(2==="2"){
//     console.log("executed");
// }

const score=200

if(score>100){
    let power="fly"
    console.log(`USER power : ${power}` );
}


const balance=50000
// if(balance>500) console.log("test"),
// console.log("test2");

// if(balance >500){
//     console.log("less tthan");
// } else if(balance<750){
//     console.log("less then 750");
// }

const userLoggedIN =true
const debitCard =true
const loggedInFromGoogle=false
if(userLoggedIN && debitCard){
    console.log("allow to buy course");
}

if(loggedInFromGoogle || userLoggedIN){
    console.log("user logged IN");
}

// switch 


const month=3

switch (month){
    case 1:
        console.log("Januaary");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    default:
        console.log("Januaary");
        break;
}

// if break is removed then all the condition except default get executed


const userEmail ="saksham@gami.com"
if(userEmail){
    console.log("GOT USER Email")
}
else{
    console.log("Don't havr user Email");
}
/*
falsy values -> which to assume as false;

false,0,-0,BigInt 0n,"",null,undefined,NaN

truthy values

"0",'false'," ",[],{},function(){}
*/
if(userEmail.length ===0){
    console.log("Objest is empty");

}
const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}

// false == 0    =>true
// false == ' '  =>true
// 0 ==' '       =>true

// Nullish Coalescing Operator (??):null undefined

let val1;
// val1=5??10
// val1=null ?? 10
val1=undefined ?? 15
val2=null??10??15;


console.log(val2);
console.log(val1);

// terniaary Operator

// conditon  ? true :false 
const iceTeaPrice =300
iceTeaPrice <=80 ? console.log("less than 80") :console.log("more than 80");