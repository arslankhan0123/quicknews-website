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

  // ==========================================
  // Team Carousel Initialization
  // ==========================================
  const teamOwl = $(".team-carousel");
  if (teamOwl.length) {
    teamOwl.owlCarousel({
      loop: true,
      margin: 24,
      nav: false,
      dots: true,
      dotsEach: 2, // Exactly 3 dots across 6 items
      autoplay: true,
      autoplayTimeout: 1800, // Faster swapping without long delay
      autoplaySpeed: 700,
      smartSpeed: 600,
      slideBy: 1,
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 1.15,
          margin: 14,
          dotsEach: 2,
        },
        640: {
          items: 2.15,
          margin: 18,
          dotsEach: 2,
        },
        1024: {
          items: 3,
          margin: 24,
          dotsEach: 2,
        },
        1280: {
          items: 3,
          margin: 28,
          dotsEach: 2,
        },
      },
    });
  }

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
  const $userQueryPill = $("#user-query-pill");

  function triggerVerification() {
    const query = $verifyInput.val().trim();
    if (query.length > 0 && $userQueryPill.length) {
      $userQueryPill.text(query);
    } else if ($userQueryPill.length) {
      $userQueryPill.text("trump died?");
    }
    $quickAIDropdown.removeClass("hidden").show();
  }

  // Show dropdown when Verify button is clicked
  $(".form button").on("click", function (e) {
    e.preventDefault();
    triggerVerification();
  });

  // Also trigger on Enter key in input
  $verifyInput.on("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      triggerVerification();
    }
  });
});
