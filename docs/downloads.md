---
hide:
  - navigation
---

# Downloads

Zaviya has one image per chip. Every release is on
[GitHub Releases](https://github.com/hashtagbasit/SteamOS-ARM-Port/releases)
together with its SHA-256 checksum.

## Which Image Do I Need?

| Your device | Image |
|---|---|
| AYN Odin 3, KONKR Pocket FIT Elite | `zaviya-sm8750-<version>.img` |
| KONKR Pocket FIT, AYANEO Pocket S2 / S2 Pro | `zaviya-sm8650-<version>.img` |
| AYN Odin 2 / Mini / Portal / Thor, AYANEO Pocket ACE / DMG / DS / EVO / S 1K / S 2K, Retroid Pocket 6 / Nova | `zaviya-sm8550-<version>.img` |

[Latest release](https://github.com/hashtagbasit/SteamOS-ARM-Port/releases/latest){ .md-button .md-button--primary }

## Lenovo Tablets

The Lenovo Legion Y700 Gen 3 and Gen 4 builds are still being tested, so
they aren't on the releases page yet. Ask on [Discord](https://discord.gg/EP53nZYvg)
if you want to try one, and read the [Lenovo page](devices/lenovo.md) first.

## Update Files

Devices already on 1.3 or newer update through Steam and don't need these.
The `steamos-arm-<chip>-<version>.sau` files on each release are for
updating without internet, see [Updates](using/updates.md#without-internet).

## Apps

ARM64 builds of apps that don't publish one, such as Heroic Games Launcher,
are in [arm64-linux-apps](https://github.com/hashtagbasit/arm64-linux-apps/releases).
Zaviya Loadout installs them for you.
