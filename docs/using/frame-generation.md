# Frame Generation

Frame generation uses the decky-lsfg-vk plugin. It defaults to performance
mode, which is the one that adds frames on Adreno GPUs. For ARM64 games there's
an unmodified ARM64 build of
[lsfg-vk](https://lsfg-vk.dev) 2.0 by PancakeTAS for ARM64 games (CC BY-NC-ND
4.0).

## Steps

1. In Steam, open **Lossless Scaling > Properties > Game Versions & Betas**
   and select the `lsfg-vk` branch.
2. Open the decky-lsfg-vk plugin and select **Install**.
3. Set up a game in the plugin, then add `~/.lsfg %command%` to that game's
   launch options.
