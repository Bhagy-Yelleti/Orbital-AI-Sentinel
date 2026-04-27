import { riskSnapshots } from "@/lib/mock-data";
import { riskToneClasses } from "./theme";

const toneBar: Record<string, string> = {
  critical: "bg-risk-critical",
  high:     "bg-risk-high",
  moderate: "bg-risk-moderate",
  low:      "bg-risk-low",
};

const toneFill: Record<string, number> = {
  critical: 92,
  high:     74,
  moderate: 52,
  low:      28,
};

export function OverviewStrip() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {riskSnapshots.map((item) => (
        <article
          key={item.label}
          className="rounded-[1.5rem] border border-slate-200 bg-white px-5 py-4 panel-shadow"
        >
          <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
            {item.label}
          </div>
          <div className="mt-3 flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-navy">{item.value}</h3>
            <span
              className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${riskToneClasses[item.tone]}`}
            >
              {item.tone}
            </span>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-500">{item.detail}</p>

          {/* fill bar */}
          <div className="mt-3 h-1.5 w-full rounded-full bg-slate-100">
            <div
              className={`h-1.5 rounded-full ${toneBar[item.tone]} transition-all duration-700`}
              style={{ width: `${toneFill[item.tone]}%` }}
            />
          </div>
        </article>
      ))}
    </section>
  );
}
