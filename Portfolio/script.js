let spanClass = document.querySelectorAll("#Presentation span")
for (const spans of spanClass) {
  if (!spans.id.includes("prenomPresentation")) {
  spans.classList.add("animation")
  }

}
let animer = document.getElementsByClassName("animation");

for (const anime of animer) {
  anime.classList.add("animate__animated");
  anime.addEventListener("mouseenter", function () {
    anime.classList.add("animate__jello");
    anime.style.color = "aqua";
  });
  anime.addEventListener("animationend", function () {
    anime.classList.remove("animate__jello")
  })
  anime.addEventListener("mouseleave", function () {
    anime.style.color=""
  })
}
