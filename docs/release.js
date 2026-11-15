'use strict';
fetch('release.json', {cache: 'no-cache'}).then(response => {
  if (!response.ok) throw new Error('Release metadata unavailable');
  return response.json();
}).then(release => {
  if (release.status !== 'published') return;
  const allowed = 'https://github.com/alderski-h3/mapmakers-patch/releases/download/';
  const choices = [['bundle', 'Download ZIP'], ['dll', 'DLL only'], ['launcher', 'Launcher only'], ['checksums', 'SHA-256 checksums']];
  const installation = document.getElementById('installation-download');
  const checksums = document.getElementById('installation-checksums');
  const links = [];
  for (const [key, label] of choices) {
    const url = release.downloads && release.downloads[key];
    if (typeof url !== 'string' || !url.startsWith(allowed)) continue;
    const link = document.createElement('a');
    link.className = 'button' + (key === 'bundle' ? ' primary' : '');
    link.href = url;
    link.textContent = label + ' ↓';
    if (key === 'bundle' && installation) {
      const download = document.createElement('a');
      download.href = url;
      download.textContent = 'Download the patch ZIP';
      installation.replaceChildren(download, '.');
    }
    if (key === 'checksums' && checksums) checksums.href = url;
    links.push(link);
  }
  const actions = document.getElementById('download-actions');
  if (!links.length || !actions) return;
  actions.replaceChildren(...links);
  document.getElementById('release-status').textContent = release.version + ' · ' + release.date;
}).catch(() => {});
