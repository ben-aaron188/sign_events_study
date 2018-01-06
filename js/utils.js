var slider_moved_array = [];
var length_prompt = 0;
var language_prompt = 0;
var ms_prompt = 0;

function check_fields(classname) {
  var class_values = [];
  score = 0;
  classname.each(function() {
    if ($(this).is(":visible")) {
      // if($(this).attr('type') == 'text'){
      $(this).each(function() {
        class_values.push($(this).val().length);
        score = $.inArray(0, class_values);
      });
      // }
    }
  });
  if (score > -1) {
    alert("Please answer all questions.");
    score = 0;
  } else {
    return true;
  }
}

// $(".select_menu_2").each(function() {
//     if ($(this).is(":visible")) {
//       // console.log($(this));
//       // $(this).each(function() {
//       $("option:selected", this).each(function() {
//           if ($(this).is(':selected')) {
//             console.log($(this).text());
//               // selected_items.push($(this).text());
//           }
//       });
//         // $(".select_menu_2 :selected").each(function(i, val) {
//         //     class_values[i] = $(val).text().length;
//         //     score = $.inArray(0, class_values);
//         // });
//     }
// });


// needs refinement to generic ids (see above)
function check_multi_select_2(language) {
  var alert_msg;
  if (language === 0) {
    alert_msg = 'Kies ten minste een optie in elk keuze menu.';
  } else if (language == 1) {
    alert_msg = 'Select at least one option in each menu.';
  }
  var class_values_1 = [];
  var class_values_2 = [];
  var score_1 = 0;
  var score_2 = 0;
  if (conditions.time === 0) {
    $(".select_menu_2").each(function() {
      if ($(this).is(":visible")) {
        $("#activity_past_sel :selected").each(function(i, val) {
          class_values_1[i] = $(val).text().length;
          score_1 = $.inArray(0, class_values_1);
        });
        $("#activity_past_non_sel :selected").each(function(i, val) {
          class_values_2[i] = $(val).text().length;
          score_2 = $.inArray(0, class_values_2);
        });
      }
    });
  } else if (conditions.time == 1) {
    $(".select_menu_2").each(function() {
      if ($(this).is(":visible")) {
        $("#activity_future_sel :selected").each(function(i, val) {
          class_values_1[i] = $(val).text().length;
          score_1 = $.inArray(0, class_values_1);
        });
        $("#activity_future_non_sel :selected").each(function(i, val) {
          class_values_2[i] = $(val).text().length;
          score_2 = $.inArray(0, class_values_2);
        });
      }
    });
  }
  if (score_1 > -1 || score_2 > -1) {
    alert(alert_msg);
    score = 0;
  } else {
    return true;
  }
}

function check_multi_select_3(language, number_of_required_sum) {
  var alert_msg;
  if (language === 0) {
    alert_msg = 'Kies het gevraagde aantal opties.';
  } else if (language == 1) {
    alert_msg = 'Select the required number of options.';
  }
  var score_1 = 0;
  var score_2 = 0;
  $(".select_menu_2").each(function() {
    if ($(this).is(":visible")) {
      score_1 = $("#activity_future_sel :selected").length;
      score_2 = $("#activity_future_non_sel :selected").length;
    }
  });
  if (score_1 + score_2 < number_of_required_sum) {
    alert(alert_msg);
    score = 0;
  } else {
    return true;
  }
}


function check_multi_select() {
  var class_values = [];
  score = 0;
  $(".select_menu_2").each(function() {
    if ($(this).is(":visible")) {
      $(".select_menu_2 :selected").each(function(i, val) {
        class_values[i] = $(val).text().length;
        score = $.inArray(0, class_values);
      });
    }
  });
  if (score > -1) {
    alert("Select at least one option");
    score = 0;
  } else {
    return true;
  }
}

// source: http://js-algorithms.tutorialhorizon.com/2016/01/25/find-duplicates-in-an-array/
// + http://stackoverflow.com/questions/11246758/how-to-get-unique-values-in-an-array
function find_duplicates_in_array() {
  var class_values_1 = [];
  var class_values_2 = [];
  $(".select_menu_2").each(function() {
    if ($(this).is(":visible")) {
      $("#activity_future_sel :selected").each(function(i, val) {
        class_values_1[i] = $(val).text();
      });
      $("#activity_future_non_sel :selected").each(function(i, val) {
        class_values_2[i] = $(val).text();
      });
    }
  });

  var class_values_1_unique = class_values_1.unique();
  n_activities = class_values_1_unique.length;
  var class_values_2_unique = class_values_2.unique();
  var class_values = class_values_1_unique.concat(class_values_2_unique);
  var class_values_unique = class_values.unique();
  // class_values.length == class_values_unique.length;
  // $(".select_menu_2").each(function() {
  //     if ($(this).is(":visible")) {
  //         $(".select_menu_2 :selected").each(function(i, val) {
  //             class_values[i] = $(val).text();
  //         });
  //     }
  // });
  // var result = [];
  // class_values.forEach(function(element, index) {
  //     // Find if there is a duplicate or not
  //     if (class_values.indexOf(element, index + 1) > -1) {
  //         // Find if the element is already in the result array or not
  //         if (result.indexOf(element) === -1) {
  //             result.push(element);
  //         }
  //     }
  // });
  // if (result.length === 0) {
  //     return true;
  if (class_values.length == class_values_unique.length) {
    return true;
  } else {
    // return true;
    var alert_msg = "You cannot indicate for the same activity that you will and will not do it. Please choose again and read the instructions carefully.";
    alert(alert_msg);
  }
  // return result.length;
}


// var values_a_unique = $.unique(a);
// var values_b_unique = $.unique(b);
// var all_values = values_a_unique.concat(values_b_unique);
// var class_values_proxy = class_values;
// var class_values_unique = $.unique(class_values);

function check_choice(classname) {
  class_values = [];
  score = 0;
  classname.each(function() {
    if ($(this).is(":visible")) {
      // if ($(this).attr('type') == 'text') {
      $(this).each(function() {
        class_values.push($(this).val().length);
        score = $.inArray(0, class_values);
      });
      // }
    }
  });
  if (score > -1) {
    alert("Please write down your answer.");
    score = 0;
  } else {
    return true;
  }
}


function has_second_language() {
  if ($("#bilingual_sel_nl").val() == "1" || $("#bilingual_sel_en").val() == "1") {
    return true;
  } else {
    return false;
  }
}

function define_keys(ID, allowedInput, allowedMax) {
  if (allowedInput == "number") {
    ID.keypress(function(e) {
      var code = e.keyCode || e.which;
      if (code != 8 && code !== 0 && (code < 48 || code > 57)) {
        return false;
      }
    });
  } else if (allowedInput == "text") {
    ID.keypress(function(e) {
      var code = e.keyCode || e.which;
      if (code > 32 && (code < 65 || code > 90) &&
        (code < 97 || code > 122)) {
        return false;
      }
    });
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

function check_slider(classname) {
  class_values = [];
  score = 0;
  classname.each(function() {
    if ($(this).is(":visible")) {
      class_values.push($(this).val().length);
      score = $.inArray(15, class_values);
    }
  });
  if (score != -1) {
    var alert_msg;
    if (conditions.cond_lang === 0) {
      alert_msg = "Beweeg alsjeblieft de sliders om je keuzes aan te geven.";
    } else if (conditions.cond_lang == 1) {
      alert_msg = "Please move the sliders to indicate your choices.";
    }
    alert(alert_msg);
    score = 0;
  } else {
    return true;
  }
}

function check_slider_2(classname) {
  class_values = [];
  score = -999;
  // classname.each(function() {
  $(".slider_io_output").each(function() {
    if ($(this).is(":visible")) {
      class_values.push($(this).val().length);
      score = $.inArray(15, class_values);
    }
  });
  if (score !== -999) {
    var alert_msg;
    if (conditions.cond_lang === 0) {
      alert_msg = "Beweeg alsjeblieft de sliders om je keuzes aan te geven.";
    } else if (conditions.cond_lang == 1) {
      alert_msg = "Please move the sliders to indicate your choices.";
    }
    alert(alert_msg);
    score = -999;
  } else {
    return true;
  }
}

function check_slider_with_listener(classname) {
  class_values = [];
  score = 0;
  classname.each(function() {
    if ($(this).is(":visible")) {
      class_values.push(this.moved);
      score = $.inArray(undefined, class_values);
    }
  });
  if (score != -1) {
    var alert_msg = "Please move the sliders to indicate your choices.";
    alert(alert_msg);
    score = 0;
  } else {
  return true;
}
}


function get_unid() {
  unid = twoletters() + randomdigit(0, 9) + randomdigit(0, 9) + randomdigit(0, 9) + randomdigit(0, 9) + randomdigit(0, 9) + randomdigit(0, 9);
}

// source: http://stackoverflow.com/questions/5976289/stretch-text-to-fit-width-of-div
$.fn.stretch_text = function() {
  var elmt = $(this),
    cont_width = elmt.width(),
    txt = elmt.html(),
    one_line = $('<span class="stretch_it">' + txt + '</span>'),
    nb_char = elmt.text().length,
    spacing = cont_width / nb_char,
    txt_width;

  elmt.html(one_line);
  txt_width = one_line.width();

  if (txt_width < cont_width) {
    var char_width = txt_width / nb_char,
      ltr_spacing = spacing - char_width + (spacing - char_width) / nb_char;

    one_line.css({
      'letter-spacing': ltr_spacing
    });
  } else {
    one_line.contents().unwrap();
    elmt.addClass('justify');
  }
};

// new function from previous study
function validate_text(ID, desiredLength, test_kind, language) {
  // text_validation = false;
  if (test_kind == 'both') {
    if (check_text(ID, desiredLength, language) === true) {
      if (check_input(ID, language) === true) {
        text_validation = true;
        // alert('text validated');
        return true;
      }
    }
  } else if (test_kind == 'length') {
    if (check_text(ID, desiredLength, language) === true) {
      text_validation = true;
      // alert('text validated');
      return true;
    }
  } else if (test_kind == 'content') {
    if (check_input(ID, language) === true) {
      text_validation = true;
      // alert('text validated');
      return true;
    }
  }
}

function check_input(ID, language) {
  var keywords;
  var tester_array = [];
  var tester2 = 0;
  var alert_msg;
  if (language === 0) {
    keywords = ["de", "het", "in", "voor", "met", "door", "of", "een", "aan", "van", "op", "daar", "hier", "ik", "je", "ze", "we", "ons", "is"];
    alert_msg = "Gebruik alsjeblieft echte, Nederlandse woorden en zinnen bij het schrijven van je antwoord. Als je niet serieus antwoordt, kunnen we je deelname niet valideren.";
  } else if (language == 1) {
    keywords = ["the", "to", "in", "at", "with", "by", "of", "a", "an", "from", "on", "there", "here", "I", "you", "they", "we", "us", "is", "it"];
    alert_msg = "Please use real English words and sentences in your answer. You will not be able to proceed otherwise. We cannot validate your participation without serious participation.";
  }
  textin = ID.val().toLowerCase().split(" ");
  $.each(keywords, function(index, val) {
    tester = $.inArray(val, textin);
    if (tester < 0) {
      tester2 = 0;
    } else {
      tester2 = 1;
    }
    tester_array.push(tester2);
  });
  checksum_tester = sum(tester_array);
  if ((checksum_tester / textin.length) < 0.01) {
    alert(alert_msg);
    language_prompt++;
  } else {
    return true;
  }
}

function check_text(ID, desiredLength, language) {
  var alert_msg;
  if (language === 0) {
    alert_msg = "Schrijf alsjeblieft ten minste " + desiredLength + " woorden om deze vraag te beantwoorden.";
  } else if (language == 1) {
    alert_msg = "Please use at least " + desiredLength + " words to answer this questions.";
  }
  // var raw = ID.val().toLowerCase().replace(/ /g, '');
  var raw = ID.val().toLowerCase().split(/\s+/);
  // $("#statement1").val().toLowerCase()
  if (raw.length < desiredLength) {
    alert(alert_msg);
    length_prompt++;
  } else {
    return true;
  }
}

function sum(arr) {
  var r = 0;
  $.each(arr, function(i, v) {
    r += v;
  });
  return r;
}

function record_elapsed_start(ID) {
  elapsed = 0;
  ID.keypress(function(e) {
    time1 = now();
  });
}

function record_elapsed_end(ID) {
  time2 = now();
  elapsed = time2 - time1;
}


function get_length(ID) {
  lengthtext = ID.val().toLowerCase().split(" ");
  id_length = lengthtext.length;
  return id_length;
}

function record_deletes() {
  var listen = true;
  deletions_arr = [];
  $("#statement1").keydown(function(e) {
    if (listen === true) {
      var code = e.keyCode || e.which;
      if (code == 8) {
        deletions_arr.push(1);
      }
    }
  });
}

function set_certainty_slider_value(number) {
  var input = "#activity" + number + "_certainty";
  var output = "#certainty_output_" + number;
  $(output).val($(input).val() + '%');
}

function set_frequency_slider_value(number) {
  var input = "#activity" + number + "_frequency";
  var output = "#frequency_output_" + number;
  $(output).val($(input).val() + '%');
}

function set_planning_slider_value(number) {
  var input = "#activity" + number + "_planning";
  var output = "#planning_output_" + number;
  $(output).val($(input).val() + '%');
}

function set_certainty_slider_value_2(number) {
  var input = "#activity" + number + "_certainty";
  var output = "#certainty_output_" + number;
  $(output).val($(input).val() + '%').hide();
}

function set_frequency_slider_value_2(number) {
  var input = "#activity" + number + "_frequency";
  var output = "#frequency_output_" + number;
  $(output).val($(input).val() + '%').hide();
}

function set_planning_slider_value_2(number) {
  var input = "#activity" + number + "_planning";
  var output = "#planning_output_" + number;
  $(output).val($(input).val() + '%').hide();
}

function set_manipulation_check1_slider_value() {
  var input = "#manipulation_check1_val";
  var output = "#manipulation_check1_output";
  $(output).val($(input).val() + '%').hide();
}

function set_manipulation_check2_slider_value() {
  var input = "#manipulation_check2_val";
  var output = "#manipulation_check2_output";
  $(output).val($(input).val() + '%');
}

function set_manipulation_check3_slider_value() {
  var input = "#manipulation_check3_val";
  var output = "#manipulation_check3_output";
  $(output).val($(input).val());
}

function set_manipulation_check4_slider_value() {
  var input = "#manipulation_check4_val";
  var output = "#manipulation_check4_output";
  $(output).val($(input).val());
}

function set_manipulation_check5_slider_value() {
  var input = "#manipulation_check5_val";
  var output = "#manipulation_check5_output";
  $(output).val($(input).val());
}

function set_manipulation_check6_slider_value() {
  var input = "#manipulation_check6_val";
  var output = "#manipulation_check6_output";
  $(output).val($(input).val());
}

function set_manipulation_check7_slider_value() {
  var input = "#manipulation_check7_val";
  var output = "#manipulation_check7_output";
  $(output).val($(input).val());
}

function set_manipulation_check8_slider_value() {
  var input = "#manipulation_check8_val";
  var output = "#manipulation_check8_output";
  $(output).val($(input).val());
}

function set_manipulation_check9_slider_value() {
  var input = "#manipulation_check9_val";
  var output = "#manipulation_check9_output";
  $(output).val($(input).val());
}

function set_manipulation_check10_slider_value() {
  var input = "#manipulation_check10_val";
  var output = "#manipulation_check10_output";
  $(output).val($(input).val());
}

function set_manipulation_check11_slider_value() {
  var input = "#manipulation_check11_val";
  var output = "#manipulation_check11_output";
  $(output).val($(input).val());
}

function set_manipulation_check12_slider_value() {
  var input = "#manipulation_check12_val";
  var output = "#manipulation_check12_output";
  $(output).val($(input).val());
}

function set_manipulation_check13_slider_value() {
  var input = "#manipulation_check13_val";
  var output = "#manipulation_check13_output";
  $(output).val($(input).val());
}

function set_manipulation_check14_slider_value() {
  var input = "#manipulation_check14_val";
  var output = "#manipulation_check14_output";
  $(output).val($(input).val());
}


function activate_stretch() {
  $('.stretch').each(function() {
    $(this).stretch_text();
  });
}

function randomdigit(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function get_cond() {
  // var cond_ver = randomdigit(0, 1);
  var cond_ver = 0;
  var cond_check = randomdigit(0, 1);
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


function select_manipulation(temporality, language) {
  var selected_obj;
  var selected_obj_;
  var selected_obj_x;
  var selected_obj__;
  var candidate_objects;
  // var choices;
  var matches;
  var obj_array = [];
  var single_obj = {};
  var sel_val = -1;
  var sel_freq = -1;
  var sel_cert = -1;
  var activities_do;
  var obj_array_;
  var choices = choices_en_specific_donot;
  if (conditions.cond_ver === 0) {
    // candidate_objects = collect_non_selected(temporality, 'do');
    candidate_objects = collect_selected(temporality, 'do');
    selected_obj = shuffle(candidate_objects)[0];
    // selected_activities = candidate_objects;

    // check for debug
    // check that only the non-selected ones appear
    $(".table_row_div").each(function(index, val) {
      sel_val = $(this).children().eq(0).text();
      sel_freq = $(this).children().eq(1).children().children().eq(1).val();
      sel_cert = $(this).children().eq(2).children().children().eq(1).val();
      single_obj = {
        'sel_val': sel_val,
        'sel_freq': sel_freq - 0,
        'sel_cert': sel_cert - 0,
        'sel_freq_inv': 100 - sel_freq,
        'combined': (sel_cert - 0) + (100 - sel_freq)
      };
      obj_array.push(single_obj);
    });
    selected_activities = obj_array;
    // check if overlap
    activities_do = collect_selected(temporality, 'do');
    obj_array_ = obj_array.filter(function(val, index, array) {
      return activities_do.indexOf(val.sel_val) < 0;
    });

  } else if (conditions.cond_ver == 1) {
    // check that only the non-selected ones appear
    $(".table_row_div").each(function(index, val) {
      sel_val = $(this).children().eq(0).text();
      sel_freq = $(this).children().eq(1).children().children().eq(1).val();
      sel_cert = $(this).children().eq(2).children().children().eq(1).val();
      single_obj = {
        'sel_val': sel_val,
        'sel_freq': sel_freq - 0,
        'sel_cert': sel_cert - 0,
        'sel_freq_inv': 100 - sel_freq,
        'combined': (sel_cert - 0) + (100 - sel_freq)
      };
      obj_array.push(single_obj);
    });
    selected_activities = obj_array;
    // check if overlap
    activities_do = collect_selected(temporality, 'do');
    obj_array_ = obj_array.filter(function(val, index, array) {
      return activities_do.indexOf(val.sel_val) < 0;
    });
    // selected_obj_ = obj_array_.reduce((max, single) => max.combined > single.combined ? max : single);
    selected_obj_ = obj_array_.reduce(function(max, single) {
      if (max.combined > single.combined) {
        return max;
      } else {
        return single;
      }
    });
    // console.log(selected_obj_);
    // console.log(selected_obj_x);
    selected_obj__ = selected_obj_.sel_val;
    matches = choices.filter(function(val, index, array) {
      return val.option_normal == selected_obj__;
    });
    // selected_obj = matches[0].option_specific;
    selected_obj = matches[0].option_normal;
  }
  console.log(selected_obj);
  return selected_obj;
  // return matches[0];
}

function generate_table_row(number, item, temporality, language, state) {
  var table_row;
  if (language === 0) {
    if (temporality == 'future') {
      if (state == 'do') {
        table_row = '<div id="p' + number + '" class="table_row_div">' +
          '<span id="activity' + number + ' " style="text-transform: uppercase">' + item + '</span>' +
          '<span class="activity_span">' +
          '<div class="slider_io">' +
          '<span id="slider_instr">Hoe vaak heb je dit in het verleden gedaan?</span> ' +
          '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_frequency" value="50" min="0" max="100" step="5" oninput="set_frequency_slider_value(' + number + ')">' +
          // '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_frequency" value="50" min="0" max="100" step="5" oninput="set_frequency_slider_value(' + number + ')">' +
          '<output class="slider_io_output" id="frequency_output_' + number + '">move the slider</output>' +
          '<div class="slider_io_output_labels stretch">(nog nooit) -  -  -  (heel vaak)</div> ' +
          '</div>' +
          '</span>' +
          '<span class="certainty_span">' +
          '<div class="slider_io">' +
          '<span id="slider_instr">Hoe zeker ben je dat je dit gaat doen?</span> ' +
          '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_certainty" value="50" min="0" max="100" step="5" oninput="set_certainty_slider_value(' + number + ')">' +
          '<output class="slider_io_output" id="certainty_output_' + number + '">move the slider</output>' +
          '<div class="slider_io_output_labels stretch">(helemaal niet) -  -  -  (helemaal wel)</div> ' +
          '</div>' +
          '</span>' +
          '<span class="planning_span">' +
          '<div class="slider_io">' +
          '<span id="slider_instr">Hoe goed heb je dit al gepland?</span> ' +
          '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_planning" value="50" min="0" max="100" step="5" oninput="set_planning_slider_value(' + number + ')">' +
          '<output class="slider_io_output" id="planning_output_' + number + '">move the slider</output>' +
          '<div class="slider_io_output_labels stretch">(helemaal niet gepland) -  -  -  (heel goed gepland)</div> ' +
          '</div>' +
          '</span>' +
          '</div>';
      } else if (state == 'notdo') {
        table_row = '<div id="p' + number + '" class="table_row_div">' +
          '<span id="activity' + number + ' " style="text-transform: uppercase">' + item + '</span>' +
          '<span class="activity_span" style="left: 33%;">' +
          '<div class="slider_io">' +
          '<span id="slider_instr">Hoe vaak heb je dit in het verleden wel gedaan?</span> ' +
          '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_frequency" value="50" min="0" max="100" step="5" oninput="set_frequency_slider_value(' + number + ')">' +
          '<output class="slider_io_output" id="frequency_output_' + number + '">move the slider</output>' +
          '<div class="slider_io_output_labels stretch">(nog nooit) -  -  -  (heel vaak)</div> ' +
          '</div>' +
          '</span>' +
          '<span class="certainty_span"  style="left: 66%;">' +
          '<div class="slider_io">' +
          '<span id="slider_instr">Hoe zeker ben je dat je dit <u>niet</u> gaat doen komend weekend?</span> ' +
          '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_certainty" value="50" min="0" max="100" step="5" oninput="set_certainty_slider_value(' + number + ')">' +
          '<output class="slider_io_output" id="certainty_output_' + number + '">move the slider</output>' +
          '<div class="slider_io_output_labels stretch">(helemaal niet) -  -  -  (helemaal wel)</div> ' +
          '</div>' +
          '</span>' +
          // '<span class="planning_span">' +
          // '<div class="slider_io">' +
          // '<span id="slider_instr">Hoe goed heb je dit al gepland?</span> ' +
          // '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_planning" value="50" min="0" max="100" step="5" oninput="set_planning_slider_value(' + number + ')">' +
          // '<output class="slider_io_output" id="planning_output_' + number + '">move the slider</output>' +
          // '<div class="slider_io_output_labels stretch">(helemaal niet gepland) -  -  -  (heel goed gepland)</div> ' +
          // '</div>' +
          // '</span>' +
          '</div>';
      }
    } else if (temporality == 'past') {
      table_row = '<div id="p' + number + '" class="table_row_div">' +
        '<span id="activity' + number + ' " style="text-transform: uppercase">' + item + '</span>' +
        '<span class="activity_span">' +
        '<div class="slider_io">' +
        '<span id="slider_instr">Hoe vaak heb je dit in het verleden gedaan?</span> ' +
        '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_frequency" value="50" min="0" max="100" step="5" oninput="set_frequency_slider_value(' + number + ')">' +
        '<output class="slider_io_output" id="frequency_output_' + number + '">move the slider</output>' +
        '<div class="slider_io_output_labels stretch">(nog nooit) -  -  -  (heel vaak)</div> ' +
        '</div>' +
        '</span>' +
        '</div>';
    }
  } else if (language == 1) {
    if (temporality == 'future') {
      if (state == 'do') {
        table_row = '<div id="p' + number + '" class="table_row_div">' +
          '<span id="activity' + number + ' " style="text-transform: uppercase">' + item + '</span>' +
          '<span class="activity_span">' +
          '<div class="slider_io">' +
          '<span id="slider_instr">How often have you done this in the past?</span> ' +
          '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_frequency" value="50" min="0" max="100" step="5" oninput="set_frequency_slider_value_2(' + number + ')">' +
          '<output class="slider_io_output" id="frequency_output_' + number + '">move the slider</output>' +
          '<div class="slider_io_output_labels stretch">(never) -  -  -  (very often)</div> ' +
          '</div>' +
          '</span>' +
          '<span class="certainty_span">' +
          '<div class="slider_io">' +
          '<span id="slider_instr">How certain are you that you will do this?</span> ' +
          '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_certainty" value="50" min="0" max="100" step="5" oninput="set_certainty_slider_value_2(' + number + ')">' +
          '<output class="slider_io_output" id="certainty_output_' + number + '">move the slider</output>' +
          '<div class="slider_io_output_labels stretch">(not at all) -  -  -  (very much)</div> ' +
          '</div>' +
          '</span>' +
          '<span class="planning_span">' +
          '<div class="slider_io">' +
          '<span id="slider_instr">How well have you planned this already?</span> ' +
          '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_planning" value="50" min="0" max="100" step="5" oninput="set_planning_slider_value_2(' + number + ')">' +
          '<output class="slider_io_output" id="planning_output_' + number + '">move the slider</output>' +
          '<div class="slider_io_output_labels stretch">(not at all) -  -  -  (very much)</div> ' +
          '</div>' +
          '</span>' +
          '</div>';
      } else if (state == 'notdo') {
        table_row = '<div id="p' + number + '" class="table_row_div">' +
          '<span id="activity' + number + ' " style="text-transform: uppercase">' + item + '</span>' +
          '<span class="activity_span" style="left: 33%;">' +
          '<div class="slider_io">' +
          '<span id="slider_instr">How often have you done this in the past?</span> ' +
          '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_frequency" value="50" min="0" max="100" step="5" oninput="set_frequency_slider_value_2(' + number + ')">' +
          '<output class="slider_io_output" id="frequency_output_' + number + '">move the slider</output>' +
          '<div class="slider_io_output_labels stretch">(never) -  -  -  (very often)</div> ' +
          '</div>' +
          '</span>' +
          '<span class="certainty_span" style="left: 66%;">' +
          '<div class="slider_io">' +
          '<span id="slider_instr">How certain are you that you will <u>not</u> do this activity?</span> ' +
          '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_certainty" value="50" min="0" max="100" step="5" oninput="set_certainty_slider_value_2(' + number + ')">' +
          '<output class="slider_io_output" id="certainty_output_' + number + '">move the slider</output>' +
          '<div class="slider_io_output_labels stretch">(not at all) -  -  -  (very much)</div> ' +
          '</div>' +
          '</span>' +
          // '<span class="planning_span">' +
          // '<div class="slider_io">' +
          // '<span id="slider_instr">How well have you planned this already?</span> ' +
          // '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_planning" value="50" min="0" max="100" step="5" oninput="set_planning_slider_value(' + number + ')">' +
          // '<output class="slider_io_output" id="planning_output_' + number + '">move the slider</output>' +
          // '<div class="slider_io_output_labels stretch">(not at all) -  -  -  (very much)</div> ' +
          // '</div>' +
          // '</span>' +
          '</div>';
      }
    } else if (temporality == 'past') {
      table_row = '<div id="p' + number + '" class="table_row_div">' +
        '<span id="activity' + number + ' " style="text-transform: uppercase">' + item + '</span>' +
        '<span class="activity_span">' +
        '<div class="slider_io">' +
        '<span id="slider_instr">How often have you done this in the past?</span> ' +
        '<input type="range" class="slider_io_slider select_menu" id="activity' + number + '_frequency" value="50" min="0" max="100" step="5" oninput="set_frequency_slider_value_2(' + number + ')">' +
        '<output class="slider_io_output" id="frequency_output_' + number + '">move the slider</output>' +
        '<div class="slider_io_output_labels stretch">(never) -  -  -  (very often)</div> ' +
        '</div>' +
        '</span>' +
        '</div>';
    }
  }
  return table_row;
}

function collect_selected(temporality, state) {
  var selected_items = [];
  if (temporality == 'past') {
    if (state == 'do') {
      $("#activity_past :selected").each(function(i, val) {
        selected_items[i] = $(val).text();
      });
    } else if (state == 'notdo') {
      $("#activity_past_non :selected").each(function(i, val) {
        selected_items[i] = $(val).text();
      });
    }
  } else if (temporality == 'future') {
    if (state == 'do') {
      $("#activity_future :selected").each(function(i, val) {
        selected_items[i] = $(val).text();
      });
    } else if (state == 'notdo') {
      $("#activity_future_non :selected").each(function(i, val) {
        selected_items[i] = $(val).text();
      });
    }
  }
  return selected_items;
}

function collect_non_selected(temporality, state) {
  var selected_items = [];
  if (temporality == 'past') {
    if (state == 'do') {
      $("#activity_past option").each(function() {
        if (!$(this).is(':selected')) {
          selected_items.push($(this).text());
        }
      });
    } else if (state == 'notdo') {
      $("#activity_past_non option").each(function() {
        if (!$(this).is(':selected')) {
          selected_items.push($(this).text());
        }
      });
    }
  } else if (temporality == 'future') {
    if (state == 'do') {
      $("#activity_future option").each(function() {
        if (!$(this).is(':selected')) {
          selected_items.push($(this).text());
        }
      });
    } else if (state == 'notdo') {
      $("#activity_future_non option").each(function() {
        if (!$(this).is(':selected')) {
          selected_items.push($(this).text());
        }
      });
    }
  }
  return selected_items;
}

var now = (function() {
  var performance = window.performance || {};
  performance.now = (function() {
    return performance.now ||
      performance.webkitNow ||
      performance.msNow ||
      performance.oNow ||
      performance.mozNow ||
      function() {
        return new Date().getTime();
      };
  })();
  return performance.now();
});

function collect_statement(ID) {
  var elapsed = end_timer();
  var pagefocus = pagefocus_get_data();
  var content = ID.val();
  var length = get_length(ID);
  var deletes = recorded_deletes;
  var data = {
    content: content,
    elapsed: elapsed,
    pagefocus: pagefocus,
    length: length,
    deletes: deletes
  };
  return data;
}

function start_timer() {
  t1 = now();
}

function end_timer() {
  var t2 = now();
  var elapsed = t2 - t1;
  return elapsed;
}

function set_lang_nl() {
  selected_language = 'nl';
  to_informed_consent();
}

function set_lang_other() {
  selected_language = 'other';
  to_informed_consent();
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

function make_quiz_question(id, number, language) {
  var selected_question;
  var filler;
  if (language === 0) {
    selected_question = quiz_nl[number];
    filler = "Kies het juiste antwoord";
  } else if (language == 1) {
    selected_question = quiz_en[number];
    filler = "Choose the correct answer";
  }
  var menu = '<div id="quiz_' + id + '" class="quiz">' +
    selected_question.quiz_question +
    // 'Which of the following activities did you not do last weekend?' +
    '<select id="quiz_select_' + id + '" class="select_menu_">' +
    '<option value="">' + filler + '</option>' +
    '<option value="option1">' + selected_question.quiz_options.option1 + '</option>' +
    '<option value="option2">' + selected_question.quiz_options.option2 + '</option>' +
    '<option value="option3">' + selected_question.quiz_options.option3 + '</option>' +
    '<option value="option4">' + selected_question.quiz_options.option4 + '</option>' +
    '</select>' +
    '</div>';
  return menu;
}

function check_quiz_answer(id, number, language) {
  var selected_question;
  var alert_msg;
  if (language === 0) {
    selected_question = quiz_nl[number];
  } else if (language == 1) {
    selected_question = quiz_en[number];
  }
  var selected_choice;
  switch (id) {
    case 1:
      selected_choice = $("#quiz_select_1 option:selected").text();
      break;
    case 2:
      selected_choice = $("#quiz_select_2 option:selected").text();
      break;
    case 3:
      selected_choice = $("#quiz_select_3 option:selected").text();
      break;
    case 4:
      selected_choice = $("#quiz_select_4 option:selected").text();
      break;
  }
  if (selected_choice == selected_question.quiz_correct) {
    return true;
  } else {
    if (language === 0) {
      alert_msg = "Dit antwoord is niet correct. Lees het voorbeeldverhaal opnieuw zodat je alle vragen hierover goed kunt beantwoorden.";
    } else if (language == 1) {
      alert_msg = "This answer is not correct. Please read the model statement again so that you can answer all question about it.";
    }
    alert(alert_msg);
    ms_prompt++;
    to_model_statement1_proxy();
  }
}

// source: http://stackoverflow.com/questions/11246758/how-to-get-unique-values-in-an-array
Array.prototype.contains = function(v) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === v) return true;
  }
  return false;
};

Array.prototype.unique = function() {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (!arr.contains(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};
