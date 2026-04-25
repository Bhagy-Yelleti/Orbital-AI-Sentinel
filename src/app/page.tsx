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
    <div className="min-h-screen bg-slate-50 grid-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-navy flex items-center justify-center">
              <Satellite className="w-4 h-4 text-cyan-accent" />
            </div>
            <span className="font-semibold text-navy tracking-tight">
              Orbital AI Sentinel
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-500">
            <a href="#features" className="hover:text-navy transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-navy transition-colors">
              How It Works
            </a>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-navy text-white text-sm font-medium rounded-lg hover:bg-navy-light transition-colors"
            >
              Launch Dashboard
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <Link
            href="/dashboard"
            className="md:hidden inline-flex items-center gap-1.5 px-4 py-2 bg-navy text-white text-sm font-medium rounded-lg"
          >
            Launch
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Subtle orbital ring decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-slate-200/50 opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-slate-200/30 opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-cyan-accent/10 opacity-40" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-500 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-risk-low animate-live-pulse" />
              Monitoring 142 regions in real-time
            </div>
          </div>

          <h1 className="animate-fade-in-up text-5xl md:text-7xl font-bold tracking-tight text-navy leading-[1.1]">
            Predicting crises
            <br />
            <span className="text-cyan-accent">before they happen.</span>
          </h1>

          <p className="animate-fade-in-up-delay-1 mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            AI-powered global intelligence from orbital data. Fusing satellite
            imagery, sensor networks, and machine learning to detect emerging
            threats before they escalate.
          </p>

          <div className="animate-fade-in-up-delay-2 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-navy text-white font-medium rounded-xl hover:bg-navy-light transition-all hover:shadow-lg hover:shadow-navy/20 hover:-translate-y-0.5"
            >
              <Globe2 className="w-4.5 h-4.5" />
              Launch Dashboard
            </Link>
            <Link
              href="/analysis"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-navy font-medium rounded-xl border border-slate-200 hover:border-slate-300 transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <Brain className="w-4.5 h-4.5" />
              AI Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 px-6 border-y border-slate-200/60 bg-white/50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "142", label: "Regions Monitored" },
            { value: "24", label: "Active Alerts" },
            { value: "94.2%", label: "AI Confidence" },
            { value: "<2min", label: "Detection Latency" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
              Intelligence at every layer
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              Multi-source data fusion powered by advanced AI models delivers
              actionable intelligence across all risk dimensions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
                className="group p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 transition-all hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${feature.accent} flex items-center justify-center mb-4`}
                >
                  <feature.icon className="w-5 h-5" />
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

      {/* How it works */}
      <section
        id="how-it-works"
        className="py-24 px-6 bg-navy text-white"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              From orbit to action
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Our end-to-end pipeline processes terabytes of satellite data
              daily, delivering actionable intelligence in under 2 minutes.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
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
              <div key={item.step} className="relative">
                <div className="text-5xl font-bold text-navy-muted mb-4">
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

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
            Ready to see the future?
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Access the global risk dashboard and explore AI-powered crisis
            intelligence in real-time.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-navy text-white font-medium rounded-xl hover:bg-navy-light transition-all hover:shadow-lg hover:shadow-navy/20 hover:-translate-y-0.5 text-lg"
          >
            Launch Dashboard
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Satellite className="w-4 h-4 text-cyan-accent" />
            <span>Orbital AI Sentinel</span>
          </div>
          <div>
            Built for Google Solution Challenge 2026
          </div>
          <div className="flex items-center gap-1">
            <Zap className="w-3.5 h-3.5" />
            Powered by Gemini AI
          </div>
        </div>
      </footer>
    </div>
  );
}
