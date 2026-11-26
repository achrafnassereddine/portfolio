export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');

  try {
    const response = await fetch('https://api.github.com/users/achrafnassereddine', {
      headers: {
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'achraf-1337-portfolio'
      }
    });

    if (!response.ok) throw new Error('GitHub API status ' + response.status);
    const data = await response.json();

    return res.status(200).json({
      handle: data.login || 'achrafnassereddine',
      public_repos: data.public_repos ?? 12,
      followers: data.followers ?? 0,
      updated_at: data.updated_at || new Date().toISOString(),
      source: 'live'
    });
  } catch {
    return res.status(200).json({
      handle: 'achrafnassereddine',
      public_repos: 12,
      followers: 0,
      updated_at: new Date().toISOString(),
      source: 'cached-fallback'
    });
  }
}