
const share = document.querySelector(".share")
const shareSocial = document.querySelector(".share-social")


share.addEventListener('click', ()=> {
    share.classList.toggle('rotate')
    shareSocial.classList.toggle('active')
})
