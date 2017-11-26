/**
 * @author contact: b.a.r.kleinberg@uva.nl
 */
function detect_transl(freq) {
  var cnt = 0;
  setInterval(function() {
    if (cnt < 1) {
      if ($('html').hasClass('translated-ltr') || $('html').hasClass('translated-rtl')) {
        alert("Please be advised that translation in this experiment will result in invalidation of your test and is detected.");
        cnt++;
        if ($('html').hasClass('notranslate') === false) {
          $('html').addClass('notranslate');
        }
      }
    }
  }, freq);
}

$(document).ready(function() {
  detect_transl(300);
});
