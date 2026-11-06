# Lenovo

!!! info "Testing"

    The tablet builds are new and still in testing. They go out in the
    [Discord](https://discord.gg/EP53nZYvg) first, so if you own one and want to
    help, ask there for the test image.

| Device | Chip | Status | Notes |
|---|---|---|---|
| Lenovo Legion Y700 Gen 3 (TB321FU) | 8 Gen 3 | In testing | BOE and CSOT screens both supported |
| Lenovo Legion Y700 Gen 4 (TB322FC) | 8 Elite | In testing | Chinese model only |
| Lenovo Legion Y700 Gen 5 (TB323FU) | 8 Elite Gen 5 | In testing | Runs from a microSD card, switched on from Android |

## Install

Tablets don't use OpenABL, that's for handhelds only. Each generation installs a
bit differently:

- **Gen 3 and Gen 4** install to internal storage next to Android. The Gen 4 can
  also run from a microSD card.
- **Gen 5** runs from a microSD card and is switched on from Android. It's in
  early testing with only a few testers.

Installing to internal storage replaces Android's user data.

The earlier Gen 3 and Gen 4 test builds were started from a PC with
`fastboot boot`, using the boot image in the `tablet` folder of the image
(USB drive instead of a microSD card, unlocked bootloader needed). Ask in the
Discord which way your build installs.

There are no built-in controls, so use touch or a Bluetooth or USB controller.

The Gen 4 copies the firmware it needs from the tablet's own Android, so don't
wipe Android before the first boot.

## Which Gen 3 screen do I have?

The Legion Y700 Gen 3 comes with a BOE or a CSOT screen. The boot menu has an
entry for each, BOE first. If you get a black screen, restart and pick the
other one. In Android you can check with `getprop ro.vendor.display.paneltype`
over ADB. A value of `1` means BOE.

## USB drive not showing up?

If you boot from a USB drive, the two ports share one USB controller. If the
drive isn't detected, try the other port.
