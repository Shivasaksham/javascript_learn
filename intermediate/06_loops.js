const coding=['js','ruby','java','python','cpp'];

const values =coding.forEach( (item) => {
    console.log(item);
})

// remember that foreach dont return anything 

const myNums =[1,2,3,4,5,6,7,8,9,10];

const newNums=myNums.filter( (NUM) => NUM>6);
// using implict return 
const newNums2=myNums.filter( (NUM) => {NUM>6});
// no explict return hence empty 
console.log(newNums2);

const newNums3=[]

myNums.forEach( (num) => {
    if(num >4){
        newNums3.push(num)
    }
})

console.log(newNums3);


const myNumbers=[1,2,3,4,5,6,7,8,9,10]
const newNums4=myNumbers.map((num) => num*10).map((num) =>num+1).filter((num) => num>=40)

// using multiple map into single expreesion is called chaining 
// evaluation is doing form left to right 
// flow of executuion is map1 is besically multiple each value by 10
// map 2 is adding+1 to each update value
// filter is besically filterou the require number 
console.log(newNums4)