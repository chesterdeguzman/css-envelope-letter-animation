const intro = document.getElementById("intro");
const envelope = document.getElementById("envelopeWrapper");
const letter = document.getElementById("letter");

window.addEventListener("load", () => {
  window.setTimeout(() => intro.classList.add("is-hidden"), 1550);
});

function openLetter() {
  envelope.classList.add("open");
  envelope.setAttribute("aria-label", "Letter opened");
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
