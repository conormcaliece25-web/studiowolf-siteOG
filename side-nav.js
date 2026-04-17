(function () {
  const header = document.querySelector(".page-header");
  const navLinks = document.querySelector(".nav-links");

  if (!header || !navLinks) {
    return;
  }

  const toggleCondensedNav = () => {
    if (window.innerWidth <= 960) {
      header.classList.remove("is-condensed");
      return;
    }

    header.classList.toggle("is-condensed", window.scrollY > 140);
  };

  toggleCondensedNav();
  window.addEventListener("scroll", toggleCondensedNav, { passive: true });
  window.addEventListener("resize", toggleCondensedNav);
})();
