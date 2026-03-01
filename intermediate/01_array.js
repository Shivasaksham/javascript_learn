// array

const myArr=[0,2,3,4,2,4]
const myHHero=["shaitman","naagraj"];
const  myarr2= new Array(1,2,3,4);
console.log(myArr[2]);
// it is resizeable and can be changed
// array in javascript always provide the shallow copy mean reference

// array methods

// myarr2.push(6);
// myarr2.unshift(9);
// it add in starting postion of array 
// myarr2.shift();
// it remove the starting element of array 
console.log(myarr2.includes(1));

const newArr=myarr2.join()
console.log(newArr);
console.log(typeof newArr)

// slice ,splice  


const myn1=myarr2.slice(1,2); 

const myn2=myarr2.splice(1,3);
console.log("C ",myarr2);

dc=["marvel","hero","workeer"];
pc=["her","his","work"];

// dc.push(pc)
console.log(dc);
const all_her0=[...dc,...pc];
console.log(all_her0);

console.log(Array.isArray("saksham"));
console.log(Array.from("saksham"));
console.log(Array.from({name:"saksham"})); //interesting case

let score1= 100;
let score2= 200;
let score3= 300;
console.log(Array.of(score1,score2,score3)
);