
// let testEntity0 = {
//     type: "regular object",
//     behavior: "standard",
//     reality: false,

//     ontologicalInd () {
//         if(this.reality === false) {
//             alert(`object: ${this.type} \n ontology=${this.reality}`);
//         } else if(this.reality === true) {
//             alert("Congarts! You have succesfullyt materialised a digital abstraction!");
//         } else {
//             alert(`warning: invalid object!`);
//         } 
//     }
// }
// console.log(testEntity0);

//No1

let student = {
    name: "Geeky Geeksons",
    sclass: "VI",
    rollno: 12,
    genderM: true,
    delinquent: false,

    // studentProperties: function () {
    //     return this.name - this.sclass - this.rollno;
    // },

    studentPropertiesWindow () {
        if(this.delinquent === false && this.genderM === true ) {
            return `Showing data for student ${this.name} \n No. ${this.rollno} \n class ${this.sclass} \n a fine young man!`;
        } else if(this.delinquent === false && this.genderM === false) {
            return `Showing data for student ${this.name} \n No. ${this.rollno} \n class ${this.sclass} \n a fine young lady!`;
        } else if(this.delinquent === true && this.genderM === true) {
            return  `Showing data for student ${this.name} \n No. ${this.rollno} \n class ${this.sclass} \n naughty, naughty boy!`;
        } else if(this.delinquent === true && this.genderM === false) {
            return `Showing data for student ${this.name} \n No. ${this.rollno} \n class ${this.sclass} \n naugty, naughty girl!`;
        } else {
            return `error!`;
        }
    },

    deleteAndPrint () {
        delete this.rollno;                               
        return this.studentPropertiesWindow();                                     
    }
}
alert(student.studentPropertiesWindow());
alert(student.deleteAndPrint());

// function removeAndPrint () {
//     delete student.rollno;
//     return student;
// }

console.log(student.deleteAndPrint());
// console.log(removeAndPrint());
// alert(removeAndPrint());
console.log(student);

// console.log(student.studentPropertiesWindow());

//задача No 2: да се избрише својство на објект и потоа да се инспринта објектот
//ПРОБЛЕМИ:
//обиди со ф-ја во глобален и локален скоп, исти резултати (ист проблем):
//кога го дава објектот во конзола, својството е избришано (не фигурира)
//но кога пробувам да го принтам (со ф-јата во алерт) property-то само добило вредност "undefined" но не е избришано

// No3 functon check if object contains GIVEN property


let car = {
    model: "Audi S8",
    color: "rebeccapurple",
    fuel: "diesel",
    fuelConsumption:  6.5,

    fuelDistance (distance) {
        
        let cons = distance / this.fuelConsumption;
        return cons;

    }
}

//HW1 Speaking animal...

let parrot = {
    name: "Chichi",
    kind: "supercool parrot",

    speak() {
        let speech = prompt("what do you like Chichi to say");
        while (speech === undefined || speech === null || isNaN(speech) === false)  {
            speech = prompt(`${this.name} can not say that!!!`);
        }
        while (speech === "") {
            speech = prompt(`Please enter some text for ${this.name}!`)
        }
        alert(`${this.name} says: ${speech}`);
    }
}

alert(parrot.speak()); 
// BUG: Зошто дава undefined откако ќе се изврши ф-јата?
// ПРАШАЊЕ: Ако сакам на корисникот да му се испишува различна порака кога нема да внесе ништо отколку кога ќе внесе несоодветна вредност
//како го правам тоа? Два  while loops едно под друго не функционира: се извршува условот од вториот loop, но ја дава вредноста на варијаблата од првиот

//HW2 Check if book is read od not //"The Librarian"


function Book (title, author, readingStatus) { 
    this.bookTitle = title; 
    this.bookAuthor = author;
    this.readingStatus = readingStatus;

    this.haveUreadIt = function() {
        // let search = prompt(`enter book title`);
        // while( isNaN(search) === false) {
        //     search = prompt(`please enter a FULL NAME of the book or the author!`);
        // }
        if(this.readingStatus === true) {
            alert(`Already read "${this.bookTitle}" by ${this.bookAuthor}!`);
            
        } else if(this.readingStatus === false) {
            alert(`You still need to read "${this.bookTitle}" by ${this.bookAuthor}`);
            
        } else {
            alert(`error: readingStatus invalid! Please contact your librarian!`);
        }
    }
}


let bookAsimov1 = new Book ("The Robots of dawn", "Isaac Asimov", false);
let bookCollins1 = new Book ("Mockingjay: The Final Book of The Hunger Games", "Suzanne Collins", true);
let bookTolkien1 = new Book ("Silmarilion", "John Ronald Reyel Tolkien", false);
let bookNikolova = new Book ("Zoki Poki", "Olivera Nikolova", false);

let bookFundus = [bookAsimov1, bookCollins1, bookTolkien1, bookNikolova]
for(let item of bookFundus) {
    alert(item.haveUreadIt());
}
// console.log(bookAsimov1.haveUreadIt());


// function Book (title, author, readingStatus) {     // !!! Во заградата како параметри за ф-јата се ставаат само properties на класата, не и методите што ќе ја дефинираат!
//     this.bookTitle = title;                        // !!!овде се ставаат ТОЧКИ-ЗАПИРКИ, за разлика од дефиниција на КЛАСИЧЕН ОБЈЕКТ, кога се ставаат ЗАПИРКИ!
//     this.bookAuthor = author;
//     this.readingStatus = readingStatus;

//     this.ifRead = function () {
//         let search = prompt(`enter book title or author`)                         // проблем да го зема (да го врзе) let search за this.readingStatus!
        
//         // while(search !== this.bookTitle || search !== this.bookAuthor) {
//         //     search = prompt(`please enter a a FULL NAME of the book or the author!`);
//         }
//         if(this.readingStatus === true) {
//             search = `Already read "${this.bookTitle}" by ${this.bookAuthor}!`;
//             alert(search);
//         } else if(this.readingStatus === false) {
//             search = `You still need to read "${this.bookTitle}" by ${this.bookAuthor}`;
//             alert(search);
//         } else {
//             search = `error: readingStatus invalid! Please contact your librarian!`
//             alert(search);
//         }
//     }
// // }

// let bookAsimov1 = new Book ("The Robots of dawn", "Isaac Asimov", true);
// let bookCollins1 = new Book ("Mockingjay: The Final Book of The Hunger Games", "Suzanne Collins", false);
// let bookTolkien1 = new Book ("Silmarilion", "John Ronald Reyel Tolkien", false);
// let bookNikolova = new Book ("Zoki Poki", "Olivera Nikolova", false);

// search !== this.bookTitle || search !== this.bookAuthor
