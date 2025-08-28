jQuery(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    function handleLoaded() {
      $("#loader-overlay").fadeOut("slow", function () {
        $(this).remove();
      });
      $(".wrapper").show();
    }

    if (document.readyState === "complete") {
      handleLoaded();
    } else {
      $(window).on("load", handleLoaded);
    }
  });
});
