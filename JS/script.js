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

    numbers_btn.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        secondValue.textContent = currentValue;
    }))
     operators_btn.forEach((op) => op.addEventListener("click", function(e){
        handleOperater(e.target.textContent)
        firstValue.textContent = previousValue + "  " + operator;
        secondValue.textContent = currentValue;
    })) 

    clear_btn.addEventListener("click", function(){
        previousValue = "";
        currentValue = "";
        operator = "";
        firstValue.textContent = currentValue;
        secondValue.textContent = currentValue;
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