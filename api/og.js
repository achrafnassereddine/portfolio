export default function handler(req, res) {
  const rawTitle = (req.query?.title || 'Achraf Nasser-Eddine').toString().slice(0, 48);
  const rawSub = (req.query?.sub || 'Cybersecurity Engineer — SOC, DFIR & DevSecOps').toString().slice(0, 68);

  const esc = (s) => s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  const title = esc(rawTitle);
  const sub = esc(rawSub);

  res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="#141414"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect x="36" y="36" width="1128" height="558" fill="none" stroke="#262626" stroke-width="2"/>
  <circle cx="90" cy="98" r="6" fill="#e30613"/>
  <text x="110" y="104" fill="#8a8a8a" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="16" letter-spacing="1.5">CASABLANCA, MA // ACHRAF-1337.VERCEL.APP</text>
  <text x="84" y="235" fill="#eaeaea" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="56" font-weight="700">${title}</text>
  <text x="84" y="305" fill="#8a8a8a" font-family="system-ui, -apple-system, Segoe UI, sans-serif" font-size="30">${sub}</text>
  <line x1="84" y1="385" x2="1116" y2="385" stroke="#262626" stroke-width="1.5"/>
  <rect x="84" y="425" width="275" height="44" fill="#1b1b1b" stroke="#262626"/>
  <text x="104" y="453" fill="#eaeaea" font-family="ui-monospace, Menlo, monospace" font-size="16">Wazuh SIEM &amp; Velociraptor</text>
  <rect x="377" y="425" width="205" height="44" fill="#1b1b1b" stroke="#262626"/>
  <text x="397" y="453" fill="#eaeaea" font-family="ui-monospace, Menlo, monospace" font-size="16">DevSecOps CI/CD</text>
  <rect x="600" y="425" width="245" height="44" fill="#1b1b1b" stroke="#262626"/>
  <text x="620" y="453" fill="#eaeaea" font-family="ui-monospace, Menlo, monospace" font-size="16">ISO 27001 &amp; EBIOS RM</text>
  <text x="84" y="542" fill="#8a8a8a" font-family="ui-monospace, Menlo, monospace" font-size="16">achraf-1337.vercel.app</text>
</svg>`;

  res.status(200).send(svg);
}