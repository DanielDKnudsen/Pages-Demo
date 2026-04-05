# AGENTS.md

## Repo overview
Static HTML site for "FoldbyHuse" — a Danish row-house real estate project. No build system, package manager, tests, or CI. Open `index.html` directly in a browser to preview.

## File structure
- `index.html` … `index7.html` — six versioned drafts of the same page, linked via a floating version nav at the bottom
- `images/` — JPGs referenced by gallery sections
- `.opencode/` — OpenCode config (gitignored)

## OpenCode model
Local llama.cpp server at `http://127.0.0.1:8080/v1`, model id `local-model`. Requires the server to be running locally before starting OpenCode.

## Conventions
- All user-facing text is in Danish
- Each HTML file is fully self-contained (inline CSS + JS, no external dependencies)
- Gallery images expect filenames like `images/<scene>-<variant>.jpg`