/**
 * @author contact: lkcsgaspar@gmail.com & b.a.r.kleinberg@uva.nl
 */

function detectCopypaste() {
    $('html').bind('copy paste drop', function(e) {
        alert("Please do not copy or paste anything on this page.");
        e.preventDefault();
    });
}

function block_copy_pasting() {
    $('html').bind('copy paste drop', function(e) {
        alert("Please do not copy or paste anything on this page.");
        e.preventDefault();
    });
}

function unblock_copy_pasting() {
    $('html').unbind('copy paste drop');
    // $('html').bind('copy paste drop', function(e) {
    //   return true;
    // });
}


$(document).ready(function() {
    block_copy_pasting();
});
