# Portale Maternità — Project Summary

> Ultimo aggiornamento: 2026-06-08

## Panoramica

Sito web vetrina per un team multidisciplinare di professioniste specializzate nel sostegno alla maternità fisiologica e patologica. Il sito serve a:
1. Presentare il team e le relative competenze
2. Pubblicare contenuti informativi (blog) su tematiche legate alla maternità
3. Posizionarsi sui motori di ricerca per query italiane legate a maternità, gravidanza, parto, PMA, aborto, morte fetale, depressione post-partum, ambientamento, asilo nido

## Stack tecnico

| Tecnologia | Scelta | Motivo |
|---|---|---|
| Framework | Next.js 14 (Pages Router) | SSG/SSR nativo, ottimo SEO, integrazione Vercel |
| Stile | CSS globale (globals.css) | Semplicità, nessuna dipendenza aggiuntiva |
| Deploy | Vercel | Piano gratuito, integrazione nativa Next.js |
| Repository | GitHub — `MaxDax84/Marcella-TemporarySite` | |
| URL attuale | `https://marcella-temporarysite.vercel.app` | Temporaneo, dominio reale da acquistare |

## Struttura del progetto

```
Marcella-TemporarySite/
├── components/
│   ├── Layout.js         # Head (SEO, JSON-LD), Navbar, Footer
│   ├── Navbar.js         # Nav fissa, responsive con menu hamburger
│   └── Footer.js         # Footer con colonne e disclaimer medico
├── data/
│   ├── team.js           # Dati REALI delle professioniste
│   └── posts.js          # Articoli del blog (contenuto completo + keywords SEO)
├── pages/
│   ├── _app.js           # Fade tra pagine
│   ├── index.js          # Homepage: Hero + Chi Siamo + Cosa Facciamo + CTA
│   ├── blog.js           # Pagina Blog: griglia articoli
│   ├── sitemap.xml.js    # Sitemap dinamica (generata server-side)
│   ├── blog/[slug].js    # Singolo articolo con sidebar + JSON-LD Article
│   └── team/
│       ├── index.js      # Pagina Team: griglia card professioniste
│       └── [slug].js     # Profilo singola professionista + JSON-LD Person
├── public/
│   ├── robots.txt        # Consente indicizzazione, punta alla sitemap
│   ├── marcella-marcone.jpg
│   └── chiara-mauri.jpg
├── styles/
│   └── globals.css       # Tutto il CSS: variabili, componenti, responsive
└── PROJECT_SUMMARY.md    # Questo file
```

## Team attuale (dati reali)

| Nome | Ruolo | Città | Specialità chiave |
|------|-------|-------|-------------------|
| Dott.ssa Marcella Marcone | Psicologa e Psicoterapeuta | Milano | Gravidanza, parto, depressione post-partum, PMA, infertilità, psicologia perinatale |
| Chiara Mauri | Educatrice per la Prima Infanzia | Como | Ambientamento asilo nido, educazione 0-36 mesi, outdoor education |

Email contatto: `mmarcone@me.com`

## Blog — articoli pubblicati

| ID | Titolo | Autrice | Keyword target |
|----|--------|---------|----------------|
| 3 | Scegliere il servizio educativo per la prima infanzia | Chiara Mauri | asilo nido, ambientamento, educazione 0-3 |
| 1 | È possibile programmare la gravidanza? | Marcella Marcone | gravidanza, fertilità, psicologia perinatale |
| 2 | L'infertilità pre-primaria | Marcella Marcone | infertilità, PMA, aborto, morte fetale |

## SEO — stato attuale

### Implementato
- `robots.txt` — consente indicizzazione completa, punta alla sitemap
- `sitemap.xml` dinamica — elenca tutte le pagine (home, team, blog, slug)
- `canonical` URL per ogni pagina
- `og:url` + `og:locale` (it_IT) per Open Graph
- `keywords` meta tag per ogni pagina (usato da Bing)
- JSON-LD `MedicalOrganization` sulla homepage
- JSON-LD `Article` su ogni post del blog
- JSON-LD `Person` su ogni profilo professionista
- Meta description ottimizzate con keyword target su ogni pagina
- `SITE_URL` centralizzato in `next.config.js` (facile da cambiare con nuovo dominio)

### Da fare
- [ ] Comprare dominio personalizzato e aggiornare `SITE_URL` in `next.config.js`
- [ ] Aggiornare URL in `public/robots.txt`
- [ ] Configurare redirect 301 da `marcella-temporarysite.vercel.app` → nuovo dominio (da pannello Vercel)
- [ ] Iscrivere il sito a **Google Search Console** e inviare la sitemap
- [ ] Aggiungere **Google Analytics** o Plausible per il tracking
- [ ] Immagini Open Graph (og:image) per condivisioni social
- [ ] Favicon reale
- [ ] Nuovi articoli su: ciuccio, pannolino, regole, aborto, morte fetale (per coprire keyword mancanti)
- [ ] Google My Business (per ricerche locali Milano/Como)
- [ ] Link building e menzioni esterne

## Keyword target

### Già coperte da contenuto esistente
`gravidanza` · `parto` · `depressione post partum` · `PMA` · `infertilità` · `psicologia perinatale` · `ambientamento` · `asilo nido` · `educazione prima infanzia`

### Mancanti — servono articoli dedicati
`ciuccio` · `pannolino` · `regole` · `aborto` · `morte fetale`

## Design

- **Palette**: Verde salvia (`#4E7B6D`) primario, crema (`#F6F2EC`) sfondo
- **Font**: Playfair Display (serif, titoli) + Inter (sans-serif, corpo)
- **Sfondo**: farfalle in overlay su sezioni chiave
- **Responsive**: mobile-first, breakpoint a 640px e 1024px

## Deploy

1. Repository GitHub: `MaxDax84/Marcella-TemporarySite` (branch `master`)
2. Collegato a Vercel — deploy automatico ad ogni push su `master`
3. URL temporaneo: `https://marcella-temporarysite.vercel.app`
4. Variabile d'ambiente da configurare su Vercel al cambio dominio: `SITE_URL=https://www.nuovodominio.it`
