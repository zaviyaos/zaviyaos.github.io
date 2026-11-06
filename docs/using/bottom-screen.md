# Dual Screen

On the AYN Thor and AYANEO Pocket DS, games run on the top screen and the
bottom screen gets its own launcher and dashboard in Game Mode.

| Page | What's on it |
|---|---|
| Home | tools, web apps and apps as tiles, plus what's playing |
| Game strip | notes, guide, screenshot and frame generation for the running game |
| Dashboard | the game's art and play time, FPS, battery, temperatures, fan, power, profiles and brightness for each screen |
| Trackpad and keyboard | a touchpad and a keyboard with swipe typing, autocorrect and suggestions |

Themes: **Aura**, **Pulse**, **Gauges** and **Pure Black**.

## Lower Deck

The **Lower Deck** plugin in Quick Access picks the theme, arranges the home
screen and sets apps that open together with a game. Emulators that use two
screens (melonDS, Azahar) take over the bottom screen while they run.

!!! tip

    Swiping up from the bottom edge, or holding the AYN button, always returns
    to the home page.

## Turning It Off

Set `"enabled": false` in `~/.config/steamos-arm/bottom-screen.json` and
return to Game Mode.
