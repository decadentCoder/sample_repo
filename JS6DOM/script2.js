//part 1 changing html

let entry = parseInt(prompt("Select 1) or 2)"));

let title = document.getElementsByTagName("title");
let headingsSize1 = document.querySelectorAll("h1");
let paragraphs = document.querySelectorAll("p"); 




function htmlModification() {
    headingsSize1[0].innerText, headingsSize1[1].innerText, paragraphs[0].innerText, paragraphs[1].innerText = "";
    headingsSize1[1].nextElementSibling.innerText, paragraphs[1].nextElementSibling.innerText = "";
    title[0].innerText = "DOM Homework & Exercises" //само ова фактички се менува. Инаку сето ова вон функција, како посебен .јѕ фајл, работи!
    compartment.innerHTML = "<h1> not so cool now, ayn`t it? </h1>"
    compartment.innerHTML += "<h3> this site has been hacked </h3>"
    compartment.innerHTML += "<p> (...quite poorly, though, I`m afraid...) </p>"
    compartment.innerHTML += "<p> for the noblest of causes: </br> ... </p>"
    compartment.innerHTML += "<h2> education! </h2>" 
    //title[0].innerText = "DOM Homework & Exercises" //само ова фактички се менува. Инаку сето ова вон функција, како посебен .јѕ фајл, работи!
    // headingsSize1[0].innerText = "yeah, cool my..." // ПРАШАЊЕ: зошто овој начин на модифицирање не функционира во функцијава, а функционира засебно од неа?
    // headingsSize1[0].innerText += "[censored]"
    // headingsSize1[1].innerText = "this website is going to be about..."
    // headingsSize1[1].nextElementSibling.innerText = "...nothing!"
    // paragraphs[0].innerText = "...if you say so!"
    // paragraphs[1].innerText = "sorry, out of inspiration..."
    // paragraphs[1].nextElementSibling.innerText = "and that is why..."
}


//part 2 printing an array in html

// arrayElement = null;
let newHTML = document.getElementsByTagName("html");
let compartment = newHTML[0];
let array = [1,3,5,7,9,123,12,4324,23,2];
let array1 = [];
let sum = 0;
let res = 0;

console.log(compartment)

function showArrayElement() {
    headingsSize1[0].innerText, headingsSize1[1].innerText, paragraphs[0].innerText, paragraphs[1].innerText = "";
    headingsSize1[1].nextElementSibling.innerText, paragraphs[1].nextElementSibling.innerText = "";
    compartment.innerHTML = "<ul>"; 
    for(i = 0; i < array.length; i++) {
        compartment.innerHTML += `<li> ${array[i]} </li>`
    }
    compartment.innerHTML += "</ul>"
    for(i = 0; i < array.length; i++) {
        sum += array[i];  
    }
    compartment.innerHTML += `<h3> ${sum} </h3>`;
    // compartment.innerHTML += `<h2> testing </h2>`
    for(i = 0; i < array.length; i++) {
        compartment.innerHTML += `<p> ${array[i]}+ </p>`
        array1.push(`${array[i]}+`)
    }
    compartment.innerHTML += `<p> = ${sum} </p>`
    compartment.innerHTML += `<p> ${array1} = ${sum} </p>`
    
}



function select(entry) {
    
    if(entry === 1) {
        alert("homework DOM \n part1");
        htmlModification();
    } else if(entry === 2) {
        alert("homework DOM \n part2");
        showArrayElement();
    } else
        headingsSize1[0].innerText = "";
        headingsSize1[0].innerText += "Sorry!"
        headingsSize1[1].innerText = "Login has failed!"
        headingsSize1[1].nextElementSibling.innerText = "please try again"
        paragraphs[0].innerText = "";
        paragraphs[1].textContent = "";
        paragraphs[1].nextElementSibling.innerText = "";
        // alert("bluahhh!!") 
        // select(entry); //bug: when selected 2, the array sum keeps increasing for the value of "sum" with every click ok or `esc`
        

    
}
select(entry);

//======================== 

// console.log(showArrayElement());
// console.log(newHTML);
// newHTML[0].innerHTML = "";
// newHTML[0].innerHTML = "<head> <title> `Array` </title> </head> <body> <li>" + showArrayElement() + "</li></body>"
// // console.log(`${array[i]} +`);


// function printStudents(students, element){
//     element.innerHTML = ""; // clearing element
//     element.innerHTML += "<ol>";
//     for(let student of students){
//         element.innerHTML += `<li>${student}</li>`;
//     }
//     element.innerHTML += "</ol>"
// }


// function showArrayElement(array) {
//     compartment.innerHTML = "";
//     compartment.innerHTML = "<html> <head> <title> `array` </title> </head> <body> <ul>"; 
//     for(i = 0; i < array.length; i ++) {
//         compartment.innerHTML += `<li> ${array[i]} </li>`
//     }
//     compartment.innerHTML += "</ul> </body> </html>"
// }
