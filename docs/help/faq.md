# FAQ

??? question "Is this an official SteamOS release?"

    No. Zaviya is an independent community project. Report problems to us,
    not to Steam Support.

??? question "How is it different from other handheld systems?"

    It's based on the SteamOS ARM image from Steam Frame, not another skin on a
    different Linux. It also has frame generation, a store that suggests
    what to install based on the games you have, and a full interface for the
    second screen on dual screen devices.

??? question "What's in it?"

    Game Mode, the Steam client and the desktop. On top of that, Zaviya
    adds the kernel and hardware support for each handheld, power and
    fan tuning, updates through Steam, Zaviya Loadout, Android apps and the dual
    screen launcher.

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

    Each device needs its own hardware support. We add new chips and devices over time. Send requests to
    [GitHub issues](https://github.com/hashtagbasit/SteamOS-ARM-Port/issues).
