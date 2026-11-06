# Frame generation

Frame generation uses Lossless Scaling through Decky plugins. Two plugins are
installed, because some games look better with one and some with the other. Use
one plugin per game, not both.

| Plugin | lsfg-vk | Launch option |
|---|---|---|
| **Decky LSFG-VK** | 2.0 | `~/.lsfg %command%` |
| **Frame Gen Classic** | 1.x | `~/lsfg-classic %command%` |

Both start in performance mode, the mode that adds frames on Adreno GPUs. On
Adreno, version 2.0 draws garbage blocks in some games. When a game does that,
switch it to Frame Gen Classic.

## Decky LSFG-VK (2.0)

1. In Steam, open **Lossless Scaling > Properties > Game Versions & Betas**
   and select the `lsfg-vk` branch.
2. Open the decky-lsfg-vk plugin and select **Install**.
3. Set up a game in the plugin, then add `~/.lsfg %command%` to that game's
   launch options.

## Frame Gen Classic (1.x)

1. Install Lossless Scaling in Steam.
2. Open Frame Gen Classic and select **Install**.
3. Set up the game, then add `~/lsfg-classic %command%` to its launch options.

A game started through `~/lsfg-classic` gets only the 1.x layer, so the two
versions never run together. Frame Gen Classic keeps its settings in
`~/.config/lsfg-vk-classic`.

## ARM64 builds

The plugins include x86 layers, which cover x86 games under FEX. For ARM64 games
Zaviya adds an unmodified ARM64 build of [lsfg-vk](https://lsfg-vk.dev) 2.0 by
PancakeTAS (CC BY-NC-ND 4.0).
