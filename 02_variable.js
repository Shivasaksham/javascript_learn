console.log("hello world");

// stack (primitive) ,heap (non-primitive)
let myname="sakshamcom"
let anothername=myname

anothername="sandy"
console.log(myname);
console.log(anothername);

// besically using the copy value in the stack located memory

let userOne={
    email:"hi@google.com",
    upi:"user@ybl"   
}

let userTwo=userOne

userTwo.email="change@google.com"

console.log(userOne);
console.log(userTwo);

// besically using non-primitive data type allocated the memory in heap and
// provide the reference addresses to anotherTwo user of userOne in the heap