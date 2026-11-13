---
title: Releases
description: Download Zaviya for a supported handheld, and the history of every release.
hide:
  - toc
---

# Releases

<div id="rel-app" class="rel-app"></div>

<div class="rel-static" markdown>

Zaviya 1.5 is a fresh install, one `.img.zst` file per chip. Check the file
against [`SHA256SUMS`](https://downloads.zaviyaos.workers.dev/1.5/SHA256SUMS),
then follow the [install guide](getting-started/install.md).

| Chip | Devices | Image |
|---|---|---|
| Snapdragon 8 Elite | AYN Odin 3, KONKR Pocket FIT Elite | [`zaviya-sm8750-1.5.0.img.zst`](https://downloads.zaviyaos.workers.dev/1.5/zaviya-sm8750-1.5.0.img.zst) |
| Snapdragon 8 Gen 3 | KONKR Pocket FIT, AYANEO Pocket S2 / S2 Pro | [`zaviya-sm8650-1.5.0.img.zst`](https://downloads.zaviyaos.workers.dev/1.5/zaviya-sm8650-1.5.0.img.zst) |
| Snapdragon 8 Gen 2 | AYN Odin 2 / Mini / Portal / Thor, AYANEO Pocket ACE / DMG / DS / EVO / S 1K / S 2K, Retroid Pocket 6 / Nova | [`zaviya-sm8550-1.5.0.img.zst`](https://downloads.zaviyaos.workers.dev/1.5/zaviya-sm8550-1.5.0.img.zst) |
| Snapdragon 865 | Retroid Pocket 5 / Flip 2 / Mini / Mini V2, AYN Thor Lite, MANGMI Air Y Pro / Pocket Max, AYANEO Pocket MICRO 2 | [`zaviya-sm8250-1.5.0.img.zst`](https://downloads.zaviyaos.workers.dev/1.5/zaviya-sm8250-1.5.0.img.zst) |

</div>

## All releases

Betas are announced in the [Discord](https://discord.gg/e2Cn85uQh9) and are not listed here.

<div id="rel-archive"></div>

<noscript markdown>

Full notes for every release are on
[GitHub](https://github.com/hashtagbasit/Zaviya/releases).

</noscript>

## Lenovo tablets

The Legion Y700 Gen 3, Gen 4 and Gen 5 builds are in testing and are not
listed here. They are published in the [Discord](https://discord.gg/e2Cn85uQh9)
first. Read the [Lenovo page](devices/lenovo.md), then ask there.

## Update files

Version 1.5 has no update files, because it is a fresh install. Releases
1.3 and 1.4 include `steamos-arm-<chip>-<version>.sau` files for
updating offline, see [Updates](using/updates.md#without-internet).

## Zaviya Installer for Android

An Android app that installs Zaviya from the handheld without a PC: it
downloads the image, writes it to the microSD card, backs up the stock ABL and
flashes OpenABL. It is in beta.
[Download zaviya-installer-0.1.0-beta.apk](https://github.com/hashtagbasit/Zaviya/releases/download/v1.5/zaviya-installer-0.1.0-beta.apk)
and [report problems](https://github.com/hashtagbasit/Zaviya/issues) with the
device model.

## Apps

ARM64 builds of apps that don't publish one, such as Heroic Games Launcher,
are in [arm64-linux-apps](https://github.com/hashtagbasit/arm64-linux-apps/releases).
Zaviya Loadout installs them automatically.

<script src="../assets/releases-data.js"></script>
<script src="../assets/releases.js"></script>
