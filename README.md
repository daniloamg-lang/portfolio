# Portfolio

Creative bilingual portfolio built with React, TypeScript, and Vite.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This repository includes [deploy workflow](.github/workflows/deploy.yml) for automatic deployment on pushes to `main`.

1. Go to repository settings.
2. Open Pages.
3. Set source to GitHub Actions.
4. Push to `main`.
5. Wait for workflow completion.

### Base path behavior

- Default base is `/`.
- Override with `VITE_BASE_PATH` if needed.
- For this project site, use `/portfolio/`.

## Content update playbook

For a repeatable process to update projects, text, and images, see [docs/content-update-playbook.md](docs/content-update-playbook.md).

## Security checks

Run audits:

```bash
npm run audit:prod
npm run audit:all
```

Recommended secret scan (PowerShell):

```powershell
Get-ChildItem -Recurse -File | Select-String -Pattern "AKIA|AIza|ghp_|github_pat_|xoxb-|xoxp-|BEGIN (RSA|OPENSSH|EC) PRIVATE KEY|password\s*=|secret\s*=|token\s*="
```

## Notes

- Environment files are ignored in [`.gitignore`](.gitignore).
- UI language persistence key: `portfolio-language`.
