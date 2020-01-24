//No1 "Minutes to Seconds"

function minSec (min) {
    min = min*60;   
    return min;
}

console.log(minSec(60));

// No2

function addition(number) {
    number = number +1;
    return number;
}

console.log(addition(4));
console.log(addition(5));
console.log(addition(-5));

// No3 "Hours to Seconds"

function howManySeconds (h) {
    h = h*3600;
    return h;
}

console.log(howManySeconds(0.5));
console.log(howManySeconds(3));
console.log(howManySeconds(3.5));

// No4: "Remainder" (i.e. Module)

let mod = null;

function moduleOrRemainder (divided, divider) {
    mod = parseInt(divided / divider);
    mod = mod * divider;
    mod = divided - mod;
    return mod;
}

console.log(moduleOrRemainder(880254, 136));

// No5: "The Farm Problem"

let legs = null;

function foghornLeghorn (chicks, cows, pigs) {
    legs = 2*chicks + 4*(cows+pigs)
    return legs;
}

console.log(foghornLeghorn(2,3,5));
console.log(foghornLeghorn(1,2,3));
console.log(foghornLeghorn(5,2,8));

// No6: "Compare Strings by Count of Characters"
// SPECIAL: The ".length" - Property!

// let str1 = "";
// let str2 = "";

function compare (str1, str2) {
    if (str1.length !== str2.length) {
        return false }
    else {
        return true;
    }
}

//input strings only; parse

console.log(compare("a#%","AD"));
console.log(compare("da", "node"));
console.log(compare("dA", "Ad"));
console.log(compare("123456789", "!@#$%^&*()"));

// No7: "Is the Word Singular or Plural?"
// SPECIAL! buildin function: .endsWith('') 

function isPlural(word) {
    if (word.endsWith('s')) {
        return true
    }   else 
        return false;
}

console.log(isPlural("changes"));
console.log(isPlural("change"));
console.log(isPlural("dudes"));
console.log(isPlural("magicians"));
console.log(isPlural("John`s")); // bug....

// a propos (example from mozzila)
// this totally DOESN`T MAKE ANY SENSE!!! 
//Namely, it is the same input in both cases with different result
//also several tryouts on mozzila-website:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith

// const str1 = 'Cats are the best!';

// console.log(str1.endsWith('best', 17));
// // output: true

// // const str2 = 'Is this the best!';

// // console.log(str2.endsWith('best', 17));
// // // output: false


// No8: "Case Insensitive Comparison"
//SPECIAL! buildin METHOD .toLowerCase()

function match(string1, string2) {
    if (string1.toLowerCase() == string2.toLowerCase()) {
        return true;
    } else 
        return false;
}

console.log(match("Hi-Lo", "HI-LO")); //t
console.log(match("HELL-O", "hello")); //f
console.log(match("kingLESS", "helpless")); //f
console.log(match("kingLESS", "Kingless"));  //t

// No9: "Convert Number to Corresponding Month Name"
//SPECIAL! SWITCH flow controll structure: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

function monthName (numeric) {
    switch (numeric) {
        case 1:
            console.log("January");
            break;
        case 2: 
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;
        case 5:
            console.log("May");
            break;
        case 6:
            console.log("June");
            break;
        case 7:
            console.log("July");
            break;
        case 8:
            console.log("August");
            break;
        case 9:
            console.log("September");
            break;
        case 10:
            console.log("October");
            break;
        case 11:
            console.log("November");
            break;
        case 12: 
            console.log("Decembar");
            break;
        default:
                console.log("Month with that number does not exist!");
    }
    return numeric;
}

console.log(monthName(3));
console.log(monthName(10));
console.log(monthName(123123123141));

// !BUG! prints month name alongside with the entered number!
//if return is deleted, prints month name and "undefined"!

//
// // Recursion example (too much recursion): trying to fix the bug from above, but got this bug instead...
// // cause: base case (definition i.e. code for var numeric) is missing ()
// function monthName (numeric) {     // with or without let numeric, it`s the same
//     switch (monthName(numeric)) {
//         case 1:
//             console.log("January");
//             break;
//         case 2: 
//             console.log("February");
//             break;
//         case 3:
//             console.log("March");
//             break;
//         case 4:
//             console.log("April");
//             break;
//         case 5:
//             console.log("May");
//             break;
//         case 6:
//             console.log("June");
//             break;
//         case 7:
//             console.log("July");
//             break;
//         case 8:
//             console.log("August");
//             break;
//         case 9:
//             console.log("September");
//             break;
//         case 10:
//             console.log("October");
//             break;
//         case 11:
//             console.log("November");
//             break;
//         case 12: 
//             console.log("Decembar");
//             break;
//         default:
//                 console.log("Month with that number does not exist!");
//     }
//     return numeric;
// }


//default =
// case 13:
//             if(numeric >= 13) {
//                 console.log("Month with that number does not exist!");
//             }


//No10: "Truthy or Falsy?"

function isTruthy (socrates) {
    if (socrates === false || socrates === null || socrates === undefined || socrates === 0 || socrates === "" ) {
        return 0; 
    } else if (socrates) {
        return 1;
    } else {                      //this fixes following bug: NaN returns 1 instead 0
        return 0;
    }
}

console.log(isTruthy(NaN));    //0
console.log(isTruthy(false));  //0
console.log(isTruthy(""));   //0
console.log(isTruthy("false"));  //1
console.log(isTruthy("9"));   //1
console.log(isTruthy(9));    //1
console.log(isTruthy("true"));   //1
console.log(isTruthy(null));   //0
console.log(` this is NaN and it has value ${isTruthy(NaN)}`);   //0 
console.log(isTruthy("NaN"));   //1
console.log(isTruthy(4012948019274)); // 1
console.log(`this is an ARRAY containing NaN an it has value ${isTruthy([NaN])}`);   //1
console.log(isTruthy("socrates")); //1
console.log(isTruthy(undefined)); //0
