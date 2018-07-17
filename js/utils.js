var assigned_activity;

function get_activities(n, batch) {
  var batch_selection = [];
  $(t_activities).each(function(i, eli) {
    if (eli.batch == batch) {
      batch_selection.push(eli);
    }
  });
  var n_selection = shuffle(batch_selection).slice(0, n);
  return n_selection;
}

function show_activities(array_with_activities) {
  $("#main_instructions1_1").append('</br></br></br>');
  $(array_with_activities).each(function(i, eli) {
    var button_x = $('<button/>', {
      text: eli.activity,
      class: 'normal_button',
      id: 'activity_button' + i,
      click: function() {
        if ($(this).hasClass('active_button') == true) {
          $(this).removeClass('active_button');
        } else {
          $(this).addClass('active_button');
        }
      }
    });
    $("#main_instructions1_1").append(button_x).append('</br></br>');
  });
}


function assign_activity() {
  var activated_buttons = [];
  var final_activity;
  $(".active_button").each(function(i, eli) {
    activated_buttons[i] = eli;
  });
  if (activated_buttons.length < 1) {
    alert('Select at least one activity that you are NOT going to do in the next 7 days.');
  } else if (activated_buttons.length > 1) {
    final_activity = shuffle(activated_buttons)[0];
    assigned_activity = final_activity.textContent;
    to_main_instructions1_2();
  } else if(activated_buttons.length == 1){
    final_activity = activated_buttons[0];
    assigned_activity = final_activity.textContent;
    to_main_instructions1_2();
  }
}

function twoletters() {
  var output = "";
  var choices = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var i = 0; i < 2; i++)
    output += choices.charAt(Math.floor(Math.random() * choices.length));
  return output;
}

function shuffle(array) {
  var newarr = [];
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    newarr[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return newarr;
}

function init_data() {
  data = {};
  data_precollect = {};
}

function simple_transition(current_div, next_div) {
  current_div.hide(function() {
    next_div.show();
  });
}

function send_to_server() {
  if (check_fields($(".select_menu")) === true) {
    try {
      get_data();
      $("#DATA").val(JSON.stringify(data));
      $("#submit").click();
    } catch (err) {
      get_data_now();
      $("#DATA").val(JSON.stringify(data));
      $("#submit").click();
    }
  }
}

function getIP() {
  $.get("http://ipinfo.io", function(response) {
    window.clientip = response.ip;
  }, "jsonp");
}


function get_unid() {
  unid = twoletters() + randomdigit(0, 9) + randomdigit(0, 9) + randomdigit(0, 9) + randomdigit(0, 9) + randomdigit(0, 9) + randomdigit(0, 9);
}

function randomdigit(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function get_cond() {
  // var cond_ver = randomdigit(0, 1);
  var cond_ver = 0;
  // MUST CHANGE URL IN create_url.js!!!!!!!!!!!!!!!
  // 0=t
  // 1=d
  // var cond_check = randomdigit(0, 1);
  var cond_check = 0;
  // 0 = t
  // 1 = f
  var conds = {
    'veracity': cond_ver,
    'check': cond_check
  };
  return conds;
}

function get_cond_from_ajax(ajax_retrieved_obj) {
  var veracity;
  // 0: truthful
  // 1: deceptive
  // var cb = randomdigit(0, 1);
  var check;
  // 0: check
  // 1: nocheck
  var control_cond = ajax_retrieved_obj.cond_cond;
  var control_id = ajax_retrieved_obj.cond_id;
  var control_status = ajax_retrieved_obj.cond_status;
  if (ajax_retrieved_obj.cond_cond == 1) {
    veracity = 0;
    check = 0;
  } else if (ajax_retrieved_obj.cond_cond == 2) {
    veracity = 0;
    check = 1;
  } else if (ajax_retrieved_obj.cond_cond == 3) {
    veracity = 1;
    check = 0;
  } else if (ajax_retrieved_obj.cond_cond == 4) {
    veracity = 1;
    check = 1;
  }

  var conds = {
    'veracity': veracity,
    'check': check,
    'control_id': control_id,
    'control_status': control_status,
    'control_cond': control_cond
  };
  return conds;
}


function simple_transition_2(class_current_div, next_div) {
  class_current_div.each(function() {
    if ($(this).is(":visible")) {
      $(this).hide(function() {
        next_div.show();
      });
    }
  });
}
