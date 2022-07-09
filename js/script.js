const navToggle = document.querySelector('.nav-toggle')
const mainNav = document.querySelector('#mainNav')
navToggle.addEventListener('click', () => {
  mainNav.classList.toggle("nav-active")
})