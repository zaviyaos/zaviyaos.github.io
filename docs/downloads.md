---
hide:
  - navigation
---

# Downloads

One image per chip. Releases are on
[GitHub Releases](https://github.com/hashtagbasit/SteamOS-ARM-Port/releases),
each with a SHA-256 checksum.

## Which image do I need?

| Your device | Image |
|---|---|
| AYN Odin 3, KONKR Pocket FIT Elite | `zaviya-sm8750-<version>.img` |
| KONKR Pocket FIT, AYANEO Pocket S2 / S2 Pro | `zaviya-sm8650-<version>.img` |
| AYN Odin 2 / Mini / Portal / Thor, AYANEO Pocket ACE / DMG / DS / EVO / S 1K / S 2K, Retroid Pocket 6 / Nova | `zaviya-sm8550-<version>.img` |
| Retroid Pocket 5 / Flip 2 / Mini / Mini V2, AYN Thor Lite, MANGMI Air Y Pro / Pocket Max, AYANEO Pocket MICRO 2 (Beta) | `zaviya-sm8250-<version>.img` |

[Latest release](https://github.com/hashtagbasit/SteamOS-ARM-Port/releases/latest){ .md-button .md-button--primary }

## Lenovo tablets

The Legion Y700 Gen 3, Gen 4 and Gen 5 builds are still in testing and aren't
on the releases page. They go out in the [Discord](https://discord.gg/EP53nZYvg)
first. Read the [Lenovo page](devices/lenovo.md), then ask there.

## Update files

Devices on 1.3 or newer update through Steam and don't need these.
The `steamos-arm-<chip>-<version>.sau` files on each release are for
updating offline. See [Updates](using/updates.md#without-internet).

## Apps

ARM64 builds of apps that don't publish one, such as Heroic Games Launcher,
are in [arm64-linux-apps](https://github.com/hashtagbasit/arm64-linux-apps/releases).
Zaviya Loadout installs them for you.
