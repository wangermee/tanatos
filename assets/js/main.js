$(document).ready(function(){
    //alert("hello");
    $("#navBar").click(function () {
        $("nav").toggle(300);
    });

    $("nav a ").click(function(){
        $("nav").hide();
    })
});