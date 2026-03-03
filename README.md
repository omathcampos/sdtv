# SDTV Assistência Técnica

Site institucional da **SDTV Assistência Técnica**, localizada em Santos-SP. Especializada no conserto de TVs (Plasma, LCD, LED) e fornos microondas.

## Stack

- [Vite](https://vitejs.dev/) — build tool / dev server
- [Tailwind CSS v4](https://tailwindcss.com/) — estilização via `@tailwindcss/vite`
- HTML + Vanilla JS

## Começando

### Pré-requisitos

- Node.js 18+
- npm

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:5173`

### Build de produção

```bash
npm run build
```

O output fica em `dist/`.

## Estrutura do projeto

```
sdtv/
├── index.html          # Estrutura da landing page (todas as seções)
├── config.js           # Dados de contato e configurações da empresa
├── vite.config.js      # Configuração do Vite + plugin Tailwind
├── package.json
├── public/
└── src/
    ├── main.js         # JS: links dinâmicos e menu mobile
    └── style.css       # CSS: @import tailwindcss + tema customizado
```

## Configuração

Todos os dados sensíveis e variáveis da empresa ficam centralizados em `config.js`:

```js
export const config = {
  whatsapp: '13999999999',   // número sem formatação
  telefone: '(13) 3000-0000',
  cidade: 'Santos - SP',
  nomeEmpresa: 'SDTV Assistência Técnica',
  slogan: '...',
  instagram: 'https://instagram.com/sdtvsantos',
}
```

> Nunca altere números de contato direto no `index.html` — use sempre o `config.js`.

## Deploy

O projeto está conectado ao [Vercel](https://vercel.com). Qualquer push na branch `main` gera um novo deploy automaticamente.

**URL de produção:** https://sdtv-liard.vercel.app

## Fluxo de branches

```
feature/nome → develop → main (deploy automático)
```

- `main` — produção, protegida, exige PR
- `develop` — integração, protegida, exige PR
- `feature/*` — branches de desenvolvimento livre

Consulte [CONTRIBUTING.md](./CONTRIBUTING.md) para detalhes.
