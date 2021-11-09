const misterio = document.querySelector('#misterio')
const iconos = document.querySelector('.col-beneficios')
const navbarCollapse = document.querySelector('.navbar-collapse')
const navbarBrand = document.querySelector('.navbar-brand')
const dropdownMenu = document.querySelector('.dropdown-menu')
const navbar = document.querySelector('.navbar')
const btn_member = document.querySelector('.btn-member')
const titulo_header = document.querySelector('.titulo-header')
const offcanvas = document.querySelector('.offcanvas')
const btn_offcanvas_cart = document.querySelector('.boton-nav-offcanvas')
const btn_offcanvas_cart_sm = document.querySelector('.boton-nav-offcanvas-sm')
const btn_close = document.querySelector('#btn-close')
const burbuja = document.querySelector('#fila-burbuja')


window.addEventListener('scroll', scroll)
    // window.addEventListener('scroll', btn_on)
btn_close.addEventListener('click', cerrar)
burbuja.addEventListener('click', cerrar)



function scroll() {
    const ubicacion = iconos.getBoundingClientRect()


    if (ubicacion.top <= 140) {
        navbar.classList.add('nav-oscuro')
        dropdownMenu.classList.add('nav-oscuro')
        navbarCollapse.classList.remove('nav-transp')
            // btn_offcanvas_cart.classList.remove('disabled')
            // btn_offcanvas_cart_sm.classList.remove('disabled')
            // offcanvas.classList.remove('d-none')


    } else {
        navbar.classList.remove('nav-oscuro')
        navbarCollapse.classList.add('nav-transp')
            // btn_offcanvas_cart.classList.add('disabled')
            // btn_offcanvas_cart_sm.classList.add('disabled')
            // offcanvas.classList.add('d-none')

    }
}

function btn_on() {
    const ubicacion = iconos.getBoundingClientRect()

    if (ubicacion.top >= 450) {
        btn_member.classList.add('btn-member-inhabilita')

    } else {
        btn_member.classList.remove('btn-member-inhabilita')
    }

    if (ubicacion.top <= -2200) {
        btn_member.classList.add('btn-member-inhabilita')
    }
}

function cerrar() {
    if (btn_close) {
        burbuja.classList.add('d-none')
    }
}