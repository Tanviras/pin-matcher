//Number Generation Part
function pinGeneration() {
    let pin = Math. floor(1000 + Math. random() * 9000); 
    document.getElementById("pin-box").value = pin;
}

let generateButton = document.getElementById("generate-pin-click");
generateButton.addEventListener("click", pinGeneration);


//Common function for numbers
function buttonPress(clickId,displayId,number){
    const clickBtn= document.getElementById(clickId);
    clickBtn.addEventListener("click", function(){
    document.getElementById(displayId).value+=
    number;
})
}

//button match function call
buttonPress("seven","display-input",7);
buttonPress("eight","display-input",8);
buttonPress("nine","display-input",9);
buttonPress("four","display-input",4);
buttonPress("five","display-input",5);
buttonPress("six","display-input",6);
buttonPress("one","display-input",1);
buttonPress("two","display-input",2);
buttonPress("three","display-input",3);
buttonPress("zero","display-input",0);

//clear all and backspace
const backspace= document.getElementById("backspace");
backspace.addEventListener("click", function(){
    const currentNumber = document.getElementById("display-input").value;
    document.getElementById("display-input").value =currentNumber.slice(0, -1);
})
const clearAll= document.getElementById("clear-all");
clearAll.addEventListener("click", function(){
    document.getElementById("display-input").value ="";
})

//submit button
let tryCount=3;
const submit= document.getElementById("submit-match");
submit.addEventListener("click", function(){
    const pin = document.getElementById("pin-box").value;
    const input = document.getElementById("display-input").value;
    if(pin == input && input != ""){
        document.getElementById("no-match").style.display="none";
        document.getElementById("match").style.display="block";
    }
    else{
        document.getElementById("match").style.display="none";
        document.getElementById("no-match").style.display="block";
        tryCount=tryCount-1;
        if(tryCount < 1){
            document.getElementById("submit-match").style.display="none";
        }
        document.getElementById("try-left").innerText= tryCount;
    }
    document.getElementById("display-input").value="";
})
