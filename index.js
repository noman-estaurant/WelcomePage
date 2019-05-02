$(document).ready(function(){
    $("#button").toggle()
    $("two").toggle();
    $("#topic").click(function(){
        $("one").toggle("slow");
        $("two").toggle("slow");  
        $("#button").toggle("slow")
    });
    $("#button").click(function(){

    });
})