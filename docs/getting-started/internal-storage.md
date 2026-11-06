# Install to internal storage

The KONKR Pocket FIT and AYANEO Pocket S2 can install Zaviya to internal storage
next to Android, so the device boots without the card. Other devices run from the
microSD card.

!!! warning

    Installing to internal storage erases Android's user data (apps, photos,
    accounts). Android itself stays and sets itself up again on its next
    start. The original partition table is saved to the microSD card, which
    allows the space to be returned later. Back up Android data before starting.

## Steps

1. Boot Zaviya from the microSD card.
2. Open **Zaviya Installer** in Desktop Mode, or the Installer section in **Zaviya Control** in Game Mode.
3. Choose how much space Android keeps, and whether games are copied
   over.
4. When the installer finishes, open the OpenABL menu and set **Boot source** to
   **Internal**.

!!! note

    Devices that had an older version installed to internal storage need
    **UNINSTALL CFW** in the OpenABL menu first.

## Giving the space back to Android

Boot from the microSD card and run:

```sh
sudo ufs-partition.py restore --backup /boot/ufs-backup/ufs-gpt-<date>.sfdisk
```

**UNINSTALL CFW** in the OpenABL menu also removes the Linux partitions.
