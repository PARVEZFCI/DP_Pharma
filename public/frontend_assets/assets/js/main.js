$(document).ready(function() {
    //For toggole dropdown
    $(".dropdown-toggle").dropdown();

    //Dropdown when hover
    $("ul.navbar-nav li.dropdown").hover(
        function() {
            $(this)
                .find(".dropdown-menu")
                .stop(true, true)
                .delay(200)
                .fadeIn(500);
        },
        function() {
            $(this)
                .find(".dropdown-menu")
                .stop(true, true)
                .delay(200)
                .fadeOut(500);
        }
    );

    $(".shopping-bag").click(function() {
        $(".shopping-cart-wrapper").addClass("shopping-cart-appended");
    });

    $(".close-icon").click(function() {
        $(".shopping-cart-wrapper").removeClass("shopping-cart-appended");
    });

    $(".filter-bag").click(function() {
        $(".filter-cart-wrapper").addClass("filter-cart-appended");
    });

    $(".filter-close-icon").click(function() {
        $(".filter-cart-wrapper").removeClass("filter-cart-appended");
    });

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 10) {
            $(".header-upper").addClass("fixed-header");
        } else {
            $(".header-upper").removeClass("fixed-header");
        }
    });
});
