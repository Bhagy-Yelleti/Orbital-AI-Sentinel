import { systemInsights } from "@/lib/mock-data";

export function IntelligenceBrief() {
  return (
    <section className="rounded-[1.75rem] border border-slate-200 bg-white p-5 panel-shadow">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
            Strategic brief
          </p>
          <h2 className="mt-2 text-lg font-semibold text-navy">
            AI synthesis of the current global posture
          </h2>
        </div>
        <div className="rounded-full bg-amber-soft px-3 py-1 text-xs font-medium text-amber-accent">
          Updated this cycle
        </div>
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        {systemInsights.map((insight) => (
          <article
            key={insight.id}
            className="rounded-[1.35rem] border border-slate-100 bg-slate-50/70 p-4"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-accent">
              {insight.eyebrow}
            </p>
            <h3 className="mt-3 text-base font-semibold leading-6 text-navy">
              {insight.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {insight.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
