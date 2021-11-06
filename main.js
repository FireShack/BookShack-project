const misterio = document.querySelector('#misterio')
const iconos = document.querySelector('.col-beneficios')
const navbarCollapse = document.querySelector('.navbar-collapse')
const navbarBrand = document.querySelector('.navbar-brand')
const dropdownMenu = document.querySelector('.dropdown-menu')
const navbar = document.querySelector('.navbar')
const btn_member = document.querySelector('.btn-member')
const titulo_header = document.querySelector('.titulo-header')

window.addEventListener('scroll', scroll)
window.addEventListener('scroll', btn_on)



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

function btn_on() {
    const ubicacion = iconos.getBoundingClientRect()

    if (ubicacion.top >= 450) {
        btn_member.classList.add('btn-member-inhabilita')
        btn_member.classList.add('btn-animacion')

    } else {
        btn_member.classList.remove('btn-member-inhabilita')
    }
}