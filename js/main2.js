$(function(){
    $("#Existing").on("click", ShowNew);
    $("#New").on("click", ShowExist);
    
    
    $("#New_row").hide();
    $("#New_channel").hide();
})


function ShowExist(){
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
    $( "#Existing" ).prop( "checked", false );
}

function ShowNew(){
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
    $("#Existing_row").show();
    $( "#New" ).prop( "checked", false );
}