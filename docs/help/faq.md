# FAQ

??? question "Is this made by Valve?"

    No. Zaviya is a community project and isn't affiliated with Valve. Please
    don't contact Valve about it.

??? question "How is it different from other handheld systems?"

    Zaviya starts from Valve's own ARM build of SteamOS instead of a different
    Linux made to look like it. It also includes frame generation, a store that
    suggests what to install from the games you have, and a full second-screen
    interface on dual screen devices.

??? question "What's in it?"

    Game Mode, the Steam client and the desktop. On top of that Zaviya
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

    Each device needs its own hardware support. New chips and devices are
    added over time; requests go in
    [GitHub issues](https://github.com/hashtagbasit/SteamOS-ARM-Port/issues).
