function handleKeyboardKeyUpEvent(event){
    const playerPressed=event.key;

    // get ethe expected to press
    const currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLocaleLowerCase();
    
    // check matched or not
    // ___________________________________
    if(playerPressed ===expectedAlphabet){
        //Update score:
        //1.get the current score
        const currentScoreElement=document.getElementById('current-score');
        const currentScoreText=currentScoreElement.innerText;
        const currentScore=parseFloat(currentScoreText);
        //2.increase the score by 1

        const newScore=currentScore + 1;
        //3.Show the updated score

        currentScoreElement.innerText=newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        // Get the current value of the life

        const currentLifeElement=document.getElementById('current-life');
        const currentLifeText=currentLifeElement.innerText;
        const currentLife= parseInt(currentLifeText);
        // Reducing the life value if fails

        const newLife=currentLife-1;
        currentLifeElement.innerText=newLife;
        if (newLife===0){
            gameOver();
        }
    }
}



document.addEventListener('keyup', handleKeyboardKeyUpEvent);



function continueGame(){
    // step-1: Generate a random Alphabet
    const alphabet=getARandomAlphabet();
    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement=document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=alphabet;
    // set background color
    setBackgroundColorById(alphabet);
}


function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
}