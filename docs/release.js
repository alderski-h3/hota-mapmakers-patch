'use strict';
fetch('release.json', {cache: 'no-cache'}).then(response => {
  if (!response.ok) throw new Error('Release metadata unavailable');
  return response.json();
}).then(release => {
  if (release.status !== 'published') return;
  const allowed = 'https://github.com/alderski-h3/hota-mapmakers-patch/releases/download/';
  const choices = [['bundle', 'Download ZIP'], ['dll', 'DLL only'], ['launcher', 'Launcher only']];
  const links = [];
  for (const [key, label] of choices) {
    const url = release.downloads && release.downloads[key];
    if (typeof url !== 'string' || !url.startsWith(allowed)) continue;
    const link = document.createElement('a');
    link.className = 'button' + (key === 'bundle' ? ' primary' : '');
    link.href = url;
    link.textContent = label + ' ↓';
    links.push(link);
  }
  if (!links.length) return;
  document.getElementById('download-actions').replaceChildren(...links);
  document.getElementById('release-status').textContent = release.version + ' · ' + release.date;
  document.getElementById('download-note').textContent = 'For verified HotA 1.8.1 installations. Back up your maps before using a prerelease build.';
}).catch(() => {});
