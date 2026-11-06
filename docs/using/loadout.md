# Zaviya Loadout

Zaviya Loadout is the store built into Zaviya. It installs emulators, PC
game stores and apps that are picked for your chip, and adds anything you
have to your Steam library. Open it from **Quick Access > Zaviya Loadout > Open
Zaviya Loadout**.

## For You

For You reads your game library: how many games there are for each system,
and which emulator to get for the systems nothing plays yet. It also offers
the starter set for your chip and ready-made sets that install only what's
missing:

- Classic consoles
- Modern consoles
- PC games
- Streaming from a PC or console
- A console-style front end
- Films and music

## App Pages

Selecting an app opens its page with:

- what it plays and how it runs on your chip
- the BIOS and firmware files it still needs, and where they go
- what's new in an available update
- the space it takes, and Play, Update, Reset Settings and Remove

## Add a Game

**Mine > Add a game or app** puts almost any game or app into the Steam
library:

| File | How it runs |
|---|---|
| Windows `.exe` | Steam's Proton, set up on the shortcut |
| Linux program or AppImage | directly |
| Console game file | the matching emulator, installed first if needed |
| Android `.apk`, `.apkm`, `.xapk`, `.apks` | installed into Android with its own Steam title |

Artwork comes from the Steam store when the game is sold there. Added games
are listed in **Mine**, where they can be played or taken out of Steam.

## Game Library

| Folder | Contents |
|---|---|
| `Emulation/roms/<system>` | game files, one folder per system (`roms/ps2`, `roms/gba`) |
| `Emulation/bios` | BIOS and firmware files |

**Mine > Keep games on** moves the whole library between internal storage
and the SD card, and points every emulator at the new location.
