# Linear Horizon

Corporate site for Linear Horizon — applied intelligence for real organisations. Built with Astro and Tailwind. Static output, deployed on GitHub Pages.

The public site is `https://linearhorizon.com`. The repository is [`nicholas-johnson/linearhorizon.com`](https://github.com/nicholas-johnson/linearhorizon.com).

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

The site is configured for the custom domain `linearhorizon.com` (`site` in `astro.config.mjs`, `public/CNAME`). There is no `base` path.

1. Push to `main`.
2. In the repository: **Settings → Pages → Source: GitHub Actions**.
3. Point DNS at GitHub Pages.

### DNS

Apex (`linearhorizon.com`):

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

## Contact form

The contact page posts a web-channel conversation to Callcenter (`POST /api/v1/conversations`). GitHub Pages only serves the static form; the browser calls Callcenter directly.

Set these repository variables if the ingest host or key is not the default:

| Variable | Purpose |
| --- | --- |
| `PUBLIC_CALLCENTER_INGEST_URL` | Ingest endpoint. Default: `https://callcenter.linearhorizon.com/api/v1/conversations` |
| `PUBLIC_CALLCENTER_PUBLISHABLE_KEY` | Optional bearer token sent as `Authorization` |

Callcenter must allow CORS from `https://linearhorizon.com` (and `http://localhost:4321` in development).
