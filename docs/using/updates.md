# Updates

Updates work like on a Steam Deck. They download in the background and install
on the next restart. Games, saves, accounts and Wi-Fi settings stay.

Updates are signed and checked before anything changes, and only install on the
devices they were made for. If one gets interrupted, it rolls back on the next
boot.

## Steps

1. Open **Settings > System**.
2. Select **Check for updates**, then **Apply**.
3. Restart when it asks.

## Without internet

1. Download the `steamos-arm-<chip>-<version>.sau` file for the device's chip from
   [Releases](https://github.com/hashtagbasit/SteamOS-ARM-Port/releases).
2. Copy it to a microSD card or USB drive and plug it in.
3. Select **Check for updates**. The update is found on the drive.

!!! note

    Devices on version 1.2 or a beta need to flash 1.3 once. Updates after that
    come through Steam.
