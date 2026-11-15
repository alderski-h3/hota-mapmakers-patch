"""Check local navigation, artwork and the existing release-script contract."""
import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1] / 'docs'


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.refs = []
        self.ids = set()
        self.feed(path.read_text())

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if 'id' in attrs:
            assert attrs['id'] not in self.ids, attrs['id']
            self.ids.add(attrs['id'])
        for key in ('href', 'src'):
            if key in attrs:
                self.refs.append(attrs[key])


pages = {path.name: Page(path) for path in ROOT.glob('*.html')}
for name, page in pages.items():
    for ref in page.refs:
        url = urlsplit(ref)
        if url.scheme or url.netloc:
            continue
        path = unquote(url.path) or name
        assert (ROOT / path).is_file(), (name, ref)
        if url.fragment:
            assert url.fragment in pages[path].ids, (name, ref)
assert {'download-actions', 'release-status'} <= pages['index.html'].ids
assert 'installation-download' in pages['documentation.html'].ids
assert 'release.js' in pages['documentation.html'].refs
assert not any('/issues' in ref for page in pages.values() for ref in page.refs)
release = json.loads((ROOT / 'release.json').read_text())
if release['status'] == 'published':
    version = release['version']
    prefix = 'https://github.com/alderski-h3/mapmakers-patch/releases/download/'
    assets = release['downloads']
    assert assets.keys() == {'bundle'}
    link = assets['bundle']
    assert link.startswith(f'{prefix}v{version}/') and link.endswith('.zip'), link
    for name in ('index.html', 'documentation.html'):
        assert [ref for ref in pages[name].refs if ref.startswith(prefix)] == [link], name
print('PASS: local links, anchors, assets and release-script targets')
