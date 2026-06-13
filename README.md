# Ema — Landing

Página de venta estática para la app Ema.

## Stack

- HTML + CSS + JS vanilla.
- Sin build, sin framework.
- Fonts vía Google Fonts (Poppins).
- Responsive: desktop / tablet (1024px) / mobile (768px) / small (480px).

## Estructura

- `index.html` — todo el markup, secciones cortas y semánticas.
- `styles.css` — diseño completo, una sola hoja, organizada por secciones.
- `script.js` — sólo el acordeón de FAQ (todo lo demás funciona sin JS).

## Paleta

Versión **clara y cálida** de la identidad de la app (que en mobile es oscura).
Las CTAs principales usan dorado vela `#E8B85F` sobre navy `#1A2238`.

| Token | Hex | Uso |
|---|---|---|
| `--primary` | `#1A2238` | Navy: texto principal y botones primarios |
| `--accent` | `#E8B85F` | Dorado vela: CTAs destacados |
| `--wine` | `#8C4F5F` | Acento cálido |
| `--ocean` | `#3F8FA5` | Teal (en gradientes) |
| `--sage` | `#7DA084` | Verde (en gradientes) |
| `--bg` | `#FBF6EE` | Crema cálida (secciones alternas) |
| `--success` | `#6FA886` | Checks de pricing |

## Cómo probar en local

Abrí `index.html` con doble click, o servilo con cualquier server estático:

```bash
# Python
python -m http.server 8080

# Node
npx serve .
```

## Cómo deployar

Cualquier hosting estático sirve. Recomendados:

- **Vercel** — `vercel deploy` desde esta carpeta.
- **Netlify** — drag & drop de la carpeta en la web.
- **Cloudflare Pages** — conectar el repo.
- **GitHub Pages** — push y activar Pages.

Costo: **$0**.

## Lo que falta antes de salir a aire

- Reemplazar los precios placeholder por los reales del producto en RevenueCat.
- Links de Play Store / App Store cuando la app esté publicada.
- Política de Privacidad y Términos (links en footer).
- Open Graph / Twitter Card meta tags para previews al compartir.
- Favicon definitivo (logo de Ema).
- (Opcional) Capturas reales de la app en lugar de los mocks CSS.
- (Opcional) Analytics — GA4 o Plausible.
