jQuery(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    // function handleLoaded() {
    //   $("#loader-overlay").fadeOut("slow", function () {
    //     $(this).remove();
    //   });
    //   $(".wrapper").show();
    // }

    // if (document.readyState === "complete") {
    //   handleLoaded();
    // } else {
    //   $(window).on("load", handleLoaded);
    // }

    $(".count").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 4000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });

    if ($(".countdown").length > 0) {
      $(".countdown").countdown({
        date: "31 dec 2025 12:00:00",
        format: "on",
      });
    }

    $(".slider-bg").flexslider({
      mode: "fade",
      animation: "fade",
      slideshow: true,
      auto: true,
      controlNav: true,
      keyboard: true,
    });

    if ($("#back-to-top").length) {
      var scrollTrigger = 100,
        backToTop = function () {
          var scrollTop = $(window).scrollTop();
          if (scrollTop > scrollTrigger) {
            $("#back-to-top").addClass("show");
          } else {
            $("#back-to-top").removeClass("show");
          }
        };
      backToTop();
      $(window).on("scroll", function () {
        backToTop();
      });
      $("#back-to-top").on("click", function (e) {
        e.preventDefault();
        $("html,body").animate(
          {
            scrollTop: 0,
          },
          700
        );
      });
    }
  });
});
