const nav = document.querySelector('.primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')

navToggle.addEventListener('click', () => {
    const visibility = nav.getAttribute("data-visible")
    if (visibility === 'false') {
        navToggle.style.backgroundImage = 'url(./assets/shared/icon-close.svg)'
        nav.setAttribute("data-visible", "true")
        nav.classList.add("translated")
    } else if (visibility === 'true') {
        navToggle.style.backgroundImage = 'url(./assets/shared/icon-hamburger.svg)'
        nav.setAttribute("data-visible", "false")
        nav.classList.remove("translated")
    }
})