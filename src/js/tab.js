$(".tab-container .tab-content").hide();
$(".tab-container .tab-content").first().show();
$(".tab-container .nav-tabs li").first().addClass('active');
$(".tab-container .nav-tabs li a").click(function(e){
    e.preventDefault();
    var tabTarget = $(this).parent().data('tab');
    $(this).parent().parent().siblings(".tab-content").hide();
    $(this).parent().parent().siblings(".tab-content#tab-content-"+tabTarget).show();
    $(this).parent().siblings('li').removeClass('active');
    $(this).parent().addClass('active');
});
