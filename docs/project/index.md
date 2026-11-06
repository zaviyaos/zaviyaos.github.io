# About Zaviya

Zaviya is an operating system for ARM handhelds and tablets, based on the
SteamOS ARM image from Steam Frame. It provides Game Mode, the Steam client, a
KDE desktop, PC games through FEX and Proton, emulation and Android apps.

Formerly known as SteamOS ARM Port.

## Why it exists

The ARM image made for Steam Frame targets a VR headset, so on a handheld several
parts get in the way: services that keep crashing, an interface stuck on the slow
cores, a GPU that does not clock up, and standby that drains the battery. Zaviya
turns off what a handheld does not need and fixes the rest, then adds the
hardware support, updater, app store and tools described in this documentation.

## Project status

- **Stable:** Snapdragon 8 Elite, 8 Gen 3 and 8 Gen 2 handhelds.
- **Beta:** Snapdragon 865 handhelds.
- **In testing:** Lenovo Legion Y700 tablets.

Per-device status is on [Supported devices](../devices/index.md).

## Licence and trademarks

The project's own scripts and overlays are GPL-2.0. Everything in
`external-and-mods/` keeps its own licence. See
[LICENSE](https://github.com/hashtagbasit/SteamOS-ARM-Port/blob/main/LICENSE).

Zaviya is an independent community project. Steam and SteamOS are trademarks of
their owner, used only to state what Zaviya is based on. Do not contact Steam
Support about Zaviya.

## Building from source

Images are built from the
[repository](https://github.com/hashtagbasit/SteamOS-ARM-Port) on an ARM64 Linux
machine. See
[building.md](https://github.com/hashtagbasit/SteamOS-ARM-Port/blob/main/docs/building.md)
and
[HOW-IT-WORKS.md](https://github.com/hashtagbasit/SteamOS-ARM-Port/blob/main/docs/HOW-IT-WORKS.md).

## Community and credits

See [Community and support](community.md) for contact channels, donations and
credits.
