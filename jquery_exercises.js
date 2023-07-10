$('h1').on('cllick', (e) => {
    $(e.target).css('background', 'blue');
});

// $('p').on(ondblclick(e) => {
//     #(e.targeet).css('font-size', '18px');
// })

$('li').on('mouseenter', (e) => {
    $(e.target).css('color', 'red');
}
$('li').on('mouseleave', (e) => {
    $(e.target).css('color', 'black');
}

$(function() {
    $("li").hover(
        function() {
            $(this).css("color", "red");
        },
        function() {
            $(this).css("color", "black");
        }
    );
});

$(function() {
    $("p").dblclick(function() {
        $(this).css("font-size", "18px");
    });
});

$(function() {
    $(".title").css("color", "purple");

    $("h1").click(function() {
        $(this).css("background-color", "lightblue");
    });

    $("li").css("color", "red");
});







// let $container = $("#id-container");
    // $container.css("background-color", "red");

    // Same thing but with vanilla JS
    // let idContainer = document.querySelector("#id-container");
    // idContainer.style.backgroundColor = "red";

    // Select everything with class of "title" and change the color to purple
    // $(".title").css("color", "purple");

    // same thing with JS
    // let titleElements = document.querySelectorAll(".title");
    // titleElements.forEach((element) => {
    //     element.style.color = "blue";
    // });

    // Use jQuery to select all 'li' elements and change their color to pink
    // $("li").css("color", "pink");

    // Use jQuery to select multiple selectors (h1, p, .highlight) and change their font weight to bold
    // $("h1, p, .highlight").css("font-weight", "bold");

    // Select everything and add outline and font weight
    // $("*")
    //     .css("outline", "1px solid lightblue")
    //     .css("font-weight", "bold");
    //
    // $('[data-id]').val();

