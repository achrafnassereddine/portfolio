# Achraf Nasser-Eddine — Cybersecurity Engineering Portfolio

[![Status](https://achraf-1337.vercel.app/api/badge)](https://achraf-1337.vercel.app/)

Minimalist, security-hardened cybersecurity engineering portfolio deployed on Vercel Edge (`https://achraf-1337.vercel.app/`). Designed with a `#141414` charcoal and `#E30613` crimson palette, bilingual EN/FR switching, client-side SOC/DFIR analyst utilities, and cryptographic commit attestation.

---

## Architecture & Security Controls

### 1. HTTP Security Headers & CSP (`vercel.json`)
All static routes and serverless functions enforce strict browser isolation and transport security:
* **Content-Security-Policy:** SHA-256 hash-pinned inline JSON-LD schema (`default-src 'self'`, `frame-ancestors 'none'`, `base-uri 'self'`, `form-action 'self'`, `worker-src 'self'`, `upgrade-insecure-requests`).
* **Strict-Transport-Security:** `max-age=63072000; includeSubDomains; preload`
* **Cross-Origin Isolation:** `Cross-Origin-Opener-Policy: same-origin` and `Cross-Origin-Resource-Policy: same-origin`
* **Clickjacking & MIME Hardening:** `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and restrictive `Permissions-Policy`.

### 2. Cryptographic Integrity & Disclosure
* **GPG Commit Signing:** All repository commits are signed using Ed25519 key `DA9AA69CF510C107` (`C179103CAB427CC617EB14CEDA9AA69CF510C107`).
* **RFC 9116 Disclosure:** Published at `/.well-known/security.txt` linking directly to the live PGP public key endpoint.
* **CI/CD Security Gate (`.github/workflows/ci-security.yml`):** Automated Gitleaks secret scanning, `vercel.json` / `package.json` syntax validation, and SEO/disclosure file checks on every push.

---

## Serverless Edge Endpoints (`/api/*`)

| Endpoint | Content-Type | Cache Strategy | Purpose |
| :--- | :--- | :--- | :--- |
| `/api/health` | `application/json` | Dynamic | Operational health check, specialization focus, and internship availability metadata |
| `/api/pgp` | `text/plain` | `max-age=86400` | Live ASCII-armored Ed25519 PGP public key (`DA9AA69CF510C107`) |
| `/api/badge` | `image/svg+xml` | `max-age=3600` | Dynamic SVG status badge embeddable in GitHub profiles |
| `/api/og` | `image/svg+xml` | `max-age=86400` | Parameterized Open Graph SVG card generator (`?title=...&sub=...`) |
| `/api/stats` | `application/json` | `s-maxage=3600` | Edge-cached GitHub profile telemetry with static rate-limit fallback |

---

## Interactive Client-Side SOC & Analyst Features

* **Analyst Utility Palette (`Ctrl+K` / `Cmd+K`):** 100% client-side, zero-network-egress workbench featuring:
  * **SHA-256 Hasher:** Web Crypto API (`crypto.subtle.digest`) artifact hashing.
  * **JWT Inspector:** Base64URL header and payload claim decoder.
  * **IOC Defang / Refang:** Automatic conversion between live and defanged URLs, domains, and IPv4 indicators.
  * **Base64 / PowerShell Decoder:** Smart UTF-8 and UTF-16LE (`-EncodedCommand`) payload decoding.
* **Interactive SOC Shell & Mini-CTF (`` ` `` or Navbar Status Dot):** Simulated Linux/DFIR terminal (`help`, `ls -la`, `cat`, `base64 -d`, `nmap`, `pgp`, `submit`) featuring a 3-step log triage challenge.
* **3-Stage SOC Alert Triage Simulator:** Walkthrough covering Sysmon Event ID 10 LSASS credential access (`T1003.001`), Velociraptor VQL live forensic collection, and containment sequencing.
* **MITRE ATT&CK Filter & Copyable Artifacts:** Filterable security lab architecture cards with one-click copyable Wazuh XML rules, Velociraptor VQL queries, and GitHub Actions Trivy/Cosign gates.
* **Architecture Telemetry Lightbox:** Click-to-expand fullscreen SVG viewer for high-density architecture diagrams on mobile and desktop viewports.
* **Offline-First PWA (`sw.js` + `manifest.webmanifest`):** Network-first navigation with stale-while-revalidate asset caching and a custom `404.html` fallback.

---

## Keyboard Shortcuts

| Key | Action |
| :--- | :--- |
| `1` – `5` | Jump to Labs, Experience, Capabilities, Education, or Contact |
| `L` | Toggle English (`EN`) / French (`FR`) interface |
| `Ctrl+K` / `Cmd+K` | Open Client-Side Analyst Utility Palette |
| `` ` `` | Open Interactive SOC Lab Shell |
| `Esc` | Close active modal, lightbox, or shell |

---

## Repository Structure

```text
.
├── .github/workflows/
│   └── ci-security.yml        # Gitleaks secret scan & config integrity gate
├── .well-known/
│   └── security.txt           # RFC 9116 security contact & PGP reference
├── api/
│   ├── badge.js               # Dynamic SVG status badge
│   ├── health.js              # JSON health & availability endpoint
│   ├── og.js                  # Dynamic Open Graph SVG card endpoint
│   ├── pgp.js                 # ASCII-armored PGP public key endpoint
│   └── stats.js               # Edge-cached GitHub telemetry endpoint
├── 404.html                   # Custom unmapped route handler
├── favicon.svg                # Vector site icon
├── index.html                 # Main portfolio markup & JSON-LD schema
├── manifest.webmanifest       # PWA manifest
├── og-preview.png             # Static 1200x630 social preview card
├── robots.txt                 # Crawler directives & sitemap pointer
├── script.js                  # Animations, i18n, SOC tools, triage sim & shell
├── sitemap.xml                # XML sitemap for Google Search Console
├── style.css                  # Responsive dark-mode styles (#141414 / #E30613)
├── sw.js                      # Offline-first Service Worker
└── vercel.json                # Edge headers, CSP hashes & clean URL config
```

---

## Contact

* **Portfolio:** [achraf-1337.vercel.app](https://achraf-1337.vercel.app/)
* **PGP Public Key:** [achraf-1337.vercel.app/api/pgp](https://achraf-1337.vercel.app/api/pgp) (`DA9AA69CF510C107`)
* **LinkedIn:** [linkedin.com/in/achrafnasser-eddine1337](https://linkedin.com/in/achrafnasser-eddine1337)
* **Email:** `achrafnassereddine6@gmail.com`