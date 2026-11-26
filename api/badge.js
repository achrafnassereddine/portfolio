export default function handler(req, res) {
  res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="310" height="28" viewBox="0 0 310 28" role="img" aria-label="Status: Open for Summer 2027 SOC/DFIR">
  <rect width="310" height="28" rx="6" fill="#141414" stroke="#262626"/>
  <circle cx="14" cy="14" r="4" fill="#e30613"/>
  <text x="26" y="18" fill="#eaeaea" font-family="ui-monospace, SFMono-Regular, Menlo, monospace" font-size="11.5">SOC / DFIR // SUMMER 2027 READY</text>
</svg>`;

  res.status(200).send(svg);
}