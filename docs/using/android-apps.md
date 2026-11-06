# Android Apps

Zaviya can install and run Android apps, including the Google Play Store. A
**Google Play Store** title appears in the library after you first sign in.

Every app you install from the Play Store, or from an `.apk`, `.apkm`, `.xapk`
or `.apks` file, gets its own title in the Steam library with its icon. Apps run
full screen. Touch, the controller and an on-screen keyboard all work.

## Installing an app file

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
    still crash. The first launch downloads the Android runtime. That takes a
    few minutes.
