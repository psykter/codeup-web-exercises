$(() =>){

    function underlineThis() {

    }
    //n('click', function () => {
        // changes all h2s
        // $('h2').css('text-decoration', 'underline');

        //.changes only the h2s inside the clicked h1
        $(this).css('text-decoration', 'underline');
    }

    function noUnderLineThis() {
        $(this).css('text-decoration', 'none');
    }
    //.on('dblclick', function () => {
      //  $(this).css('text-decoration', 'none');
  //  }
);
function changeToPointer() {
    $(this).css('cursor', 'pointer');
}
function changeFromePointer(e) {
    $(this).css('cursor', 'default');
}

$('h2')
    .on('click', underlineThis)
    .on('dblclick', (e) => {
    .on('mouseenter', changeToPointer)
    .on('mouseleave', changeFromPointer)

    $('h1').on('click', hideUnorderedList);

    $('h1').on('click', hideUnorderedList);
    $('#add-card-btn').on('click', addCard);
    $('div.cards').on('click', 'div.card', deleteCard);

        //$(this).css('text-decoration', 'none');
})