const items = [
  {
    title: 'Retirada Gratuita',
    desc: 'Buscamos o seu aparelho sem custo adicional.',
    icon: `<svg class="w-7 h-7 text-sdtv-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/>
    </svg>`,
  },
  {
    title: 'Orçamento Gratuito',
    desc: 'Saiba o valor do conserto antes de decidir, sem compromisso.',
    icon: `<svg class="w-7 h-7 text-sdtv-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
    </svg>`,
  },
  {
    title: 'Entrega Gratuita',
    desc: 'Devolvemos o aparelho consertado na sua porta, sem taxa.',
    icon: `<svg class="w-7 h-7 text-sdtv-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>
    </svg>`,
  },
  {
    title: 'Preço Justo',
    desc: 'Cobranças transparentes e valores acessíveis para Santos.',
    icon: `<svg class="w-7 h-7 text-sdtv-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>`,
  },
]

export function diferenciais() {
  return `
    <section id="diferenciais" class="py-20">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-extrabold text-center text-sdtv-light mb-4">
          Por que escolher a <span class="text-sdtv-yellow">SDTV?</span>
        </h2>
        <p class="text-center text-sdtv-light/50 mb-12">Trabalhamos para oferecer o melhor atendimento em Santos.</p>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${items.map(({ title, desc, icon }) => `
            <div class="bg-white/5 rounded-2xl p-6 text-center border border-white/10 hover:bg-white/10 hover:border-sdtv-yellow/30 transition-all">
              <div class="w-14 h-14 mx-auto mb-4 rounded-full bg-sdtv-yellow/10 flex items-center justify-center">
                ${icon}
              </div>
              <h3 class="text-sdtv-light font-bold text-lg mb-2">${title}</h3>
              <p class="text-sdtv-light/60 text-sm">${desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `
}
