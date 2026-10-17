# Jerin Davis Portfolio

A responsive React + Vite portfolio starter inspired by the approved charcoal / warm ivory / champagne design reference.

## Run locally

1. Install Node.js (LTS) if it is not already installed.
2. Extract this folder.
3. Open the folder in VS Code.
4. Open Terminal and run:

```bash
npm install
npm run dev
```

5. Open the localhost URL printed in the terminal.

## Before publishing

- Replace `your.email@example.com` in `src/App.jsx` with your real email.
- Add your final resume PDF to `public/Jerin_Davis_Resume.pdf` (create the `public` folder if needed).
- Verify the exact DRUV360 employment dates. They are intentionally shown as `8 months` because exact dates were not confirmed in the available context.
- Check project repository links and add a live demo URL only if it exists.
- Confirm all listed skills match your actual experience.

## Build for production

```bash
npm run build
npm run preview
```

Deploy the project to Vercel by importing the folder/repository. Vite's default build output is `dist/`.

## Notes

- The portrait and project thumbnails are CSS illustrations/placeholders so the page works without external image dependencies.
- The resume button currently gives a reminder until you add the PDF file.
- Contact form is represented by email links; a real form submission endpoint can be added later.
