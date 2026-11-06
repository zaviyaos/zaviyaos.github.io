# Supported devices

Zaviya ships one image per chip. The device is chosen in the OpenABL menu on
first boot, and the system configures itself for it. Select a maker below for
its devices, chips and notes.

## By maker

<div class="grid cards" markdown>

-   [**AYANEO**](ayaneo.md)

    Pocket ACE, DMG, DS, EVO, S 1K, S 2K, S2, S2 Pro and MICRO 2 (Beta)

-   [**AYN**](ayn.md)

    Odin 2, Odin 2 Mini, Odin 2 Portal, Thor, Thor Lite (Beta) and Odin 3

-   [**KONKR**](konkr.md)

    Pocket FIT and Pocket FIT Elite

-   [**MANGMI**](mangmi.md)

    Air Y Pro and Pocket Max (Beta)

-   [**Retroid**](retroid.md)

    Pocket 5, Flip 2, Mini and Mini V2 (all Beta), Pocket 6 and Nova

-   [**Lenovo**](lenovo.md) · In testing

    Legion Y700 Gen 3, Gen 4 and Gen 5

-   [**REDMAGIC**](redmagic.md)

    REDMAGIC 6, built from source

</div>

## By chip

| Chip | Status | Devices |
|---|---|---|
| Snapdragon 8 Elite | Stable | AYN Odin 3, KONKR Pocket FIT Elite |
| Snapdragon 8 Gen 3 | Stable | KONKR Pocket FIT, AYANEO Pocket S2 / S2 Pro |
| Snapdragon 8 Gen 2 | Stable | AYN Odin 2 / Mini / Portal / Thor, AYANEO Pocket ACE / DMG / DS / EVO / S 1K / S 2K, Retroid Pocket 6 / Nova |
| Snapdragon 865 | Beta | Retroid Pocket 5 / Flip 2 / Mini / Mini V2, AYN Thor Lite, MANGMI Air Y Pro / Pocket Max, AYANEO Pocket MICRO 2 |

The image for each chip is listed on [Downloads](../downloads.md).

## Reading the status columns

| Mark | Meaning |
|---|---|
| :material-check-circle:{ .ok } Yes | A tester has confirmed the device runs Zaviya |
| Beta | Applies to all Snapdragon 865 devices |
| In testing | Lenovo tablet builds, distributed through the Discord |
| Blank | No test report has been received for the device yet |

Most testing is done by the community. To report how a device runs, including
when everything works, open a
[GitHub issue](https://github.com/hashtagbasit/SteamOS-ARM-Port/issues). If a
device is not listed, see the [FAQ](../help/faq.md).
