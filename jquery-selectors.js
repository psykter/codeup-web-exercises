$(() => {

    let $container = $("#id-container");
    $("#id-container").css("background-color", "red");

    // Same thing but with vanilla JS
    // let idContainer = document.querySelector("#id-container");
    // idContainer.style.backgroundColor = "red";

    // Select everything with class of "title" class and change the
    // color to purple
    $(".title").css("color", "purple");


    // same thing with JS
    let titleElements = document.querySelectorAll(".title");
    titleElements.forEach((element) => {
        titleElements.style.color = "blue";



    // Use the jQuery to select all 'li' elements.
    $('li').css('color', 'pink');

    // Use the jQuery to select multiple selectors.
    $('h1,p, .highlight').css('font-weight', 'bold');

    // Select everything.
    $('*')
        .css('outline', '1px solid lightblue')
        .css('font-weight', 'bold');


});



$('[data-id]').val();