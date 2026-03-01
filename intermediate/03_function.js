function sayMyName (){
    console.log("s");
    console.log("a");
    console.log("k");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("m");
}

// sayMyName   mean function reference
// sayMyName()   meann funciion execution
function addTwonumber(number1,number2){
    // let result=number1+number2;
    // return result 
    return number1+number2

}

const result =addTwonumber(2,8);
// console.log("Result :",result);

function loginUserMessage(username="sam"){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());

// !!here  ... mean rest opertor

function calculateCarPrice(...num1){
    return num1
}
console.log(calculateCarPrice(200,400,500))

const user ={
    username:"saksham",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username}  and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username:"sam",
    prize:300
})


const mynewArray=[200,400,500,600]

function returnsecondvalue(getArray){
    return getArray[1];
}

console.log(returnsecondvalue(mynewArray));