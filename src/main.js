import './style.css'
import { config } from '../config.js'

// ── Links do WhatsApp e Telefone ──────────────────────────────────────────────
const whatsappUrl = `https://wa.me/55${config.whatsapp}`
const telUrl = `tel:${config.telefone.replace(/\D/g, '')}`

const whatsappLinks = [
  document.getElementById('nav-whatsapp'),
  document.getElementById('mobile-whatsapp'),
  document.getElementById('hero-whatsapp'),
  document.getElementById('contato-whatsapp'),
  document.getElementById('float-whatsapp'),
]

whatsappLinks.forEach(el => {
  if (el) el.href = whatsappUrl
})

const telLinks = [
  document.getElementById('hero-tel'),
  document.getElementById('contato-tel'),
]

telLinks.forEach(el => {
  if (el) el.href = telUrl
})

// Exibe o número formatado nos cards de contato
const whatsappNum = document.getElementById('contato-whatsapp-num')
if (whatsappNum) whatsappNum.textContent = config.telefone.replace(/\D/g, '').replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3')

const telNum = document.getElementById('contato-tel-num')
if (telNum) telNum.textContent = config.telefone

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

  // Animação das barras → X
  bar1.style.transform = menuOpen ? 'translateY(8px) rotate(45deg)' : ''
  bar2.style.opacity = menuOpen ? '0' : '1'
  bar3.style.transform = menuOpen ? 'translateY(-8px) rotate(-45deg)' : ''
})

// Fecha o menu ao clicar em um link interno
mobileMenu?.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    menuOpen = false
    mobileMenu.classList.add('hidden')
    bar1.style.transform = ''
    bar2.style.opacity = '1'
    bar3.style.transform = ''
  })
})
