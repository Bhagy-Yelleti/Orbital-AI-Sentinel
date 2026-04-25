# Orbital AI Sentinel

Orbital AI Sentinel is a polished crisis intelligence dashboard built for a hackathon setting, but designed to feel like a serious operational product. It combines a premium light-space visual system with a global orbital risk map, live alert feed, and AI-generated scenario analysis.

## Stack

- Next.js 16 App Router
- React 19
- Tailwind CSS v4
- shadcn/ui primitives
- Leaflet / React Leaflet
- Mock intelligence data with Gemini-ready analysis flow

## Features

- Editorial landing page with premium space-tech styling
- Fully navigable dashboard shell with sidebar and live system navbar
- Global risk map with clickable hotspot details
- Realistic live alert feed and monitoring summaries
- AI analysis workspace with scenario prompts and generated outputs
- Loading states and production build support

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment

The app runs fully with mocked intelligence outputs by default.

Optional variables for future live model wiring:

```bash
GEMINI_API_KEY=
```

## Verification

```bash
npm run lint
npm run build
```

## Deployment

This project is ready for Vercel deployment. The current AI analysis route uses a mock response engine so the UI remains complete even before external model credentials are added.
