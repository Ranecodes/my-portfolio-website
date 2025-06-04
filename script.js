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
