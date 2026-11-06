# Flash OpenABL

[OpenABL](https://github.com/OpenHandheldCollective/OpenABL) replaces the part
of the bootloader that only knows how to start Android. It starts Zaviya from
the microSD card or internal storage, and you can still start Android from its
menu. Every Zaviya image includes the right copy for its chip. OpenABL is made
by the Open Handheld Collective and licensed under the GPL-3.0.

!!! note

    Already on OpenABL 1.2 or older? It keeps working, and you don't have to change
    anything. If you're on a newer version, flash the copy from the image,
    because newer versions don't start Zaviya's boot images.

## Steps

1. Flash the image to your microSD card, see [Flash to a microSD Card](install.md).

2. Insert the card and boot into Android. Copy the `openabl` folder from the
   card's **BOOT** drive to the top of internal storage, so it is
   `/sdcard/openabl`. Don't put it inside Download or another folder. The
   scripts only look there.

3. Open your device's root script tool in Android settings.

    !!! note

        The name depends on the manufacturer. Look for **Run script as Root**,
        **Root Script** or similar, usually in the device's own settings
        section. These tools don't show what a script prints, so check the
        results yourself as described below.

4. Run `backup_abl.sh` from the `openabl` folder. It saves your current ABL as
   `abl_a.img` and `abl_b.img` in the same folder. Check that both files are
   there and not 0 bytes, then copy them to your PC.

5. Run `flash_abl.sh`. It writes OpenABL to both ABL slots.

    !!! warning

        Flashing the ABL for the wrong chip can leave the device unable to start.
        Only use the folder from the image for your device. Each image has the
        ABL for its own chip only.

6. Restart holding **Volume Down** to open the menu. Volume moves, Power
   selects. Set **Device model** to your device, **Boot mode** to Linux, then
   **Start**.

## Using the menu

| At power-on | What happens |
|---|---|
| Nothing held | Starts the selected boot mode |
| Volume Down | Opens the menu |
| Volume Up | Starts Android when the boot mode is Linux |

To make Android the default again, set **Boot mode** to Android.

## Restoring the previous ABL

Put `abl_a.img` and `abl_b.img` back in `/sdcard/openabl` and run
`restore_backup_abl.sh`. It writes the backup back to both slots.
