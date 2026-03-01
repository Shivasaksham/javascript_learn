const user ={

    username:"hitesh",
    price:999,

    welcomeMessage:function(){
        // console.log(`${this.username},welcome to website`);
        console.log(this);
        // this ->will provide the currenet context of object
    }

}

user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this);->here this is refering to empty object hence -{}

// when refering to this in browser it refer to windpw object 

// this is ineffiecient in function mostly used for object 

// const chai =function (){

//     let username ="saksham"
//     console.log(this.username);

// }
// chai()

const chai  = () =>{
    let username ="saksham"
    console.log(this);
}

// chai()

// () =>{} 

// const addTwo =(num1,num2) =>{
//     return num1+num2
// }

// const addTwo =(num1,num2) => num1+num2 
const addTwo =(num1,num2) => (num1+num2) 
// here no need to write the return keyword explictly whlile using ()

const myArray =[2,3,45,5,4]
// myArray.forEach(())/