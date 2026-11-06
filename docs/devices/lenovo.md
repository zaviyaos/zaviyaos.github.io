# Lenovo

!!! info "Testing"

    The tablet builds are new and nobody has booted them on a real tablet
    yet. If you own one and want to help, join the
    [Discord](https://discord.gg/EP53nZYvg) and ask for the test image.

| Device | Chip | Tested | Notes |
|---|---|---|---|
| Lenovo Legion Y700 Gen 3 (TB321FU) | 8 Gen 3 | In testing | BOE and CSOT screens both supported |
| Lenovo Legion Y700 Gen 4 (TB322FC) | 8 Elite | In testing | Chinese model only. The TB323FU is a different chip and isn't supported |

## How It's Different

The tablets don't use OpenABL and have no microSD slot, so they work a
bit differently from the handhelds:

- The image goes on a **USB drive** instead of a microSD card.
- You start it from a PC with `fastboot boot`, using the boot image in the
  drive's `tablet` folder. This needs an unlocked bootloader.
- From there you install it to internal storage. This replaces Android's
  user data, and Android's boot image is saved so you can go back.
- There are no built-in controls, so use touch or a Bluetooth or USB
  controller.

The Gen 4 copies the firmware it needs from the tablet's own Android, so
don't wipe Android before the first boot.

## Which Gen 3 Screen Do I Have?

The Legion Y700 Gen 3 comes with a BOE or a CSOT screen. The boot menu has an
entry for each, BOE first. If you get a black screen, restart and pick the
other one. In Android you can check with `getprop ro.vendor.display.paneltype`
over ADB, `1` means BOE.

## USB Drive Not Showing Up?

Both tablets switch one USB controller between their two ports. If the drive
isn't seen, try the other port.
