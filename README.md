# 🌍 Orbital AI Sentinel

> A quiet command layer for satellite-informed crisis intelligence, built to help operators detect emerging threats before they escalate.

Orbital AI Sentinel is a polished, high-fidelity crisis monitoring dashboard designed for the Google Solution Challenge 2026. It simulates an advanced operational product that fuses multi-source satellite data, weather telemetry, and geopolitical indicators into a singular, actionable view. 

Powered by mock intelligence data with a Gemini-ready analysis flow, it visualizes global risk across multiple dimensions (Flood, Conflict, Supply Chain, Earthquake, Wildfire) with a premium "light-space" visual system.

### 🔴 Live Deployment
[https://orbital-ai-sentinel.vercel.app](https://orbital-ai-sentinel.vercel.app)

## ✨ Key Features

### 1. 🛰️ Operational Global Dashboard
- **World Risk Map**: Interactive Leaflet map displaying active risk hotspots with category-specific animated markers and detailed tooltips.
- **Live Risk Feed**: A real-time timeline of alerts across different regions, categorized by risk level (Critical, High, Moderate, Low) and signal type (e.g., Orbital SAR, Hydrology, AIS).
- **System Metrics & Status**: Live tracking of Active Alerts, Global Risk Index, Regions Affected, and AI Model Confidence.
- **Intelligence Briefs & Response Timeline**: Synthesized snapshots of ongoing systems (e.g., Flood systems, Conflict signals) and standard operating procedures from detection to action.

### 2. 🧠 AI Analysis Workspace
- **Scenario Analysis**: Dedicated workspace for running "What-if" scenario models on specific regional threats.
- **Synthesized Output**: AI-generated threat assessments breaking down:
  - Immediate Situation & Root Cause
  - Predicted Outcomes
  - Recommended Actions
  - Confidence Scores & Time Horizons
  - Source Signals & Watchpoints
- **Quick Prompts**: One-click analysis for featured high-risk regions.

### 3. 🎨 Premium "Space-Tech" Aesthetic
- **Tactile UI Elements**: Glassmorphism, subtle borders, and soft shadows creating a modern, clean interface.
- **Dynamic Micro-Interactions**: Hover states, live pulse animations for active monitoring, and smooth page transitions.
- **Responsive Layout**: Seamlessly adapts from desktop command center views to mobile situational awareness.

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui primitives
- **Mapping**: Leaflet & React-Leaflet
- **Icons**: Lucide React
- **Data**: Mock intelligence engine (structured for easy integration with Google Gemini APIs)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Bhagy-Yelleti/Orbital-AI-Sentinel.git
   cd Orbital-AI-Sentinel
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## ⚙️ Environment Configuration

The application is designed to run out-of-the-box with a comprehensive mock data engine, ensuring all UI components and analysis flows are fully interactive without any external API dependencies.

For future live model integration, you can provide environment variables:

```bash
# .env.local
GEMINI_API_KEY=your_api_key_here
```

## 🏗️ Build & Verification

To ensure code quality and build readiness before deployment:

```bash
# Run linter
npm run lint

# Create production build
npm run build
```

## 🌐 Deployment

This project is fully optimized for zero-config deployment on Vercel. 
The current AI analysis route utilizes an internal response engine, meaning the deployed application will remain completely functional and visually complete even before external model credentials are wired in.

---
*Built for the Google Solution Challenge 2026.*
