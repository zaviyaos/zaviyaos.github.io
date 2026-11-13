# Supported devices

Zaviya ships one image per chip. The device is chosen in the OpenABL menu on
first boot, and the system configures itself for it.

## By chip

| Chip | Status | Devices |
|---|---|---|
| Snapdragon 8 Elite | Stable | AYN Odin 3, KONKR Pocket FIT Elite |
| Snapdragon 8 Gen 3 | Stable | KONKR Pocket FIT, AYANEO Pocket S2 / S2 Pro |
| Snapdragon 8 Gen 2 | Stable | AYN Odin 2 / Mini / Portal / Thor, AYANEO Pocket ACE / DMG / DS / EVO / S 1K / S 2K, Retroid Pocket 6 / Nova |
| Snapdragon 865 | Beta | Retroid Pocket 5 / Flip 2 / Mini / Mini V2, AYN Thor Lite, MANGMI Air Y Pro / Pocket Max, AYANEO Pocket MICRO 2 |

The image for each chip is listed on [Releases](../downloads.md).

The Lenovo Legion Y700 tablets are in testing, see the [Lenovo page](lenovo.md).
The REDMAGIC 6 is built from source, see [REDMAGIC](redmagic.md).

## Reading the status columns

| Mark | Meaning |
|---|---|
| :material-check-circle:{ .ok } Yes | A tester has confirmed the device runs Zaviya |
| Beta | Applies to all Snapdragon 865 devices |
| In testing | Lenovo tablet builds, distributed through the Discord |
| Blank | No test report has been received for the device yet |

Most testing is done by the community. To report how a device runs, including
when everything works, open a
[GitHub issue](https://github.com/hashtagbasit/Zaviya/issues). If a
device is not listed, see the [FAQ](../help/faq.md).
