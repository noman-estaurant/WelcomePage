$(document).ready(function() {
    $("#button").hide();
    var mySwiper = new Swiper(".swiper-container", {
        // Optional parameters
        direction: "horizontal",
        pagination: {
            el: '.swiper-pagination'
        },
        on: {
            slideChangeTransitionStart: function() {
                if ((this.activeIndex) == 1) {
                    $("#button").show("slow");
                }
            },
        },
    });
    $("#button").click(function() {

    });
})