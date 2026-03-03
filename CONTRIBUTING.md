# Guia de Contribuição — SDTV

Este documento descreve como trabalhar no projeto, atualizar conteúdo e fazer deploy de novas versões.

---

## Fluxo de trabalho

```
feature/nome-da-feature
        ↓  PR
     develop
        ↓  PR
       main  →  deploy automático (Vercel)
```

### Passo a passo

1. **Crie uma branch a partir de `develop`:**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b feature/nome-da-feature
   ```

2. **Faça as alterações e commit:**
   ```bash
   git add nome-do-arquivo.html
   git commit -m "feat: descrição da mudança"
   ```

3. **Abra um PR de `feature/...` → `develop`** no GitHub

4. **Após merge no develop**, abra um PR de `develop` → `main`

5. **Após merge no main**, o Vercel faz o deploy automaticamente

---

## Como atualizar dados de contato

Edite **apenas** o arquivo `config.js` na raiz do projeto:

```js
export const config = {
  whatsapp: '13999999999',    // só números, sem formatação
  telefone: '(13) 3000-0000', // com formatação para exibição
  cidade: 'Santos - SP',
  nomeEmpresa: 'SDTV Assistência Técnica',
  slogan: 'Especialistas em TV e Microondas em Santos',
  instagram: 'https://instagram.com/sdtvsantos',
}
```

> Nunca edite os links de WhatsApp ou telefone diretamente no `index.html`.

---

## Como atualizar textos e seções

Todos os textos estão no `index.html`. Cada seção tem um comentário identificador:

| Comentário              | Seção               |
|-------------------------|---------------------|
| `<!-- NAVBAR -->`       | Barra de navegação  |
| `<!-- HERO -->`         | Tela inicial        |
| `<!-- SERVIÇOS -->`     | O que consertamos   |
| `<!-- DIFERENCIAIS -->` | Por que a SDTV?     |
| `<!-- SOBRE -->`        | Quem somos          |
| `<!-- PAGAMENTO -->`    | Formas de pagamento |
| `<!-- CONTATO -->`      | Entre em contato    |
| `<!-- FOOTER -->`       | Rodapé              |

---

## Como adicionar a logo real

1. Coloque o arquivo da logo em `src/assets/logo.png`
2. No `index.html`, localize o bloco comentado com `Logo placeholder`
3. Substitua o `<div>` da logo pelo seguinte:
   ```html
   <img src="/src/assets/logo.png" alt="SDTV Assistência Técnica" class="w-36 h-auto" />
   ```

---

## Como adicionar endereço

Quando o endereço físico estiver definido:

1. No `index.html`, localize o card de **Localização** na seção `<!-- CONTATO -->`
2. Substitua `Endereço em breve` pelo endereço real
3. Opcionalmente, adicione um link para o Google Maps:
   ```html
   <a href="https://maps.google.com/?q=Endereço+Santos+SP" target="_blank">Ver no mapa</a>
   ```

---

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`

---

## Padrão de commits

```
feat: nova funcionalidade
fix: correção de bug
content: atualização de texto ou conteúdo
style: ajuste visual sem mudança de funcionalidade
chore: configuração, dependências
```
