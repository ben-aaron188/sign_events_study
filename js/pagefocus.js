// PageFocus version 1.3 modified

// source & credits: https://github.com/deboerk/PageFocus
// modified by https://github.com/ben-aaron188?tab=overview&from=2016-08-01&to=2016-08-31&utf8=%E2%9C%93


var focus_data; // all page defocusing and refocusing events as one string
var defocusing_count; // number of page defocusing events
var refocusing_count; // number of page refocusing events
var last_duration; // duration between the last page defocusing and refocusing events
var duration_sum; // sum of all durations between page defocusing and refocusing events

var defocus_timestamp; // timestamp of last page defocusing event
var refocus_timestamp; // timestamp of last page refocusing event

var pagefocus = true; // does the current page have the focus?
var popup_visible = false; // is the popup currently being shown?

// input elements
// var popup_checkbox = document.getElementById$("#popup_warning_checkbox");
// var events_input = document.getElementById("events_input");
// var defocus_count_input = document.getElementById("defocus_count_input");
// var last_duration_input = document.getElementById("last_duration_input");
// var duration_sum_input = document.getElementById("duration_sum_input");

pagefocus_reset();

record_timestamp = function(type, timestamp) {
    focus_data = focus_data + type + timestamp + ";"; // add new page focusing event to the data record
    // events_input.value = focus_data;

    // events_input.scrollLeft = events_input.scrollWidth; // scroll input field to the right
};

function lost_focus() { // page defocusing event detected
    if (!popup_visible) {
        pagefocus = false;

        defocus_timestamp = new Date().getTime();
        record_timestamp("D", defocus_timestamp);

        defocusing_count++; // count the number of defocusing events
        // defocus_count_input.value = defocusing_count;

        // if (popup_checkbox.checked) toggle_popup_warning("block");
    }
}

function regained_focus() { // page refocusing event detected
    if (!pagefocus && !popup_visible) {
        pagefocus = true;

        refocus_timestamp = new Date().getTime();
        record_timestamp("R", refocus_timestamp);

        refocusing_count++; // count the number of refocusing events
        // refocus_count_input.value = refocusing_count;

        last_duration = refocus_timestamp - defocus_timestamp; // calculate the duration between the last page defocusing and refocusing events
        duration_sum += last_duration; // sum durations between page defocusing and refocusing events

        // last_duration_input.value = last_duration / 1000;
        // duration_sum_input.value = duration_sum / 1000;
    }
}

function onfocusout() { // workaround for Internet Explorer < version 11
    clearTimeout(timer);
    timer = setTimeout(lost_focus, 100);
}

function onfocusin() { // workaround for Internet Explorer < version 11
    clearTimeout(timer);
    regained_focus();
}

function pagefocus_reset() { // reset captured data
    focus_data = '';
    defocusing_count = 0;
    refocusing_count = 0;
    last_duration = 0;
    duration_sum = 0;
}

// function toggle_popup_warning(state) { // show/hide popup warning
//     document.getElementById("popup_warning").style.display = state;
//     document.getElementById("disabled").style.display = state;
//     popup_visible = state == "block";
// }

if ("onfocusin" in document) { // check for Internet Explorer version < 11
    var timer;
    document.onfocusin = onfocusin;
    document.onfocusout = onfocusout;
} else if ("onpageshow" in window) {
    // use onpageshow and onpagehide for mobile Safari
    window.onfocus = window.onpageshow = regained_focus;
    window.onblur = window.onpagehide = lost_focus;
}

function pagefocus_get_data(){
  var pagefocus_data = {
    defocus: defocusing_count,
    refocus: refocusing_count,
    durationsum: duration_sum
  };
  // console.log(pagefocus_data);
  return pagefocus_data;
}
