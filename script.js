const intro = document.getElementById("intro");
const envelope = document.getElementById("envelopeWrapper");
const letter = document.getElementById("letter");

window.addEventListener("load", () => {
  window.setTimeout(() => intro.classList.add("is-hidden"), 1550);
});

function openLetter() {
  if (envelope.classList.contains("open")) return;

  envelope.classList.add("open");
  document.body.classList.add("letter-open");
  envelope.setAttribute("aria-label", "Letter opened");

  // Always show the beginning of the letter first.
  letter.scrollTop = 0;

  // After the envelope animation starts, gently reposition the page
  // so the top of the opened letter stays visible.
  window.setTimeout(() => {
    document.getElementById("letterStage").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    letter.scrollTop = 0;
  }, 700);
}

envelope.addEventListener("click", openLetter);

envelope.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openLetter();
  }
});

letter.addEventListener("click", (event) => {
  event.stopPropagation();
});
