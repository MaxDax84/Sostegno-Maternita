# Marcella — Sostegno alla Maternità: Project Summary

> Ultimo aggiornamento: 2026-05-28

## Panoramica

Sito web vetrina per un team multidisciplinare di professioniste specializzate nel sostegno alla maternità fisiologica e patologica. Il sito serve a:
1. Presentare il team e le relative competenze
2. Pubblicare contenuti informativi (blog) su tematiche legate alla maternità
3. Posizionarsi sui motori di ricerca per le query legate al sostegno alla maternità in Italia (SEO da sviluppare in fase successiva)

## Stack tecnico

| Tecnologia | Scelta | Motivo |
|---|---|---|
| Framework | Next.js 14 (Pages Router) | SSG/SSR nativo, ottimo SEO, integrazione Vercel |
| Stile | CSS globale (globals.css) | Semplicità, nessuna dipendenza aggiuntiva |
| Deploy | Vercel | Piano gratuito, integrazione nativa Next.js |
| Repository | GitHub — `MaxDax84/Marcella-TemporarySite` | |

## Struttura del progetto

```
Marcella-TemporarySite/
├── components/
│   ├── Layout.js       # Wrapper con Head (meta SEO), Navbar, Footer
│   ├── Navbar.js       # Nav fissa, responsive con menu hamburger
│   └── Footer.js       # Footer con colonne e disclaimer medico
├── data/
│   ├── team.js         # Array con i dati dei professionisti (placeholder)
│   └── posts.js        # Array con articoli del blog (contenuto completo)
├── pages/
│   ├── _app.js
│   ├── index.js        # Homepage: Hero + Chi Siamo + Cosa Facciamo + CTA
│   ├── team.js         # Pagina Team: griglia di card professioniste
│   ├── blog.js         # Pagina Blog: griglia di card articoli
│   └── blog/[slug].js  # Singolo articolo con sidebar
├── styles/
│   └── globals.css     # Tutto il CSS: variabili, componenti, responsive
└── PROJECT_SUMMARY.md  # Questo file
```

## Pagine e contenuto attuale

### Pagina 1 — Home (`/`)
- **Hero**: headline "Sostegno alla Maternità / Fisiologica e Patologica", statistiche team (5+ professioniste, 3+ città, 100% online), CTA a Team e Blog
- **Chi Siamo**: descrizione del gruppo con citazione e stats visive
- **Cosa Facciamo**: 6 card (In tutta Italia, Online, Percorsi individuali, Gruppi di supporto, Gravidanza patologica, Approccio integrato)
- **CTA strip**: call to action finale

### Pagina 2 — Team (`/team`)
- 5 professioniste placeholder con dati fittizi da sostituire:
  1. **Dr.ssa Anna Ferretti** — Psicologa Perinatale, Milano
  2. **Dr.ssa Chiara Romano** — Ostetrica, Roma
  3. **Dr.ssa Marta Conti** — Fisioterapista Pelvi-Perineale, Torino
  4. **Dr.ssa Elena Russo** — Consulente Allattamento IBCLC, Bologna
  5. **Dr.ssa Valentina Galli** — Nutrizionista, Online
- Le foto sono sostituite da avatar CSS con iniziali colorati (da aggiornare con foto reali)

### Pagina 3 — Blog (`/blog`) + articoli singoli
- 6 articoli completi scritti in italiano, con contenuto originale:
  1. Depressione Post-Partum (autrice: Anna Ferretti)
  2. La Quarta Trimestre (autrice: Chiara Romano)
  3. Allattamento al Seno: Miti e Realtà (autrice: Elena Russo)
  4. Il Pavimento Pelvico (autrice: Marta Conti)
  5. Gravidanza ad Alto Rischio (autrice: Anna Ferretti)
  6. Nutrizione in Gravidanza (autrice: Valentina Galli)

## Design

- **Palette**: Verde salvia (`#4E7B6D`) primario, terracotta (`#BC7A55`) accento, crema (`#F6F2EC`) sfondo
- **Font**: Playfair Display (serif, titoli) + Inter (sans-serif, corpo)
- **Responsive**: mobile-first, breakpoint a 640px e 1024px
- **Accessibilità**: markup semantico, meta tag SEO su ogni pagina

## Cosa manca / TODO

### Priorità alta (prima del lancio)
- [ ] Sostituire i dati placeholder del team con i dati reali delle professioniste
- [ ] Aggiungere le foto reali delle professioniste (sostituire gli avatar CSS)
- [ ] Definire il nome definitivo del sito (attualmente "Marcella" — nome temporaneo)
- [ ] Email di contatto reale (ora `info@marcella.it` — placeholder)
- [ ] Favicon reale

### Priorità media
- [ ] Aggiungere un form di contatto (o integrazione con Calendly/TidyCal per prenotazioni)
- [ ] Collegare dominio personalizzato su Vercel
- [ ] Aggiungere Google Analytics / Plausible per tracking
- [ ] Ottimizzare immagini OG (Open Graph) per condivisioni social

### Fase SEO (seconda fase)
- [ ] Ricerca keyword per maternità, post-partum, allattamento, depressione post-partum, ecc.
- [ ] Ottimizzare meta title e description su ogni pagina per keyword target
- [ ] Aggiungere schema.org (MedicalBusiness, Person per le professioniste, BlogPosting)
- [ ] Creare sitemap.xml e robots.txt
- [ ] Link building e presenza locale (Google My Business)
- [ ] Espandere il blog con articoli ottimizzati per keyword a coda lunga

## Deploy su Vercel

1. Collegare il repo GitHub `MaxDax84/Marcella-TemporarySite` a Vercel
2. Framework: Next.js (rilevato automaticamente)
3. Build command: `next build` (default)
4. Output directory: `.next` (default)
5. Nessuna variabile d'ambiente necessaria al momento
