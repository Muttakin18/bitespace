# ByteSpace — Course Platform Website

A pixel-perfect implementation of the ByteSpace course platform built with **Next.js 14** and **Tailwind CSS**.

## Pages
- `/` — Full Landing Page (Hero, Courses, Categories, Growth, CTA, Testimonials, Footer)
- `/login` — Sign In page
- `/register` — Create Account page

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (icons)

---

## Run Locally

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## Git Branching Workflow

```bash
git clone https://github.com/YOUR_USERNAME/bytespace.git
cd bytespace

# Create feature branch
git checkout -b feature/landing-page

git add .
git commit -m "feat: add ByteSpace landing page, login, and register"
git push origin feature/landing-page

# Then open a Pull Request on GitHub: feature/landing-page -> main
```

---

## Deploy to Vercel

### Via Vercel Dashboard (Easiest)
1. Go to vercel.com -> New Project
2. Import your GitHub repository
3. Framework: Next.js (auto-detected)
4. Click Deploy
5. Live URL: https://bytespace-xxx.vercel.app

### Via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## Project Structure

```
bytespace/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx          # Landing page
│   ├── login/page.tsx    # Sign In
│   └── register/page.tsx # Register
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── TrustedBy.tsx
│   ├── CoursesSection.tsx
│   ├── Categories.tsx
│   ├── ProfessionalGrowth.tsx
│   ├── CTABanner.tsx
│   ├── Testimonials.tsx
│   └── Footer.tsx
└── README.md
```

## Design Tokens

| Token | Value |
|-------|-------|
| Brand Blue | #1B3DE8 |
| Brand Lime | #CCFF00 |
| Font | Inter |
