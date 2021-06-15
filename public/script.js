let menuBtn = document.querySelector('.bi-list')
let menuList = document.querySelector('.menu-list')

menuBtn.onclick = function() {
    menuList.classList.toggle('show')
}

let downloadButton = document.getElementById('but1')

downloadButton.onclick = function() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    })
}

let moreButton = document.getElementById('but2')

moreButton.onclick = function() {
    window.scrollTo({
        top: (window.innerHeight) *2,
        behavior: 'smooth'
    })
}

let VipButton = document.getElementById('but3')

VipButton.onclick = function() {
    window.scrollTo({
        top: (window.innerHeight) *3,
        behavior: 'smooth'
    })
}