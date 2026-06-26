import Link from "next/link";

type ArchivePathStep = {
  label: string;
  href?: string;
  active?: boolean;
};

type ArchivePathProps = {
  steps: readonly ArchivePathStep[];
  next?: {
    href: string;
    label: string;
    note?: string;
  };
};

export function ArchivePath({ steps, next }: ArchivePathProps) {
  return (
    <article className="rounded-sm border border-white/10 bg-white/[0.03] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.18)] sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-dashed border-white/10 pb-3">
        <p className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-[#8f98a4]">
          Reader Path
        </p>
        <p className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-[#8e8172]">
          guided access
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {steps.map((step) =>
          step.active ? (
            <span
              key={step.label}
              className="inline-flex min-h-9 items-center rounded-full border border-[#d1b79a]/28 bg-[#d1b79a]/10 px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.28em] text-[#f3e6d7]"
            >
              {step.label}
            </span>
          ) : step.href ? (
            <Link
              key={step.label}
              href={step.href}
              className="inline-flex min-h-9 items-center rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.28em] text-[#b8aea0] transition hover:border-white/16 hover:bg-white/[0.045] hover:text-[#e4dace] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbc3aa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b]"
            >
              {step.label}
            </Link>
          ) : (
            <span
              key={step.label}
              className="inline-flex min-h-9 items-center rounded-full border border-white/8 bg-white/[0.015] px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.28em] text-[#8f98a4]"
            >
              {step.label}
            </span>
          ),
        )}
      </div>

      {next ? (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-white/10 pt-3">
          <div className="space-y-1">
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-[#8f98a4]">
              Next Access
            </p>
            {next.note ? (
              <p className="text-sm text-[#b8aea0]">{next.note}</p>
            ) : null}
          </div>
          <Link
            href={next.href}
            className="inline-flex min-h-10 items-center justify-center rounded-sm border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.7rem] font-mono uppercase tracking-[0.3em] text-[#ddd5c9] transition hover:border-white/18 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbc3aa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b]"
          >
            {next.label}
          </Link>
        </div>
      ) : null}
    </article>
  );
}
