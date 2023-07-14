$(document).ready(function() {
    $("<a href='#' class='toggle-link'>Toggle FAQs</a>").insertBefore("dl.faq-list");

    $("a.toggle-link").click(function(e) {
        e.preventDefault();
        $("dd").toggleClass("invisible");
    });

    $("h3").click(function() {
        $(this).next("ul").find("li").css("font-weight", "bold");
    });

    $("li").click(function() {
        $(this).closest("ul").find("li:first-child").css("color", "blue");
    });

    $("#highlight-last-li").click(function() {
        $("ul").each(function() {
            $(this).find("li:last-child").css("background-color", "yellow");
        });
    });
});

$('li').css('background-color', '#FF0');
$('li').parent().css('background-color', '#0F0');

$(() => {
    $('.dropdown-item').each((index, element) => {
        if (index % 2 === 0) {
            $(element).addClass('disabled');
        }
    });

    const htmlArticle = $('article.html');
    console.log("JavaScript:");
    console.log(htmlArticle.html());

    // Demonstrate .html() as a setter
    $('#html-button').on('click', () => {
        htmlArticle.html('<h2>Something different!</h2><h2>Everything else is gone</h2>');
    });

    // Demonstrate JS equivalent
    const htmlJSButton = document.querySelector('#js-html-button');
    htmlJSButton.addEventListener('click', (e) => {
        const newPara = document.createElement('p');
        newPara.innerText = "test";
        htmlArticle.append(newPara);
    });

    $('#html-append-button').on('click', () => {
        htmlArticle.append('<p>New Content</p>');
    });

    $('#js-btn').children().css('font-weight', 'bolder');

    $('.navbar-nav .nav-link').css('color', 'red');

    // Next and previous are for siblings
});

$(document).ready(function() {
    // Get the frame elements
    var $leftFrame = $('#left-frame');
    var $centerFrame = $('#center-frame');
    var $rightFrame = $('#right-frame');

    // Swap image from center frame to left frame
    $leftFrame.on('click', function() {
        var $centerImage = $centerFrame.find('img');
        var $leftImage = $leftFrame.find('img');
        $leftImage.attr('src', $centerImage.attr('src'));
    });

    // Swap image randomly between left and right frames
    $centerFrame.on('click', function() {
        var $centerImage = $centerFrame.find('img');
        var $leftImage = $leftFrame.find('img');
        var $rightImage = $rightFrame.find('img');

        // Generate a random number to determine which frame to swap with
        var random = Math.random();
        if (random < 0.5) {
            $centerImage.attr('src', $leftImage.attr('src'));
        } else {
            $centerImage.attr('src', $rightImage.attr('src'));
        }
    });

    // Swap image from center frame to right frame
    $rightFrame.on('click', function() {
        var $centerImage = $centerFrame.find('img');
        var $rightImage = $rightFrame.find('img');
        $rightImage.attr('src', $centerImage.attr('src'));
    });
});

$(function() {
    $("<a href='#' class='toggle-link'>Toggle FAQs</a>").insertBefore("dl.faq-list");

    $("a.toggle-link").click(function(e) {
        e.preventDefault();
        $("dd").toggleClass("invisible");
    });

    $("h3").click(function() {
        $(this).next("ul").find("li").css("font-weight", "bold");
    });

    $("li").click(function() {
        $(this).closest("ul").find("li:first-child").css("color", "blue");
    });

    $("#highlight-last-li").click(function() {
        $("ul").each(function() {
            $(this).find("li:last-child").css("background-color", "yellow");
        });
    });
});

$(document).ready(function() {
    // Get the frame elements
    var $leftFrame = $('#left-frame');
    var $centerFrame = $('#center-frame');
    var $rightFrame = $('#right-frame');

    // Attach click event handler to swap buttons
    $('.swap-button').on('click', function() {
        var $clickedFrame = $(this).closest('.picture-frame');
        var $centerImage = $centerFrame.find('img');
        var $clickedImage = $clickedFrame.find('img');
        var tempSrc = $centerImage.attr('src');
        $centerImage.attr('src', $clickedImage.attr('src'));
        $clickedImage.attr('src', tempSrc);
    });
});
