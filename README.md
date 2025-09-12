# Virofund Landing Page

A modern, mobile-first landing page for Virofund, built with [Next.js](https://nextjs.org), React, and Firebase.

## Features

- Waitlist signup with Firebase integration
- Animated progress bar for founding member spots
- Responsive design for mobile and desktop
- Sections: Hero, Features, How It Works, Testimonials, Waitlist, Footer
- Sidebar navigation for mobile
- Styled with custom CSS and [react-awesome-reveal](https://github.com/dennismorello/react-awesome-reveal) animations

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install --legacy-peer-deps
   ```
2. **Set up environment variables:**

   - Copy `.env.local` and fill in your Firebase credentials.

3. **Run the development server:**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- [`src/app`](src/app) – Main app files, layout, and styles
- [`src/components`](src/components) – Reusable UI components and sections
- [`src/lib`](src/lib) – Firebase and authentication logic

## Firebase Integration

- Configure your Firebase project in [`src/lib/firebase.ts`](src/lib/firebase.ts).
- Waitlist submissions are handled in [`src/lib/auth.ts`](src/lib/auth.ts).

## Customization

- Edit [`src/app/MobileLanding.tsx`](src/app/MobileLanding.tsx) to change the landing page layout.
- Update styles in [`src/app/MobileLanding.css`](src/app/MobileLanding.css) and [`src/app/page.module.css`](src/app/page.module.css).

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or any platform supporting Next.js.

## License

This project is private and not available for open source usage
