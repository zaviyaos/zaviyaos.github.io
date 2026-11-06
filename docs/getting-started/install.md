# Flash to a microSD Card

Zaviya runs from a microSD card. Android stays on the device, and you can still
start it from the OpenABL menu. Once Zaviya runs, you can optionally
[install it to internal storage](internal-storage.md) on the Pocket FIT and
Pocket S2.

## Steps

1. Download the image for your chip from [Downloads](../downloads.md).

2. Flash it to a 32 GB or larger microSD card (A2 speed is best).

    !!! note

        Common flashing tools are [balenaEtcher](https://etcher.balena.io/)
        and [Rufus](https://rufus.ie/). If the image comes in `.7z` parts,
        extract the `.001` part first with 7-Zip, WinRAR, Keka or The
        Unarchiver.

3. Flash OpenABL if your device doesn't have it yet, see
   [Flash OpenABL](abl.md). Devices that already show the OpenABL
   menu skip this step.

4. Insert the card, then hold **Volume Down** while powering on to open the
   OpenABL menu.

    !!! note

        The AYANEO Pocket DMG has no Volume Down key, see
        [its page](../devices/pocket-dmg.md).

5. Choose **Set device model** and select your device, set the boot mode to
   **Linux**, and choose **START**.

    !!! note

        On the AYANEO Pocket S2 Pro, select **AYANEO Pocket S2**.

6. The first boot takes a few minutes. Sign in to Steam when it asks.

## Setting a password

The `steamos` user has no password until you set one. Open **Konsole** in
Desktop Mode and run `passwd`. You need the password for `sudo`.
