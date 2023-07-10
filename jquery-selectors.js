$(function() {
    $(".container").css("background-color", "red");

    $(".title").css("color", "purple");

    $('#codeup').hover(
        function() {
            $(this).css('background-color', '#FF0');
        },
        function() {
            $(this).css('background-color', '#FFF');
        }
    );

    $("body").css("background-color", "lightgrey");

    $("li").hover(
        function() {
            $(this).css("color", "red");
        },
        function() {
            $(this).css("color", "black");
        }
    );

    $("h1").click(function() {
        $(this).css("background-color", "lightblue");
    });

    $("p").dblclick(function() {
        $(this).css("font-size", "18px");

        $('#textfield').keyup(function() {
            alert('a key was released!');
        });
    });
});
