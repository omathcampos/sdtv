const tvIcon = `
  <svg class="w-8 h-8 text-sdtv-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>`

const microwaveIcon = `
  <svg class="w-8 h-8 text-sdtv-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
    <rect x="2" y="6" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.5"/>
    <path stroke-linecap="round" stroke-linejoin="round" d="M18 10v4M6 11h7"/>
    <circle cx="18" cy="15" r="1" fill="currentColor" stroke="none"/>
  </svg>`

const cards = [
  { icon: tvIcon, title: 'TV Plasma', desc: 'Diagnóstico e reparo completo de TVs Plasma de qualquer marca.' },
  { icon: tvIcon, title: 'TV LCD', desc: 'Diagnóstico e conserto de TVs LCD de qualquer marca.' },
  { icon: tvIcon, title: 'LED · OLED · QLED', desc: 'Smart TVs, 4K, 8K e as tecnologias mais modernas do mercado.' },
  { icon: microwaveIcon, title: 'Forno Microondas', desc: 'Conserto de fornos microondas de todas as marcas e modelos.' },
]

export function services() {
  return `
    <section id="servicos" class="py-20">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-extrabold text-center text-sdtv-light mb-4">
          O que <span class="text-sdtv-yellow">consertamos</span>
        </h2>
        <p class="text-center text-sdtv-light/50 mb-12">Todas as tecnologias, todas as marcas — em Santos e região.</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${cards.map(({ icon, title, desc }) => `
            <div class="bg-white/5 border border-white/5 rounded-2xl p-6 text-center hover:border-sdtv-yellow/40 hover:bg-white/[0.08] transition-all group">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-sdtv-yellow/10 flex items-center justify-center group-hover:bg-sdtv-yellow/20 transition-colors">
                ${icon}
              </div>
              <h3 class="text-sdtv-light font-bold text-lg mb-2">${title}</h3>
              <p class="text-sdtv-light/50 text-sm">${desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `
}
