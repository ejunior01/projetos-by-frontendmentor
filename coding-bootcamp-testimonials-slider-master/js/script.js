
const slidePrev = document.querySelector("#prev")
const slideNext = document.querySelector("#next")
const items = document.querySelectorAll(".item")

let keyPress
let slideIndex = 1;

slidePrev.addEventListener('click', ()=> {
    plusSlides(-1)
})
slideNext.addEventListener('click', ()=> {
    plusSlides(1)
})

document.querySelector('body').addEventListener('keydown', function(event) {
  keyPress = event.keyCode
  if (keyPress == 37) {
    plusSlides(-1)
  } else if (keyPress == 39) {
    plusSlides(1)
  }
})

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n)
}

function showSlides(n) {
  if (n > items.length) {
    slideIndex = 1
    }
  if (n < 1) {
    slideIndex = items.length
    }
  for (let item of items) {
    item.classList.remove("select")
  }
  items[slideIndex-1].classList.add("select")
}