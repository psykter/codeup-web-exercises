$(document).ready(function() {
    // Code inside this function will execute when the document (HTML) has finished loading.

    // Demonstrate .html getter
    console.log($('article.html').html());

    // Demonstrate JavaScript equivalent using querySelector
    const htmlArticle = document.querySelector('article.html');

    // Demonstrate .html setter
    $('#html-button').on('click', () => {
        $('article.html').html('<h2>Something different!</h2><h2>Everything else is gone</h2>');
    });

    // Demonstrate .prepend
    $('#append-button').on('click', () => {
        $('article.html').prepend('<p>New Content</p>')
    });

    // Demonstrate .css as getter
    console.log($('article.css div').css('background-color'));

    // Toggle visibility of <dd> elements when a.toggle-link is clicked
    $("a.toggle-link").click(function(e) {
        e.preventDefault();
        $("dd").toggleClass("invisible");
    });
});
