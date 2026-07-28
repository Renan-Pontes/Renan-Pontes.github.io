# Renan Pontes — Portfolio

Personal portfolio site. Static HTML/CSS/JS — no framework, no build step, no tracking.
Deployed with GitHub Pages straight from the repository root.

## Structure

```
index.html              markup + section scaffolding
assets/css/style.css    theme, layout, all animations
assets/js/data.js       content layer  ← edit this to change projects/text
assets/js/app.js        rendering, i18n, canvas background, scroll motion
assets/img/             optional project screenshots
```

## Editing content

Everything you'd normally want to change lives in **`assets/js/data.js`**:

- **`PROJECTS`** — one object per card. Each has an English (`en`) and Portuguese (`pt`) block.
- **`STACK`** — the technology groups in the Stack section.
- **`I18N`** — every static string on the page, in both languages.

### Adding a project

```js
{
  id: 'my-project',
  cat: 'security',        // security | enterprise | ai | web
  art: 'radar',           // radar | wave | graph | grid | flow | stack | shield | terminal
  hue: 188,               // 0-360, tints the cover art and accents
  private: true,          // true → "Confidential" badge, no link
  repo: 'RepoName',       // public projects only → links to github.com/Renan-Pontes/RepoName
  featured: true,         // adds the animated top rail
  tags: ['TypeScript', 'Node.js'],
  en: { title: '', kicker: '', desc: '', points: ['', '', ''] },
  pt: { title: '', kicker: '', desc: '', points: ['', '', ''] }
}
```

### Profile photo

Save a **square** photo as `assets/img/renan.jpg` (600×600 or larger). It appears in the hero
automatically. While the file is missing the portrait stays hidden — nothing breaks.

### Using a real screenshot instead of generated art

Drop the image in `assets/img/` and add an `image` field to the project:

```js
image: 'assets/img/my-project.png'
```

It replaces the animated cover art. Recommended size: 1000×563 (16:9), JPEG, under ~60 KB.

Add `live: 'https://...'` to a public project and it also gets a green **Live** badge
linking to the running deployment.

### Where the current screenshots came from

`mtg-deckbuilder.jpg`, `rpg-dd5e.jpg` and `spritesheet.jpg` were captured with Playwright at
1440×810 @2x, then resized and compressed. Two notes on honesty:

- **spritesheet.jpg** — the AI backend was not running (it needs PyTorch and model weights),
  so "server unavailable" toasts were hidden before the capture. The interface itself is real
  and untouched.
- **rpg-dd5e.jpg** — captured on the live Vercel deploy after clicking through to the character
  creation wizard, because the landing state is an empty list. The "backend offline" banner was
  hidden.

No screenshots exist for client or private work, and none should be added.

## Confidentiality

Client and private work is deliberately anonymised — no client name, no repository name,
no link, no screenshots of real data. Cards describe the problem, the stack and the outcome only.
Keep it that way when adding new entries.

## Local preview

```bash
python -m http.server 8000
# → http://localhost:8000
```

## Accessibility & performance

- Respects `prefers-reduced-motion` — the canvas background, boot sequence, typing and
  scroll animations all switch off.
- No external requests: system fonts, inline SVG, no CDN, no analytics.
