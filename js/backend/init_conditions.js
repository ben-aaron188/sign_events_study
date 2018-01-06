//this must be set to 'false' for correct order insertion into database
//$.ajaxSetup({ async: false });


var n_per_condition = 10;

var condition1 = new Array(n_per_condition).fill(1);
var condition2 = new Array(n_per_condition).fill(2);
var condition3 = new Array(n_per_condition).fill(3);
var condition4 = new Array(n_per_condition).fill(4);

var all_conditions = shuffle([].concat.apply([], [condition1, condition2, condition3, condition4]));

var all_conditions = [].concat.apply([], [condition1, condition2, condition3, condition4]);


function bunch_set_conditions(array_with_conditions) {
  $(array_with_conditions).each(function(i, eli) {
    console.log(eli, i);
    init_conditions_in_db(eli, 0);
  });
}

//bunch_set_conditions(all_conditions);

//$.ajaxSetup({ async: true });


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

// sets initial conditions
function init_conditions_in_db(condition, status_update) {
  $.ajax({
    type: "POST",
    url: "../php/init_conditions.php",
    data: {
      condition: condition,
      updatable_status: status_update
    },
    error: function(data) {
      // alert(data);
    },
    success: function(data) {
      console.log(data);
      console.log("conditions initialized");
    },
  });
}


// block-wise randomization
var conditions_array_1 = [1, 2, 3, 4];
var conditions_array_2 = [1, 2, 3, 4, 1, 2, 3, 4];

// var n_array1 = 55;
// var n_array2 = 30; //add reserve

var n_array1 = 30;
var n_array2 = 15; //add reserve


// var n_array1 = 8;
// var n_array2 = 2;


var new_conditions_array_1 = [];
var new_conditions_array_2 = [];

for (var i = 0; i < n_array1; i++) {
  new_conditions_array_1[i] = shuffle(conditions_array_1);
}

for (var i = 0; i < n_array2; i++) {
  new_conditions_array_2[i] = shuffle(conditions_array_2);
}

var condition_arrays_concat = shuffle([].concat.apply([], [new_conditions_array_1, new_conditions_array_2]));

// map
var all_conditions = $.map(condition_arrays_concat, function(n) {
  return n;
});



// last batch
// var condition1 = new Array(30).fill(4);
//
// var all_conditions = shuffle([].concat.apply([], [condition1]));
//
// $.ajaxSetup({ async: false });
// bunch_set_conditions(all_conditions);
// $.ajaxSetup({ async: true });
