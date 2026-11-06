---
hide:
  - navigation
  - toc
---

<div class="hero" markdown>

![Zaviya, for ARM handhelds](assets/logo.svg){ .hero__logo }

# Zaviya { .sr-only }

SteamOS for ARM handhelds, built on the ARM image made for Steam Frame. Not
another skin. I removed what a handheld doesn't need and fixed the rest.

[Install Zaviya](getting-started/install.md){ .md-button .md-button--primary }
[Devices](devices/index.md){ .md-button }
[Downloads](downloads.md){ .md-button }
[:fontawesome-brands-discord: Discord](https://discord.gg/EP53nZYvg){ .md-button }

Formerly known as Unofficial SteamOS ARM Port. An independent community project.
{ .hero__note }

</div>

!!! warning "Before you install"

    Installing Zaviya replaces your device's bootloader. Back up your data and
    read the install guide before you start.

## What is in it

<ul class="features" role="list" markdown="1">
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-layers-triple-outline:</div>
    <div>
      <strong>Base system</strong>
      <p>The SteamOS ARM image from Steam Frame. Its services crashed on a handheld and the GPU wouldn't clock up, so I turned off what isn't needed and fixed the rest.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-chart-timeline-variant-shimmer:</div>
    <div>
      <strong>Frame generation</strong>
      <p>Lossless Scaling frame generation, in performance mode on Adreno GPUs. lsfg-vk 2.0 also has an ARM64 build for native ARM games.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-package-variant-closed:</div>
    <div>
      <strong>Zaviya Loadout</strong>
      <p>The app store. It counts your games per system, shows which emulator to get for the ones nothing plays yet, and installs the starter set for your chip.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-monitor-multiple:</div>
    <div>
      <strong>Bottom screen</strong>
      <p>On the AYN Thor and AYANEO Pocket DS the bottom screen shows a launcher, game tools, a dashboard with themes, and a trackpad with swipe typing.</p>
    </div>
  </li>
</ul>

## Also included

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
      <p>The handheld's controller shows up as a Steam Deck pad. Decky and the performance overlay come with it.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-update:</div>
    <div>
      <strong>Updates</strong>
      <p>Updates come from Settings > System, no reflashing. A failed update rolls back.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-plus-box-multiple-outline:</div>
    <div>
      <strong>Add games from files</strong>
      <p>Windows games, console game files, Linux apps and Android apps go into your Steam library with artwork.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-store-outline:</div>
    <div>
      <strong>Epic, GOG and Amazon</strong>
      <p>Heroic, as an ARM64 build, installs the libraries. The games launch from Steam with Proton.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-android:</div>
    <div>
      <strong>Android apps</strong>
      <p>The Play Store works. Each app gets its own title in the library. Zaviya Control has a Restart into Android button.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-cast-connected:</div>
    <div>
      <strong>Remote Play and docking</strong>
      <p>Steam Remote Play with hardware decoding, and optional PyroWave. Game Mode also runs on an external monitor or dock, sound included.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-sleep:</div>
    <div>
      <strong>Sleep and power</strong>
      <p>Sleep works on every supported chip, the fan curves are quiet, and the device powers off cleanly before the battery runs flat.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-harddisk:</div>
    <div>
      <strong>Storage</strong>
      <p>Run it from a microSD card, or install it to internal storage next to Android.</p>
    </div>
  </li>
</ul>

## How to get it

1. Flash the image for your chip to a microSD card (32 GB or bigger).
2. Flash OpenABL, the boot menu. Back up your stock ABL first.
3. Hold Volume Down at power-on, pick your device, set the boot mode to Linux and start it. First boot takes a couple of minutes.

The [install guide](getting-started/install.md) has every step. There's one
image per chip, listed on [Downloads](downloads.md). Tablets are different, they
don't use OpenABL, see the [Lenovo page](devices/lenovo.md).

## Supported devices

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

The [Supported Devices](devices/index.md) page lists every device by maker.
I only own a Pocket FIT, the rest is tested by the community.

## Community

Questions or install help go to the [Discord](https://discord.gg/EP53nZYvg).
Bugs go to [GitHub issues](https://github.com/hashtagbasit/SteamOS-ARM-Port/issues).
