(function () {
  // Global variables
  var parentMenuItems = document.querySelectorAll(
    ".navigation-primary li.has-submenu"
  );

  // Adds focus event listener on parent menu items so keyboard users can tab through menu
  Array.prototype.forEach.call(parentMenuItems, function (el) {
    el.addEventListener("focusin", function () {
      this.classList.add("focus");
    });

    el.addEventListener("focusout", function () {
      this.classList.remove("focus");
    });
  });
})();

// https://codeburst.io/the-only-way-to-detect-touch-with-javascript-7791a3346685
window.addEventListener(
  "touchstart",
  function onFirstTouch() {
    window.USER_IS_TOUCHING = true;
    // we only need to know once that a human touched the screen, so we can stop listening now
    window.removeEventListener("touchstart", onFirstTouch, false);
  },
  false
);

$(document).ready(function () {
  function selectRegion() {
    //  $(this) value should be an <a> element related to a region
    var selectedRegionSlug = $(this).data("region");
    // show & hide language sets
    $(".lang_list_class").each(function () {
      if ($(this).data("region") === selectedRegionSlug) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  }

  // set up region switch
  $(".region_list_class a")
    // for desktop
    .hover(selectRegion)
    // for touch
    .click(function (event) {
      if (window.USER_IS_TOUCHING) {
        // don't open the default region on mobile tap
        event.preventDefault();
      }
      selectRegion.call(this);
    });

  $(".globe_class > .menu-item").mouseenter(function (event) {
    $(".globe_class").addClass("open");
    setTimeout(function () {
      $(".globe_class").removeClass("open");
    }, 1000);
  });
});
