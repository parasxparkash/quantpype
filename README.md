# QuantPype

**Open platform and framework** for quantitative workflows: orchestrate pipelines and agents (rule-based and/or small ML models), keep alpha and execution local, use cloud only where you choose. Self-hostable; optional SaaS components later. See the [Wiki](./doc/wiki.md) for vision, features, and docs.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on GitHub Pages

1. **Push the repo to GitHub** (if you haven’t already).

2. **Turn on GitHub Pages:**
   - Repo → **Settings** → **Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.

3. **Trigger the workflow:**
   - Push to the `main` or `master` branch, or run the workflow from **Actions** → **Deploy to GitHub Pages** → **Run workflow**.

4. **Open your site:**  
   `https://<your-username>.github.io/<repo-name>/`  
   (e.g. `https://myuser.github.io/quantpype/`).

The workflow builds the static export and deploys the `out` folder. For a **user/org site** (`<username>.github.io` repo), remove or leave `BASE_PATH` unset in the workflow and redeploy so the app is served from the root.

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
