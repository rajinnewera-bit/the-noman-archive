const dossierCards = [
  {
    index: "01",
    label: "Subject Status",
    value: "Unresolved",
    note: "Pattern recurrence remains active.",
  },
  {
    index: "02",
    label: "Last Entry",
    value: "03 NOV 1998 / 02:14",
    note: "Filed after partial memory collapse.",
  },
  {
    index: "03",
    label: "Classification",
    value: "LEVEL IV / SEALED",
    note: "Internal circulation only.",
  },
  {
    index: "04",
    label: "Record Count",
    value: "128 FRAGMENTS",
    note: "31 remain unreadable.",
  },
  {
    index: "05",
    label: "Access Level",
    value: "OBSERVER / PARTIAL",
    note: "Full clearance not granted.",
  },
  {
    index: "06",
    label: "Observation Status",
    value: "LIVE REVIEW",
    note: "Monitoring has not concluded.",
  },
] as const;

const recoveredPanels = [
  {
    tag: "Recovered Fragment A",
    stamp: "NODE 7 / AUDIOLESS",
    body: "Witness language degrades at the moment the name is repeated. Every report stabilizes only after redaction.",
  },
  {
    tag: "Recovered Fragment B",
    stamp: "SHEET 19 / DUPLICATE",
    body: "Temporal references do not align. The final entry appears to describe an event before the archive was opened.",
  },
  {
    tag: "Recovered Fragment C",
    stamp: "RECORD 31 / ANOMALY",
    body: "No direct image survives intact. Only impressions remain: a corridor, a door, a voice returning where it should not.",
  },
] as const;

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-[#05070b] text-[#f4efe6]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(140,109,82,0.22),transparent_32%),radial-gradient(circle_at_84%_22%,rgba(92,104,121,0.18),transparent_26%),radial-gradient(circle_at_50%_90%,rgba(64,73,85,0.22),transparent_28%),linear-gradient(180deg,#06080c_0%,#04060a_48%,#030408_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4.5rem,4.5rem_100%]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.1] bg-[radial-gradient(circle,rgba(255,255,255,0.22)_0.7px,transparent_0.9px)] bg-[size:12px_12px] mix-blend-soft-light"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18] bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_4px)] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_92%,transparent)]"
      />
      <div
        aria-hidden="true"
        className="motion-safe:animate-[pulse_16s_ease-in-out_infinite] pointer-events-none absolute left-[-8%] top-[-10%] h-72 w-72 rounded-full bg-[#8a694f]/12 blur-3xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="motion-safe:animate-[pulse_19s_ease-in-out_infinite] [animation-delay:1.6s] pointer-events-none absolute bottom-[-10%] right-[-6%] h-72 w-72 rounded-full bg-[#526071]/10 blur-3xl sm:h-[26rem] sm:w-[26rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10"
      />

      <section className="relative border-b border-white/10">
        <div className="mx-auto flex min-h-dvh w-full max-w-7xl flex-col justify-between px-6 pb-10 pt-18 sm:px-8 sm:pb-12 sm:pt-20 lg:px-12 lg:pb-14 lg:pt-24">
          <div className="flex flex-wrap items-center justify-between gap-3 text-[0.68rem] uppercase tracking-[0.32em] text-[#b7ac9d]/80 sm:text-[0.72rem]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#b28a64] shadow-[0_0_12px_rgba(178,138,100,0.8)]"
              />
              Archive Node 01
            </div>
            <div className="font-mono text-[#8f98a4]">Clearance Pending</div>
          </div>

          <div className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)] lg:items-end lg:py-16">
            <div className="max-w-4xl">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.36em] text-[#908474] sm:text-[0.76rem]">
                Restricted Psychological Archive
              </p>
              <h1 className="mt-6 text-[3.35rem] font-semibold uppercase tracking-[0.28em] text-[#f7f2ea] sm:text-[5.2rem] md:text-[6.5rem] lg:text-[8rem]">
                Noman
              </h1>
              <p className="mt-5 max-w-2xl text-xl leading-relaxed text-[#ddd3c6] sm:text-2xl">
                Some memories should never return.
              </p>
              <p className="mt-6 max-w-lg text-sm uppercase tracking-[0.22em] text-[#aaa192] sm:text-[0.94rem]">
                Sealed testimony. Fragmented recall. A subject that refuses to
                remain buried.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#primary-dossier"
                  className="inline-flex min-h-12 items-center justify-center rounded-sm border border-[#d1b79a]/45 bg-[#d1b79a]/12 px-6 py-3 text-sm font-medium uppercase tracking-[0.28em] text-[#f8f3eb] transition duration-200 ease-out hover:border-[#d1b79a]/70 hover:bg-[#d1b79a]/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbc3aa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b]"
                >
                  Open Primary Record
                </a>
                <a
                  href="#recovered-index"
                  className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/14 bg-white/[0.02] px-6 py-3 text-sm font-medium uppercase tracking-[0.28em] text-[#ddd5c9] transition duration-200 ease-out hover:border-white/28 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c7d1df] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b]"
                >
                  Inspect Dossier
                </a>
              </div>
            </div>

            <article className="relative overflow-hidden rounded-sm border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] p-5 shadow-[0_18px_80px_rgba(0,0,0,0.35)] sm:p-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),transparent_34%)]"
              />
              <div className="relative">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[#8f98a4]">
                      Primary Dossier
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[#e3d8cb]">
                      Subject File / NM-01
                    </p>
                  </div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[#958977]">
                    sealed
                  </p>
                </div>

                <div className="space-y-4 py-5">
                  <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-white/10 pb-3">
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                      Observation
                    </span>
                    <span className="text-sm uppercase tracking-[0.24em] text-[#dfd5c8]">
                      ongoing
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-white/10 pb-3">
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                      Recall Integrity
                    </span>
                    <span className="text-sm uppercase tracking-[0.24em] text-[#dfd5c8]">
                      unstable
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-white/10 pb-3">
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                      Access Window
                    </span>
                    <span className="text-sm uppercase tracking-[0.24em] text-[#dfd5c8]">
                      partial
                    </span>
                  </div>
                </div>

                <p className="max-w-sm text-sm leading-7 text-[#b5ab9d]">
                  Repetition of the name produces discontinuities across all
                  surviving records. Continue review with caution.
                </p>
              </div>
            </article>
          </div>

          <dl className="grid gap-3 border-t border-white/10 pt-6 text-left sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-sm border border-white/8 bg-white/[0.02] px-4 py-4">
              <dt className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-[#8f98a4]">
                File Prefix
              </dt>
              <dd className="mt-2 text-sm uppercase tracking-[0.22em] text-[#e1d7ca]">
                NM-ARC
              </dd>
            </div>
            <div className="rounded-sm border border-white/8 bg-white/[0.02] px-4 py-4">
              <dt className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-[#8f98a4]">
                Review Mode
              </dt>
              <dd className="mt-2 text-sm uppercase tracking-[0.22em] text-[#e1d7ca]">
                Passive
              </dd>
            </div>
            <div className="rounded-sm border border-white/8 bg-white/[0.02] px-4 py-4">
              <dt className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-[#8f98a4]">
                Memory Hazard
              </dt>
              <dd className="mt-2 text-sm uppercase tracking-[0.22em] text-[#e1d7ca]">
                elevated
              </dd>
            </div>
            <div className="rounded-sm border border-white/8 bg-white/[0.02] px-4 py-4">
              <dt className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-[#8f98a4]">
                Archive Depth
              </dt>
              <dd className="mt-2 text-sm uppercase tracking-[0.22em] text-[#e1d7ca]">
                04 Layers
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section
        id="primary-dossier"
        className="relative border-b border-white/10 px-6 py-14 sm:px-8 lg:px-12 lg:py-18"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.34em] text-[#8f98a4]">
                Dossier Index
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[#f2ede4] sm:text-3xl">
                Primary Observations
              </h2>
            </div>
            <p className="max-w-md text-sm uppercase tracking-[0.22em] text-[#a59c8f]">
              Six verified fields remain visible without full clearance.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {dossierCards.map((card) => (
              <article
                key={card.label}
                className="group relative overflow-hidden rounded-sm border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)] transition duration-300 ease-out hover:border-white/16 hover:bg-white/[0.045]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.38),transparent)] opacity-60"
                />
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[#8f98a4]">
                    {card.label}
                  </p>
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[#8e8172]">
                    {card.index}
                  </span>
                </div>
                <p className="mt-5 text-lg font-medium uppercase tracking-[0.18em] text-[#f1eadf] sm:text-xl">
                  {card.value}
                </p>
                <p className="mt-4 text-sm leading-7 text-[#b7ae9f]">
                  {card.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="recovered-index"
        className="relative px-6 py-14 sm:px-8 lg:px-12 lg:py-18"
      >
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <article className="rounded-sm border border-white/10 bg-white/[0.03] p-6 shadow-[0_14px_60px_rgba(0,0,0,0.26)] sm:p-8">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.34em] text-[#8f98a4]">
              Access Transcript
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-[#f3ede4] sm:text-3xl">
              Recovered, not explained.
            </h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-[#b8aea0]">
              <p>
                Names recur. Dates fail. The document trail narrows instead of
                clarifying.
              </p>
              <p>
                Review is permitted. Resolution is not promised.
              </p>
            </div>
            <div className="mt-8 border-t border-white/10 pt-5 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8e8172]">
              Access window remains open.
            </div>
          </article>

          <div className="grid gap-4">
            {recoveredPanels.map((panel) => (
              <article
                key={panel.tag}
                className="rounded-sm border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.016))] p-5 sm:p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-dashed border-white/10 pb-4">
                  <p className="text-sm uppercase tracking-[0.22em] text-[#e2d7ca]">
                    {panel.tag}
                  </p>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[#8f98a4]">
                    {panel.stamp}
                  </p>
                </div>
                <p className="pt-4 text-sm leading-7 text-[#b9b0a2] sm:text-[0.97rem]">
                  {panel.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
