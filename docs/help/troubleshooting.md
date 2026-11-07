# Troubleshooting

Start with the matching section below. For problems that are not listed, collect
[debug logs](#debug-logs) and open a
[GitHub issue](https://github.com/hashtagbasit/Zaviya/issues) with the
device model. [Known issues](known-issues.md) lists problems already reported.

## Debug logs

1. Put an empty file called `debug` on the microSD card's **BOOT** drive.
2. Boot, and reproduce the problem.
3. Attach the `debug-logs` folder from the **BOOT** drive to a
   [GitHub issue](https://github.com/hashtagbasit/Zaviya/issues).

## Android doesn't start after installing to internal storage

Installs made with versions before 1.3 gave the Linux boot partition a type
that Android does not start next to. The Snapdragon logo shows, then the device
turns off. Changing the type fixes it without erasing anything, and Zaviya keeps
booting from internal storage.

1. Open **Konsole** in Desktop Mode and find the boot partition:

    ```sh
    readlink -f /dev/disk/by-partlabel/ROCKNIX
    ```

    It prints something like `/dev/sda12`.

2. Change its type, using the number from step 1 (here `12`):

    ```sh
    sudo sfdisk --part-type /dev/sda 12 C12A7328-F81F-11D2-BA4B-00A0C93EC93B
    ```

3. Clear Android's leftover data so it sets itself up fresh. This erases
   Android's user data.

    ```sh
    sudo blkdiscard -f -z /dev/disk/by-partlabel/metadata
    sudo dd if=/dev/zero of=/dev/disk/by-partlabel/userdata bs=1M count=8
    ```

4. Restart holding **Volume Down** and choose Android. The first start takes
   a few minutes while it sets up.

!!! note

    On 1.3 and newer the same fix is
    `sudo ufs-partition.py fix-types` followed by
    `sudo ufs-partition.py reset-android --yes`.

## Black screen after booting

- Check that the device model in the OpenABL menu matches the device exactly.
- Flash the card again. An interrupted flash is the most common cause.
- Collect [debug logs](#debug-logs) and open an issue.

## No sound

- Open the volume slider in Quick Access and check the output device.
- On the Pocket FIT, run `konkrctl status` and include the output in an issue.
