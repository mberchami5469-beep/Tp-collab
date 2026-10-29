let display=document.getElementById("affich");
function finp(input) {
    display.value+=input;
    
}
function remov(){
    display.value="";
}
function calc(){
    try{
display.value=eval(display.value);
    }
    catch{
        display.value= "erreur";
        
}

}