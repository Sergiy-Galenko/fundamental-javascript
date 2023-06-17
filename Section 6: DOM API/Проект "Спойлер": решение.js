document.getElementById("myBtn").addEventListener("click", toggleSpoilr);

function toggleSpoilr() {
  const spoiler = document.getElementById("spoiler");
  spoiler.classList.toggle("closed");

  if (spoiler.classList.contains("closed")) {
    deatachSpoilerEvents();
  } else {
    attachSpoilerEvents();
  }
}

function attachSpoilerEvents() {
  document.addEventListener("keydown", hendelEscape);
}

function hendelEscape(event) {
  if (event.key === "Escape") toggleSpoilr();
}

function deatachSpoilerEvents() {
  document.removeEventListener("keydown", hendelEscape);
}
