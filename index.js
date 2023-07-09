let screen=document.getElementById('screen');//we have to opt or take the screen
buttons=document.querySelectorAll('button');//we have to opt or take the all the buttons 
let screenValue='';//i have no value right now because we cannot give the input of screen now 
for(item of buttons){
    item.addEventListener('click',(e)=>{//we have to take any of item and then event can be performed
buttonText=e.target.innerText;//we have to target the input which i give and innertext can give the which i writ
//to the screen and e.target is awhhich element we have to click
console.log('button text is',buttonText);
//now the logic starts :
if(buttonText=='X'){
buttonText='*';
screenValue +=buttonText;
screen.value =screenValue;
}
else if(buttonText=='C'){
    screenValue="";
    screen.value =screenValue;
}
else if(buttonText=='='){
    screen.value=eval(screenValue);
}
else {
    screenValue += buttonText;
    screen.value=screenValue;
}
})
}
