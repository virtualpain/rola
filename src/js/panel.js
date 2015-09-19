// Hide panel content if the panel wrapper was given '.panel-collapse'
$(".panel-collapse .panel-content").hide();
// Except if it is contain `.panel-notcollapsed`, it will stay displayed
$(".panel-collapse.panel-notcollapsed .panel-content").show();
// Give the panel title a toggle button
$(".panel-collapse .panel-title").prepend("<a class='panel-toggle' href='#'><i class='fa fa-plus'></i></a>");
$(".panel-collapse.panel-notcollapsed .panel-title .panel-toggle i").removeClass("fa-plus").addClass('fa-minus');
// A toggle event handler
$(".panel-collapse").on('click',".panel-toggle",function(event){
    event.preventDefault();
    $(this).parent('.panel-title').siblings('.panel-content').slideToggle('fast');
    var icon = $(this).children('i');
    if (icon.hasClass('fa-plus'))
    {
        icon.removeClass('fa-plus').addClass('fa-minus');
    }
    else {
        icon.removeClass('fa-minus').addClass('fa-plus');
    }
});
