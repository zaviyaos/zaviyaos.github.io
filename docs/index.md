---
hide:
  - navigation
  - toc
---

<div class="hero" markdown>

![Zaviya, for ARM handhelds](assets/logo.svg){ .hero__logo }

# Zaviya { .sr-only }

Based on the SteamOS ARM image from Steam Frame, not another skin. We reworked
it for gaming handhelds and gave it its own kernel, power tuning and app store.

[Install Zaviya](getting-started/install.md){ .md-button .md-button--primary }
[Devices](devices/index.md){ .md-button }
[Downloads](downloads.md){ .md-button }
[:fontawesome-brands-discord: Discord](https://discord.gg/EP53nZYvg){ .md-button }

An independent community project. Formerly SteamOS ARM Port.
{ .hero__note }

</div>

!!! warning "Before you install"

    Installing Zaviya replaces your device's bootloader. Back up your data and
    read the install guide before you start.

## What makes Zaviya different

<ul class="features" role="list" markdown="1">
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-layers-triple-outline:</div>
    <div>
      <strong>The SteamOS ARM image underneath</strong>
      <p>Zaviya starts from the SteamOS ARM image made for Steam Frame. We removed what a handheld doesn't need and fixed the rest. It's not another skin on a different Linux.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-chart-timeline-variant-shimmer:</div>
    <div>
      <strong>Frame generation</strong>
      <p>Lossless Scaling frame generation tuned for Adreno GPUs. There's also an ARM64 build of lsfg-vk for native ARM games.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-package-variant-closed:</div>
    <div>
      <strong>An app store that reads your library</strong>
      <p>Zaviya Loadout looks at the games you have and suggests emulators and apps to play them, chosen for your chip.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-monitor-multiple:</div>
    <div>
      <strong>Bottom screen on dual screen devices</strong>
      <p>On the AYN Thor and AYANEO Pocket DS, the bottom screen has its own launcher, game tools, a live dashboard and a trackpad with swipe typing.</p>
    </div>
  </li>
</ul>

## What else is in it

<ul class="features" role="list" markdown="1">
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-steam:</div>
    <div>
      <strong>Game Mode and desktop</strong>
      <p>Game Mode, the Steam client and a KDE desktop. All of it runs natively on ARM.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-update:</div>
    <div>
      <strong>Updates through Steam</strong>
      <p>Signed updates from Settings > System. You don't need to reflash, and a failed update rolls back on its own.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-plus-box-multiple-outline:</div>
    <div>
      <strong>Add games from files</strong>
      <p>Windows games, console game files, Linux apps and Android apps are added to your Steam library with their artwork.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-store-outline:</div>
    <div>
      <strong>Epic, GOG and Amazon libraries</strong>
      <p>An ARM64 build of Heroic installs your PC libraries. The games play from Steam with Proton.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-sleep:</div>
    <div>
      <strong>Sleep and power</strong>
      <p>Sleep works on every supported chip. You also get quiet fan curves and Steam's own power and charge controls.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-android:</div>
    <div>
      <strong>Android apps</strong>
      <p>Install and run Android apps, including the Play Store. Each app shows up in your library.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-cast-connected:</div>
    <div>
      <strong>Remote Play and docking</strong>
      <p>Steam Remote Play with hardware decoding. Game Mode also runs on an external monitor, with sound.</p>
    </div>
  </li>
  <li markdown="1">
    <div class="features__icon" aria-hidden="true">:material-harddisk:</div>
    <div>
      <strong>microSD or internal storage</strong>
      <p>Run it from a microSD card, or install it to internal storage and keep Android on the device.</p>
    </div>
  </li>
</ul>

## Supported devices

<div class="grid cards chips" markdown>

-   :material-check-circle:{ .ok } **Snapdragon 8 Elite** · Stable

    AYN Odin 3, KONKR Pocket FIT Elite

-   :material-check-circle:{ .ok } **Snapdragon 8 Gen 3** · Stable

    KONKR Pocket FIT, AYANEO Pocket S2 / S2 Pro

-   :material-check-circle:{ .ok } **Snapdragon 8 Gen 2** · Stable

    AYN Odin 2 / Mini / Portal / Thor, AYANEO Pocket ACE / DMG / DS / EVO /
    S 1K / S 2K, Retroid Pocket 6 / Nova

-   :material-flask-outline:{ .warn } **Lenovo tablets** · Testing

    Lenovo Legion Y700 Gen 3 and Gen 4. Got one?
    [Help test it](devices/lenovo.md)

</div>

The [Supported Devices](devices/index.md) page lists what works on each one.

## Community

Questions, install help, or how it runs on your device: use the
[Discord](https://discord.gg/EP53nZYvg). Bugs go to
[GitHub issues](https://github.com/hashtagbasit/SteamOS-ARM-Port/issues).
