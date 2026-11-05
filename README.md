# HotA Mapmaker’s Patch

*An unofficial map editor patch by alderski.*

Tools for the Heroes III: Horn of the Abyss map editor. This repository contains
downloads, user documentation and the project website; implementation source is
maintained separately.

## Download

**[Download 1.0.0-beta.5](https://github.com/alderski-h3/hota-mapmakers-patch/releases/download/v1.0.0-beta.5/hota-mapmakers-patch-1.0.0-beta.5.zip)** — patch DLL, optional launcher and notices.

[Release notes and individual files](https://github.com/alderski-h3/hota-mapmakers-patch/releases/tag/v1.0.0-beta.5).
GitHub’s automatic source archives contain this site’s documentation, not the
patch implementation.

## Features

- Pathfinding: travel cost, arrival days, movement profiles, alternatives and waypoints.
- Battlefield Explorer: previews, metric filters, searches, heatmaps and favourites.
- Visibility: player coverage, ghost heroes, patrol, darkness and Dimension Door previews.
- Advanced Find: artifacts, spells, secondary skills, heroes, creatures, quests and resources in supported objects and events.
- Randomness inspector: artifact/spell pool bounds and exclusions, without random simulations.
- In-place object ordering, portrait chooser and map area copy/cut/paste.

Non-standard editor features are behind an off-by-default checkbox.
Advanced Find inspects supported extended-event rewards without evaluating
their conditions. Advanced quest conditions and extended events in the
Randomness inspector are not searched.

## Installation

1. Back up your maps and close the editor.
2. Put `hota_mapmakers_patch.dll` and the optional `hota_mapmakers_patch_launcher.exe` beside `h3hota_maped.exe`.
3. Open the launcher and choose **Launch patched editor**, or start the editor with `/p:hota_mapmakers_patch.dll`.

The launcher checks for signed updates on opening. Choose **Install update**;
if the editor is open, close it normally and click **Retry**. Updates include
both the patch and launcher. **Restore previous patch DLL** restores the last
verified DLL without downgrading the launcher. Game and HotA updates are not
included. No GitHub account or token is needed.

The patched editor also checks for updates in the background. Updates require
your approval and never force the editor to close.

The launcher’s Language dropdown shares the Auto/English/Russian setting with
Patch Options. English and draft Russian patch translations are included in one
DLL. This setting does not change native HotA text.

Only verified binary profiles are supported. Unknown installations disable
affected features; **Help → Patch Diagnostics** explains the refusal.

## Feedback

Discord: **alderski**. Include the patch version, relevant Patch Diagnostics rows,
map name, coordinates and steps to reproduce. Do not post private maps publicly
without the author’s permission.

[Changelog](CHANGELOG.md) · [Website](https://alderski-h3.github.io/hota-mapmakers-patch/)

Includes small toolbar icons from Sergey “GrayFace” Rozhenko’s
[Map Editor Patch](https://grayface.github.io/wog/). See the bundled third-party notices.
