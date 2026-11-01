# Omar Mohamed — Personal Portfolio

A responsive, animated personal portfolio for Omar Mohamed built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Requirements
- Node.js 18.17+ (Node.js 20 LTS recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Personalize the website

- **Profile photo:** Replace `public/images/omar-mohamed.jpg` with your own image, keeping the same filename.
- **Name, social links, interest cards, skills, and work categories:** Edit the arrays near the top of `components/Portfolio.tsx`.
- **About text and hero copy:** Edit the relevant text directly in `components/Portfolio.tsx`.
- **Phone and WhatsApp:** Update `tel:+201558791003` and `https://wa.me/201558791003` in the contact section and footer of `components/Portfolio.tsx`.
- **Colors and layout:** Edit CSS variables at the top of `app/globals.css`.
- **SEO title and description:** Edit `metadata` in `app/layout.tsx`.
- **Intro animation:** Adjust the `intro-progress` duration in `components/Portfolio.tsx` and its animation styling in `app/globals.css`.

## Content notes
- The My Work cards are explicitly portfolio categories/placeholders, not claims of completed projects.
- No follower counts, proficiency percentages, client names, or unprovided credentials are fabricated.
- Social links open in a new tab. Phone and WhatsApp contact links are active.
- The intro respects reduced-motion settings and can be skipped. It plays once per browser tab session.

## Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  Portfolio.tsx
public/
  favicon.svg
  images/omar-mohamed.jpg
```
