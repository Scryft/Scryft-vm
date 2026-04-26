const stage = document.getElementById("stage");
const statusPill = document.getElementById("statusPill");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");

function setState(state, label) {
  stage.dataset.state = state;
  statusPill.textContent = label;
  for (const button of [playBtn, pauseBtn, stopBtn]) {
    button.classList.remove("is-active");
  }
}

playBtn.addEventListener("click", () => {
  setState("playing", "Playing");
  playBtn.classList.add("is-active");
});

pauseBtn.addEventListener("click", () => {
  setState("paused", "Paused");
  pauseBtn.classList.add("is-active");
});

stopBtn.addEventListener("click", () => {
  setState("stopped", "Stopped");
  stopBtn.classList.add("is-active");
});

setState("idle", "Ready");
