var modalConfig = {
    closeText: "&times;"
}
$(".open-modal").click(function(event){
    event.preventDefault();
    var target = $(this).attr('href');
    if ($(target).length > 0)
    {
        $(target).modal(modalConfig);
    }
    else {
        console.error('Modal target is not exists! (Target was '+target+')');
    }
});
