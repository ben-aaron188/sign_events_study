function pre_collect_php(var_data) {
  $.ajax({
    type: "POST",
    url: "../php/precollect.php",
    data: {
      data_pre: var_data
    },
    error: function(data) {
      // alert(data);
    },
    success: function(data) {
      // console.log(data);
      console.log("intermittent data submitted");
    },
  });
}
