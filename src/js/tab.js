$(".tab-container .tab-contents .tab-content").hide();
$(".tab-container.tab-vertical .tab-contents .tab-content").hide();
$(".tab-container .tab-contents .tab-content").first().show();
$(".tab-container.tab-vertical .tab-contents .tab-content").first().show();
$(".tab-container .nav-tabs li").first().addClass('active');
$(".tab-container.tab-vertical .nav-tabs li").first().addClass('active');
$(".tab-container .nav-tabs li a").click(function(e){
    e.preventDefault();
    var tabTarget = $(this).parent().data('tab');
    // Normal tabs
    $(this).parent().parent().siblings('.tab-contents').children(".tab-content").hide();
    $(this).parent().parent().siblings('.tab-contents').children(".tab-content#tab-content-"+tabTarget).show();
    $(this).parent().siblings('li').removeClass('active');
    $(this).parent().addClass('active');
});
