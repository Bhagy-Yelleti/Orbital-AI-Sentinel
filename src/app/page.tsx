import Link from "next/link";
import {
  Satellite,
  Shield,
  BarChart3,
  Globe2,
  Zap,
  ArrowRight,
  Radio,
  Brain,
  Eye,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 grid-bg text-navy">
      <nav className="fixed left-0 right-0 top-0 z-50 glass-card">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy shadow-sm">
              <Satellite className="h-4 w-4 text-cyan-accent" />
            </div>
            <span className="font-semibold tracking-tight">
              Orbital AI Sentinel
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-500">
            <a href="#features" className="rounded-md px-1 py-1 hover:text-navy">
              Features
            </a>
            <a href="#how-it-works" className="rounded-md px-1 py-1 hover:text-navy">
              How It Works
            </a>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 rounded-lg bg-navy px-4 py-2 text-sm font-medium text-white shadow-sm hover:-translate-y-0.5 hover:bg-navy-light hover:shadow-md"
            >
              Launch Dashboard
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 rounded-lg bg-navy px-4 py-2 text-sm font-medium text-white md:hidden"
          >
            Launch
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </nav>

      <section className="relative overflow-hidden px-5 pb-20 pt-32 sm:px-6">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/60 opacity-50" />
        <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/50 opacity-40" />
        <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-accent/15 opacity-50" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="animate-fade-in-up">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-500 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-risk-low animate-live-pulse" />
              Monitoring 142 regions in real-time
            </div>
          </div>

          <h1 className="animate-fade-in-up text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Orbital AI Sentinel
          </h1>

          <p className="animate-fade-in-up-delay-1 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500 md:text-xl">
            A quiet command layer for satellite-informed crisis intelligence,
            built to help operators detect emerging threats before they escalate.
          </p>

          <div className="animate-fade-in-up-delay-2 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl bg-navy px-6 py-3.5 font-medium text-white shadow-sm hover:-translate-y-0.5 hover:bg-navy-light hover:shadow-lg hover:shadow-navy/15"
            >
              <Globe2 className="h-4.5 w-4.5" />
              Launch Dashboard
            </Link>
            <Link
              href="/analysis"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-medium text-navy shadow-sm hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
            >
              <Brain className="h-4.5 w-4.5" />
              AI Analysis
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-white/65 px-5 py-10 sm:px-6">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: "142", label: "Regions Monitored" },
            { value: "24", label: "Active Alerts" },
            { value: "94.2%", label: "AI Confidence" },
            { value: "<2min", label: "Detection Latency" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl px-3 py-2 text-center">
              <div className="text-3xl font-semibold tracking-tight md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="px-5 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Intelligence at every layer
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              Multi-source data fusion powered by advanced AI models delivers
              actionable intelligence across all risk dimensions.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Satellite,
                title: "Orbital Surveillance",
                description:
                  "Continuous monitoring via Sentinel-2, Landsat, and commercial SAR satellite constellations with sub-hourly revisit rates.",
                accent: "bg-cyan-accent/10 text-cyan-accent",
              },
              {
                icon: Brain,
                title: "Predictive AI Engine",
                description:
                  "Transformer-based models trained on 15 years of crisis data. Pattern matching across environmental, social, and geopolitical signals.",
                accent: "bg-amber-accent/10 text-amber-accent",
              },
              {
                icon: Shield,
                title: "Risk Assessment",
                description:
                  "Multi-dimensional risk scoring combining probability, impact severity, population exposure, and infrastructure vulnerability.",
                accent: "bg-risk-critical/10 text-risk-critical",
              },
              {
                icon: Radio,
                title: "Real-time Alerts",
                description:
                  "Automated alert generation with intelligent prioritization. Push notifications to decision-makers within 120 seconds of detection.",
                accent: "bg-risk-low/10 text-risk-low",
              },
              {
                icon: BarChart3,
                title: "Trend Analytics",
                description:
                  "Historical pattern analysis and trend forecasting. Identify escalation trajectories and de-escalation windows.",
                accent: "bg-cyan-muted/10 text-cyan-muted",
              },
              {
                icon: Eye,
                title: "Scenario Modeling",
                description:
                  "What-if analysis and Monte Carlo simulations for crisis scenario planning. Test intervention strategies before deployment.",
                accent: "bg-navy/10 text-navy",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group tactile-card rounded-2xl border border-slate-200/80 bg-white p-6"
              >
                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${feature.accent}`}
                >
                  <feature.icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-105" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="bg-navy px-5 py-24 text-white sm:px-6"
      >
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              From orbit to action
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Our end-to-end pipeline processes terabytes of satellite data
              daily, delivering actionable intelligence in under 2 minutes.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Collect",
                description:
                  "Multi-spectral satellite imagery, weather data, sensor networks, and open-source intelligence feeds.",
              },
              {
                step: "02",
                title: "Analyze",
                description:
                  "AI models fuse data sources, detect anomalies, and identify patterns across historical baselines.",
              },
              {
                step: "03",
                title: "Predict",
                description:
                  "Probabilistic risk models generate forecasts with confidence intervals and scenario projections.",
              },
              {
                step: "04",
                title: "Alert",
                description:
                  "Actionable intelligence delivered to decision-makers with recommended response protocols.",
              },
            ].map((item) => (
              <div key={item.step} className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all hover:-translate-y-0.5 hover:bg-white/[0.055]">
                <div className="mb-4 text-5xl font-semibold text-navy-muted">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Enter the operational view
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Access the global risk dashboard and explore AI-powered crisis
            intelligence in real-time.
          </p>
          <Link
            href="/dashboard"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-navy px-8 py-4 text-lg font-medium text-white shadow-sm hover:-translate-y-0.5 hover:bg-navy-light hover:shadow-lg hover:shadow-navy/15"
          >
            Launch Dashboard
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50 px-5 py-8 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
          <div className="flex items-center gap-2">
            <Satellite className="h-4 w-4 text-cyan-accent" />
            <span>Orbital AI Sentinel</span>
          </div>
          <div>
            Built for Google Solution Challenge 2026
          </div>
          <div className="flex items-center gap-1">
            <Zap className="h-3.5 w-3.5" />
            Powered by Gemini AI
          </div>
        </div>
      </footer>
    </div>
  );
}
