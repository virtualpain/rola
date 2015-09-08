var modalConfig = {
    closeText: "&times;"
}
$(".open-modal").click(function(event){
    var target = $(this).attr('href');
    if ($(target).length > 0)
    {
        $(target).modal(modalConfig);
    }
    else {
        console.log('Modal target is not exists! (Target was '+target+')');
    }
});
