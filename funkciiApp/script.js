let a = prompt("enter the first of the two numbers to be compared!");  
    while(isNaN(a) || a === "") {
         a = prompt(`${a} is not a valid number! Please enter a valid number!`);
    }
let b = prompt("Good! Now enter the second number!");
    while(isNaN(b) || b === "") {
        b = prompt(`${b} is not a valid number! Please enter a valid number!`);
    }
    
if(a>b) {
        alert(a);
} else if (a===b) {
    alert("Numbers are equal!");
} else {
    alert(b);
}

// Scenarija 
//
// ЦЕЛ: при секој внес на стринг или на празен стринг (=нулта внес), програмата да јавува "enter valid number"
// се додека корисникот не внесе правилен број. Кога корисникот ќе внесе број, програмата го зема внесот (инпутот)
// и продолжува. Истот сценарио важи и за вториот број. 
//
//ОБИДИ (И ГРЕШКИ)
// 1. while loop:
//
//let a = prompt("enter the first of the two numbers to be compared!");  
// while(isNaN(a) || a === "") {
//     alert("please entr a valid number!");
// }
// let b = prompt("Good! Now enter the second number!");
// while(isNaN(b) || b === "") {
//     alert("please enter a valid number!");
// }
//         
//      ГРЕШКА:
//  линијата          alert("please enter a valid number!");
//           не воспоставува комуникација со соодветната варијабла на која треба да се однесува loop-от
//
//
