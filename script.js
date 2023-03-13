let firstNumber;
let secondNumber;

var number = document.querySelector('#number');
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');
var zero = document.querySelector('#zero');

number.addEventListener('click', () => {
    if (typeof firstNumber == 'undefined')  {
        firstNumber
    }
    else if (typeof firstNumber !== undefined && typeof secondNumber == 'undefined')  {
        secondNumber
    }
    console.log(firstNumber);
    console.log(secondNumber);
    }
);
one.addEventListener('click', () => {
    if (typeof firstNumber == 'undefined')  {
        firstNumber = 1;
    }
    else if (typeof firstNumber !== undefined && typeof secondNumber == 'undefined')  {
        secondNumber = 1;
    }
    console.log(firstNumber);
    console.log(secondNumber);
    }
);
two.addEventListener('click', () => {
    if (typeof firstNumber == 'undefined')  {
        firstNumber = 2;
    }
    else if (typeof firstNumber !== undefined && typeof secondNumber == 'undefined')  {
        secondNumber = 2;
    }
    console.log(firstNumber);
    console.log(secondNumber);
    }
);

var add = document.querySelector('#add');
add.addEventListener('click', () => {
    Operate (operation = "addition");
}
);
var subtract = document.querySelector('#subtract');
subtract.addEventListener('click', () => {
    Operate (operation = "subtraction");
});
var multiply = document.querySelector('#multiply');
multiply.addEventListener('click', () => {
    Operate (operation = "multiplication");
});
var divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    Operate (operation = "division");
});
function Operate(operation, firstNumber, secondNumber) {
    if (operation == "addition") {
        console.log(firstNumber + secondNumber);
    }
    else if (operation == "subtraction") {
        console.log(firstNumber - secondNumber);
    }
    else if (operation == "multiplication") {
        console.log(firstNumber * secondNumber);
    }
    else if (operation == "division") 
        console.log(firstNumber / secondNumber);
}


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
// 4b. store the display value in a variable for use