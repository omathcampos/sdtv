import './style.css'
import { navbar } from './sections/navbar.js'
import { hero } from './sections/hero.js'
import { services } from './sections/services.js'
import { diferenciais } from './sections/diferenciais.js'
import { sobre } from './sections/sobre.js'
import { pagamento } from './sections/pagamento.js'
import { contato } from './sections/contato.js'
import { footer } from './sections/footer.js'
import { floatButton } from './sections/float-button.js'

// Montar e injetar o HTML
document.getElementById('app').innerHTML =
  navbar() +
  hero() +
  services() +
  diferenciais() +
  sobre() +
  pagamento() +
  contato() +
  footer() +
  floatButton()

// ── Menu mobile (hamburguer) ──────────────────────────────────────────────────
const menuBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
const bar1 = document.getElementById('bar1')
const bar2 = document.getElementById('bar2')
const bar3 = document.getElementById('bar3')

let menuOpen = false

menuBtn?.addEventListener('click', () => {
  menuOpen = !menuOpen
  mobileMenu.classList.toggle('hidden', !menuOpen)

  bar1.style.transform = menuOpen ? 'translateY(8px) rotate(45deg)' : ''
  bar2.style.opacity = menuOpen ? '0' : '1'
  bar3.style.transform = menuOpen ? 'translateY(-8px) rotate(-45deg)' : ''
})

mobileMenu?.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false
    mobileMenu.classList.add('hidden')
    bar1.style.transform = ''
    bar2.style.opacity = '1'
    bar3.style.transform = ''
  })
})
