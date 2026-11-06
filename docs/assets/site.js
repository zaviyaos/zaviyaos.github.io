// Mark tables so phones can show each row as a card. An attribute, not a class:
// the theme only styles tables that have no class.
function labelTables() {
  document.querySelectorAll(".md-typeset table").forEach(t => {
    const heads = [...t.querySelectorAll("thead th")].map(th => th.textContent.trim());
    t.dataset.stack = heads.length > 2 ? "labeled" : "plain";
    t.querySelectorAll("tbody tr").forEach(tr =>
      [...tr.children].forEach((td, i) => {
        td.dataset.label = heads[i] || "";
        if (!td.textContent.trim()) td.classList.add("is-empty");
      }));
  });
}
if (typeof document$ !== "undefined") document$.subscribe(labelTables);
else document.addEventListener("DOMContentLoaded", labelTables);
