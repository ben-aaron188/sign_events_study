var free_condition_slot = {};

function get_condition_from_db(callback_func) {
    var retrieved_data_from_db = {};
    $.ajax({
        type: "GET",
        url: "../php/get_conditions.php",
        dataType: "json",
        success: function (response) {
            retrieved_data_from_db = response;
            $(retrieved_data_from_db).each(function (i, eli) {
                if (eli.status == "0") {
                    if (free_condition_slot[0] === undefined) {
                        free_condition_slot = eli;
                        set_condition_in_db(free_condition_slot.id, 1);
                        callback_func();
                        console.log('resolved condition at id: ' + free_condition_slot.id);
                    }
                } else {
                    console.log('id ' + i + ' taken');
                }
            });
            // return(free_chat_room);
        }
    });
    // cannot return before success!
}
// use as: get_condition_from_db(display_condition_details);
// this sets a global variable: condition_meta


// updates condition status in db binary to busy/free
function set_condition_in_db(id, status_update) {
    $.ajax({
        type: "POST",
        url: "../php/set_conditions.php",
        data: {
            id: id,
            updatable_status: status_update
        },
        error: function (data) {
            // alert(data);
        },
        success: function (data) {
            console.log(data);
            console.log("condition updated");
        },
    });
}

// retrieves condition data from ajax call
function display_condition_details() {
    var selected_slot = free_condition_slot;
    var cond_id = free_condition_slot.id;
    var cond_cond = free_condition_slot.condition;
    //    var user_name = unid;
    var cond_status = free_condition_slot.status;
    var condition_meta_data = {
        'cond_id': cond_id,
        'cond_cond': cond_cond,
        'cond_status': cond_status
    };
    window.condition_meta = condition_meta_data;
    // return (credentials);
}
