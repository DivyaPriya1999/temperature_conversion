const textbox=document.getElementById("textbox");
const tofahrenheit = document.getElementById("tofahrenheit");
const tocelsius = document.getElementById("tocelsius");
const  result = document.getElementById("result");
let temp;

function convert(){
    if(tofahrenheit.checked){

        temp=Number(textbox.value)
        temp=(5/9)*(temp-32)
        result.textContent=temp
        
    }
    else if (tocelsius.checked){
        temp=Number(textbox.value)
        temp=(9/5)*(temp+32)
        result.textContent= temp
       
    }
    else{
    result.textContent="enter a value"
    }
}