# Flash to a microSD card

This guide installs Zaviya on a handheld and runs it from a microSD card.
Android stays on the device and starts from the OpenABL menu. The KONKR Pocket
FIT and AYANEO Pocket S2 can later
[install to internal storage](internal-storage.md).

!!! info "Handhelds only"

    OpenABL is for handhelds. Tablets don't use it, see the
    [Lenovo page](../devices/lenovo.md).

!!! warning

    Flashing the image erases everything on the microSD card. Check that the
    flashing tool targets the card and no other drive.

## Steps

1. Download the image for the device's chip from [Downloads](../downloads.md).

2. Flash it to a 32 GB or larger microSD card (A2 speed is best).

    !!! note

        Common flashing tools are [balenaEtcher](https://etcher.balena.io/)
        and [Rufus](https://rufus.ie/). If the image comes in `.7z` parts,
        extract the `.001` part first with 7-Zip, WinRAR, Keka or The
        Unarchiver.

3. Flash OpenABL if the device doesn't have it yet, see
   [Flash OpenABL](abl.md). Devices that already show the OpenABL menu skip
   this step.

4. Insert the card, then hold **Volume Down** while powering on to open the
   OpenABL menu.

    !!! note

        The AYANEO Pocket DMG has no Volume Down key, see
        [its page](../devices/pocket-dmg.md).

5. Choose **Set device model** and select the device, set the boot mode to
   **Linux**, and choose **START**.

    !!! note

        On the AYANEO Pocket S2 Pro, select **AYANEO Pocket S2**.

6. Wait for the first boot, which takes a few minutes. Sign in to Steam when
   prompted.

## Setting a password

The `steamos` user has no password until one is set. Open **Konsole** in
Desktop Mode and run `passwd`. The password is required for `sudo`.

## Next steps

- [Install to internal storage](internal-storage.md) on supported devices.
- [Add games and apps](../using/loadout.md) with Zaviya Loadout.
- [Troubleshoot](../help/troubleshooting.md) a black screen or missing sound.
