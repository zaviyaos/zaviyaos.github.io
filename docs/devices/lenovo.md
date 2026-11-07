# Lenovo

!!! info "In testing"

    The tablet builds are in testing and are distributed through the
    [Discord](https://discord.gg/e2Cn85uQh9) first. Owners who want to take part
    can ask there for the test image.

| Device | Chip | Status | Notes |
|---|---|---|---|
| Lenovo Legion Y700 Gen 3 (TB321FU) | 8 Gen 3 | In testing | BOE and CSOT screens both supported |
| Lenovo Legion Y700 Gen 4 (TB322FC) | 8 Elite | In testing | Chinese model only |
| Lenovo Legion Y700 Gen 5 (TB323FU) | 8 Elite Gen 5 | In testing | Runs from a microSD card, switched on from Android |

## Installation

Tablets do not use OpenABL, which is for handhelds only. Each generation
installs differently:

- **Gen 3** has no microSD slot. Flash the image to a USB drive, start it from a
  PC with `fastboot boot` using the boot image in the drive's `tablet` folder,
  then install to internal storage. This needs an unlocked bootloader.
- **Gen 4** installs the same way, and can also run from a microSD card.
- **Gen 5** runs from a microSD card and is switched on from Android. It can't be
  installed to internal storage. It is in early testing with a small group of
  testers.

!!! warning

    Installing to internal storage replaces Android's user data. Back up
    Android data first.

The tablets have no built-in controls. Use touch or a Bluetooth or USB
controller.

The Gen 4 copies the firmware it needs from the tablet's own Android, so do not
wipe Android before the first boot.

## Identifying the Gen 3 screen

The Legion Y700 Gen 3 ships with either a BOE or a CSOT screen. The boot menu has
an entry for each, BOE first. A black screen means the other entry is needed:
restart and select it. In Android, `getprop ro.vendor.display.paneltype` over ADB
reports the panel, and a value of `1` means BOE.

## USB drive not detected

When booting from a USB drive, the two ports share one USB controller. If the
drive is not detected, use the other port.
