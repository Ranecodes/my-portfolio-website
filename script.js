var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";

  // dots animation logic
  const dotsElements = document.querySelectorAll(".dots");

  dotsElements.forEach((el) => {
    let count = 0;
    setInterval(() => {
      el.textContent = ".".repeat(count);
      count = (count + 1) % 4; // cycles through 0, 1, 2, 3
    }, 500);
  });
});

function toggleMenu() {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");

  // Prevent body scroll when menu is open
  if (mobileMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

// Close menu when clicking on menu items
document.querySelectorAll(".mobile__menu a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".hamburger").classList.remove("active");
    document.getElementById("mobileMenu").classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

// Close menu when clicking outside
document.getElementById("mobileMenu").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    document.querySelector(".hamburger").classList.remove("active");
    document.getElementById("mobileMenu").classList.remove("active");
    document.body.style.overflow = "auto";
  }
});
