// Immediately Invoked Function Expressions(IIFE)

// this is iife 
(function chai() {
    console.log("DB CONNECTED");
})();

// why to used iife ?
// gobal scope ka pollution to overcome that problem used iife 

(function aurcode(){
    console.log("DB CONNECTED TWO")
})();


(() => {
    console.log("DB CONNECTED TWO ");
})();
/*
TIPS : 
1: whenever two iife are called checked for ";" to close one
2: name iife ,simple iife
*/

((name) =>{
    // name iife
    console.log(`username is ${name}`);
})("saksham");