const slidePrev = document.querySelector("#prev")
const slideNext = document.querySelector("#next")
const items = document.querySelectorAll(".item")
let slideIndex = 1;

slidePrev.addEventListener('click', ()=> {
    plusSlides(-1)
})
slideNext.addEventListener('click', ()=> {
    plusSlides(1)
})

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n)
}

function showSlides(n) {
  var i;
  if (n > items.length) {
      slideIndex = 1
    }
  if (n < 1) {
      slideIndex = items.length
    }
  for (i = 0; i < items.length; i++) {
    items[i].classList.remove("select")
  }
    items[slideIndex-1].classList.add("select")
}