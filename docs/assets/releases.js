// Releases page: pick a chip, get its image, details and the changes that apply to it.
(function () {
  const D = window.ZAVIYA;
  const root = document.getElementById("rel-app");
  if (!D || !root) return;

  const latest = D.releases[0];
  const ORDER = ["sm8750", "sm8650", "sm8550", "sm8250"];
  const devices = {};
  const byChip = {};
  D.makers.forEach(m => m.devices.forEach(([id, name, chip]) => {
    devices[id] = { id, name, chip, maker: m.name };
    (byChip[chip] = byChip[chip] || []).push({ maker: m.name, name });
  }));

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const dir = latest.tag.replace(/^v/, "");
  const fileName = chip => `zaviya-${chip}-${latest.version}.img.zst`;
  const fileUrl = chip => `${D.base}/${dir}/${fileName(chip)}`;
  const sumsUrl = `${D.base}/${dir}/SHA256SUMS`;
  const gb = b => (b / 1e9).toFixed(1) + " GB";
  const date = iso => new Date(iso + "T12:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const KIND = { fresh: "Fresh install", update: "Update", hotfix: "Hotfix" };
  const devText = c => (byChip[c] || []).map(d => `${d.maker} ${d.name}`).join(", ");
  const brandsOf = c => [...new Set((byChip[c] || []).map(d => d.maker))];
  const devList = (c, brand) => (byChip[c] || []).filter(d => d.maker === brand)
    .map(d => `<li>${esc(d.name)}</li>`).join("");
  function showBrand(card, brand) {
    card.querySelectorAll(".rel-brand").forEach(b => b.setAttribute("aria-selected", b.dataset.brand === brand));
    card.querySelector(".rel-chip__devs").innerHTML = devList(card.dataset.chip, brand);
  }
  const forChip = (e, chip) => e.on === "all" || e.on.includes(chip);

  root.innerHTML = `
    <div class="rel-head">
      <p class="rel-kicker">Latest · ${date(latest.date)} · ${KIND[latest.kind]}</p>
      <h2 class="rel-version" id="latest">Zaviya ${esc(latest.version)}</h2>
      <p class="rel-summary">${esc(latest.summary)}</p>
      ${latest.note ? `<p class="rel-note">${esc(latest.note)}</p>` : ""}
    </div>
    <h3 class="rel-h"><span class="rel-step">1</span>Choose the chip</h3>
    <div class="rel-chips" role="radiogroup" aria-label="Chip">
      ${ORDER.map(c => {
        const list = byChip[c] || [];
        return `
        <div class="rel-chip" data-chip="${c}">
          <button type="button" class="rel-chip__pick" role="radio" aria-checked="false" data-chip="${c}">
            <span class="rel-chip__name">${esc(D.chips[c])}</span>
            <span class="rel-chip__code">${c}</span>
          </button>
          <button type="button" class="rel-chip__more" aria-expanded="false" aria-controls="rel-devs-${c}">
            ${list.length} devices <span class="rel-chip__caret" aria-hidden="true"></span>
          </button>
          <div class="rel-chip__panel" id="rel-devs-${c}" hidden>
            <div class="rel-brands" role="tablist" aria-label="Brand">
              ${brandsOf(c).map((b, i) => `<button type="button" role="tab" class="rel-brand" aria-selected="${i === 0}" data-brand="${esc(b)}">${esc(b)}</button>`).join("")}
            </div>
            <ul class="rel-chip__devs">${devList(c, brandsOf(c)[0])}</ul>
          </div>
        </div>`;
      }).join("")}
    </div>
    <section class="rel-out" id="rel-out" aria-live="polite" hidden>
      <h3 class="rel-h"><span class="rel-step">2</span>Download</h3>
      <div id="rel-file"></div>
    </section>
    <section class="rel-changes" id="rel-changes" hidden>
      <div class="rel-changes__bar">
        <h3 id="rel-changes-h">Changes in ${esc(latest.version)}</h3>
        <label class="rel-toggle"><input type="checkbox" id="rel-all"> Show changes for every chip</label>
      </div>
      <ul id="rel-change-list" class="rel-list"></ul>
      <h4>Known issues</h4>
      <ul id="rel-issue-list" class="rel-list rel-list--issues"></ul>
    </section>`;

  const out = root.querySelector("#rel-out");
  const changes = root.querySelector("#rel-changes");
  const allBox = root.querySelector("#rel-all");
  let chip = null;

  function renderFile() {
    const f = latest.files[chip] || {};
    root.querySelector("#rel-file").innerHTML = `
      <div class="rel-file">
        <div class="rel-file__main">
          <p class="rel-for">${esc(D.chips[chip])} image, for ${(byChip[chip] || []).length} handhelds from ${esc(brandsOf(chip).join(", ").replace(/, ([^,]*)$/, " and $1"))}.</p>
          <a class="md-button md-button--primary rel-dl" href="${fileUrl(chip)}">Download ${esc(fileName(chip))}</a>
          <p class="rel-next">Next: <a href="../getting-started/install/">flash it to a microSD card</a>.</p>
        </div>
        <dl class="rel-meta">
          ${f.bytes ? `<dt>Size</dt><dd>${gb(f.bytes)} compressed. Needs a 32 GB or larger card.</dd>` : ""}
          <dt>SHA-256</dt><dd>${f.sha256
            ? `<code class="rel-sha">${f.sha256}</code><br><button type="button" class="rel-copy" data-copy="${f.sha256}">Copy</button>`
            : `<a href="${sumsUrl}">SHA256SUMS</a>`}</dd>
          <dt>Flash with</dt><dd>Raspberry Pi Imager, or Rufus 4.7 or newer. Both read <code>.img.zst</code> directly.</dd>
          <dt>Release</dt><dd>${esc(latest.version)}, ${date(latest.date)}. <a href="https://github.com/hashtagbasit/Zaviya/releases/tag/${latest.tag}">Full notes</a></dd>
        </dl>
      </div>`;
  }

  function renderLists() {
    const all = allBox.checked;
    const pick = list => (list || []).filter(e => all || forChip(e, chip));
    const item = e => {
      let scope = "";
      if (e.devices) scope = e.devices.map(id => devices[id].name).join(", ");
      else if (e.on !== "all" && all) scope = e.on.map(c => D.chips[c]).join(", ");
      return `<li>${scope ? `<span class="rel-scope">${esc(scope)}</span>` : ""}${esc(e.text)}</li>`;
    };
    root.querySelector("#rel-changes-h").textContent = all
      ? `Changes in ${latest.version}` : `Changes in ${latest.version} for the ${D.chips[chip]}`;
    const i = pick(latest.issues);
    root.querySelector("#rel-change-list").innerHTML = pick(latest.changes).map(item).join("");
    root.querySelector("#rel-issue-list").innerHTML = i.length ? i.map(item).join("") : `<li class="rel-none">None known.</li>`;
  }

  function select(c, scroll) {
    chip = c;
    out.hidden = changes.hidden = false;
    allBox.checked = false;
    renderFile();
    renderLists();
    if (scroll && window.matchMedia("(max-width: 1000px)").matches) out.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function mark(c) {
    root.querySelectorAll(".rel-chip").forEach(el => {
      const on = el.dataset.chip === c;
      el.classList.toggle("is-on", on);
      el.querySelector(".rel-chip__pick").setAttribute("aria-checked", on);
    });
  }

  root.addEventListener("change", ev => { if (ev.target === allBox) renderLists(); });

  root.addEventListener("click", ev => {
    const pickBtn = ev.target.closest(".rel-chip__pick");
    if (pickBtn) {
      mark(pickBtn.dataset.chip);
      select(pickBtn.dataset.chip, true);
      try { history.replaceState(null, "", "#" + pickBtn.dataset.chip); } catch (e) {}
      return;
    }
    const brand = ev.target.closest(".rel-brand");
    if (brand) { showBrand(brand.closest(".rel-chip"), brand.dataset.brand); return; }
    const more = ev.target.closest(".rel-chip__more");
    if (more) {
      const open = more.getAttribute("aria-expanded") !== "true";
      more.setAttribute("aria-expanded", open);
      more.nextElementSibling.hidden = !open;
      return;
    }
    const b = ev.target.closest(".rel-copy");
    if (!b) return;
    navigator.clipboard.writeText(b.dataset.copy).then(() => {
      b.textContent = "Copied"; setTimeout(() => (b.textContent = "Copy"), 1500);
    });
  });

  // A link may name a chip (#sm8650) or a handheld (#pocket-fit).
  function fromHash() {
    const id = location.hash.slice(1);
    const c = D.chips[id] ? id : devices[id] && devices[id].chip;
    if (!c || c === chip) return;
    mark(c);
    select(c, false);
    if (devices[id]) {
      const more = root.querySelector(`.rel-chip[data-chip="${c}"] .rel-chip__more`);
      more.setAttribute("aria-expanded", true);
      more.nextElementSibling.hidden = false;
      showBrand(more.closest(".rel-chip"), devices[id].maker);
    }
  }

  // archive
  const archive = document.getElementById("rel-archive");
  if (archive) {
    archive.innerHTML = `<ol class="rel-log">${D.releases.map(r => `
      <li class="rel-log__row">
        <span class="rel-log__ver">${esc(r.version)}</span>
        <time class="rel-log__date" datetime="${r.date}">${date(r.date)}</time>
        <span class="rel-kind rel-kind--${r.kind}">${KIND[r.kind]}</span>
        <p class="rel-log__text">${esc(r.summary)} <a href="https://github.com/hashtagbasit/Zaviya/releases/tag/${r.tag}">Notes</a></p>
      </li>`).join("")}</ol>`;
  }

  document.documentElement.classList.add("rel-js");
  fromHash();
  window.addEventListener("hashchange", fromHash);
})();
