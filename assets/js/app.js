import splt from "https://cdn.skypack.dev/spltjs@1.0.8";
import anime from "https://cdn.skypack.dev/animejs@3.2.1";


$(window).on("load", function () {
  // Disable scrolling without hiding the scrollbar


  // Slide layers to the right
  setTimeout(function () {
    $(".layer-one .overlay").css("left", "100%");
  }, 100);

  setTimeout(function () {
    $(".layer-two .overlay").css("left", "100%");
  }, 300);

  setTimeout(function () {
    $(".layer-three .overlay").css("left", "100%");
  }, 700);

  // Remove loader and show content
  setTimeout(function () {
    $(".loader-wrap").fadeOut("slow", function () {
      // Restore scrolling and show content
  
      $(".content").fadeIn("slow");
    });
  }, 1000); // Ensure all layers are done sliding before hiding the loader
});





AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  // offset: 120, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  // anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

$(document).ready(function () {

  $(window).on("load", function () {

    // Slide layers to the right
    setTimeout(function () {
      $(".layer-one .overlay").css("left", "100%");
    }, 100); // Delay the second layer's slide

    setTimeout(function () {
      $(".layer-two .overlay").css("left", "100%");
    }, 500); // Delay the second layer's slide

    setTimeout(function () {
      $(".layer-three .overlay").css("left", "100%");
    }, 1000); // Delay the third layer's slide

    // Remove loader and show content
    setTimeout(function () {
      $(".loader-wrap").fadeOut("slow", function () {
        $(".content").fadeIn("slow");
      });
    }, 1500); // Ensure all layers are done sliding before hiding the loader

  });





  // On click of service button
  $(".service-button").click(function () {
    // Get the image associated with the clicked button
    var image = $(this).data("image");
    var fullPath = "assets/img/" + image;

    // Update the right side image
    $("#serviceImage").attr("src", fullPath);

    // Remove active class from all buttons
    $(".service-button").removeClass("active-service");

    // Add active class to the clicked button
    $(this).addClass("active-service");
  });
  
  // On click of service button
  $(".tab-link").click(function () {
    // Remove active class from all tab links and content panes
    $(".tab-link").removeClass("tab-link-active");
    $(".tab-pane").removeClass("active");

    // Add tab-link-active class to the clicked tab link and corresponding content pane
    $(this).addClass("tab-link-active");
    var tabId = $(this).data("tab");

     // Remove 'active' class and animation from all tabs
     $(".tab-pane").removeClass("active").find('img').removeClass("flip-animation flip-active");

     // Add 'active' class to the clicked tab
     $("#" + tabId).addClass("active");

          // Add custom animation class to the image
          var $img = $("#" + tabId).find('img');
          $img.addClass("flip-animation");

              // Use a timeout to allow the browser to register the initial state
        setTimeout(function() {
          $img.addClass("flip-active");
      }, 10); // Short delay to ensure the initial state is applied
  
  
  });
  // On click of service button
  $(".tab-link2").click(function () {
    // Remove active class from all tab links and content panes
    $(".tab-link2").removeClass("tab-link-active2");
    $(".secondtab-pane").removeClass("active");

    // Add tab-link-active class to the clicked tab link and corresponding content pane
    $(this).addClass("tab-link-active2");
    var tabId2 = $(this).data("tab");

     // Remove 'active' class and animation from all tabs
    //  $(".secondtab-pane").removeClass("active").find('p').removeClass("t-to-b-in t-to-b-f");

     $(".secondtab-pane").removeClass("active").find('img').removeClass("move-animation move-active");

     // Add 'active' class to the clicked tab
     $("#" + tabId2).addClass("active");

          // Add custom animation class to the image
          var $img2 = $("#" + tabId2).find('img');
          $img2.addClass("move-animation");

          // Add custom animation class to the image
          var $para = $("#" + tabId2).find('p');
          $para.addClass("t-to-b-in");
           
      

              // Use a timeout to allow the browser to register the initial state
        setTimeout(function() {
          $img2.addClass("move-active");
          $para.addClass("t-to-b-f");
      }, 10); // Short delay to ensure the initial state is applied
  
  
  });

  // expertise
  $("#expertise").owlCarousel({
    autoplay: false,
    autoplaySpeed: 1000,
    autoplayTimeout: 1000,
    smartSpeed: 1000,
    items: 3,
    stagePadding: 0,
    nav: true,
    margin: 20,
    dots: false,
    loop: true,
    navText: [
      "<i class='fa-solid fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],

    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // testimonials
  $("#testimonials").owlCarousel({
      autoplay: false,
    autoplaySpeed: 1000,
    autoplayTimeout: 1000,
    smartSpeed: 1000,
    items: 3,
    stagePadding: 0,
    nav: true,
    margin: 100,
    dots: false,
    loop: true,
    navText: [
      "<i class='fa-solid fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 1,
            margin: 10,
        },
        1000: {
            items: 2,
        },
        1366: {
            items: 2,
        }
    }
  });

  // counter
  $('.counter .number').counterUp({
    delay: 10,   // Delay between each count
    time: 2000   // Duration for the whole animation
  });
  $('.badge-counter').counterUp({
    delay: 10,   // Delay between each count
    time: 1500   // Duration for the whole animation
  });
});


 // Initialize splt.js to split text into characters
 splt({
  target: ".split",
  by: "chars"
});

// Animate the characters using anime.js
anime({
  targets: ".char",
  opacity: [0, 1],
  translateY: [40, 0],
  easing: "easeInOutQuad",
  duration: 300,
  delay: anime.stagger(100), // Stagger each character by 100ms
  loop: false
});





