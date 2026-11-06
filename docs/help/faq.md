# FAQ

Answers to common questions. More help is in [Troubleshooting](troubleshooting.md).

??? question "Is this an official SteamOS release?"

    No. Zaviya is an independent community project. Report problems on
    [GitHub](https://github.com/hashtagbasit/SteamOS-ARM-Port/issues) or in the
    [Discord](https://discord.gg/EP53nZYvg), not to Steam Support.

??? question "What is it based on?"

    The SteamOS ARM image from Steam Frame. On top of that Zaviya adds frame
    generation, Zaviya Loadout (which suggests apps from the games in the
    library) and a launcher for the second screen on dual screen devices.

??? question "What's in it?"

    Game Mode, the Steam client and the desktop, plus the kernel and hardware
    support for each handheld, power and fan settings, updates through Steam,
    Zaviya Loadout, Android apps and the dual screen launcher.

??? question "Does Android still work?"

    Yes. Android stays on the device and starts from the OpenABL menu. Installing
    to internal storage erases Android's user data, but Android itself stays.

??? question "Do Windows games run?"

    Many do, through FEX and ARM64 Proton. Games with anti-cheat that does not
    support Linux do not run. See [Compatibility](../compatibility.md).

??? question "How is Zaviya updated?"

    Through Steam: **Settings > System > Check for updates**. See
    [Updates](../using/updates.md).

??? question "How is a device returned to Android only?"

    Remove the microSD card. If it was installed to internal storage, choose
    **UNINSTALL CFW** in the OpenABL menu, or restore the saved partition table,
    see [Install to Internal Storage](../getting-started/internal-storage.md#giving-the-space-back-to-android).

??? question "The device is not listed"

    Every device needs its own hardware support, and new devices are added over
    time. Request one on
    [GitHub issues](https://github.com/hashtagbasit/SteamOS-ARM-Port/issues). A
    spare device sent for development is the fastest route, see
    [Community](../project/community.md#send-a-device).
