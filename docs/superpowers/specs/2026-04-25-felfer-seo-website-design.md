# FELFER SEO Website Redesign Design

## Summary

Build a static, SEO-first website for Constructora FELFER. The site should improve the current `https://felfer.com.mx/` structure with a modern institutional design, clear service architecture, strong keyword targeting, and conversion paths for quote requests, calls, and WhatsApp.

The site targets public-sector buyers, large contractors, private developers, and companies that need infrastructure, civil works, slope stabilization, roads, urbanization, or building work. The tone should be technical where it builds trust, but clear enough for non-specialist buyers.

## Site Architecture

Use this route structure for v1:

```text
/
/servicios
/servicios/estabilizacion-de-taludes
/servicios/carreteras-conservacion-vial
/servicios/urbanizacion
/servicios/edificacion
/servicios/obras-de-drenaje
/servicios/terracerias
/servicios/estructuras
/proyectos
/contacto
```

The primary navigation should stay simple:

```text
FELFER | Servicios | Proyectos | Contacto
```

Do not include every service in the top navigation. Use the services hub, homepage service cards, footer links, and contextual links to expose service pages.

## SEO Strategy

SEO is the primary priority. Each page must have a clear search intent, unique metadata, one H1, semantic headings, internal links, descriptive image alt text, canonical URL, Open Graph metadata, and appropriate JSON-LD.

Primary keyword targets:

- constructora en Hidalgo
- constructora en México
- empresa constructora de infraestructura
- estabilización de taludes
- estabilización de taludes en México
- construcción de carreteras
- conservación vial
- urbanización
- edificación

Technical and service keyword targets:

- concreto lanzado
- anclajes activos y pasivos
- malla triple torsión
- malla antierosión
- drenes subhorizontales
- saneamiento de taludes
- muros de contención
- gaviones
- pavimentación asfáltica
- pavimentación con concreto hidráulico
- terracerías
- obras de drenaje
- estructuras de concreto
- cimentaciones

Geographic signals should emphasize national capacity with a clear base in Pachuca, Hidalgo. Use terms such as Pachuca, Hidalgo, México, centro del país, CDMX, Estado de México, Puebla, and Querétaro where natural. Do not create local landing pages in v1.

## Page Designs

### Home

The homepage should balance brand, services, proof, and conversion.

Sections:

1. Navbar with `FELFER | Servicios | Proyectos | Contacto`.
2. Hero with real construction imagery, an institutional SEO headline, short supporting copy, and two CTAs: quote request and call/WhatsApp.
3. Four featured services: Estabilización de taludes, Carreteras y conservación vial, Urbanización, and Edificación.
4. Client/logo section with public and private credibility signals.
5. Featured projects section with a short preview and link to `/proyectos`.
6. Final quote CTA.

The homepage should target brand and category terms such as Constructora FELFER, constructora en Hidalgo, constructora en México, infraestructura, obra civil, carreteras, urbanización, and edificación.

### Services Hub

`/servicios` should summarize all seven services and link to every service page. It should be concise, scannable, and SEO-focused without becoming repetitive.

Services:

- Estabilización de taludes
- Carreteras y conservación vial
- Urbanización
- Edificación
- Obras de drenaje
- Terracerías
- Estructuras

### Service Pages

Every service page should include:

1. SEO hero with keyword-focused H1.
2. Intro of roughly 80-120 words using the primary keyword and a natural variant.
3. `Qué incluye`.
4. `Dónde aplica`.
5. Technical methods, scopes, or capabilities.
6. Related projects or sectors when there is support from current FELFER material.
7. FAQ section for long-tail SEO.
8. Final CTA to quote/contact.

`/servicios/estabilizacion-de-taludes` should be the deepest service page. It should cover slope stabilization, concrete shotcrete/lanzado, anchors, meshes, erosion control, drainage, retaining solutions, common applications, process, project proof, and FAQs.

`/servicios/carreteras-conservacion-vial` should also be robust, covering road construction, conservation, paving, earthworks, drainage, signalization, and related project proof.

Urbanization and edification should be complete but lighter than taludes and roads. Drainage, earthworks, and structures can be compact pages with strong metadata, useful scope sections, FAQs, and conversion CTAs.

### Projects

`/proyectos` should be a single listing page in v1. Do not create individual project pages.

Use real projects visible in the current FELFER site as proof, but write cautiously. Project cards may include image, project name, related service, location, client/sector, and short summary only when supported by current material or confirmed by FELFER.

If project data is incomplete, do not publish unsupported claims. Keep validation notes in internal content/data fields rather than as public-facing uncertainty.

### Contact

`/contacto` should support quote requests and direct contact.

Include:

- Contact form with name, company, phone, email, service, project location, and message.
- Primary CTA: Solicitar cotización.
- Secondary CTA: call or WhatsApp.
- Base location signal: Pachuca de Soto, Hidalgo.

## Visual Direction

Use a professional modern visual direction. The site should feel like a serious infrastructure and civil works company, not a decorative marketing page.

Use real construction, road, slope, machinery, and project photography as the main visual asset. The palette should be sober and technical: white, neutral gray, black or dark blue, and a restrained construction accent such as yellow or orange if it fits the brand.

Keep layouts dense but readable. Avoid oversized generic marketing sections, excessive decorative cards, and copy that feels inflated. Cards are appropriate for services and projects.

## Technical Design

Build as a static site. If no app stack already exists, Next.js is the preferred implementation because it supports route-based pages, metadata, sitemap generation, image optimization, and static export-friendly architecture.

Use local structured content in code or data files rather than a CMS in v1. Images should be stored locally under `public/images/...` and optimized for performance.

Create reusable components for layout, hero, service cards, project cards, CTA bands, breadcrumbs, FAQ sections, client logos, and metadata/JSON-LD helpers.

Generate or define:

- Unique page titles and descriptions.
- Canonical URLs.
- Open Graph and Twitter metadata.
- `robots.txt`.
- `sitemap.xml`.
- JSON-LD for `Organization`, construction/local business information, `Service`, `BreadcrumbList`, and FAQ data where relevant.

## Acceptance Criteria

- All routes listed in Site Architecture exist.
- Top navigation only includes FELFER, Servicios, Proyectos, and Contacto.
- Homepage highlights exactly four services: taludes, carreteras/conservación vial, urbanización, and edificación.
- `/servicios` links to all seven service pages.
- No individual project pages exist in v1.
- Each page has one H1, unique metadata, canonical URL, and descriptive image alt text.
- Taludes and roads pages are deeper than the other service pages.
- Internal links connect related services, especially taludes, drainage, roads, and earthworks.
- Contact CTAs support quote request and call/WhatsApp.
- Public copy avoids unverified project claims.
- Build completes without errors.
- Desktop and mobile layouts have no overlapping text or broken responsive sections.

## Assumptions

- FELFER wants national positioning with a clear Pachuca/Hidalgo base.
- Current public website content, clients, projects, logos, and images may be reused carefully.
- Missing client, scope, date, location, and project details require FELFER validation before being stated as facts.
- v1 is static and does not include a CMS.
- v1 includes one `/proyectos` listing page only.
