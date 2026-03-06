const pixIcon = `
  <svg class="w-7 h-7 text-sdtv-yellow" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.18 2.93a4.01 4.01 0 0 0-2.83 1.17L11 5.46 9.65 4.1a4 4 0 0 0-5.66 5.66L5.35 11 4 12.35a4 4 0 0 0 5.66 5.66L11 16.65l1.35 1.35a4 4 0 0 0 5.66-5.66L16.65 11l1.35-1.35a4.01 4.01 0 0 0-2.82-6.72zm1.42 5.31-1.76 1.76a.5.5 0 0 0 0 .71l1.76 1.76a2 2 0 0 1 0 2.83l-1.41 1.41a2 2 0 0 1-2.83 0L10.6 14.9a.5.5 0 0 0-.71 0l-1.76 1.76a2 2 0 0 1-2.83-2.83l1.76-1.76a.5.5 0 0 0 0-.71L5.3 9.6a2 2 0 0 1 2.83-2.83l1.76 1.76a.5.5 0 0 0 .71 0l1.76-1.76a2 2 0 0 1 2.83 0l1.41 1.41a2 2 0 0 1 0 2.06z"/>
  </svg>`

const cardIcon = `
  <svg class="w-7 h-7 text-sdtv-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
  </svg>`

const moneyIcon = `
  <svg class="w-7 h-7 text-sdtv-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
  </svg>`

export function pagamento() {
  return `
    <section id="pagamento" class="py-20">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-extrabold text-center text-sdtv-light mb-4">
          Formas de <span class="text-sdtv-yellow">pagamento</span>
        </h2>
        <p class="text-center text-sdtv-light/50 mb-12">Aceitamos as principais formas de pagamento para sua comodidade.</p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div class="bg-white/5 border border-white/5 rounded-2xl p-6 text-center hover:border-sdtv-yellow/40 transition-all">
            <div class="w-14 h-14 mx-auto mb-4 rounded-full bg-sdtv-yellow/10 flex items-center justify-center">
              ${pixIcon}
            </div>
            <h3 class="text-sdtv-light font-bold text-base">Pix</h3>
            <p class="text-sdtv-light/40 text-xs mt-1">Instantâneo</p>
          </div>

          <div class="bg-white/5 border border-white/5 rounded-2xl p-6 text-center hover:border-sdtv-yellow/40 transition-all">
            <div class="w-14 h-14 mx-auto mb-4 rounded-full bg-sdtv-yellow/10 flex items-center justify-center">
              ${cardIcon}
            </div>
            <h3 class="text-sdtv-light font-bold text-base">Débito</h3>
            <p class="text-sdtv-light/40 text-xs mt-1">À vista</p>
          </div>

          <div class="bg-white/5 border border-sdtv-yellow/30 rounded-2xl p-6 text-center relative hover:border-sdtv-yellow/60 transition-all">
            <span class="absolute -top-3 left-1/2 -translate-x-1/2 bg-sdtv-yellow text-sdtv-darker text-xs font-bold px-3 py-0.5 rounded-full whitespace-nowrap">
              3x sem juros
            </span>
            <div class="w-14 h-14 mx-auto mb-4 rounded-full bg-sdtv-yellow/10 flex items-center justify-center">
              ${cardIcon}
            </div>
            <h3 class="text-sdtv-light font-bold text-base">Crédito</h3>
            <p class="text-sdtv-light/40 text-xs mt-1">Em até 3x</p>
          </div>

          <div class="bg-white/5 border border-white/5 rounded-2xl p-6 text-center hover:border-sdtv-yellow/40 transition-all">
            <div class="w-14 h-14 mx-auto mb-4 rounded-full bg-sdtv-yellow/10 flex items-center justify-center">
              ${moneyIcon}
            </div>
            <h3 class="text-sdtv-light font-bold text-base">Dinheiro</h3>
            <p class="text-sdtv-light/40 text-xs mt-1">À vista</p>
          </div>

        </div>
      </div>
    </section>
  `
}
