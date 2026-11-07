---
hide:
  - navigation
---

# Downloads

Zaviya ships one image per chip. Every release on
[GitHub Releases](https://github.com/hashtagbasit/Zaviya/releases)
includes a SHA-256 checksum.

## Download and install

1. Find the device in the table below and note its image.
2. Download every `.7z` part of that image from the latest release, into one folder.
3. Check each part against the `SHA256SUMS` file on the release page.
4. Extract the `.001` part. This produces the `.img` file to flash.
5. Follow the [install guide](getting-started/install.md).

[Latest release](https://github.com/hashtagbasit/Zaviya/releases/latest){ .md-button .md-button--primary }
[Install guide](getting-started/install.md){ .md-button }

## Which image

| Device | Image |
|---|---|
| AYN Odin 3, KONKR Pocket FIT Elite | `zaviya-sm8750-<version>.7z.001` and later parts |
| KONKR Pocket FIT, AYANEO Pocket S2 / S2 Pro | `zaviya-sm8650-<version>.7z.001` and later parts |
| AYN Odin 2 / Mini / Portal / Thor, AYANEO Pocket ACE / DMG / DS / EVO / S 1K / S 2K, Retroid Pocket 6 / Nova | `zaviya-sm8550-<version>.7z.001` and later parts |
| Retroid Pocket 5 / Flip 2 / Mini / Mini V2, AYN Thor Lite, MANGMI Air Y Pro / Pocket Max, AYANEO Pocket MICRO 2 (Beta) | `zaviya-sm8250-<version>.7z.001` and later parts |

Each image includes the OpenABL copy for its chip. The `.img.zst` parts on each
release are for the Android installer and aren't needed on a computer.

## Lenovo tablets

The Legion Y700 Gen 3, Gen 4 and Gen 5 builds are in testing and are not on the
releases page. They are published in the [Discord](https://discord.gg/EP53nZYvg)
first. Read the [Lenovo page](devices/lenovo.md), then ask there.

## Update files

Devices on 1.3 or newer update through Steam and do not need these files.
The `steamos-arm-<chip>-<version>.sau` files on each release are for
updating offline. See [Updates](using/updates.md#without-internet).

## Apps

ARM64 builds of apps that don't publish one, such as Heroic Games Launcher,
are in [arm64-linux-apps](https://github.com/hashtagbasit/arm64-linux-apps/releases).
Zaviya Loadout installs them automatically.
