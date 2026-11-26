export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    status: 'operational',
    engineer: 'Achraf Nasser-Eddine',
    location: 'Casablanca, Morocco',
    focus: ['SOC', 'Threat Hunting', 'DFIR', 'DevSecOps', 'GRC'],
    availability: 'Summer 2027 Internship (4-6 months)',
    timestamp: new Date().toISOString()
  });
}