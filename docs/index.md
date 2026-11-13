---
hide:
  - toc
---

<div class="hero" markdown>

<div class="hero__copy" markdown>

<p class="hero__kicker">For ARM handhelds</p>

# Zaviya

Based on SteamOS for ARM, not another skin. Game Mode, the Steam client and a
KDE desktop run natively on supported ARM handhelds.

[Releases](downloads.md){ .md-button .md-button--primary }
[Install guide](getting-started/install.md){ .md-button }

Formerly known as Unofficial SteamOS ARM Port.
{ .hero__note }

</div>

<div class="hero__panel" markdown>

![Zaviya](assets/frame.svg){ .hero__mark }

<p class="hero__version">Version 1.5</p>

<p class="hero__chips">Snapdragon 8 Elite · 8 Gen 3 · 8 Gen 2 · 865</p>

</div>

</div>

!!! warning soft "Before you install"

    Installation replaces the device's bootloader. Back up data first.

## Pick a chip

<div class="chiprow" markdown>

[<span class="chipcard__name">Snapdragon 8 Elite</span><span class="chipcard__code">sm8750</span><span class="chipcard__n">2 devices</span>](downloads.md#sm8750){ .chipcard }

[<span class="chipcard__name">Snapdragon 8 Gen 3</span><span class="chipcard__code">sm8650</span><span class="chipcard__n">3 devices</span>](downloads.md#sm8650){ .chipcard }

[<span class="chipcard__name">Snapdragon 8 Gen 2</span><span class="chipcard__code">sm8550</span><span class="chipcard__n">12 devices</span>](downloads.md#sm8550){ .chipcard }

[<span class="chipcard__name">Snapdragon 865</span><span class="chipcard__code">sm8250</span><span class="chipcard__n">8 devices, beta</span>](downloads.md#sm8250){ .chipcard }

</div>

[Supported devices](devices/index.md) lists every device with its
chip, test status and notes. Lenovo Legion Y700 tablets are in testing, see the
[Lenovo page](devices/lenovo.md). Most testing is done by the community.

## What is included

<div class="bento" markdown>

<div class="bento__card bento__card--2" markdown>
<span class="bento__icon">:material-steam:</span>

**Game Mode and desktop**
{ .bento__title }

Game Mode, the Steam client and a KDE desktop, all running natively on ARM.
</div>

<div class="bento__card" markdown>
<span class="bento__icon">:material-gamepad-variant-outline:</span>

**Controller**
{ .bento__title }

Appears to Steam as a Steam Deck pad. Decky and the performance overlay are included.
</div>

<div class="bento__card" markdown>
<span class="bento__icon">:material-package-variant-closed:</span>

**Zaviya Loadout**
{ .bento__title }

The built-in app store. It counts the library per system and installs a starter set chosen for the chip.
</div>

<div class="bento__card" markdown>
<span class="bento__icon">:material-plus-box-multiple-outline:</span>

**Add games from files**
{ .bento__title }

Windows games, console game files, Linux apps and Android apps join the Steam library with artwork.
</div>

<div class="bento__card" markdown>
<span class="bento__icon">:material-store-outline:</span>

**Epic, GOG and Amazon**
{ .bento__title }

Heroic, built for ARM64, installs the store libraries. Games launch from Steam with Proton.
</div>

<div class="bento__card" markdown>
<span class="bento__icon">:material-android:</span>

**Android apps**
{ .bento__title }

The Play Store is available and each app gets its own title in the library.
</div>

<div class="bento__card bento__card--2" markdown>
<span class="bento__icon">:material-chart-timeline-variant-shimmer:</span>

**Frame generation**
{ .bento__title }

Lossless Scaling frame generation through Decky, in performance mode on Adreno GPUs. lsfg-vk 2.0 includes an ARM64 build for native ARM games.
</div>

<div class="bento__card bento__card--2" markdown>
<span class="bento__icon">:material-monitor-multiple:</span>

**Dual screen**
{ .bento__title }

On the AYN Thor and AYANEO Pocket DS the bottom screen carries a launcher, game tools, a dashboard with themes, and a trackpad with swipe typing.
</div>

<div class="bento__card" markdown>
<span class="bento__icon">:material-cast-connected:</span>

**Remote Play and docking**
{ .bento__title }

Steam Remote Play with hardware decoding and optional PyroWave. Game Mode also runs on an external monitor or dock, with sound.
</div>

<div class="bento__card" markdown>
<span class="bento__icon">:material-layers-triple-outline:</span>

**Tuned base system**
{ .bento__title }

Services that fail on a handheld are off, the interface runs on the fast cores and the GPU clocks up under load.
</div>

<div class="bento__card" markdown>
<span class="bento__icon">:material-sleep:</span>

**Sleep and power**
{ .bento__title }

Sleep works on every supported chip, fan curves are quiet and the device powers off cleanly before the battery runs flat.
</div>

<div class="bento__card" markdown>
<span class="bento__icon">:material-harddisk:</span>

**Dual boot with Android**
{ .bento__title }

Runs from a microSD card, or installs to internal storage next to Android. The OpenABL menu chooses at power-on.
</div>

<div class="bento__card bento__card--3" markdown>
<span class="bento__icon">:material-update:</span>

**Updates and rollback**
{ .bento__title }

Updates arrive through Settings > System without reflashing. They are signed and verified, and an interrupted update rolls back on the next boot.
</div>

</div>

## Install in three steps

<ol class="z-steps">
  <li><strong>Flash the image</strong><span>Write the image for the device's chip to a microSD card (32 GB or larger).</span></li>
  <li><strong>Flash OpenABL</strong><span>Install the boot menu. Back up the stock ABL first.</span></li>
  <li><strong>Boot Zaviya</strong><span>Hold Volume Down at power-on, choose the device, set the boot mode to Linux and select START. The first boot takes a few minutes.</span></li>
</ol>

The [install guide](getting-started/install.md) covers every step, and each chip
has its own image on [Releases](downloads.md). Tablets do not use OpenABL, see
the [Lenovo page](devices/lenovo.md).

## Community

<div class="grid cards" markdown>

-   :fontawesome-brands-discord:{ .gold } **[Community](project/community.md)**

    Discord, issue reports, device testing and credits.
    [Join the Discord](https://discord.gg/e2Cn85uQh9) or open an issue on
    [GitHub](https://github.com/hashtagbasit/Zaviya).

-   :material-lifebuoy:{ .gold } **[Support the project](project/community.md)**

    Support links are on the community page: [Ko-fi](https://ko-fi.com/aimalb)
    and [PayPal](https://paypal.me/Basit2000).

</div>
