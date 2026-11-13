# Performance and SSH

## Performance controls

The performance controls in Quick Access work: performance profile, TDP limit,
GPU clock and charge limit, bypass charging included.

## KONKR Pocket FIT and AYANEO Pocket S2

These devices have three performance profiles:

| Profile | Behaviour |
|---|---|
| Silent | GPU capped, quiet fan |
| Balanced | The default |
| Turbo | Big cores pinned high, fan starts early |

On the Pocket FIT the Performance button switches profiles. The KONKR Control
plugin and the `konkrctl` command do the same.

```sh
konkrctl status               # profile, fan, clocks and temperatures
konkrctl profile turbo        # switch profile
konkrctl rgb ff3c00           # stick colour (Pocket FIT)
konkrctl speaker flat         # speakers without the loudness boost
konkr-game fast %command%     # FEX preset in launch options: fast, fastest or compat
```

## Exact 60 and 120 Hz

On the Retroid Pocket 6 and AYN Odin 3 the panels can run slightly off their
nominal rate, which makes a frame limiter stutter now and then. To calibrate:

1. In Desktop Mode, set the screen to 60 Hz.
2. Open Konsole and run `sudo steamos-arm-panel-calibrate`.
3. Set the screen to 120 Hz and run the command again.

Each run takes about 20 seconds, and the result persists across reboots.
`steamos-arm-panel-calibrate show` prints the stored values.

## SSH

SSH is off by default.

1. Set a password with `passwd` in Konsole.
2. Run `sudo systemctl enable --now sshd`.
3. Connect from a PC with `ssh steamos@<device-ip>`.

Root login is disabled, so use `sudo`. Turn SSH off again with
`sudo systemctl disable --now sshd`.

## Steam client beta and PyroWave

Both are off by default. Each is turned on by creating a file in
`~/.local/share/Steam` and restarting Steam.

- `touch ~/.local/share/Steam/.allow-client-updates` lets the Steam client
  update and follow the beta channel chosen in Steam's settings. Without the
  file, client updates stay blocked. Removing it blocks future updates again but
  does not roll the client back.
- `touch ~/.local/share/Steam/.pyrowave-box64` turns on the PyroWave codec for
  Remote Play on Snapdragon 8 Gen 2 handhelds. The arm64 streaming client has no
  PyroWave decoder, so the x86 one from the client beta runs under box64.
  Steam's settings still show PyroWave greyed out, but the stream uses it when
  the host offers it. Delete the file and restart Steam to go back.
