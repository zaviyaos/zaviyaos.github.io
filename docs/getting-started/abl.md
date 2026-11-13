# Flash OpenABL

!!! info "Handhelds only"

    OpenABL is for handhelds. Tablets don't use it, see the
    [Lenovo page](../devices/lenovo.md).

!!! warning

    This step replaces the device's bootloader. Flashing the ABL for the wrong
    chip can leave the device unable to start. The OpenABL Installer app picks
    the right file itself; with the scripts, use only the folder from the image
    for the device. Back up the stock ABL first.

!!! note

    Already on OpenABL 1.2 or older? It keeps working, leave it. Newer versions
    don't start Zaviya's boot images, so flash the copy from the image if the
    device is on one of those.

## Two ways to flash

OpenABL can be flashed from Android with the **OpenABL Installer** app, or
with the scripts that come in every Zaviya image. Both back up the stock ABL
first. The app is the easier route.

## With the OpenABL Installer app

The [OpenABL Installer](https://github.com/OpenHandheldCollective/OpenABL-Android-Installer)
is published by the Open Handheld Collective, the developers of OpenABL. It
needs root, which most supported handhelds provide: xsu on AYANEO and KONKR,
the system service on Retroid, and su on AYN or with Magisk or KernelSU.

1. In Android, download the APK from the
   [OpenABL Installer releases](https://github.com/OpenHandheldCollective/OpenABL-Android-Installer/releases/latest)
   and install it.

2. Open the app. Check that it shows the right chip and model, and allow root
   access if Android asks.

3. Choose **Install OpenABL** and confirm. The app backs up both ABL slots to
   `Download/OpenABL/backup-<date>_<time>/`, writes OpenABL to both slots and
   reads them back. Copy the backup folder to a PC afterwards.

4. Choose **Reboot to bootloader**, or restart holding **Volume Down**. Set
   **Device model** to the device, **Boot mode** to Linux, then **Start**.

!!! note

    The app always installs the newest OpenABL release. That is 1.2 today,
    which starts Zaviya. If the app offers a version newer than 1.2, use the
    scripts below instead.

    Without root the app saves a script in Download to run as root with the
    device's root script tool (on Retroid: Handheld Settings, Advanced, Run
    script as root). **Restore a backup** in the app puts the stock ABL back.

## With the scripts from the image


1. Flash the image to a microSD card, see [Flash to a microSD card](install.md).

2. Insert the card and boot into Android. Copy the `openabl` folder from the
   card's **BOOT** drive to the top of internal storage, so it is
   `/sdcard/openabl`. Do not place it inside Download or another folder. The
   scripts only look there.

3. Open the device's root script tool in Android settings.

    !!! note

        The name depends on the manufacturer. Look for **Run script as Root**,
        **Root Script** or similar, usually in the device's own settings
        section. These tools don't show what a script prints, so check the
        results as described below.

4. Run `backup_abl.sh` from the `openabl` folder. It saves the current ABL as
   `abl_a.img` and `abl_b.img` in the same folder. Check that both files are
   present and not 0 bytes, then copy them to a PC.

5. Run `flash_abl.sh`. It writes OpenABL to both ABL slots.

    !!! warning

        Each image contains the ABL for its own chip only. Never run the
        scripts from another chip's image.

6. Restart holding **Volume Down** to open the menu. Volume moves, Power
   selects. Set **Device model** to the device, **Boot mode** to Linux, then
   **Start**.

## About OpenABL

[OpenABL](https://github.com/OpenHandheldCollective/OpenABL) is a boot menu that
is flashed once. At power-on it selects Linux or Android, and Linux can start
from the microSD card or from internal storage. Android stays on the device.
OpenABL is made by the Open Handheld Collective and is GPL-3.0. Each Zaviya
image includes the copy for its chip.

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
