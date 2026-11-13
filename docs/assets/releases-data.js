// Release data for the Releases page. Edit this file for each release.
// Change and known-issue entries name the chips (and optionally devices) they
// apply to; "all" applies everywhere.
window.ZAVIYA = {
  base: "https://downloads.zaviyaos.workers.dev",

  chips: {
    sm8750: "Snapdragon 8 Elite",
    sm8650: "Snapdragon 8 Gen 3",
    sm8550: "Snapdragon 8 Gen 2",
    sm8250: "Snapdragon 865",
  },

  makers: [
    { name: "AYANEO", devices: [
      ["pocket-ace", "Pocket ACE", "sm8550"], ["pocket-dmg", "Pocket DMG", "sm8550"],
      ["pocket-ds", "Pocket DS", "sm8550"], ["pocket-evo", "Pocket EVO", "sm8550"],
      ["pocket-s-1k", "Pocket S 1K", "sm8550"], ["pocket-s-2k", "Pocket S 2K", "sm8550"],
      ["pocket-s2", "Pocket S2", "sm8650"], ["pocket-s2-pro", "Pocket S2 Pro", "sm8650"],
      ["pocket-micro-2", "Pocket MICRO 2", "sm8250"] ] },
    { name: "AYN", devices: [
      ["odin-2", "Odin 2", "sm8550"], ["odin-2-mini", "Odin 2 Mini", "sm8550"],
      ["odin-2-portal", "Odin 2 Portal", "sm8550"], ["thor", "Thor", "sm8550"],
      ["thor-lite", "Thor Lite", "sm8250"], ["odin-3", "Odin 3", "sm8750"] ] },
    { name: "KONKR", devices: [
      ["pocket-fit", "Pocket FIT", "sm8650"], ["pocket-fit-elite", "Pocket FIT Elite", "sm8750"] ] },
    { name: "MANGMI", devices: [
      ["air-y-pro", "Air Y Pro", "sm8250"], ["pocket-max", "Pocket Max", "sm8250"] ] },
    { name: "Retroid", devices: [
      ["rp5", "Pocket 5", "sm8250"], ["flip-2", "Pocket Flip 2", "sm8250"],
      ["rp-mini", "Pocket Mini", "sm8250"], ["rp-mini-v2", "Pocket Mini V2", "sm8250"],
      ["rp6", "Pocket 6", "sm8550"], ["nova", "Pocket Nova", "sm8550"] ] },
  ],

  releases: [
    {
      version: "1.5.0", tag: "v1.5", date: "2026-11-13", kind: "fresh",
      title: "Zaviya",
      summary: "The first release under the Zaviya name. Steam Frame 0.6.0 base, Linux 7.4-rc1 and Mesa 26.2.7 on every chip, a new internal storage installer and many sleep fixes. Snapdragon 865 handhelds join the regular release.",
      note: "1.5 is a fresh install. Check for updates does not offer it. Back up anything needed from Desktop Mode first; games on a separate microSD card are not touched.",
      files: {
        sm8750: { bytes: 5338594654, sha256: "841448567b57e10a73fabd58caa84985cb1beb22a327401cfe380acd29d5a27c" },
        sm8650: { bytes: 5398739729, sha256: "2b5f5c2bd6d8ee344483fe07f3608f26955338e04c70cfa9883c6266beae947d" },
        sm8550: { bytes: 5508319134, sha256: "4a57feb6ebf76f83b4943549f3073765315812719ba4803f01ee0cf64b9515fc" },
        sm8250: { bytes: 5385572201, sha256: "034d1859f48614d409ca08f2ff7e69a9e7d7be288ee25c281e5add5f570e6888" },
      },
      changes: [
        { on: "all", text: "New name and look: boot animation, startup and sleep movies, wallpaper, login and lock screens. Handheld Control is now Zaviya Control." },
        { on: "all", text: "Steam Frame 0.6.0 base, Linux 7.4-rc1 and Mesa 26.2.7." },
        { on: "all", text: "Desktop Mode runs Plasma 6.6.2." },
        { on: ["sm8750", "sm8650", "sm8550"], text: "New installer for internal storage: full screen, works with the gamepad and touch, and runs from Game Mode. It blocks sleep while working and refuses to start on a low battery that is not charging." },
        { on: "all", text: "Record logs: a button in Zaviya Control and an icon on the Desktop Mode desktop save everything needed for a bug report into one file in ~/zaviya-logs. Wi-Fi passwords and account files are left out." },
        { on: "all", text: "The system partition has 4 GB free instead of 1.5 GB, and caches are cleared at boot when it is nearly full, so a full disk no longer ends in a Game Mode restart loop." },
        { on: "all", text: "Controllers stay connected across sleep." },
        { on: ["sm8650", "sm8550", "sm8250"], text: "Sleeping from a microSD install no longer resets the handheld." },
        { on: "all", text: "Pressing power while the handheld is going to sleep keeps it awake. The sleep report in the logs names what woke it." },
        { on: "all", text: "Decky runs as a native arm64 loader; older installs are repaired." },
        { on: "all", text: "Performance overlay: correct battery percentage, Qualcomm temperatures, aligned frametime graph." },
        { on: "all", text: "Wi-Fi retries after 10 seconds instead of 45 when a network does not answer." },
        { on: "all", text: "Android apps with special characters in their names start. Steam's first-time setup runs only once." },
        { on: ["sm8650"], devices: ["pocket-fit"], text: "The Steam and Performance buttons can each be set to Start, Select, Steam or Quick Access in Zaviya Control." },
        { on: ["sm8650"], devices: ["pocket-s2", "pocket-s2-pro"], text: "Headphone jack detection." },
        { on: ["sm8550"], devices: ["thor"], text: "The power key no longer wakes it with the lid closed." },
        { on: ["sm8550"], devices: ["odin-2-portal"], text: "Internal microphone, and the gamepad powers down during sleep." },
        { on: ["sm8550"], devices: ["odin-2"], text: "Quieter fan in menus and an internal storage fix." },
        { on: ["sm8550"], devices: ["pocket-ds"], text: "Sleep no longer aborts at random." },
        { on: ["sm8550"], devices: ["rp6"], text: "Headphone jack detection." },
        { on: ["sm8550"], devices: ["rp6", "nova"], text: "Steam + A opens Quick Access." },
        { on: ["sm8750"], text: "Sound over USB-C to a monitor works again." },
        { on: ["sm8750"], devices: ["odin-3"], text: "Internal microphone." },
        { on: ["sm8250"], text: "Part of the regular release instead of a separate beta. Steam Remote Play video works." },
        { on: ["sm8250"], devices: ["rp5", "flip-2", "rp-mini", "rp-mini-v2"], text: "Sleep works; sound and volume down fixed." },
        { on: ["sm8250"], devices: ["flip-2"], text: "Internal microphone." },
        { on: ["sm8250"], devices: ["thor-lite"], text: "Brightness controls were assigned to the wrong screens; fixed." },
      ],
      issues: [
        { on: ["sm8750"], devices: ["pocket-fit-elite"], text: "A charge limit below 100% can make the battery report Over voltage and stop charging. Unplug, restart and keep the limit at 100%." },
        { on: ["sm8550"], devices: ["odin-2-portal"], text: "Units with the second panel type show a black screen." },
        { on: ["sm8250"], devices: ["thor-lite"], text: "Some units show a white upper screen. Logs from an affected unit help." },
        { on: ["sm8550"], devices: ["rp6"], text: "No internal microphone yet." },
        { on: "all", text: "Stick and trigger calibration is not available yet." },
      ],
    },
    { version: "1.4", tag: "v1.4", date: "2026-10-14", kind: "update",
      summary: "Fixes and new features for the 8 Elite, 8 Gen 3 and 8 Gen 2. Restart into Android from Handheld Control. The 8 Elite received sound again in 1.4.1." },
    { version: "1.3.2", tag: "v1.3.2", date: "2026-10-10", kind: "update",
      summary: "Game Mode on external displays with sound, Bluetooth and Display settings back in Desktop Mode, and Desktop Mode screen fixes." },
    { version: "1.3.1", tag: "v1.3.1", date: "2026-10-07", kind: "update",
      summary: "8 Elite only: a fan service fix and frame generation." },
    { version: "1.3", tag: "v1.3.0", date: "2026-10-07", kind: "fresh",
      summary: "Stable on the 8 Elite, 8 Gen 3 and 8 Gen 2, on the Steam Frame base. Updates arrive through Check for updates from this release on." },
    { version: "1.2.1", tag: "v1.2.1", date: "2026-09-27", kind: "hotfix",
      summary: "Games no longer flicker when their resolution is set below 1080p." },
    { version: "1.2", tag: "v1.2", date: "2026-09-27", kind: "fresh",
      summary: "Frame generation running natively on ARM, a one-tap installer for internal storage, and the first update app." },
    { version: "1.1", tag: "v1.1", date: "2026-09-25", kind: "fresh",
      summary: "Android apps inside Game Mode (beta) and booting from internal storage on the KONKR Pocket FIT." },
    { version: "1.0", tag: "v1.0", date: "2026-09-24", kind: "fresh",
      summary: "First release, for the KONKR Pocket FIT." },
  ],
};
