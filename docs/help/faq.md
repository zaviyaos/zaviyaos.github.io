# FAQ

??? question "Is this an official SteamOS release?"

    No. It's an independent community project. Report problems here, not to Steam
    Support.

??? question "What is it based on?"

    The SteamOS ARM image from Steam Frame. On top of that: frame generation,
    Zaviya Loadout, which suggests apps from the games you have, and a launcher
    for the second screen on dual screen devices.

??? question "What's in it?"

    Game Mode, the Steam client and the desktop, plus the kernel and hardware
    support for each handheld, power and fan settings, updates through Steam,
    Zaviya Loadout, Android apps and the dual screen launcher.

??? question "Does Android still work?"

    Yes. Android stays on the device and starts from the OpenABL menu. Installing
    to internal storage erases Android's user data, but Android itself stays.

??? question "Do Windows games run?"

    Many do, through FEX and ARM64 Proton.
    Games with anti-cheat that doesn't support Linux won't run.

??? question "How do I update?"

    Through Steam: **Settings > System > Check for updates**. See
    [Updates](../using/updates.md).

??? question "How do I go back to only Android?"

    Remove the microSD card. If it was installed to internal storage, choose
    **UNINSTALL CFW** in the OpenABL menu, or restore the saved partition table,
    see [Install to Internal Storage](../getting-started/internal-storage.md#giving-the-space-back-to-android).

??? question "My device isn't listed"

    Every device needs its own hardware support. New ones get added over time.
    Ask on
    [GitHub issues](https://github.com/hashtagbasit/SteamOS-ARM-Port/issues).
