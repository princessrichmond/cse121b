/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
return number1 + number2;
}
function addNumbers() {
let addNumber1 = Number(document.querySelector("#add1").value);
let addNumber2 = Number(document.querySelector("#add2").value);
document.querySelector("#sum").value = add(addNumber1, addNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);


//__________________________________________________________________________________
/* Function Expression - Subtract Numbers */
// function subtract (subtract1, subtract2) {
// return subtract1 - subtract2;
// }
// function subtractNumbers() {
// let subtract1 = Number(document.querySelector("#subtract1").value);
// let subtract2 = Number(document.querySelector("#subtract2").value);
// document.querySelector("#difference").value = subtract(subtract1, subtract2);
// }
// document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);
let subtract = function subtract(subtract1, subtract2){
return `${subtract1}` - `${subtract2}`;
};
function subtractNumbers(){
let subtract1 = Number(document.querySelector("#subtract1").value);
let subtract2 = Number(document.querySelector("#subtract2").value);
document.querySelector("#difference").value = subtract(subtract1, subtract2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


//__________________________________________________________________________________
/* Arrow Function - Multiply Numbers */
// function multiply (factor1, factor2) {
// return factor1 * factor2;
// }
// function multiplyNumbers() {
// let factor1 = Number(document.querySelector("#factor1").value);
// let factor2 = Number(document.querySelector("#factor2").value);
// document.querySelector("#product").value = multiply(factor1, factor2);
// }
// document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);
let multiply = (factor1, factor2) => `${factor1}` * `${factor2}`;
function multiplyNumbers() {
let factor1 = Number(document.querySelector("#factor1").value);
let factor2 = Number(document.querySelector("#factor2").value);
document.querySelector("#product").value = multiply(factor1, factor2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


//__________________________________________________________________________________
/* Open Function Use - Divide Numbers */
const divide = (x, y) => x / y;
const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend, divisor);
    document.getElementById("quotient").value = quotient.toFixed(2);
}
document.getElementById("divideNumbers").addEventListener("click", divideNumbers);


//__________________________________________________________________________________
/* Decision Structure */
//let total = 0;
function getTotal(){
//input
    let subtotal = parseFloat(document.getElementById("subtotal").value);
//processing
    if (document.getElementById("member").checked){
        subtotal = subtotal - subtotal*0.2; // 20% discount
    }
//output
    document.getElementById("total").textContent = `$${subtotal.toFixed(2)}`;
}
document.getElementById("getTotal").addEventListener("click", getTotal);


//__________________________________________________________________________________

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById("array").innerHTML = numbersArray;
/* Output Odds Only Array */
let odds = numbersArray.filter(number => number % 2 === 1);
document.getElementById("odds").innerHTML = odds;
/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
sumofarray = numbersArray.reduce((sum, number) => sum + number);
document.getElementById("sumOfArray").innerHTML = sumofarray;
/* Output Multiplied by 2 Array */
multipliedArray = numbersArray.map(number => number * 2);
document.getElementById("multiplied").innerHTML = multipliedArray;
/* Output Sum of Multiplied by 2 Array */
sum_of_multiplied_array = multipliedArray.reduce((sum, number) => sum + number);
document.getElementById("sumOfMultiplied").innerHTML = sum_of_multiplied_array;
