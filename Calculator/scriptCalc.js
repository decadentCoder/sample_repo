
//KEYS: Numeric (No) | Opperands i.e. mathematical functions (OP) | Number modifiers (T) | other

let keyNo0 = document.getElementById("buttonNr0");
let keyNo1 = document.getElementById("buttonNr1");
let keyNo2 = document.getElementById("buttonNr2");
let keyNo3 = document.getElementById("buttonNr3");
let keyNo4 = document.getElementById("buttonNr4");
let keyNo5 = document.getElementById("buttonNr5");
let keyNo6 = document.getElementById("buttonNr6");
let keyNo7 = document.getElementById("buttonNr7");
let keyNo8 = document.getElementById("buttonNr8");
let keyNo9 = document.getElementById("buttonNr9");

// let keyNumbers = document.getElementsByClassName("buttonNr");

let keyAddition = document.getElementById("buttonOPadd");
let keySubstraction = document.getElementById("buttonOPsubstract");
let keyMultiply = document.getElementById("buttonOPmult");
let keyDivide = document.getElementById("buttonOPdivide");
let keySquare2 = document.getElementById("buttonOPsquare");
let keySquare3 = document.getElementById("buttonOPsquare3");
let keySquareRoot = document.getElementById("buttonOProot");

let keyDecimal = document.getElementById("buttonTdec");
let keyPolarity = document.getElementById("buttonTpolarity");
let keyFraction = document.getElementById("buttonTfraction");

let keyIsEqualTo = document.getElementById("buttonResult");
let keyReset = document.getElementById("buttonReset");
let keyDeleteLast = document.getElementById("buttonDel")

//display field

let displayField = document.getElementById("printRes");

//array
let opperands = [];

let timer = 0;

// NUMBER KEYS: functions and events //
function addNumber1() {
        if(displayField.innerText === "0") {
            displayField.innerText = "";
            displayField.innerText += keyNo1.innerText;
        } else 
        displayField.innerText += keyNo1.innerText;
        // return displayField.innerText;
}

keyNo1.addEventListener("click", addNumber1);

function addNumber2() {
    if(displayField.innerText === "0") {
        displayField.innerText = "";
        displayField.innerText += keyNo2.innerText;
    } else 
        displayField.innerText += keyNo2.innerText;
        // return displayField.innerText;
    
}

keyNo2.addEventListener("click", addNumber2);

function addNumber3() {
    if(displayField.innerText === "0") {
        displayField.innerText = "";
        displayField.innerText += keyNo3.innerText;
    } else
       displayField.innerText += keyNo3.innerText;
    //    return displayField.innerText;
}


keyNo3.addEventListener("click", addNumber3);

function addNumber4() {
    if(displayField.innerText === "0") {
        displayField.innerText = "";
        displayField.innerText += keyNo4.innerText;
    } else
        displayField.innerText += keyNo4.innerText;
        // return displayField.innerText;
}

keyNo4.addEventListener("click", addNumber4);


function addNumber5() {
    if(displayField.innerText === "0") {
        displayField.innerText = "";
        displayField.innerText += keyNo5.innerText;
    } else
        displayField.innerText += keyNo5.innerText;
        // return displayField.innerText;
}

keyNo5.addEventListener("click", addNumber5);


function addNumber6() {
    if(displayField.innerText === "0") {
        displayField.innerText = "";
        displayField.innerText += keyNo6.innerText;
    } else
        displayField.innerText += keyNo6.innerText;
    // return displayField.innerText;
}

keyNo6.addEventListener("click", addNumber6);

function addNumber7() {
    if(displayField.innerText === "0") {
        displayField.innerText = "";
        displayField.innerText += keyNo7.innerText;
    } else
    displayField.innerText += keyNo7.innerText;
        // return displayField.innerText;
}

keyNo7.addEventListener("click", addNumber7);

function addNumber8() {
    if(displayField.innerText === "0") {
        displayField.innerText = "";
        displayField.innerText += keyNo8.innerText;
    } else    
    displayField.innerText += keyNo8.innerText
        // return displayField.innerText;
}

keyNo8.addEventListener("click", addNumber8);

function addNumber9() {
    if(displayField.innerText === "0") {
        displayField.innerText = "";
        displayField.innerText += keyNo9.innerText;
    } else
    displayField.innerText += keyNo9.innerText;
}

keyNo9.addEventListener("click", addNumber9);

function addNumber0() {
    if(displayField.innerText === "0") {
        displayField.innerText = "";
        displayField.innerText += keyNo0.innerText;
    } else
    displayField.innerText += keyNo0.innerText;
}

keyNo0.addEventListener("click", addNumber0);

function decimal() {
    displayField.innerText += "."; 
    parseFloat(displayField.innerText);

}

keyDecimal.addEventListener("click", decimal)

function polarity() {
    displayField.innerText = - displayField.innerText;
}

keyPolarity.addEventListener("click", polarity);


//(PRE)FUNCTIONS FOR THE MATHEMATICAL OPERATIONS (the propper variable for the result, the function, eventListener for the propper function)

let resAdd = 0;

function addition() {
    timer = 1;
    opperands.push(parseFloat(displayField.innerText));
    displayField.innerText = "";

}

keyAddition.addEventListener("click", addition);

let resSub = 0;

function substraction() {
    timer = -1;
    opperands.push(parseFloat(displayField.innerText));
    displayField.innerText = "";

}

keySubstraction.addEventListener("click", substraction);

let resMult = 0;

function multiply() {
    timer = 2;
    opperands.push(parseFloat(displayField.innerText));
    displayField.innerText = "";
    console.log("opperands[opperands.length-1]"); //checking flow of operation(s) (flow control)
    console.log(opperands[opperands.length-1])
    console.log("showing value and type for resMult")
    console.log(resMult);
    console.log("showing value and type for parseFloat(displayField.iT")
    console.log(parseFloat(displayField.innerText));
}

keyMultiply.addEventListener("click", multiply);

let resDiv = 0;

function divide() {
    timer = -2;
    opperands.push(parseFloat(displayField.innerText));
    displayField.innerText = "";

}

keyDivide.addEventListener("click", divide);

let resSquared = 0;

function squareX2() {
    // timer = 3;
    opperands.push(parseFloat(displayField.innerText));
    resSquared = Math.pow((opperands[opperands.length-1]), 2);
    displayField.innerText = resSquared;

}

keySquare2.addEventListener("click", squareX2);

let resRoot = 0; 

function squareRoot() {
    // timer = -3;
    opperands.push(parseFloat(displayField.innerText));
    resRoot = Math.sqrt((opperands[opperands.length-1]));
    displayField.innerText = resRoot; 
}

keySquareRoot.addEventListener("click", squareRoot);

let resSquared3 = 0;

function squareX3() {
    // timer = 4;
    opperands.push(parseFloat(displayField.innerText));
    resSquared3 = Math.pow((opperands[opperands.length-1]), 3);
    displayField.innerText = resSquared3;
} 

keySquare3.addEventListener("click", squareX3);

let resOneDividedBy = 0;

function oneDividedBy() {
    if(parseFloat(displayField.innerText) === 0) {
        displayField.innerText = "can not divide by zero!";
    }
    else {
        opperands.push(parseFloat(displayField.innerText));
        resOneDividedBy = 1/opperands[opperands.length-1];
        displayField.innerText = resOneDividedBy;
    }
}

keyFraction.addEventListener("click", oneDividedBy);


//FUNCTIONAL BUTTONS

function isEqualTo() {
    
    if(timer === 1) {
        resAdd = opperands[opperands.length-1] + parseFloat(displayField.innerText);
        displayField.innerText = resAdd;
    } else if(timer === -1) {  //substraction
        resSub = opperands[opperands.length-1] - parseFloat(displayField.innerText);
        displayField.innerText = resSub;
    
    } else if(timer === 2) {
        resMult = opperands[opperands.length-1] * parseFloat(displayField.innerText);
        displayField.innerText = resMult;

    } else if (timer === -2 && displayField.innerText === "0" || displayField.innerText === 0) {                  //division
            displayField.innerText = "can not divide by zero!"
    } else if (timer === -2) {
        resDiv =  opperands[opperands.length-1] / parseFloat(displayField.innerText);
        displayField.innerText = resDiv;
    } 
    
}

keyIsEqualTo.addEventListener("click", isEqualTo);

function reset() {
    displayField.innerText = "0";

}

keyReset.addEventListener("click", reset)

function deleteLast() {
    alert("code has not been yet asigned to this button! Sorry!")
} 

keyDeleteLast.addEventListener("click", deleteLast)
