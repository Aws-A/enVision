function addHoverEffect(selector, suffix = "-hover") {
    const images = document.querySelectorAll(selector);

    images.forEach((img) => {
      const originalSrc = img.src;
      const hoverSrc = originalSrc.replace(/(\.\w+)$/, `${suffix}$1`);

      img.addEventListener("mouseover", () => {
        img.src = hoverSrc;
      });

      img.addEventListener("mouseout", () => {
        img.src = originalSrc;
      });
    });
  }

  // Apply to your image groups
  window.onload = function () {
    addHoverEffect(".fav1, .fav2, .fav3, .fav4, .fav5");
    addHoverEffect(".views1, .views2, .views3");
    addHoverEffect(".rates1, .rates2, .rates3");
};

  document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const mobileMenu = document.getElementById("mobile-menu");

    menuIcon.addEventListener("click", function () {
      // Toggle menu visibility
      mobileMenu.style.display = (mobileMenu.style.display === "flex") ? "none" : "flex";
    });
  });