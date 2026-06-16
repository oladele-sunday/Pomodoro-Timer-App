// Simple interactions for the timer demo
const timerButton = document
  .querySelector('[data-icon="play_arrow"]')
  .closest("button");
let isPlaying = false;

timerButton.addEventListener("click", () => {
  isPlaying = !isPlaying;
  const icon = timerButton.querySelector(".material-symbols-outlined");
  icon.textContent = isPlaying ? "pause" : "play_arrow";
  timerButton.classList.toggle("scale-105");
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
