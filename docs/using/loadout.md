# Zaviya Loadout

Zaviya Loadout is the app store. It installs emulators, PC game stores and apps
for your chip, and adds your games to Steam. Open it from **Quick Access > Zaviya Loadout > Open
Zaviya Loadout**.

## For You

For You counts your games per system and shows which emulator to get for
systems nothing plays yet. It also has the starter set for your chip and
sets that only install what's missing:

- Classic consoles
- Modern consoles
- PC games
- Streaming from a PC or console
- A console-style front end
- Films and music

## App pages

Selecting an app opens its page with:

- what it plays, and how it runs on your chip
- the BIOS and firmware files it still needs, and where they go
- what's new in an available update
- the space it takes, and Play, Update, Reset Settings and Remove

## Add a game

**Mine > Add a game or app** puts a game or app in the Steam library:

| File | How it runs |
|---|---|
| Windows `.exe` | Steam's Proton, set up on the shortcut |
| Linux program or AppImage | directly |
| Console game file | the matching emulator, installed first if needed |
| Android `.apk`, `.apkm`, `.xapk`, `.apks` | installed into Android, with a Steam title |

Artwork comes from the Steam store when the game is sold there. Added games
are listed in **Mine**. You can play them there or take them out of Steam.

## Game library

| Folder | Contents |
|---|---|
| `Emulation/roms/<system>` | game files, one folder per system (`roms/ps2`, `roms/gba`) |
| `Emulation/bios` | BIOS and firmware files |

**Mine > Keep games on** moves the whole library between internal storage
and the SD card, and points every emulator at the new location.
