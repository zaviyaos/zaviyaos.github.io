// Test devices page, filled from fund-data.js.
// No ?device= in the URL: a list of devices, each linking to its own view.
// ?device=<id>: that device's goal, status and reasons.
(function () {
  const F = window.ZAVIYA_FUND;
  const root = document.getElementById("fund-app");
  if (!F || !root) return;

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const eur = n => "€" + Math.round(n).toLocaleString("en-US");
  const date = iso => new Date(iso + "T12:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const STEPS = [["funding", "Saving"], ["funded", "Covered"], ["ordered", "Ordered"], ["here", "Here"]];
  const pct = d => Math.min(100, Math.round((d.raised / d.goal) * 100));
  const left = d => Math.max(0, d.goal - d.raised);
  const bar = d => `<div class="fund-bar" role="progressbar" aria-label="${esc(d.name)}" aria-valuemin="0" aria-valuemax="${d.goal}" aria-valuenow="${Math.min(d.raised, d.goal)}"><span style="width:${pct(d)}%"></span></div>`;
  const status = d => STEPS.find(s => s[0] === d.status)[1];

  const id = new URLSearchParams(location.search).get("device");
  const dev = F.devices.find(d => d.id === id);

  if (!dev) {
    const group = (title, kind) => {
      const list = F.devices.filter(d => d.kind === kind);
      return `<h2 id="${kind.toLowerCase().replace(/ /g, "-")}">${title}</h2>
        <div class="fund-grid">${list.map(d => `
          <a class="fund-card fund-link" href="?device=${esc(d.id)}">
            <p class="fund-card__kind">${esc(d.chip)}</p>
            <h3 class="fund-card__name">${esc(d.name)}</h3>
            ${bar(d)}
            <p class="fund-nums"><span>${d.status === "funding" ? eur(left(d)) + " to go" : status(d)}</span></p>
          </a>`).join("")}</div>`;
    };
    root.innerHTML = `
      ${group("Handhelds", "Handheld")}
      ${group("Dual screen", "Dual screen")}
      ${group("Tablets", "Tablet")}
      <h2 id="have">Already have</h2>
      <ul class="fund-have">${F.onHand.map(d => `<li><strong>${esc(d.name)}</strong>, ${esc(d.chip)}. ${esc(d.note)}</li>`).join("")}</ul>
      <p class="fund-updated">Numbers updated ${date(F.updated)}.</p>`;
    return;
  }

  document.title = dev.name + " - Development units - Zaviya";
  const at = STEPS.findIndex(s => s[0] === dev.status);
  root.innerHTML = `
    <p class="fund-back"><a href="./">All devices</a></p>
    <p class="fund-card__kind">${esc(dev.kind)} · ${esc(dev.chip)}</p>
    <h2 class="fund-dev__name">${esc(dev.name)}</h2>
    <p>${esc(dev.covers)}</p>
    <div class="fund-dev">
      ${bar(dev)}
      <p class="fund-nums"><b><strong>${eur(dev.raised)}</strong> of ${eur(dev.goal)}</b>
        <span>${left(dev) ? eur(left(dev)) + " to go" : "Covered"}</span></p>
      ${dev.fromPool ? `<p class="fund-pool-note">${eur(dev.fromPool)} of this is from donations without a code.</p>` : ""}
      <ol class="fund-steps" aria-label="Status">
        ${STEPS.map(([k, label], i) => `<li class="${i < at ? "done" : i === at ? "now" : ""}"${i === at ? ' aria-current="step"' : ""}>${label}</li>`).join("")}
      </ol>
    </div>
    <p>Model: ${esc(dev.model.replace(/ \(.*\)$/, "").replace(/, the (only|top) model$/, ""))}, from <a href="${esc(dev.url)}">${esc(dev.shop)}</a>.</p>
    <h3>Help with this one</h3>
    <p>Add <code>${esc(dev.id)}</code> to the Ko-fi or PayPal message.</p>
    <div class="fund-give">
      <a class="md-button md-button--primary" href="${esc(F.kofi)}">Ko-fi</a>
      <a class="md-button" href="${esc(F.paypal)}">PayPal</a>
    </div>
    <p class="fund-updated">Numbers updated ${date(F.updated)}.</p>`;
})();
