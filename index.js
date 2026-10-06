$(document).ready(function () {
  const owl = $(".hot-topics-carousel");

  owl.owlCarousel({
    loop: true,
    center: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: false,
    responsive: {
      0: {
        items: 1.2,
        margin: 12,
      },
      640: {
        items: 2.2,
        margin: 16,
      },
      1024: {
        items: 3.2,
        margin: 24,
      },
    },
  });

  // Custom Navigation Click Events
  $("#owl-next-btn").click(function () {
    owl.trigger("next.owl.carousel");
  });

  $("#owl-prev-btn").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  // ==========================================
  // 2. Header Mobile Menu Toggle Logic
  // ==========================================
  const $toggleBtn = $("#menu-toggle-btn");
  const $mobileMenu = $("#mobile-menu");
  const $hamburgerIcon = $("#hamburger-icon");
  const $closeIcon = $("#close-icon");

  if ($toggleBtn.length && $mobileMenu.length) {
    // Toggle Button Click Handler
    $toggleBtn.on("click", function (e) {
      e.stopPropagation();

      const isHidden = $mobileMenu.hasClass("hidden");

      if (isHidden) {
        $mobileMenu.removeClass("hidden").addClass("flex");
        $hamburgerIcon.addClass("hidden");
        $closeIcon.removeClass("hidden");
      } else {
        $mobileMenu.addClass("hidden").removeClass("flex");
        $hamburgerIcon.removeClass("hidden");
        $closeIcon.addClass("hidden");
      }
    });

    // Close Mobile Menu when clicking outside
    $(document).on("click", function (e) {
      if (
        !$mobileMenu.is(e.target) &&
        $mobileMenu.has(e.target).length === 0 &&
        !$toggleBtn.is(e.target) &&
        $toggleBtn.has(e.target).length === 0
      ) {
        $mobileMenu.addClass("hidden").removeClass("flex");
        $hamburgerIcon.removeClass("hidden");
        $closeIcon.addClass("hidden");
      }
    });
  }

  const $verifyInput = $("#verify");
  const $quickAIDropdown = $(".quick-ai-dropdown");

  $verifyInput.on("input", function () {
    // Check if typed character length is greater than 2
    if ($(this).val().trim().length > 2) {
      $quickAIDropdown.show(); // or .removeClass('hidden')
    } else {
      $quickAIDropdown.hide(); // or .addClass('hidden')
    }
  });
});
