# Mapmaker’s Patch for HotA

*An unofficial map editor patch for HotA 1.8.1, by alderski.*

Tools for the Heroes III: Horn of the Abyss map editor. This repository contains
downloads, user documentation and the project website; implementation source is
maintained separately.

## Download

**1.0.0 for HotA 1.8.1** ·
[Download ZIP](https://github.com/alderski-h3/mapmakers-patch/releases/download/v1.0.0/Mapmakers-Patch-1.0.0.zip) ·
[SHA-256 checksums](https://github.com/alderski-h3/mapmakers-patch/releases/download/v1.0.0/SHA256SUMS.txt) ·
[Release notes](https://github.com/alderski-h3/mapmakers-patch/releases/tag/v1.0.0)

GitHub’s automatic source archives contain this site’s documentation, not the
patch implementation.

## Features

- Pathfinding: travel cost, arrival days, movement profiles, alternatives and waypoints.
- Battlefield Explorer: previews, metric filters, searches, heatmaps and favourites.
- Visibility: player coverage, ghost heroes, patrol, darkness and Dimension Door previews.
- Advanced Find: artifacts, spells, secondary skills, heroes, creatures, quests, resources and bonuses in supported objects and events.
- Randomness inspector: artifact/spell pool bounds and exclusions, without random simulations.
- Multi-brush: mirror and rotate brush strokes around a pivot. Custom rotation allows up to 36 placements including the original. Adjust copy scale, spread and offset, and undo the whole stroke in one step.
- In-place object ordering, portrait chooser and map area copy/cut/paste.

Non-standard editor features are behind an off-by-default checkbox.
Advanced Find inspects supported extended-event rewards without evaluating
their conditions. Advanced quest conditions and extended events in the
Randomness inspector are not searched.

## Installation

1. Back up your maps and close the editor.
2. Extract the ZIP and put `mapmakers_patch.dll`, `mapmakers_patch_launcher.exe`
   and `mapmakers_editor.exe` beside `h3hota_maped.exe`. The launchers need
   write access to that folder.
3. Run `mapmakers_patch_launcher.exe` and choose **Launch patched editor**.

For direct launch, double-click `mapmakers_editor.exe`. To use only the DLL,
append `/p:mapmakers_patch.dll` to a shortcut for `h3hota_maped.exe`. Use the
patch launcher to manage updates.

A confirmed patched editor already running from the same installation is
focused. If the launcher cannot tell which editor is running, close it normally
before trying again.

The launcher checks for signed updates on opening. Choose **Install update**;
if the editor is open, close it normally and click **Retry**. Updates include
the patch DLL, update launcher and one-click editor launcher, including older or
missing one-click copies. **Recovery → Restore previous version** restores their
verified pre-update state together. Game and HotA updates are not included.
No GitHub account or token is needed.

Update files and backups are kept in the adjacent `_Mapmakers_Patch_Data` folder.
If the launcher cannot start after an update, close the editor normally and run
`_Mapmakers_Patch_Data\recovery.exe`, or `mapmakers_editor.exe --recover`
from the patch ZIP. Do not delete recovery files during an interrupted update.

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

[Changelog](CHANGELOG.md) · [Website](https://alderski-h3.github.io/mapmakers-patch/)

The toolbar and launcher artwork is supplied by the project. Game artwork is
read from your existing Heroes III and HotA installation, not bundled with the patch.
