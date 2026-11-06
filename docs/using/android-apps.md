# Android apps

Android apps run on Zaviya, Play Store included. A **Google Play Store** title
appears in the library after the first sign-in.

Apps from the Play Store, or from an `.apk`, `.apkm`, `.xapk` or `.apks` file,
get a title in the Steam library with their icon. They run full screen with
touch, the controller and an on-screen keyboard.

## Installing an app file

Use any of these methods:

- Open the file in **Dolphin**.
- Copy it to `~/Android/Inbox`.
- Use **Zaviya Loadout > Mine > Add a game or app**.

The `konkr-apk` command manages apps from a terminal:

```sh
konkr-apk install Example.apkm
konkr-apk list
konkr-apk remove com.example.app
```

!!! note

    Games whose anti-cheat blocks emulators will not run, and some apps may
    still crash. The first launch downloads the Android runtime, which takes a
    few minutes.

## Restarting into Android

Zaviya Control has a **Restart into Android** button. Android also starts from
the OpenABL menu, see [Flash OpenABL](../getting-started/abl.md#using-the-menu).
