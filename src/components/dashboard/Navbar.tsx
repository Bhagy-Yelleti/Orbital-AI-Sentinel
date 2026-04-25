"use client";

import { useEffect, useState } from "react";
import { Bell, Clock3, Search, ShieldCheck, Signal, Sparkles } from "lucide-react";

function formatUtcTime() {
  return new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "UTC",
  });
}

export function Navbar() {
  const [time, setTime] = useState(formatUtcTime);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTime(formatUtcTime());
    }, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200/80 bg-white/85 px-4 backdrop-blur-xl lg:px-6">
      <div className="flex flex-1 items-center gap-3">
        <div className="relative max-w-md flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search regions, scenarios, or signals"
            className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50/80 pl-10 pr-4 text-sm text-navy placeholder:text-slate-400 focus:border-cyan-accent focus:bg-white focus:outline-none focus:ring-4 focus:ring-cyan-accent/10"
          />
        </div>
      </div>

      <div className="ml-4 flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-500 xl:flex">
          <Signal className="h-3.5 w-3.5 text-risk-low" />
          All systems operational
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-500 md:flex">
          <ShieldCheck className="h-3.5 w-3.5 text-cyan-accent" />
          Threat level elevated
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 sm:flex">
          <Clock3 className="h-3.5 w-3.5 text-slate-400" />
          {time} UTC
        </div>
        <button className="relative rounded-2xl border border-slate-200 bg-white p-2.5 hover:bg-slate-50">
          <Bell className="h-4.5 w-4.5 text-slate-500" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-risk-critical" />
        </button>
        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-xs font-semibold text-white">
            OS
          </div>
          <div className="hidden text-left sm:block">
            <p className="text-sm font-medium text-navy">Orbital Ops</p>
            <p className="text-xs text-slate-400">Sentinel control</p>
          </div>
          <Sparkles className="hidden h-4 w-4 text-amber-accent sm:block" />
        </div>
      </div>
    </header>
  );
}
