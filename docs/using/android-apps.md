# Android Apps

Android apps run, Play Store included. A **Google Play Store** title shows up in
the library after you first sign in.

Apps from the Play Store, or from an `.apk`, `.apkm`, `.xapk` or `.apks` file,
get a title in the Steam library with their icon. They run full screen with
touch, the controller and an on-screen keyboard.

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
