$(function(){
    $("#Existing").on("click", ShowExist);
    $("#New").on("click", ShowNew);
//    $("#team_opt").on("click", ShowTeamOpt);
    $("#add_time_opt").on("click", ShowTimeOpt);
    $("#remove_time_opt").on("click", RemoveTimeOpt);
    
    
    $("#Existing_row").hide();
    $("#Existing_channel").hide();
    $("#Existing_channel2").hide();
    $("#Existing_channel3").hide();
    
    $("#EXIST_header").hide();
    $("#EXIST_nav").hide();
    
    $("#option2").hide();
    $("#option2_1").hide();
    $("#option2_2").hide();
    $("#option2_3").hide();
    $("#option2_4").hide();
    $("#option2_5").hide();
    
    $("#EXIST_button").hide();
})

$(document).ready(function () {
    $("#about_list").change(function () {
        var val = $(this).val();
        if (val == "item1") {
            $("#team_selection").html("<option value='test'> &nbsp;&nbsp;Goals & Performance</option><option value='test2'> &nbsp;&nbsp;Individual Development</option><option value='test3'> &nbsp;&nbsp;My Pay & Benefits</option><option value='test4'> &nbsp;&nbsp;My Time & Leave of Absence</option>");
        } else if (val == "item2") {
            $("#team_selection").html("<option value='test'> &nbsp;&nbsp;Recruitment & On/Offboarding</option><option value='test2'> &nbsp;&nbsp;Performance & Rewards</option><option value='test3'> &nbsp;&nbsp;Talent Management</option><option value='test4'> &nbsp;&nbsp;Leadership</option>");
        } 
    });
});

function ShowExist(){
    $("#New_row").hide();
    $("#New_channel").hide();
    $("#New_problem").hide();
    $("#New_problem2").hide();
    $("#New_problem3").hide();
    $("#New_problem4").hide();
    $("#Existing_row").show();
    $("#Existing_channel").show();
    $("#Existing_channel2").show();
    $("#Existing_channel3").show();
    $( "#New" ).prop( "checked", false );
    $("#EXIST_header").show();
    $("#NEW_header").hide();
    $("#EXIST_nav").show();
    $("#NEW_nav").hide();
    $("#EXIST_button").show();
    $("#NEW_button").hide();
}

function ShowNew(){
    $("#New_row").show();
    $("#New_channel").show();
     $("#New_problem").show();
    $("#New_problem2").show();
    $("#New_problem3").show();
    $("#New_problem4").show();
    $("#Existing_row").hide();
    $("#Existing_channel").hide();
    $("#Existing_channel2").hide();
    $("#Existing_channel3").hide();
    $("#Existing_row").hide();
    $( "#Existing" ).prop( "checked", false );
    $("#EXIST_header").hide();
    $("#NEW_header").show();
    $("#EXIST_nav").hide();
    $("#NEW_nav").show();
    $("#EXIST_button").hide();
    $("#NEW_button").show();
}

//function ShowTeamOpt(){
//    $("#show_me").hide();
//    $("#show_team").show();
//}

function ShowTimeOpt(){
    $("#option2").show();
    $("#option2_1").show();
    $("#option2_2").show();
    $("#option2_3").show();
    $("#option2_4").show();
    $("#option2_5").show();
}

function RemoveTimeOpt(){
    $("#option2").hide();
    $("#option2_1").hide();
    $("#option2_2").hide();
    $("#option2_3").hide();
    $("#option2_4").hide();
    $("#option2_5").hide();
}