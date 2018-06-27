// minimal task flow
$(document).ready(function() {
  // get_condition_from_db(display_condition_details);
  var text = introduction;
  $('body').prepend('<div id="intro1" class="main_instructions">' + text + '</div>');
  $("#intro1").show();
  $("#back").hide();
  $("#next").attr('onclick', 'to_informed_consent()');
  setTimeout(function() {
    init_data();
    conditions = get_cond();
    get_unid();
  }, 100);
});

function to_informed_consent() {
  // conditions = get_cond_from_ajax(condition_meta);
  $("#back").hide();
  var text = ic;
  $('body').prepend('<div id="informed_consent" class="main_instructions">' + text + '</div>');
  simple_transition_2($(".main_instructions"), $("#informed_consent"));
  $("#next").attr('onclick', 'to_main_instructions1()');
}

function to_main_instructions1() {
  var text;
  if (conditions.veracity == 0) {
    if (conditions.check == 0) {
      text = instruction_general_1_t_nc;
    } else if (conditions.check == 1) {
      text = instruction_general_1_t_c;
    }
    $("#next").attr('onclick', 'to_main_instructions2()');
  } else if (conditions.veracity == 1) {
    if (conditions.check == 0) {
      text = instruction_general_1_f_nc;
    } else if (conditions.check == 1) {
      text = instruction_general_1_f_c;
    }
    $("#next").attr('onclick', 'to_main_instructions1_1()');
  }
  $('body').prepend('<div id="main_instructions1" class="main_instructions">' + text + '</div>');
  simple_transition_2($(".main_instructions"), $("#main_instructions1"));
}

function to_main_instructions1_1() {
  var text = instruction_general_1_1_f_nc;
  $('body').prepend('<div id="main_instructions1_1" class="main_instructions">' + text + '</div>');
  var retrieved_activities = get_activities(3, 'batch1');
  show_activities(retrieved_activities);
  simple_transition_2($(".main_instructions"), $("#main_instructions1_1"));
  // $("#next").attr('onclick', 'to_main_instructions1_2()');
  $("#next").attr('onclick', 'assign_activity()');
}

function to_main_instructions1_2() {
  var text = instruction_general_1_2_f_nc;
  $('body').prepend('<div id="main_instructions1_2" class="main_instructions">' + text + '</div>');
  $('#main_instructions1_2').prepend('</br></br></br>Your fake activity is:' + '<p style="color: Red">' + assigned_activity + '</p>');
  simple_transition_2($(".main_instructions"), $("#main_instructions1_2"));
  $("#next").attr('onclick', 'to_main_instructions2()');
}


function to_main_instructions2() {
  typefrom_url = get_url(unid);
  console.log(typefrom_url);
  build_html(typefrom_url);
  // var text = instruction_general_2;
  var text = 'For our research it is important that you do this task seriously. Unfortunately, we will have to exclude participants who did not follow the instructions. Your answers should be in English language.</br>If you click on the arrow to proceed, you will see the actual task. Upon completing the task, you will be redirected to prolific.</br>Your username for this task is: ' + unid;
  $('body').prepend('<div id="main_instructions2" class="main_instructions">' + text + '</div>');
  simple_transition_2($(".main_instructions"), $("#main_instructions2"));
  $("#next").attr('onclick', 'start_task()');
}

function build_html(url_param) {
var html_to_parse;
  if(conditions.veracity == 0){
  html_to_parse = '<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"><!-- <title></title> --><style type="text/css">html {margin: 0;height: 100%;overflow: hidden;}iframe {position: absolute;left: 0;right: 0;bottom: 0;top: 0;border: 0;}</style></head><body> <iframe id="typeform-full" width="100%" height="100%" frameborder="0" src=' + url_param + '></iframe><script type="text/javascript" src="https://embed.typeform.com/embed.js"></script></body></html>';
} else if(conditions.veracity == 1){
  html_to_parse = '<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"><!-- <title></title> --><style type="text/css">html {margin: 0;height: 100%;overflow: hidden;}iframe {position: absolute;left: 0;right: 0;bottom: 0;top: 0;border: 0;}</style></head><body> <iframe id="typeform-full" width="100%" height="100%" frameborder="0" src=' + url_param + '></iframe><script type="text/javascript" src="https://embed.typeform.com/embed.js"></script></body></html>';
}


  // var iframe = document.createElement('iframe');
  // var html = '<body>Foo</body>';
  // iframe.src = 'data:text/html;charset=utf-8,' + encodeURI(html);
  // document.body.appendChild(iframe);
  var parser = new DOMParser();
  tf_embed_html = parser.parseFromString(html_to_parse, "text/html");
  console.log(tf_embed_html);
}

function start_task() {
  // submit data TODO: ENABLE
  get_data();
  pre_collect_php(JSON.stringify(data));
  // window.location = '../html/tf_embed.html';
  window.document.body.innerHTML = tf_embed_html.documentElement.innerHTML;
}


function get_data() {
  var browser_os = $.pgwBrowser();
  data.browsername = browser_os.browser.name;
  data.browserversion = browser_os.browser.majorVersion;
  data.osname = browser_os.os.name;
  data.osversion = browser_os.os.majorVersion;
  data.ts_time = moment().format('LTS');
  data.ts_date = moment().format('l');
  data.unid = unid;
  data.condition = conditions.veracity;
  data.assigned_activity = assigned_activity;
}
