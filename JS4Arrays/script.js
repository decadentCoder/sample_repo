
//!!! ВНИМАВАЈ НА:
//        SCOPE!!!
//        ДЕКЛАРИРАЊЕ
//        function()?
//   vs.  само for-loop

// No3 Sum of positive numbers

let set = [1,202,0,0,77,-999999999999,0,2];
let array = [0,33,100, -1000, -100000, 950,3];

let sumPos = 0;

function sumOfPositive(array) {
    for(let i =0; i<array.length; i++) {
        if (array[i] <=0) {
            array[i] = 0;
        }
        sumPos += array[i];
    }
    return sumPos;
}

console.log(sumOfPositive(array));


// нагледен приказ
// ВНИМАВАЈ на разликата со горе: овде НЕМА ФУНКЦИЈА!
//според тоа Return не е неопходен!!!

for(let i =0; i<array.length; i++) {
    console.log(`STARTING FROM ${sumPos}!!!`)
    console.log(`CYCLE` + i);
    console.log(`1. checking if number(cycle ${i}) > || = 0`)
    if (array[i] <=0) {
        array[i] = 0;
    }
    console.log("check completed. If number < || = 0, 0 will be added");
    sumPos += array[i]
    console.log(`2. adding ${array[i]} to ${sumPos}`);
    console.log(`3. the result is ${sumPos}`);
}

console.log(sumPos);

// No 4 Average value of items in array!

let average = 0;

function averageOfSet(set) {
    for(let i =0; i < set.length; i++) {
        average += set[i];
    }
    average = average/set.length;
    return average;
}

console.log(averageOfSet([2,4,6,8,10]));
console.log(averageOfSet([1,100,19]));
console.log(averageOfSet([25,35,10,30]));
//за секој нареден console.log после првичниот, вредноста на average е кумулативна заради return:
//се зачувува последната вредност на average од ПРЕТХОДНАТА колекција, на неа се додава збирот на елементите 
//од ТЕКОВНАТА колекција, и потоа се дели average со бројот на елементи од ТЕКОВНАТА колекција (set.length)
//затоа, просекот е точен само за првиот console.log 



//No 5 Removing `falsey` values from array
let veritas = [];
let haeresus = [];
let nihil = [];
let array0 = [NaN, 0, 15, false, -22, '',undefined, NaN, 47, null,100,];
let testArray2 = [NaN,undefined,null,0,"",``,'',false,000,0,"vera icon",{},[1,2]];

function purgerOfHeresy(credo) {
    for(let i=0; i<credo.length; i++) {
        if(credo[i] === false || credo[i] === null || credo [i] === 0 || credo[i] === undefined || credo[i] === "") {
            haeresus.unshift(credo[i]);
        } 
        else if (isNaN(credo[i])) {
            nihil.push(credo[i]);
        } else {
            veritas.push(credo[i]);
        }
    }
    return `O, Lord of Numbers, this array: [${veritas}] is purged of "false", "null" and other heathens and heretics!`;
}

console.log(purgerOfHeresy(array0));
console.log(purgerOfHeresy([NaN,undefined,null,0,"",``,'',false,"vera icon",4]));
console.log(purgerOfHeresy(testArray2));

//BUGS
//!!! 1.заради isNaN(), ф-јата ги чисти и стринговите! Со други зборови, ф-јата селектира и чува само броеви во array-ot, 
//а не сите други truty елементи. !!! Начин да се модифицира ф-јата да чува truty a да чисти falsey од колекцијата?
// 2. ги сочувува елементите во veritas (return!) и затоа после ги итерира елементите од претходните console.logs

//HW 1 Sum of squares [101-150]
// !!!SPECIAL: The Math. Object
//        > !!!METHOD: Math.pow(x,y)   x,y correspond to base, exponent

// следново решение има малку повеќе линии код, но од друга страна сметам дека е
//1) подинамичко (со едноставна измена на let val и на i во for loop-от можеме да го пресметаме збирот на било
// кои квадрати, во било кој опсег, наместо рачно да менуваме и правиме огромни низи
//2) тоа го прави ваквото решение и многу поелегантно, отколку со фиксно задавање на (доолга) низа

let val = 100;
let col = [];
let el = 0;
let sumSq = 0;

function sumOfSquares() {
    for (let i = 0; i < 50; i++) {
        val += 1;
        el = Math.pow(val,2);
        col.push(el); 
        sumSq += col[i];   
    }
    return sumSq;
}


console.log(sumOfSquares())
// console.log(Math.pow(100005000,2)); //cheching Math.pow()

//HW2 Looping structures: "\n" (i.e. new line) after every EVEN, and " " (i.e. empty space) after every ODD number 

let rangeOdd = -1;
let rangeEven = 0; 
function oddEven () {
    for(let i=0; i < 20; i += 2) {
        rangeEven += 2;
        rangeOdd += 2;
        // console.log(`\n ${rangeOdd} "" ${rangeEven} `);
        console.log(`\n ${rangeOdd}`);
        console.log(`"" ${rangeEven}`);
    }
}   

console.log(oddEven())  ;




//======================//
//what went wrong here?//
// function purgerOfHeresy (credo) {
//     for(let i=0; i<credo.length; i++) {
//         if(credo[i] === NaN || credo[i] === false || credo[i] === undefined || credo[i] === null || credo[i] === ``) {
//             credo.shift();
//         } else {
//         credo.push(credo[i]);
//         return credo;
//         }
//     }
// }
