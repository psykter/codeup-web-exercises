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