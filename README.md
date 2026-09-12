# Cognitecta

Corporate site for Cognitecta — applied AI and technology. Built with Astro and Tailwind. Static output, deployed on GitHub Pages.

## Local

```sh
npm install
npm run dev
```

| Command | Action |
| --- | --- |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Production build to `./dist/` |
| `npm run preview` | Preview the production build |

## GitHub Pages

The site is configured for the custom domain `cognitecta.com` (`site` in `astro.config.mjs`, `public/CNAME`). There is no `base` path.

1. Push to `main`.
2. In the repository: **Settings → Pages → Source: GitHub Actions**.
3. Point DNS at GitHub Pages.

### DNS

Apex (`cognitecta.com`):

| Type | Name | Value |
| --- | --- | --- |
| `A` | `@` | `185.199.108.153` |
| `A` | `@` | `185.199.109.153` |
| `A` | `@` | `185.199.110.153` |
| `A` | `@` | `185.199.111.153` |
| `AAAA` | `@` | `2606:50c0:8000::153` |
| `AAAA` | `@` | `2606:50c0:8001::153` |
| `AAAA` | `@` | `2606:50c0:8002::153` |
| `AAAA` | `@` | `2606:50c0:8003::153` |

`www`:

| Type | Name | Value |
| --- | --- | --- |
| `CNAME` | `www` | `<user-or-org>.github.io` |

GitHub may also ask you to add a verification `TXT` record when you attach the domain in **Settings → Pages**.
