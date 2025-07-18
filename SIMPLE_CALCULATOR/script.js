const display=document.getElementById("display");

function append(value){
    display.value += value;
}
function  clearDisplay(){
    display.value= "";
}
function output(){
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value="error";
    }
}