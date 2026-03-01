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

