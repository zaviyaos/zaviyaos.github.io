# Compatibility

Zaviya runs several kinds of software. Each has its own runtime, and each is
added to the Steam library so it starts from Game Mode.

## How each kind of software runs

| Software | Runs through | Notes |
|---|---|---|
| Steam games for Windows | FEX and ARM64 Proton | Many titles run. Games whose anti-cheat does not support Linux do not |
| Epic, GOG and Amazon games | Heroic (ARM64 build) and Proton | Launch from Steam, see [PC games](using/pc-games.md) |
| Windows `.exe` files | Proton, set up on the shortcut | Added with [Zaviya Loadout](using/emulation.md#add-a-game) |
| Linux programs and AppImages | Run directly | Added with Zaviya Loadout |
| Console games | The matching emulator | Zaviya Loadout installs the emulator, see [Emulation](using/emulation.md) |
| Android apps and games | The Android runtime | Anti-cheat that blocks emulators prevents a game from running, see [Android apps](using/android-apps.md) |

## Anti-cheat

Games whose anti-cheat does not support Linux do not run. The same limit applies
on a Steam Deck. For Android games, anti-cheat that blocks emulators has the same
effect.

## Frame generation

Frame generation is configured per game. If version 2.0 draws garbage blocks in a
game, switch that game to Frame Gen Classic. See
[Frame generation](using/frame-generation.md).

## Storage speed

Games load from the microSD card, and the card sets the upper limit for loading
speed. Use a fast A2 card, or [install to internal storage](getting-started/internal-storage.md)
on devices that support it.

## Display and audio

- Game Mode runs on an external monitor or dock, with sound.
- On Snapdragon 8 Elite devices (AYN Odin 3, KONKR Pocket FIT Elite) there is no
  audio over HDMI or DisplayPort yet, see [Known issues](help/known-issues.md).

## Reporting a result

Reports of games that run, and games that do not, help other owners. Share them
in the [Discord](https://discord.gg/EP53nZYvg) or as a
[GitHub issue](https://github.com/hashtagbasit/SteamOS-ARM-Port/issues).
