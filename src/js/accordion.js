$(".accordion .accordion-content .accordion-title").click(function(){
    $(this).parent().siblings().children('.accordion-text').slideUp('fast');
    $(this).siblings('.accordion-text').slideToggle('fast');
});
