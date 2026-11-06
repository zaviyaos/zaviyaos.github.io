# Performance and SSH

## Performance

The performance controls in Quick Access work: performance profile, TDP limit,
GPU clock and charge limit, bypass charging included.

## Commands (KONKR Pocket FIT and AYANEO Pocket S2)

```sh
konkrctl status               # profile, fan, clocks and temperatures
konkrctl rgb ff3c00           # stick colour (Pocket FIT)
konkrctl speaker flat         # speakers without the loudness boost
konkr-game fast %command%     # FEX preset in launch options: fast, fastest or compat
```

## SSH

SSH is off by default.

1. Set a password with `passwd` in Konsole.
2. Run `sudo systemctl enable --now sshd`.
3. Connect from a PC with `ssh steamos@<device-ip>`.

Root login is disabled, so use `sudo`. Turn SSH off again with
`sudo systemctl disable --now sshd`.
