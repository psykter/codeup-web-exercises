
// JS funcitonto only alert when the page is loaded
// window.onload = function() {
//   alert("The page is loaded");
// }

// Same thing but with jQuery:
jQuery(function() {
    alert("The page is loaded");

})
$(function() {
    alert("The page is loaded");

}

use an empty jQuery object to wrap the document object.
