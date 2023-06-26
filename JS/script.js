let operator = "";
let previousValue = "";
let currentValue = "";

document.addEventListener("DOMContentLoaded", function(){
    // store all my html component in my jS file 
    let clear_btn = document.querySelector("#clear-btn");
    let operators_btn = document.querySelectorAll(".operator");
    let numbers_btn = document.querySelectorAll(".number");
    let equal_btn = document.querySelector(".equal");
    let decimal_btn = document.querySelector(".decimal");
    let firstValue = document.querySelector(".first-value");
    let secondValue = document.querySelector(".second-value");
     // below is f(x) will be selecting number once click
    numbers_btn.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        secondValue.textContent = currentValue;
    }))
      // f(x) for selecting operator once clicked
     operators_btn.forEach((op) => op.addEventListener("click", function(e){
        handleOperater(e.target.textContent)
        firstValue.textContent = previousValue + "  " + operator;
        secondValue.textContent = currentValue;
    })) 

    // f(x) to clear the screen for new operation to be done
    clear_btn.addEventListener("click", function(){
        previousValue = "";
        currentValue = "";
        operator = "";
        firstValue.textContent = currentValue;
        secondValue.textContent = currentValue;
    })

    equal_btn.addEventListener("click", function(){  // the equal btn to give result of the operation
        if(currentValue != " " && previousValue != " "){       
        calculate()
        firstValue.textContent = " ";
        if(previousValue.length <= 6 ){
            secondValue.textContent = previousValue;
        }else{
            secondValue.textContent = previousValue.slice(0, 5) + "..." //print nbr nolonger thn 6 digits + ... to show is the long nbr
        }
      }  
        
    })

    decimal_btn.addEventListener("click", function(){ //on click of the. thef(x)adds it as decimal nbr.
        addDecimal();
    })
})
function handleNumber(num){
    if(currentValue.length <= 6){
        currentValue += num;
    }
    
}
function handleOperater(op){
    operator = op;
    previousValue = currentValue
    currentValue = "";
}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    if(operator === "+"){
        previousValue += currentValue
    }else if(operator === "-"){
        previousValue -= currentValue;
    }else if(operator === "X"){
        previousValue *= currentValue;

    }else{
        previousValue /= currentValue;
    }
    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function roundNumber(num){
    return Math.round(num * 10000)/10000;
}

function addDecimal(){     // implement the decimal on the calculation 
    if(currentValue.includes(".")){
        currentValue += ".";
    }
}

/**const add = function() {
	
};

const subtract = function() {
	
};

const sum = function() {
	
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};*/