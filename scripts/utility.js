function hideElementById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementID){
    const element =document.getElementById(elementID);
    element.classList.add('bg-[#FFA500]');
}

function getARandomAlphabet(){
    const alphabetString= 'abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabetString.split('');

    // get a random index between 0-25
    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);

    const alphabet=alphabets[index];
    console.log(index,alphabet);
    return alphabet;
}