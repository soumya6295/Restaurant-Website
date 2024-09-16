// Script for Nav Scroll effect
$(function () {
    $(document).scroll(function () {
      var $nav = $("nav");
      $nav.toggleClass('nav-bg', $(this).scrollTop() > $nav.height());
    });
  });

  // Script for Responsive Navbar
  var navItems = document.getElementById("navItems");
  var mobileNav = document.getElementById("mobileNav");
  var hamburger = document.getElementById("hamburger");


  function adjustNavbar() {
    screenWidth = parseInt(window.innerWidth);
    if (screenWidth < 970) {
      navItems.style.display = "none";
      hamburger.style.display = "flex";
    }
    else {
      navItems.style.display = "flex";
      hamburger.style.display = "none";
    }
  }

  adjustNavbar();

  window.addEventListener("resize", adjustNavbar);

  hamburger.addEventListener("click", function () {
    mobileNav.classList.toggle("left-[-70%]");
    hamburger.classList.toggle("fa-bars");
    hamburger.classList.toggle("fa-close");
  })
