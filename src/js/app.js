function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const index = getRandomInt(0, 15)
const holes = document.querySelector(".hole-game")
const firstField = holes.children[index].classList.add("hole_has-mole")

const next = setInterval(() => {
  let hole = document.querySelector(".hole_has-mole")
  let holeIndex = Array.prototype.indexOf.call(hole.parentElement.children, hole);
  let randomHole = getRandomInt(0, 15)
  while (randomHole == holeIndex) {
    randomHole = getRandomInt(0, 15)
  }
  hole.classList.remove("hole_has-mole")
  holes.children[randomHole].classList.add("hole_has-mole")
}, 800 );