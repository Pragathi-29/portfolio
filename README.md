# Pragathi Parthasarathi — Portfolio 

## Quick Start

Open a terminal inside this folder, then run:

```
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Commands

| Command         | Action                        |
|-----------------|-------------------------------|
| npm run dev     | Start dev server (localhost:3000) |
| npm run build   | Build for production          |
| npm run preview | Preview the production build  |

## Customise Your Content

All your personal data is in ONE file: **src/data/index.js**

Edit that file to change:
- Projects (title, description, tags, links)
- Work experience
- Skills list
- Social media links

## Add Your Resume

1. Drop your PDF into the `public/` folder, name it `resume.pdf`
2. The download button in Hero.jsx already points to `/resume.pdf`

## Connect the Contact Form

Open `src/components/Contact.jsx`, find this line:

```js
await new Promise(r => setTimeout(r, 1200))
```

Replace it with your preferred email service, e.g. EmailJS:

```js
import emailjs from '@emailjs/browser'
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', fields, 'PUBLIC_KEY')
```

## Deploy to Vercel (free)

1. Push this folder to a GitHub repo
2. Go to vercel.com → Import project → Select your repo
3. Click Deploy — done!

## Deploy to Netlify (free)

```
npm run build
```

Then drag the `dist/` folder to netlify.com/drop

## Folder Structure

```
src/
  components/     One .jsx + .module.css per component
  hooks/          index.js — useTheme, useTypewriter, useScrollProgress, useInView
  data/           index.js — all your content
  styles/         globals.css — CSS variables & shared classes
  App.jsx
  main.jsx
index.html
vite.config.js
package.json
```
# portfolio
