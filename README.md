# Zaviya website

The website for [Zaviya](https://github.com/hashtagbasit/Zaviya),
built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) and
published to GitHub Pages on every push to `main`.

## Editing

Pages are Markdown files in `docs/`, the menu is `nav` in `mkdocs.yml`.

```sh
pip install "mkdocs<2" mkdocs-material
mkdocs serve
```

Then open http://127.0.0.1:8000/zaviya/.

## Publishing

1. In the repo's **Settings > Pages**, set **Source** to **GitHub Actions**.
2. Push to `main`. The site is live at https://steamos-arm-port.github.io/zaviya/ a minute later.
