'use strict';
fetch('release.json', {cache: 'no-cache'}).then(response => {
  if (!response.ok) throw new Error('Release metadata unavailable');
  return response.json();
}).then(release => {
  if (release.status !== 'published') return;
  const allowed = 'https://github.com/alderski-h3/mapmakers-patch/releases/download/';
  const url = release.downloads?.bundle;
  if (typeof url !== 'string' || !url.startsWith(allowed)) return;
  const download = () => {
    const link = document.createElement('a');
    link.href = url;
    link.textContent = 'Download';
    return link;
  };
  const installation = document.getElementById('installation-download');
  if (installation) installation.replaceChildren(download(), '.');
  const actions = document.getElementById('download-actions');
  if (actions) {
    const link = download();
    link.className = 'button primary';
    actions.replaceChildren(link);
    document.getElementById('release-status').textContent = release.version + ' · ' + release.date;
  }
}).catch(() => {});
