$(() => {
    // Demonstrate .html getter
    //const html = $('p').html(); ***
    console.log($('article.html'()));

    // Demonstrate .html setter
    //$('article.html').html('<h1>jQuery Essential Methods</h1>'); ***
    $('#html-button').on('click', () => {
        $('article.html').html('<h2>Something different in here</h2><h2>Everything else is gone</h2>');
    });

    // Demonstrate .append
    $('#append-button').on('click', () => {
        $('article.html').append('<h2>Something different in here</h2><h2>Everything else is gone</h2>');
    });
    }
})