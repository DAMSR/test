let a = document.getElementsByClassName("lettreAnimer")


for (const anime of a) {

anime.addEventListener("click", function () {
anime.classList.add("animate__animated animate__jello");
})
}
