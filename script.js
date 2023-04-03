// note to self: finish firstNumber and secondNumber code next!
// note to self saturday 3/25/2023:
//   congrats on finishing the firstNumber and secondNumber code!
//   you also finished the clear button, and operations code!
//   next step is to make it so that the firstNumber, secondNumber, operation, and result fill up the box
// also need to work on the css for the visual aesthetics
// i finished creating the display, need to work on some things with it
// the display should show numbers when they are clicked on
// note to self 4/3/2023:
//  i made the display fill up more smoothly with numbers and operators
// also made the firstNumber equal the result after an operate function
// need to make calculator work with more than 2 numbers
let firstNumber;
let secondNumber;
let result;
let symbol;
let operation;
var number = document.querySelector('#number');

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');

const display = document.querySelector('#display');


function assign() {
    if (firstNumber == undefined)  {
        if (event.srcElement.id == "one") {
            firstNumber = 1;
    }   else if (event.srcElement.id == "two") {
            firstNumber = 2;
     }   else if (event.srcElement.id == "three") {
             firstNumber = 3;
     }
         else if (event.srcElement.id == "four") {
             firstNumber = 4;
     }
         else if (event.srcElement.id == "five") {
             firstNumber = 5;
     }
         else if (event.srcElement.id == "six") {
             firstNumber = 6;
     }
         else if (event.srcElement.id == "seven") {
             firstNumber = 7;
     }
         else if (event.srcElement.id == "eight") {
             firstNumber = 8;
     }
         else if (event.srcElement.id == "nine") {
             firstNumber = 9;
     }
         else if (event.srcElement.id == "zero") {
             firstNumber = 0;
         }
         document.getElementById("display").textContent = `${firstNumber}`;
} else if (secondNumber == undefined)  {
    if (event.srcElement.id == "one") {
        secondNumber = 1;
}   else if (event.srcElement.id == "two") {
        secondNumber = 2;
 }   else if (event.srcElement.id == "three") {
        secondNumber = 3;
 }
     else if (event.srcElement.id == "four") {
        secondNumber = 4;
 }
     else if (event.srcElement.id == "five") {
        secondNumber = 5;
 }
     else if (event.srcElement.id == "six") {
        secondNumber = 6;
 }
     else if (event.srcElement.id == "seven") {
        secondNumber= 7;
 }
     else if (event.srcElement.id == "eight") {
        secondNumber = 8;
 }
     else if (event.srcElement.id == "nine") {
        secondNumber = 9;
 }
     else if (event.srcElement.id == "zero") {
        secondNumber = 0;
     }
}   if (symbol !== undefined && secondNumber !== undefined) {
document.getElementById("display").textContent = `${firstNumber} ${symbol} ${secondNumber}`;
}   else if (secondNumber !== undefined) {
document.getElementById("display").textContent = `${firstNumber} ${secondNumber}`;
}   else if (secondNumber == undefined) {
    document.getElementById("display").textContent = `${firstNumber}`;
}
    };

function clearNumbers() {
    firstNumber = undefined;
    secondNumber = undefined;
    operation = undefined;
    symbol = undefined;
    result = undefined;
    document.getElementById("display").textContent = "Cleared";
    console.log(firstNumber);
    console.log(secondNumber);
}

const add = document.querySelector('#add');
add.addEventListener('click', () => {
    operation = "addition";
    symbol = "+";
    if (firstNumber == undefined && secondNumber == undefined) {
        document.getElementById("display").textContent = `${symbol}`;
    }
    else if (secondNumber == undefined) {
    document.getElementById("display").textContent = `${firstNumber} ${symbol}`;
}   else if (secondNumber !== undefined) {
    document.getElementById("display").textContent = `${firstNumber} ${symbol} ${secondNumber}`;
}}
);
const subtract = document.querySelector('#subtract');
subtract.addEventListener('click', () => {
    operation = "subtraction";
    symbol = "-";
    if (firstNumber == undefined && secondNumber == undefined) {
        document.getElementById("display").textContent = `${symbol}`;
    }   else if (secondNumber == undefined) {
        document.getElementById("display").textContent = `${firstNumber} ${symbol}`;
    }    else {
            document.getElementById("display").textContent = `${firstNumber} ${symbol} ${secondNumber}`;
    }});
const multiply = document.querySelector('#multiply');
multiply.addEventListener('click', () => {
    operation = "multiplication";
    symbol = "X";
    if (firstNumber == undefined && secondNumber == undefined) {
        document.getElementById("display").textContent = `${symbol}`;
    }   else if (secondNumber == undefined) {
        document.getElementById("display").textContent = `${firstNumber} ${symbol}`;
    }    else {
            document.getElementById("display").textContent = `${firstNumber} ${symbol} ${secondNumber}`;
    }});
const divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    operation = "division";
    symbol = "/";
    if (firstNumber == undefined && secondNumber == undefined) {
        document.getElementById("display").textContent = `${symbol}`;
    }   else if (secondNumber == undefined) {
        document.getElementById("display").textContent = `${firstNumber} ${symbol}`;
    }    else {
            document.getElementById("display").textContent = `${firstNumber} ${symbol} ${secondNumber}`;
    }});
function Operate() {{
    if (operation == "addition") {
        result = firstNumber + secondNumber;
        firstNumber = result;
        console.log(result);;
    }
    else if (operation == "subtraction") {
        result = firstNumber - secondNumber;
        firstNumber = result;
        console.log(result);
    }
    else if (operation == "multiplication") {
        result = firstNumber * secondNumber;
        firstNumber = result;
        console.log(result);
    }
    else if (operation == "division") {
        result = firstNumber / secondNumber;
        firstNumber = result;
        console.log(result);
}
document.getElementById("display").textContent = `${firstNumber} ${symbol} ${secondNumber} = ${result}`;
}};



// 1a. DONE create add function
// 1b. DONE create subtract
// 1c. DONE create multiply
// 1d. DONE create divide
// 2a. create operate function, takes operator
// and two numbers and does operation
// 3a. DONE create basic html calculator with buttons for
// each digit, each function, and "equals" key
// 3b. DONE add display to calculator
// 3c. DONE add a "clear" button
// 3d. make "clear" button functional
// 4a. create functions that populate display when 
// number buttons are clicked
// 4b. store the display value in a constiable for use