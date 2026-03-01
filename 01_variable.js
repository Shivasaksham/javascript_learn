const accountId=14553
let accountGmail="saks@mgial.com"
let accountPssword="21312"
accountCity="Agra"
// accountId=2 unable to change the value
let accountState;

accountGmail="hca@accountGmail.com"
accountPassword="2324242"
acconutCity="bengalurur"

console.log(typeof(accountGmail));
// prefer not to use var due to scope decalaring and assisgned 
// use of let over it
console.table([accountGmail,accountId,accountPssword])

console.log("SAKSHAM")
// alert(3+3) // we are using node.js,not browser
"use strict"; //treat all JS code as newer version
console.log("hello world !") //code readablity  should be high 
console.log(3+3)//work 

let name="saksham"
let age=20
// let isloggedIn=false
let state;
//MDN ECMA STANDARDS

// "";"" <-statement treminator



// number =>2 to power 53
// BigInt
// string => " "
// boolean => true/false
// null => standalone value 
// undefined =>
// Symbol => unique
// object

console.log(typeof(null))  //-> object
console.log(typeof(undefined))  //->undefined

// let score=33abc;

// console.log(score);//both are same
// console.log(typeof(score));

// let valeuInNumber=Number(score)

let isloggedIn="anshul";

let booleanIsLoggedIn = Boolean(isloggedIn)
// console.log(booleanIsLoggedIn)

// 1=>true; 0=>false;
// ""=>false
// "ansul" =>true

let somenumber=Number('33abc')

let stringnUMBER=String(somenumber);
// console.log(typeof stringnUMBER);
// console.log(somenumber);


let value= 3
let negvalue= -value
console.log(negvalue)
const re=100
const balance= new Number(100.23344)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));


const otherNumber=121.8966
console.log(otherNumber.toPrecision(1));

const hundreds=100000000
// console.log(hundreds.toLocaleString('en-IN')); =>count system

console.log(Math);
console.log(Math.abs(-4));

const min=10
const max=20

console.log(Math.floor(Math.random()*(max - min)));
console.log(Math.random(0,4));

let myDate=new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(typeof myDate);

// let  mycreateDate= new Date(2023,0,23)
let  mycreatedDate= new Date(2023,0,23,5,3)
// let mycreateDate=new Date("2023-01-4")

console.log(mycreatedDate.toLocaleString());

let mytiemstamp=Date.now();
console.log(mytiemstamp);
console.log(mycreatedDate.getTime());
console.log(mytiemstamp);
let newDate=new Date();
// console.log(mytiemstamp.toDateString());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());


let val=newDate.toLocaleString('default',{
    weekday:'long',
})

console.log(val);


//array

const myArr=[0,1,23,3,5,9]
const myHHero=[
'raju',,'bheem'
]
console.log(myArr[1]);
//array methods

myArr.push(233);
myArr.push(43)
myArr.pop()
// myArr.unshift(11)
// console.log(myArr);
// myArr.shift();
// console.log(myArr);
console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
const newArr=myArr.join()

console.log(myArr);
console.log(newArr);

//slice,splice
console.log('A',myArr);

const myn2=myArr.splice(1,3);
console.log('c',myArr);
console.log(myn2);

// const myn1=myArr.slice(1,3);
// console.log(myn1)
// console.log(typeof myn1)


const marvel_heroes=['thor','ironman','spiderman']
const dc_heros=['superman','flash','batman']
marvel_heroes.push(dc_heros);
console.log(marvel_heroes[3][1]);

const allheros=marvel_heroes.concat(dc_heros)
console.log(allheros);
// same above and lower
const all_new_heros=[...marvel_heroes,...dc_heros]
console.log(all_new_heros);
// ... =>spread operator

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);
console.log(Array.isArray('saksham'));
// console.log(Array.from("SAKSHAM")); -->string allocation in array
console.log(Array.from({name:"saksham"}))

let score1=100
let score2=200
let score3=400

// console.log(Array.of(score1,score2,score3));-->number allocation in array

es6