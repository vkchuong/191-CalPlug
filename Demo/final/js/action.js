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
$( function() { // Start OnLoad
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

  $( ".ei" ).dialog({
    autoOpen: false,
    show: {effect: "blind", duration: 1000 },
    hide: {effect: "blind", duration: 1000 }
  });
  $( "#text-1" ).on( "click", function() {
    $( ".ei" ).dialog( "open" );
  });

  $( ".ce" ).dialog({
    autoOpen: false,
    show: {effect: "blind", duration: 1000 },
    hide: {effect: "blind", duration: 1000 }
  });
  $( "#text-0" ).on( "click", function() {
    $( ".ce" ).dialog( "open" );
  });

  $( ".si" ).dialog({
    autoOpen: false,
    show: {effect: "blind", duration: 1000 },
    hide: {effect: "blind", duration: 1000 }
  });
  $( "#text-2" ).on( "click", function() {
    $( ".si" ).dialog( "open" );
  });
}); // End OnLoad
var state = 0;
let charge = function(n){
  switch (state) {
    case 0:
        $(".status .right img").attr({src: "image/home/unplug.png"});
        $(".status .charge").html("Status: Unplug");
      break;
    case 1:
        $(".status .right img").attr({src: "image/home/plug.png"});
        $(".status .charge").html("Status: Plug & UnCharge");
      break;
    case 2:
        $(".status .right img").attr({src: "image/home/charging.png"});
        $(".status .charge").html("Status: Charging (50%)");
      break;
  }
  state++;
  if(state >= 3)state = 0;
}
let plugIn = function(n){
    $( ".notification" ).slideToggle( "slow" );
}
var si = 1;
let saveInfo = function(n){
  switch (si) {
    case 0:
        $( ".status .left h1:first" ).html( '<img src="image/save/lv5.png" class="tree" style="width: 50px !important;" /> $40.38');
        $( ".status .left h2:first" ).html( "Monthly Savings" );
      break;
    case 1:
        $( ".status .left h1:first" ).html( '<img src="image/save/lv5.png" class="tree" style="width: 50px !important;" /> $480.38' );
        $( ".status .left h2:first" ).html( "Yearly Savings" );
      break;
  }
  si++;
  if(si >= 2)
    {
      si = 0;
    }
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}