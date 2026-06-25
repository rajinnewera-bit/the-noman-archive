import Link from "next/link";

export default function RecoveredDiaryHoldingPage() {
  return (
    <main className="relative overflow-hidden bg-[#05070b] text-[#f4efe6]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(140,109,82,0.2),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(92,104,121,0.16),transparent_24%),linear-gradient(180deg,#06080c_0%,#04060a_48%,#030408_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4.5rem,4.5rem_100%]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10"
      />

      <section className="relative">
        <div className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col justify-center px-6 py-20 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-3 text-[0.68rem] uppercase tracking-[0.32em] text-[#b7ac9d]/80 sm:text-[0.72rem]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#b28a64] shadow-[0_0_12px_rgba(178,138,100,0.8)]"
              />
              Recovered Diary
            </div>
            <Link
              href="/archive/subject/nm-01"
              className="font-mono text-[#8f98a4] transition hover:text-[#d7cec2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbc3aa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b]"
            >
              Return to Dossier
            </Link>
          </div>

          <article className="mt-12 overflow-hidden rounded-sm border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] p-6 shadow-[0_18px_80px_rgba(0,0,0,0.35)] sm:p-8">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.34em] text-[#8f98a4]">
              Chapter One Route Reserved
            </p>
            <h1 className="mt-4 text-3xl font-semibold uppercase tracking-[0.2em] text-[#f7f2ea] sm:text-4xl">
              Access Layer Present
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#b7ae9f] sm:text-base">
              The recovered diary path is active, but the narrative reader has
              not been opened. This location is being held as the future entry
              point for Chapter One.
            </p>
            <div className="mt-8 border-t border-dashed border-white/10 pt-4 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8f98a4]">
              Reader content withheld pending archive release.
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
