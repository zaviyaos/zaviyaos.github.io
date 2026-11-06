# Android Apps

## Overview

Zaviya can install and run Android apps, with the Google Play
Store included. A **Google Play Store** title appears in the library after
the first sign-in.

Every app installed from the Play Store, or as an `.apk`, `.apkm`, `.xapk` or
`.apks`, appears as its own title in the Steam library with its icon. Apps run
full screen with touch, the controller and an on-screen keyboard.

## Installing an App File

- open it in **Dolphin**, or
- copy it to `~/Android/Inbox`, or
- use **Zaviya Loadout > Mine > Add a game or app**

```sh
konkr-apk install Example.apkm
konkr-apk list
konkr-apk remove com.example.app
```

!!! note

    Games whose anti-cheat blocks emulators won't run, and some apps may
    still crash. The first launch downloads the Android runtime, which takes a
    few minutes.
