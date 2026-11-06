---
hide:
  - navigation
  - toc
---

<div class="hero" markdown>

![Zaviya, for ARM handhelds](assets/logo.svg){ .hero__logo }

# Zaviya { .sr-only }

Based on the SteamOS ARM image from Steam Frame, not another skin. Game Mode,
the Steam client and a KDE desktop run natively on supported ARM handhelds and
tablets, with emulation, PC games and Android apps in the same system.

[Install Zaviya](getting-started/install.md){ .md-button .md-button--primary }
[Devices](devices/index.md){ .md-button }
[Downloads](downloads.md){ .md-button }
[:fontawesome-brands-discord: Discord](https://discord.gg/EP53nZYvg){ .md-button }

Formerly known as Unofficial SteamOS ARM Port. An independent community project.
{ .hero__note }

</div>

!!! warning soft "Before you install"

    Installation replaces the device's bootloader. Back up data first.


## Features

<ul class="features" role="list" markdown="1">
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-layers-triple-outline:</div>
    <div>
      <strong>Tuned base system</strong>
      <p>Services that fail on a handheld are turned off, the interface runs on the fast cores, the GPU clocks up under load and standby no longer drains the battery.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-chart-timeline-variant-shimmer:</div>
    <div>
      <strong>Frame generation</strong>
      <p>Lossless Scaling frame generation through Decky, in performance mode on Adreno GPUs. lsfg-vk 2.0 includes an ARM64 build for native ARM games.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-package-variant-closed:</div>
    <div>
      <strong>Zaviya Loadout</strong>
      <p>The built-in app store. It counts the games in the library per system, names the emulator for each system nothing plays yet, and installs a starter set chosen for the device's chip.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-monitor-multiple:</div>
    <div>
      <strong>Dual screen</strong>
      <p>On the AYN Thor and AYANEO Pocket DS the bottom screen carries a launcher, game tools, a dashboard with themes, and a trackpad with swipe typing.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-update:</div>
    <div>
      <strong>Updates and rollback</strong>
      <p>Updates arrive through Settings > System without reflashing. They are signed and verified, and an interrupted update rolls back on the next boot.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-harddisk:</div>
    <div>
      <strong>Dual boot with Android</strong>
      <p>Zaviya runs from a microSD card, or installs to internal storage next to Android. The OpenABL menu chooses between them at power-on.</p>
    </div>
  </li>
</ul>

## Included

<ul class="features" role="list" markdown="1">
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-steam:</div>
    <div>
      <strong>Game Mode and desktop</strong>
      <p>Game Mode, the Steam client and a KDE desktop, all running natively on ARM.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-gamepad-variant-outline:</div>
    <div>
      <strong>Controller</strong>
      <p>The handheld's controller appears to Steam as a Steam Deck pad. Decky and the performance overlay are included.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-plus-box-multiple-outline:</div>
    <div>
      <strong>Add games from files</strong>
      <p>Windows games, console game files, Linux apps and Android apps are added to the Steam library with artwork.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-store-outline:</div>
    <div>
      <strong>Epic, GOG and Amazon</strong>
      <p>Heroic, built for ARM64, installs the store libraries. The games launch from Steam with Proton.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-android:</div>
    <div>
      <strong>Android apps</strong>
      <p>The Play Store is available and each app gets its own title in the library. Zaviya Control includes a Restart into Android button.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-cast-connected:</div>
    <div>
      <strong>Remote Play and docking</strong>
      <p>Steam Remote Play with hardware decoding and optional PyroWave. Game Mode also runs on an external monitor or dock, with sound.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-sleep:</div>
    <div>
      <strong>Sleep and power</strong>
      <p>Sleep works on every supported chip, fan curves are quiet, and the device powers off cleanly before the battery runs flat.</p>
    </div>
  </li>
</ul>

## Install in three steps

1. Flash the image for the device's chip to a microSD card (32 GB or larger).
2. Flash OpenABL, the boot menu. Back up the stock ABL first.
3. Hold Volume Down at power-on, choose the device, set the boot mode to Linux and select START. The first boot takes a few minutes.

The [install guide](getting-started/install.md) covers every step, and each chip
has its own image on [Downloads](downloads.md). Tablets do not use OpenABL, see
the [Lenovo page](devices/lenovo.md).

## Supported hardware

<div class="grid cards chips" markdown>

-   :material-check-circle:{ .ok } **Snapdragon 8 Elite** · Stable

    AYN Odin 3, KONKR Pocket FIT Elite

-   :material-check-circle:{ .ok } **Snapdragon 8 Gen 3** · Stable

    KONKR Pocket FIT, AYANEO Pocket S2 / S2 Pro

-   :material-check-circle:{ .ok } **Snapdragon 8 Gen 2** · Stable

    AYN Odin 2 / Mini / Portal / Thor, AYANEO Pocket ACE / DMG / DS / EVO /
    S 1K / S 2K, Retroid Pocket 6 / Nova

-   :material-flask-outline:{ .warn } **Snapdragon 865** · Beta

    Retroid Pocket 5 / Flip 2 / Mini / Mini V2, AYN Thor Lite, MANGMI Air Y Pro /
    Pocket Max, AYANEO Pocket MICRO 2

-   :material-flask-outline:{ .warn } **Lenovo Legion Y700** · Testing

    Gen 3 and Gen 4 are in testing. Gen 5 (TB323FU, Snapdragon 8 Elite Gen 5)
    runs from a microSD card and is switched on from Android.
    [Lenovo page](devices/lenovo.md)

</div>

[Supported devices](devices/index.md) lists every device by maker, with its
chip, test status and notes. Most testing is done by the community.

## Explore

<div class="grid cards" markdown>

-   :material-download-box-outline:{ .gold } **[Install](getting-started/index.md)**

    Requirements, flashing the image and OpenABL, and installing to internal storage.

-   :material-gamepad-variant-outline:{ .gold } **[Using Zaviya](using/index.md)**

    Loadout, emulation, PC games, Android apps, frame generation and updates.

-   :material-lifebuoy:{ .gold } **[Troubleshooting](help/troubleshooting.md)**

    Debug logs, common problems, known issues and the FAQ.

-   :material-forum-outline:{ .gold } **[Community](project/community.md)**

    Discord, issue reports, device testing, support and credits.

</div>
