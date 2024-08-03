
$(":checkbox").on("click", function() {
    if(this.checked) {
        $(".Annually").hide();
        $(".monthly").show();
    } else {
        $(".monthly").hide();
        $(".Annually").show();
    }
})