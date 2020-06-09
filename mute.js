$(document).ready(function() {
  if ($("audio").prop('muted', false)){
    $("#mute").css("background-image","url(http://image.flaticon.com/icons/svg/10/10430.svg)");
  }

$("#mute").click( function (){
  if( $("audio").prop('muted') ) {
    $("audio").prop('muted', false);
    $("#mute").css("background-image","url(http://image.flaticon.com/icons/svg/10/10430.svg)");
  } else {
    $("audio").prop('muted', true);
    $("#mute").css("background-image","url(http://image.flaticon.com/icons/svg/10/10776.svg)");
  }
});