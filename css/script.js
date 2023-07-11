$(document).ready(function() {
    $("a.toggle-link").click(function(e) {
        e.preventDefault();
        $("dd").toggleClass("invisible");
    });
});
