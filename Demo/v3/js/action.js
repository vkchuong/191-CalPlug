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

  var v = [18, 55];
    $("#slider").slider({
        range: true,
        min: 0,
        max: 100,
        values: v,
        slide: function(event, ui) {

          let var1 = ui.values[ 0 ];
          let var2 = ui.values[ 1 ] - ui.values[ 0 ];
          let var3 = 100 - (var1 + var2);

          $("#label-0").css('left', ui.values[0] - 10 + "%").text(var1);
          $("#label-1").css('left', ui.values[1] - 10 + "%").text(var2);
          $("#label-2").css('right', "10%").text(var3);
        },
        create: function(event, ui) {
          $("#label-0").css('left', v[0] - 10 + "%").text(v[0]);
          $("#label-1").css('left', v[1] - 10 + "%").text(v[1] - v[0]);
          $("#label-2").css('right', "10%").text(100 - (v[1] - v[0]));
        }
    }).trigger('slide');

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
var state = 0;
let charge = function(n){
  switch (state) {
    case 0:
        $(".status .right img").attr({src: "image/icons/home/unplug.png"});
        $(".status .charge").html("Status: Unplug");
      break;
    case 1:
        $(".status .right img").attr({src: "image/icons/home/plug.png"});
        $(".status .charge").html("Status: Plug & UnCharge");
      break;
    case 2:
        $(".status .right img").attr({src: "image/icons/home/charging.png"});
        $(".status .charge").html("Status: Charging (50%)");
      break;
  }
  state++;
  if(state >= 3)state = 0;
}
let plugIn = function(n){
    $( ".notification" ).slideToggle( "slow" );
}
var si = 0;
let saveInfo = function(n){
  switch (si) {
    case 0:
        $( ".status .left" ).html( "<h2>Monthly Savings</h2> <h1>~$40.38</h1> <h2>Gas Savings</h2> <h1>~40 gal</h1>" );
      break;
    case 1:
        $( ".status .left" ).html( "<h2>Yearly Savings</h2> <h1>~$480.38</h1> <h2>Gas Savings</h2> <h1>~480 gal</h1>" );
      break;
  }
  si++;
  if(si >= 2)
    {
      si = 0;
    }
}
