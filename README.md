## AI Automation Briefing

A single-page site summarizing how teams can plan, launch, and scale AI-powered automation programs. Built with Next.js (App Router) and Tailwind CSS for a fast, deploy-ready experience.

### Local development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to explore the briefing. Update `src/app/page.tsx` to tailor the guidance, metrics, or resources to your organization.

### Production build

```bash
npm run build
npm run start
```

### Deployment

The project is ready for deployment on Vercel:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-f50d89a7
```

If you need to customize telemetry or environment variables, update the scripts in `package.json` before deploying.
