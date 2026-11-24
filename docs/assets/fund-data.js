// Device fund data for the "Fund a device" page. Edit this file when money
// arrives or a device changes state, then rebuild the site.
//
// Counting rules (shown on the page too):
// - Each donation goes to exactly one entry: a device, or the pool.
// - "raised" (euros) is the money tagged for that device plus any pool money
//   moved to it. Record each pool move in "fromPool" so the page can show it.
// - Money over a goal goes back to the pool.
// - status: "funding" -> "funded" -> "ordered" -> "here"
//
// Only devices that can be ordered now are listed.
// Prices: the everyday list price (no sales or coupons) of the middle model,
// delivered to Australia, where the devices are bought. Makers that sell in
// US dollars: price + their shipping to Australia + 10% GST, at the ECB rate.
// "goal" is the Australian price in euros plus a 50 euro margin for price
// changes and unexpected costs, rounded up to the next 5.
// Checked 24 Nov 2026.
window.ZAVIYA_FUND = {
  updated: "2026-11-24",
  rate: "ECB 23 Nov 2026: 1 USD = 1.5113 AUD, 1 AUD = 0.6049 EUR",
  kofi: "https://ko-fi.com/aimalb",
  paypal: "https://paypal.me/Basit2000",

  // Donations with no device named, not yet moved to a device (euros).
  pool: 0,

  // Devices already on the desk. Not funded here.
  onHand: [
    { name: "KONKR Pocket FIT", chip: "Snapdragon 8 Gen 3", note: "All 8 Gen 3 builds get tested on it." },
  ],

  devices: [
    {
      id: "odin-3", kind: "Handheld", name: "AYN Odin 3", chip: "Snapdragon 8 Elite",
      model: "Pro 12/256 GB",
      cost: "US$469 + US$22 shipping + 10% GST = A$816",
      shop: "AYN store", url: "https://www.ayntec.com/products/ayn-odin-3",
      goal: 545, raised: 0, fromPool: 0, status: "funding",
      covers: "8 Elite. Also covers the Odin 3 Portal and FIT Elite.",
      why: [
        "USB-C sound broke in 1.4 and I only found out from you.",
        "Kernel and Mesa updates for this chip go out untested.",
        "Fan, charge limit and sleep need long testing.",
      ],
    },
    {
      id: "rp6", kind: "Handheld", name: "Retroid Pocket 6", chip: "Snapdragon 8 Gen 2",
      model: "12/256 GB, the top model",
      cost: "US$279 + US$25 shipping + 10% GST = A$505. Retro Palm (Australia) sells only the 8 GB model, at A$619.99",
      shop: "Retroid store", url: "https://www.goretroid.com/products/retroid-pocket-6-handheld",
      goal: 360, raised: 0, fromPool: 0, status: "funding",
      covers: "8 Gen 2, the biggest group with 12 handhelds.",
      why: [
        "Mic still doesn't work.",
        "Most of you are on this chip.",
      ],
    },
    {
      id: "nova", kind: "Handheld", name: "Retroid Pocket Nova", chip: "Snapdragon 8 Gen 2",
      model: "12/128 GB, the top model",
      cost: "US$269 + US$25 shipping + 10% GST = A$489",
      shop: "Retroid store", url: "https://www.goretroid.com/products/retroid-pocket-nova-handheld",
      goal: 350, raised: 0, fromPool: 0, status: "funding",
      covers: "8 Gen 2, but its screen, sound and rumble work differently.",
      why: [
        "The white flash on wake took a lot of test builds to fix.",
      ],
    },
    {
      id: "rp5", kind: "Handheld", name: "Retroid Pocket 5", chip: "Snapdragon 865",
      model: "8/128 GB, the only model",
      cost: "US$179 + US$25 shipping + 10% GST = A$339. Retro Palm (Australia) lists it at A$445.99",
      shop: "Retroid store", url: "https://www.goretroid.com/products/retroid-pocket-5-handheld",
      goal: 260, raised: 0, fromPool: 0, status: "funding",
      covers: "865. Same board as the Flip 2, Mini and Mini V2.",
      why: [
        "The sleep and sound fixes in 1.5 were done without one.",
        "Older kernel than the other chips, breaks in different ways.",
      ],
    },
    {
      id: "thor", kind: "Dual screen", name: "AYN Thor", chip: "Snapdragon 8 Gen 2",
      model: "Pro 12/256 GB",
      cost: "US$409 + US$22 shipping + 10% GST = A$717",
      shop: "AYN store", url: "https://www.ayntec.com/products/ayn-thor",
      goal: 485, raised: 0, fromPool: 0, status: "funding",
      covers: "8 Gen 2 dual screen.",
      why: [
        "Needed to do dual screen properly in Game Mode and Desktop Mode.",
        "Lid, sleep and power key.",
      ],
    },
    {
      id: "thor-lite", kind: "Dual screen", name: "AYN Thor Lite", chip: "Snapdragon 865",
      model: "8/128 GB, the only model",
      cost: "US$259 + US$22 shipping + 10% GST = A$467",
      shop: "AYN store (Lite option)", url: "https://www.ayntec.com/products/ayn-thor",
      goal: 335, raised: 0, fromPool: 0, status: "funding",
      covers: "865 dual screen.",
      why: [
        "Some units have a white top screen.",
        "Brightness keys were on the wrong screens until 1.5.",
      ],
    },
    {
      id: "rp-duo", kind: "Dual screen", name: "Retroid Pocket Duo", chip: "Qualcomm Dragonwing Q-7790",
      model: "8/128 GB, the only model",
      cost: "US$269 + US$25 shipping + 10% GST = A$489",
      shop: "Retroid store", url: "https://www.goretroid.com/products/retroid-pocket-duo-handheld",
      goal: 350, raised: 0, fromPool: 0, status: "funding",
      covers: "Retroid dual screen, new chip.",
      why: [
        "Would be a new port.",
        "Different screens and buttons from the Thor.",
      ],
    },
    {
      id: "rg-dds", kind: "Dual screen", name: "Anbernic RG DDS", chip: "Snapdragon G2 Gen 2",
      model: "12/256 GB, the top model (pre-order)",
      cost: "US$349.99 + US$15 shipping + 10% GST = A$607",
      shop: "Anbernic store", url: "https://anbernic.com/products/rg-dds",
      goal: 420, raised: 0, fromPool: 0, status: "funding",
      covers: "Anbernic dual screen. Same chip as the Retroid Pocket G2.",
      why: [
        "Would be a new port, first Anbernic device.",
        "Would get the Pocket G2 working too.",
      ],
    },
    {
      id: "y700-gen3", kind: "Tablet", name: "Lenovo Legion Y700 Gen 3", chip: "Snapdragon 8 Gen 3",
      model: "16/512 GB",
      cost: "A$760, tax included",
      shop: "Etoren Australia", url: "https://au.etoren.com/products/lenovo-legion-y700-2025-gaming-tablet-8.8-inch-wifi-512gb-white-16gb-ram-anti-glare-version",
      goal: 510, raised: 0, fromPool: 0, status: "funding",
      covers: "Legion Y700 Gen 3, both screen types.",
      why: [
        "Charger start, scaling resets and Steam restarts are still open.",
        "Boots from USB, nothing like the handhelds.",
      ],
    },
    {
      id: "y700-gen4", kind: "Tablet", name: "Lenovo Legion Y700 Gen 4", chip: "Snapdragon 8 Elite",
      model: "16/512 GB",
      cost: "A$1,068 delivered, tax included",
      shop: "Etoren Australia", url: "https://au.etoren.com/products/lenovo-legion-y700-gen-4-ai-gaming-tablet-8.8-inch-wifi-512gb-black-16gb-ram",
      goal: 700, raised: 0, fromPool: 0, status: "funding",
      covers: "Legion Y700 Gen 4, Chinese model.",
      why: [
        "Takes firmware from its own Android, can't check that without one.",
        "Game Mode brightness and Desktop windows still open.",
      ],
    },
    {
      id: "y700-gen5", kind: "Tablet", name: "Lenovo Legion Y700 Gen 5", chip: "Snapdragon 8 Elite Gen 5",
      model: "16/512 GB",
      cost: "A$1,499 regular price",
      shop: "Mobileciti", url: "https://www.mobileciti.com.au/lenovo-legion-tab-gen-5-wi-fi-tablet-8-8-3k-snapdragon-8-elite-gen-5-512gb-16gb-zah20092au-eclipse-black",
      goal: 960, raised: 0, fromPool: 0, status: "funding",
      covers: "Legion Y700 Gen 5, first device on this chip.",
      why: [
        "Only runs from microSD so far and only a few people can test it.",
      ],
    },
  ],
};
