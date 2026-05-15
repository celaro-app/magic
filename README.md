<img width="1600" height="900" alt="magic-launch-image" src="https://github.com/user-attachments/assets/7627b17a-a3d6-4910-bc15-436b617f7a35" />

### Features
- Highly modular using block based components with content based props.
- Uses React Email and TailwindCSS

---

### Quickstart

All blocks are available in the `/blocks`.

If you want to preview each block, you can setup the local project by using:
```bash
npm install
cp .env.example .env
cp email-content.example.json email-content.json
npm run dev
```

Then you can access the project at http://localhost:3000

---

### Sending a test email

Open `.env` and set `RESEND_API_KEY` from your Resend dashboard (https://resend.com/api-keys).

Edit `email-content.json` so it targets the blocks you want to test and includes valid `send` info:

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

Then send:

```bash
npm run send
```

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Next.js preview server. |
| `npm run build` | Build the Next.js app. |
| `npm run start` | Start the production build. |
| `npm run send` | Render the block configured in `email-content.json` and send via Resend. |
