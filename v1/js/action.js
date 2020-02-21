jQuery(document).ready(function (e) {
    function t(t) {
        e(t).bind("click", function (t) {
            t.preventDefault();
            e(this).parent().fadeOut()
        })
    }
    e(".dropdown-toggle").click(function () {
        var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
        e(".button-dropdown .dropdown-menu").hide();
        e(".button-dropdown .dropdown-toggle").removeClass("active");
        if (t) {
            e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")
        }
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
    });
    e(document).bind("click", function (t) {
        var n = e(t.target);
        if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");
    })
});
$( function() {
$( "#slider-range" ).slider({
  range: true,
  min: 0,
  max: 100,
  values: [ 20, 70 ],
  slide: function( event, ui ) {
    let var1 = ui.values[ 0 ];
    let var2 = ui.values[ 1 ] - ui.values[ 0 ];
    let var3 = 100 - (var1 + var2);
    $( ".status" ).html( "<div class='environmental' style='text-align: center;'>EI: <b>" + var1 + "%</b> - CE: <b>" + var2 + "%</b> - SI: <b>" + var3 + "%</b></div>");
    // $( ".status" ).html( "<h3>Efficiency</h3>"
    //     + "<div class='environmental'>Environmental Impact: <b> " + var1 + "% </b></div>"
    //     + "<div class='cost'>Cost Efficiency: <b> " + var2 + "% </b></div>"
    //     + "<div class='social'>Social Impact: <b> " + var3 + "% </b></div>"
    // );
    let second = Math.floor((Math.random() * 59) + 1);
    $( ".readyBy" ).text("5:" + second + " A.M.");
  }
});

$( "#dialog" ).dialog({
  autoOpen: false,
  show: {
    effect: "blind",
    duration: 1000
  },
  hide: {
    effect: "blind",
    duration: 1000
  }
});

$( "#opener" ).on( "click", function() {
  $( "#dialog" ).dialog( "open" );
});

} );
let user1 = function(n){
    $( "#slider-range" ).slider({min: 0, max: 100, values: [ 20, 50 ]});
    $( ".status" ).html( "<div class='environmental' style='text-align: center;'>EI: <b>20%</b> - CE: <b>30%</b> - SI: <b>50%</b></div>");
}
let user2 = function(n){
    $( "#slider-range" ).slider({min: 0, max: 100, values: [ 30, 70 ]});
    $( ".status" ).html( "<div class='environmental' style='text-align: center;'>EI: <b>30%</b> - CE: <b>40%</b> - SI: <b>30%</b></div>");
}
let user3 = function(n){
    $( "#slider-range" ).slider({min: 0, max: 100, values: [ 20, 60 ]});
    $( ".status" ).html( "<div class='environmental' style='text-align: center;'>EI: <b>20%</b> - CE: <b>40%</b> - SI: <b>40%</b></div>");
}
let plugIn = function(n){
    $( ".notification" ).slideToggle( "slow" );
}