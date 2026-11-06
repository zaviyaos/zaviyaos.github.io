# Install

Installing Zaviya on a handheld takes three stages: flash the image to a
microSD card, flash the OpenABL boot menu once, then boot the card and choose
the device. Android stays on the device throughout.

!!! warning

    OpenABL replaces the device's bootloader. A mistake can leave the device
    unable to boot or cause data loss. Back up data and the stock ABL, and
    follow the guides in order.

!!! info "Handhelds only"

    OpenABL is for handhelds. Tablets don't use it, see the
    [Lenovo page](../devices/lenovo.md).

## Requirements

| Item | Requirement |
|---|---|
| Device | A handheld on the [supported devices](../devices/index.md) list |
| microSD card | 32 GB or larger, A2 speed is best |
| Computer | Runs a flashing tool such as [balenaEtcher](https://etcher.balena.io/) or [Rufus](https://rufus.ie/), and 7-Zip, WinRAR, Keka or The Unarchiver for `.7z` images |
| Image | The image for the device's chip, from [Downloads](../downloads.md) |

## Installation path

1. [Flash to a microSD card](install.md). Write the image for the device's chip
   and boot it from the OpenABL menu.
2. [Flash OpenABL](abl.md). Back up the stock ABL, then install the boot menu.
   This is needed once per device.
3. [Install to internal storage](internal-storage.md). Optional, and available on
   handhelds with 8 Elite, 8 Gen 3 and 8 Gen 2 chips. It boots without the card and
   erases Android's user data.

## What OpenABL does

OpenABL is a boot menu. At power-on the device shows a menu where the boot mode
is set to Linux or Android, and Linux can start from the microSD card or from
internal storage. Android remains installed and starts from the same menu. It
is made by the Open Handheld Collective and is GPL-3.0.

Holding **Volume Down** at power-on opens the menu. Without a held key the
device starts the selected boot mode.

## After installing

- Set a password for the `steamos` user, see
  [Setting a password](install.md#setting-a-password).
- Use **Settings > System** for later versions, see [Updates](../using/updates.md).
- Add emulators and apps with [Zaviya Loadout](../using/loadout.md).
