# Install to Internal Storage

On the KONKR Pocket FIT and AYANEO Pocket S2, Zaviya can be
installed to internal storage next to Android, so it boots without the card.
Other devices run from the microSD card.

!!! warning

    Installing to internal storage erases Android's user data (apps, photos,
    accounts). Android itself stays and sets itself up again on its next
    start. The original partition table is saved to the microSD card so the
    space can be given back later.

## Steps

1. Boot Zaviya from the microSD card.
2. Open **Zaviya Installer** in Desktop Mode, or the Installer section in **Zaviya Control** in Game Mode.
3. Choose how much space Android keeps, and whether your games are copied
   over.
4. When it finishes, open the ABL menu and set **Boot source** to
   **Internal**.

!!! note

    Devices that had an older version installed to internal storage need
    **UNINSTALL CFW** in the ABL menu first.

## Giving the Space Back to Android

Boot the microSD card and run:

```sh
sudo ufs-partition.py restore --backup /boot/ufs-backup/ufs-gpt-<date>.sfdisk
```

**UNINSTALL CFW** in the ABL menu also removes the Linux partitions.
