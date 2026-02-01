$("header-menu details" ).each(function(){
    $(this).mouseover(function() {
        $(this).attr("open","");
        $(this).child('summary').attr("aria-expanded", "true");
    })
    .mouseout(function() {
         $(this).removeAttr("open","");
        $(this).child('summary').removeAttr("aria-expanded", "true");
    });
});
$(".colseBtn").click(function(){
  $('#Details-menu-drawer-container').removeAttr("open","");
   $("#Details-menu-drawer-container").removeClass('menu-opening');
});