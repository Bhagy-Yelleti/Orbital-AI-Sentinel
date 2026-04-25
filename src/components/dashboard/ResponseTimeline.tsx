import { responseTimeline } from "@/lib/mock-data";

export function ResponseTimeline() {
  return (
    <section className="rounded-[1.75rem] border border-slate-200 bg-navy px-5 py-5 text-white panel-shadow">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Decision pipeline
          </p>
          <h2 className="mt-2 text-lg font-semibold">
            From signal detection to operator action
          </h2>
        </div>
        <span className="rounded-full bg-white/8 px-3 py-1 text-xs text-slate-300">
          End-to-end latency under 20 min
        </span>
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-4">
        {responseTimeline.map((point) => (
          <article
            key={point.time}
            className="rounded-[1.35rem] border border-white/10 bg-white/4 p-4"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              {point.time}
            </div>
            <h3 className="mt-3 text-base font-semibold">{point.label}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{point.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
