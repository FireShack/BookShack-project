const misterio = document.querySelector('#misterio')
const iconos = document.querySelector('.col-beneficios')
const navbarCollapse = document.querySelector('.navbar-collapse')
const navbarBrand = document.querySelector('.navbar-brand')
const dropdownMenu = document.querySelector('.dropdown-menu')
const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', scroll)



function scroll() {
    const ubicacion = iconos.getBoundingClientRect()


    if (ubicacion.top <= 140) {
        navbar.classList.add('nav-oscuro')
        dropdownMenu.classList.add('nav-oscuro')
        navbarCollapse.classList.remove('nav-transp')
    } else {
        navbar.classList.remove('nav-oscuro')
        navbarCollapse.classList.add('nav-transp')
    }
}