// minimal task flow
$(document).ready(function() {
  var text = introduction;
  $('body').prepend('<div id="intro1" class="main_instructions">' + text + '</div>');
  $("#intro1").show();
  $("#back").hide();
  $("#next").attr('onclick', 'to_informed_consent()');
  setTimeout(function() {
    init_data();
    getIP();
    get_unid();
  }, 100);
});

function to_informed_consent() {
  $("#back").hide();
  var text = ic;
  $('body').prepend('<div id="informed_consent" class="main_instructions">' + text + '</div>');
  simple_transition_2($(".main_instructions"), $("#informed_consent"));
  $("#next").attr('onclick', 'to_main_instructions1()');
}

function to_main_instructions1() {
  var text = instruction_general_1_t;
  $('body').prepend('<div id="main_instructions1" class="main_instructions">' + text + '</div>');
  simple_transition_2($(".main_instructions"), $("#main_instructions1"));
  $("#next").attr('onclick', 'to_main_instructions2()');
}

function to_main_instructions2() {
  var text = instruction_general_2;
  $('body').prepend('<div id="main_instructions2" class="main_instructions">' + text + '</div>');
  simple_transition_2($(".main_instructions"), $("#main_instructions2"));
  $("#next").attr('onclick', 'start_task()');
}

function start_task(){
  window.location = '../html/tf_embed.html';
}


function get_data() {
  var bilingual_bool = $("#bilingual_sel_en").val();
  var age = $("#age_sel_en").val();
  var gender = $("#gender_sel_en").val();
  var origin = $("#origin_sel_en").val();
  var education = $("#education_sel_en").val();
  var lang1 = $("#lang1_sel_en").val();
  var lang2 = $("#lang2_sel_en").val();
  var clientip_resolved;
  if (typeof clientip === 'undefined') {
    clientip_resolved = '999999999';
  } else {
    clientip_resolved = clientip;
  }
  data.ip = clientip_resolved;
  data.browsername = $.browser.name;
  data.browserversion = $.browser.version;
  data.ts_time = moment().format('LTS');
  data.ts_date = moment().format('l');
  data.unid = unid;
  data.unidin = $("#unidin").val();
  data.crowdf = $("#crowdf").val();
  data.gender = gender;
  data.age = age;
  data.education = education;
  data.origin = origin;
  data.bilingual_sel = bilingual_bool;
  data.lang1_sel = lang1;
  data.lang2_sel = lang2;
  data.cond_lang = conditions.cond_lang;
  data.cond_ver = conditions.cond_ver;
  data.time = conditions.time;

  data.manipulation_check1 = $("#manipulation_check1_val").val();
  data.manipulation_check2 = $("#manipulation_check2_val").val();
  data.manipulation_check3 = $("#manipulation_check3_val").val();
  data.manipulation_check4 = $("#manipulation_check4_val").val();
  data.manipulation_check5 = $("#manipulation_check5_val").val();
  data.manipulation_check6 = $("#manipulation_check6_val").val();
  data.manipulation_check7 = $("#manipulation_check7_val").val();
  data.manipulation_check8 = $("#manipulation_check8_val").val();
  data.manipulation_check9 = $("#manipulation_check9_val").val();
  data.manipulation_check10 = $("#manipulation_check10_val").val();
  data.manipulation_check11 = $("#manipulation_check11_val").val();
  data.manipulation_check12 = $("#manipulation_check12_val").val();
  data.manipulation_check13 = $("#manipulation_check13_val").val();
  data.manipulation_check14 = $("#manipulation_check14_val").val();

  data.activity = instructive;
  data.n_activities = n_activities;

  data.selected_activities = selected_activities;

  data.chat_chat_name = chat_meta.chat_name;
  data.chat_chat_pw = chat_meta.chat_pw;
  data.chat_user_name = chat_meta.user_name;
  data.chat_user_pw = chat_meta.user_pw;
}

function get_data_now() {
  var bilingual_bool = $("#bilingual_sel_en").val();
  var age = $("#age_sel_en").val();
  var gender = $("#gender_sel_en").val();
  var origin = $("#origin_sel_en").val();
  var education = $("#education_sel_en").val();
  var lang1 = $("#lang1_sel_en").val();
  var lang2 = $("#lang2_sel_en").val();
  var clientip_resolved;
  if (typeof clientip === 'undefined') {
    clientip_resolved = '999999999';
  } else {
    clientip_resolved = clientip;
  }
  data.ip = clientip_resolved;
  data.browsername = $.browser.name;
  data.browserversion = $.browser.version;
  data.ts_time = moment().format('LTS');
  data.ts_date = moment().format('l');
  data.unid = unid;
  data.unidin = $("#unidin").val();
  data.crowdf = $("#crowdf").val();
  data.gender = gender;
  data.age = age;
  data.education = education;
  data.origin = origin;
  data.bilingual_sel = bilingual_bool;
  data.lang1_sel = lang1;
  data.lang2_sel = lang2;
  data.cond_lang = conditions.cond_lang;
  data.cond_ver = conditions.cond_ver;
  data.time = conditions.time;

  data.manipulation_check1 = $("#manipulation_check1_val").val();
  data.manipulation_check2 = $("#manipulation_check2_val").val();
  data.manipulation_check3 = $("#manipulation_check3_val").val();
  data.manipulation_check4 = $("#manipulation_check4_val").val();
  data.manipulation_check5 = $("#manipulation_check5_val").val();
  data.manipulation_check6 = $("#manipulation_check6_val").val();
  data.manipulation_check7 = $("#manipulation_check7_val").val();
  data.manipulation_check8 = $("#manipulation_check8_val").val();
  data.manipulation_check9 = $("#manipulation_check9_val").val();
  data.manipulation_check10 = $("#manipulation_check10_val").val();
  data.manipulation_check11 = $("#manipulation_check11_val").val();
  data.manipulation_check12 = $("#manipulation_check12_val").val();
  data.manipulation_check13 = $("#manipulation_check13_val").val();
  data.manipulation_check14 = $("#manipulation_check14_val").val();

  data.activity = instructive;
  data.n_activities = n_activities;

  data.selected_activities = selected_activities;

  data.chat_chat_name = chat_meta.chat_name;
  data.chat_chat_pw = chat_meta.chat_pw;
  data.chat_user_name = chat_meta.user_name;
  data.chat_user_pw = chat_meta.user_pw;
}
