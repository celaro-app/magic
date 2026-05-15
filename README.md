# Magic

- Preview any block in the browser at `/block/[block-name]`.
- Drive both the preview and the test email with a single `email-content.json` file at the project root.
- Run `npm run send` to deliver the current JSON content as an email to a test address.


## Requirements
- Node.js 22.x
- Resend account (if you want to send test emails)

## Setup

```bash
npm install
cp .env.example .env
cp email-content.example.json email-content.json
```

## Project layout

```
.
├── app/                    Next.js App Router (preview UI)
│   ├── page.tsx            Landing page with links to every block
│   └── block/[blockName]/  Dynamic preview route (iframe with rendered email HTML)
├── blocks/                 React Email blocks (hero, cards, cta, footer)
├── lib/
│   ├── block-registry.tsx  Slug -> component + default props
│   ├── load-email-content.ts  Reads email-content.json
│   └── render-block.tsx    Wraps a block in Html/Head/Body/Tailwind and renders to HTML
├── scripts/send.ts         CLI that renders + sends via Resend
├── email-content.example.json  Template for the working JSON
└── .env.example            Required environment variables
```



Open `.env` and set `RESEND_API_KEY` from your Resend dashboard (https://resend.com/api-keys).

## Previewing blocks

```bash
npm run dev
```

Then visit:

- http://localhost:3000 — index of all blocks
- http://localhost:3000/block/hero
- http://localhost:3000/block/cards
- http://localhost:3000/block/cta
- http://localhost:3000/block/footer

Each preview renders the block exactly the way it will be emailed (React Email + Tailwind, inside an iframe). If `email-content.json` has a `block` value matching the slug, its `content` is used as props; otherwise sensible defaults are shown.

## Sending a test email

Edit `email-content.json` so it targets the block you want to test and includes valid `send` info:

```json
{
  "send": {
    "to": "you@example.com",
    "from": "Magic <noreply@yourdomain.com>",
    "subject": "Hero block test"
  },
  "block": "hero",
  "content": {
    "label": "New release",
    "heroImage": "https://...",
    "headlineLine1": "Build emails",
    "headlineLine2": "that feel native.",
    "descriptionParagraph1": "...",
    "descriptionParagraph2": "...",
    "ctaLabel": "Read more",
    "ctaUrl": "https://example.com"
  }
}
```

The `content` object must match the props of the chosen block. The block interfaces live in [`blocks/hero/index.tsx`](./blocks/hero/index.tsx), [`blocks/cards/index.tsx`](./blocks/cards/index.tsx), [`blocks/cta/index.tsx`](./blocks/cta/index.tsx), and [`blocks/footer/index.tsx`](./blocks/footer/index.tsx).

Then send:

```bash
npm run send
```

The script reads `email-content.json`, renders the chosen block to HTML, and sends it via Resend.


## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Next.js preview server. |
| `npm run build` | Build the Next.js app. |
| `npm run start` | Start the production build. |
| `npm run send` | Render the block configured in `email-content.json` and send via Resend. |
