window.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".cards .card")

  for (let i = 0; i <= cards.length; i++) {
    if (i % 2 !== 0) {
      cards[i].classList.add("odd")
    }
  }
})
