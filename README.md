# Studio de Pilates Tatiane Lasneaux — Site

Landing page de alta conversão. HTML5 puro + CSS3 + JavaScript vanilla. Sem dependências de build.

---

## Rodar localmente

Abra `index.html` diretamente no navegador — funciona sem servidor.

Para recarregamento automático ao editar, use a extensão **Live Server** no VS Code (botão "Go Live" no rodapé).

---

## Trocar imagens e logo

Todos os caminhos estão centralizados no topo de `js/main.js`, no objeto `IMAGES`:

```js
const IMAGES = {
  logoDark:  'assets/images/logo-dark.svg',   // header (fundo claro)
  logoLight: 'assets/images/logo-light.svg',  // footer (fundo escuro)
  hero:      'assets/images/hero.jpg',         // 1920×1080
  sobre:     'assets/images/sobre.jpg',        // 800×600
  services: {
    clinico: 'assets/images/services/clinico.jpg',
    // ...
  },
  testimonials: {
    elisabeth: 'assets/images/testimonials/elisabeth.jpg',
    // ...
  },
};
```

**Passos para trocar uma foto:**
1. Coloque o arquivo em `assets/images/` (ou subpasta)
2. No `index.html`, localize a tag `<img>` da seção correspondente e atualize o `src`
3. Repita o `data-placeholder` se quiser fallback automático

**Logo:**
- Substitua `assets/images/logo-dark.svg` pela sua logo em SVG ou PNG (fundo transparente) para uso no header
- Substitua `assets/images/logo-light.svg` pela versão clara (branca/dourada) para o footer

---

## Editar textos e headline (Message Match para Google Ads)

O headline principal está em `index.html`, seção `#hero`, tag `<h1>`:

```html
<h1 class="hero__title">
  Há quase 20 anos<br>
  transformando corpos e vidas<br>
  <em>no Lago Sul.</em>
</h1>
```

Para casar com o anúncio do Google Ads: edite apenas o texto dentro do `<h1>`, mantendo a estrutura HTML. Use variações de busca (ex.: "Pilates no Lago Sul", "Pilates Clínico Brasília") conforme a campanha.

A `<meta name="description">` e `<title>` ficam no `<head>` do `index.html` — edite lá também se necessário.

---

## Inserir IDs de tracking

Abra `js/main.js` e preencha o objeto `CONFIG` no topo:

```js
const CONFIG = {
  gtmId:                 'GTM-XXXXXXX',         // ← seu GTM ID
  ga4Id:                 'G-XXXXXXXXXX',         // ← seu GA4 ID
  googleAdsId:           'AW-XXXXXXXXX',         // ← seu ID de conta Google Ads
  googleAdsConversionId: 'AW-XXXXXXXXX/XXXXXX',  // ← ID/rótulo da conversão
};
```

Depois, no `index.html`, descomente os dois snippets do GTM (no `<head>` e logo após o `<body>`), substituindo `GTM-XXXXXXX` pelo seu ID real.

Cada clique em botão de WhatsApp já dispara automaticamente:
- `gtag('event', 'whatsapp_click', ...)` para GA4
- `gtag('event', 'conversion', ...)` para Google Ads
- `dataLayer.push({ event: 'whatsapp_click', ... })` para GTM

O campo `wa_button_location` indica qual botão foi clicado (`hero-primary`, `servicos`, `footer`, `float`, etc.).

---

## Domínio real

Após definir o domínio, substitua `https://lasneauxstudiopilates.com.br` em:
- `<link rel="canonical">` no `<head>` do `index.html`
- Todas as tags `og:url`, `og:image` no `<head>`
- `robots.txt` → linha `Sitemap:`
- `sitemap.xml` → tag `<loc>`
- JSON-LD `"url"` e `"image"` (também no `<head>`)

---

## Deploy

### Vercel (recomendado)
```bash
npm i -g vercel
vercel
```
Aponta para a raiz do projeto. Zero configuração para sites estáticos.

### Netlify
Arraste a pasta do projeto em app.netlify.com → Deploy manually.

### Qualquer hospedagem estática
Faça upload de todos os arquivos mantendo a estrutura de pastas. O servidor não precisa de suporte a Node, PHP ou qualquer runtime.

---

## Estrutura de arquivos

```
index.html              ← página principal
robots.txt
sitemap.xml
README.md
css/
  styles.css            ← todos os estilos (variáveis, seções, responsivo)
js/
  main.js               ← CONFIG + IMAGES (editar aqui) + comportamento
assets/
  images/
    logo-dark.svg       ← placeholder: substitua pelo logo real
    logo-light.svg      ← placeholder: versão clara para fundo escuro
    hero.jpg            ← foto principal (1920×1080)
    sobre.jpg           ← foto do ambiente (800×600)
    fachada.jpg         ← foto da fachada (800×600)
    placeholder-*.svg   ← placeholders visuais (remova após adicionar fotos)
    services/           ← fotos dos serviços (600×400 cada)
    testimonials/       ← fotos dos depoimentos (120×120 cada)
```
