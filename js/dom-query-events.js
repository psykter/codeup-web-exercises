"use strict";

// Get the buttons by id
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

// Attach event listeners to the buttons
btn1.addEventListener('click', function() {
    const mainHeader = document.getElementById("main-header");
    mainHeader.innerHTML = "JavaScript is Cool";
});

btn2.addEventListener('click', function() {
    const subHeader = document.getElementById("sub-header");
    subHeader.style.color = "blue";
});

btn3.addEventListener('click', function() {
    const listItems = document.getElementsByTagName("li");
    for(let i = 0; i < listItems.length; i+=2) {
        listItems[i].style.color = "grey";
    }
    document.querySelector('[data-dbid="1"]').style.color = "blue";
});

btn4.addEventListener('click', function() {
    const subParagraphs = document.getElementsByClassName("sub-paragraph");
    subParagraphs[0].innerHTML = "Mission Accomplished!";
});

//
//     "use strict";
//     // TODO: Uncomment next line and get the main header element by id
//     const mainHeader = document.getElementById("main-header");
//
//     // TODO: Set inner html of mainHeader to "JavaScript is Cool"
//     mainHeader.innerHTML = "JavaScript is Cool";
//
//     // TODO: Uncomment the next line and get the sub header element by id
//     const subHeader = document.getElementById("sub-header");
//
//     // TODO: Set the text color of subHeader to blue
//     subHeader.style.color = "blue";
//
//     // TODO: Uncomment the next line and get all list items
//     const listItems = document.getElementsByTagName("li");
//
//     // TODO: Set text color on every other list item to grey
//     for(let i = 0; i < listItems.length; i+=2) {
//     listItems[i].style.color = "grey";
// }
//
//     // TODO: Set text color of li with dbid = 1 to blue
//     document.querySelector('[data-dbid="1"]').style.color = "blue";
//
//     // TODO: Uncomment the next line and get all elements with class name sub-paragraph
//     const subParagraphs = document.getElementsByClassName("sub-paragraph");
//
//     // TODO: Change the text in the first sub paragraph to "Mission Accomplished!"
//     subParagraphs[0].innerHTML = "Mission Accomplished!";