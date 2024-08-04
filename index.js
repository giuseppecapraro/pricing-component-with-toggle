
$(":checkbox").on("click", function() {
    if(this.checked) {
        $(".Annually").hide();
        $(".monthly").show();
    } else {
        $(".monthly").hide();
        $(".Annually").show();
    }
})

$(document).keydown(function() {
    $(":checkbox").click();
    check = $(":checkbox").is(":checked");
    if(check === true) {
        $(".Annually").hide();
        $(".monthly").show();
    } else {
        $(".monthly").hide();
        $(".Annually").show();
    }
})