const clips = Array.from(document.querySelectorAll(".clip"));
const mainVideo = document.querySelector("#mainVideo");
const videoKicker = document.querySelector("#videoKicker");
const videoHeading = document.querySelector("#videoHeading");
const videoText = document.querySelector("#videoText");

clips.forEach((clip) => {
  clip.addEventListener("click", () => {
    clips.forEach((item) => item.classList.remove("active"));
    clip.classList.add("active");

    mainVideo.pause();
    mainVideo.src = clip.dataset.src;
    mainVideo.poster = clip.dataset.poster;
    videoKicker.textContent = clip.dataset.kicker;
    videoHeading.textContent = clip.dataset.title;
    videoText.textContent = clip.dataset.desc;
    mainVideo.load();
    mainVideo.play().catch(() => {});
  });
});
