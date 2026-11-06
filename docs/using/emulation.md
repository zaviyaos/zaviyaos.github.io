# Emulation

Console games run through the emulators that [Zaviya Loadout](loadout.md)
installs. Games are added to the Steam library, so they start from Game Mode like
any other title.

## Add a game

**Mine > Add a game or app** in Zaviya Loadout puts a game or app in the Steam
library:

| File | How it runs |
|---|---|
| Windows `.exe` | Steam's Proton, set up on the shortcut |
| Linux program or AppImage | directly |
| Console game file | the matching emulator, installed first if needed |
| Android `.apk`, `.apkm`, `.xapk`, `.apks` | installed into Android, with a Steam title |

Artwork comes from the Steam store when the game is sold there. Added games are
listed in **Mine**, where they can be played or removed from Steam.

## Game library

| Folder | Contents |
|---|---|
| `Emulation/roms/<system>` | game files, one folder per system (`roms/ps2`, `roms/gba`) |
| `Emulation/bios` | BIOS and firmware files |

**Mine > Keep games on** moves the whole library between internal storage and
the SD card, and points every emulator at the new location.

## BIOS and firmware

Some emulators need BIOS or firmware files. The app's page in Zaviya Loadout
lists which files are still missing and where they go.

## Dual screen emulators

Emulators that use two screens, such as melonDS and Azahar, take over the bottom
screen while they run on the AYN Thor and AYANEO Pocket DS. See
[Dual screen](bottom-screen.md).
