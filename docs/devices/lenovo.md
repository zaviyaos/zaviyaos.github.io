# Lenovo

!!! info "In testing"

    The tablet builds are in testing and are distributed through the
    [Discord](https://discord.gg/EP53nZYvg) first. Owners who want to take part
    can ask there for the test image.

| Device | Chip | Status | Notes |
|---|---|---|---|
| Lenovo Legion Y700 Gen 3 (TB321FU) | 8 Gen 3 | In testing | BOE and CSOT screens both supported |
| Lenovo Legion Y700 Gen 4 (TB322FC) | 8 Elite | In testing | Chinese model only |
| Lenovo Legion Y700 Gen 5 (TB323FU) | 8 Elite Gen 5 | In testing | Runs from a microSD card, switched on from Android |

## Installation

Tablets do not use OpenABL, which is for handhelds only. Each generation
installs differently:

- **Gen 3 and Gen 4** install to internal storage next to Android. The Gen 4 can
  also run from a microSD card.
- **Gen 5** runs from a microSD card and is switched on from Android. It is in
  early testing with a small group of testers.

!!! warning

    Installing to internal storage replaces Android's user data. Back up
    Android data first.

The earlier Gen 3 and Gen 4 test builds were started from a PC with
`fastboot boot`, using the boot image in the `tablet` folder of the image
(a USB drive instead of a microSD card, and an unlocked bootloader). Ask in the
Discord which method applies to the build in use.

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
