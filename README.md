# Gisil Beauty Lounge — $0 MVP Website

Premium beauty lounge website built with Next.js, TypeScript and Tailwind CSS.

## Media files (must exist before deploy)
- public/logo.png
- public/videos/hero.mp4
- public/images/hero-poster.jpg

## Local preview (optional)
1. Install Node.js LTS from https://nodejs.org
2. npm install
3. npm run dev → http://localhost:3000

## Deploy free (GitHub + Vercel)
1. Create a free GitHub repository named gisil-beauty-lounge
2. Choose "uploading an existing file", select EVERYTHING inside the project folder (including src/ and public/), and commit
3. Create a free Vercel account → Import the repository → keep defaults → Deploy
4. After the first deploy: Vercel → Settings → Environment Variables → add
   NEXT_PUBLIC_SITE_URL = your live URL (e.g. https://gisil-beauty-lounge.vercel.app)
5. Redeploy from Vercel so the QR page and social previews use the real URL

## After deploy
- Verify assets: /logo.png, /videos/hero.mp4, /images/hero-poster.jpg
- Submit one test booking form, then click the FormSubmit activation email sent to gisilbeauty1@gmail.com
- Open /qr to download your printable menu QR code