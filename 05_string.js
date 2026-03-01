const name="saksham"
const repocount=50

// console.log(name+ repocount + " value");

console.log(`hello i am ${name} i have done my repo ${repocount}`);
const gameName=new String("saksham-gityadav");

// key :value pair like directory 
console.log(gameName[0]);
// console.log(gameName.__proto__);  ->object 

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(1));
console.log(gameName.indexOf("q"));

const newString =gameName.substring(0,4);
console.log(newString);

const anotherString=gameName.slice(-8,4);
console.log(anotherString);

const newStringone="    hitish    ";
console.log(newStringone.trim());

const url="https://saksham.com/saksham%20yadav";
console.log(url.replace('%20','-'));

console.log(url.includes('saksham'));

console.log(gameName.split('-'));