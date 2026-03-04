let number=parseInt(Math.random()*100 +1);

const submit=document.querySelector('#subt');
const userinput=document.querySelector("#guessField");
const guesseSlot=document.querySelector(".guesses");
const lastResult=document.querySelector(".lastResult");

const lowOrHi=document.querySelector('.low0rHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');
let prevGuess=[]
let numGuess=1

let playGame=true
if(playGame){
    submit.addEventListener('click',function(e){
     e.preventDefault()
     const guess=parseInt(userinput.value)
     console.log(guess);
     validateGuess(guess)
    })
}
function validateGuess(guess){
if(isNaN(guess)){
    alert("enter the valid number");
}else if(guess<1){
    alert("number must be greater than 1")
}else if(guess>100){
    alert("please enter the number smaller than 100")
}else{
    prevGuess.push(guess)
    if(numGuess==11){
        playGame=false
        displayGuess(guess)
        displayMessage(`Game Over. Random nuber was ${number}`)
    }
    else{
        displayGuess(guess);
        checkGuess(guess)
    }
}


}

function checkGuess(guess){
    if(guess==number){
        displayMessage("You guessed it right ")
        endGame()
    }
    else if(guess< number){
        displayMessage('number is TOO LOW')
    }
    else{
        displayMessage('number is TOO high');
    }
}

function displayGuess(guess){
    userinput.value= ''
    guesseSlot.innerHTML+=`${guess} ,`
    numGuess++;
    lastResult.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`;

}

function endGame(){
    userinput.value= ''
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML= `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p) 
    playGame=false
    newGame();
}

function newGame(){
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
    number=parseInt(Math.random()*100 +1);
    prevGuess=[]
    numGuess=1
    guesseSlot.innerHTML=''
    lastResult.innerHTML=`${11-numGuess}`
    userinput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true

})
}