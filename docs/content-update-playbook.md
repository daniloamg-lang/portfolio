# Content Update Playbook

This guide helps you publish portfolio updates quickly and safely.

## 1) Quick update flow

```bash
git checkout -b update/<short-name>
# edit files
npm run build
git add .
git commit -m "Update: <what changed>"
git push -u origin update/<short-name>
```

Then open a pull request to `main`, merge it, and GitHub Pages deploys automatically.

If you prefer direct updates (faster, less safe):

```bash
git add .
git commit -m "Update portfolio"
git push
```

## 2) Where to edit what

- Project text and case-study content: `src/i18n.ts`
- Type contract for projects/case studies: `src/types/project.ts`
- Case-study images: `public/case-studies/`
- Card and modal UI behavior: `src/components/ProjectCard.tsx`, `src/components/ProjectCaseStudyModal.tsx`

## 3) Recommended image structure

Create folders by project slug inside `public/case-studies/`:

```text
public/case-studies/
  core-insurance/
    core-insurance-overview-01.webp
    core-insurance-flow-01.webp
  soporte-ticsmart/
    soporte-ticsmart-overview-01.webp
    soporte-ticsmart-dashboard-01.webp
  ehr-initiative/
    ehr-initiative-overview-01.webp
    ehr-initiative-security-01.webp
```

Naming convention:

`<project-slug>-<section>-<nn>.<ext>`

Examples:

- `ehr-initiative-overview-01.webp`
- `soporte-ticsmart-dashboard-02.jpg`

## 4) Image optimization checklist

- Preferred format: `webp`.
- Keep `jpg` only when needed.
- Width target: 1400-1800 px.
- Visual quality target: 75-85.
- Typical file size target: 150 KB to 600 KB per image.
- Avoid spaces and uppercase in filenames.

## 5) How to reference images in content

In `src/i18n.ts`, each project case study can include galleries inside:

- `projects.items[].caseStudy.implementedSolution.galleries[]`
- `galleries[].images[]` uses `{ src, alt }`

Reference with absolute public paths:

```ts
images: [
  {
    src: '/case-studies/ehr-initiative/ehr-initiative-overview-01.webp',
    alt: 'EHR dashboard with appointment and clinical summary widgets',
  },
]
```

## 6) Alt text template (for accessibility)

Use this formula:

`[What is visible] + [Key context] + [Why it matters]`

Example:

`Claims triage dashboard showing SLA breaches and priority filters, used by operations to reduce response time.`

## 7) Pre-publish checklist

```bash
npm run build
npm run audit:prod
```

Then validate:

- No broken image paths in project modals.
- EN and ES versions updated consistently.
- Mobile layout still clean in case-study modal.

## 8) Publish and verify

```bash
git push
```

After push:

1. Check Actions tab for `Deploy to GitHub Pages` success.
2. Open live URL: `https://daniloamg-lang.github.io/portfolio/`.
3. Hard refresh browser (`Ctrl+F5`) if cached content appears.
