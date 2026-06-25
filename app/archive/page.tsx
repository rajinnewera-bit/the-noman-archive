import Link from "next/link";

const archiveCollections = [
  {
    id: "01",
    title: "Chapter Records",
    status: "Partial Clearance",
    availability: "Access Pending",
    detail: "Sequential files exist, but several opening records remain sealed.",
    meta: "12 indexed / 03 withheld",
  },
  {
    id: "02",
    title: "Recovered Fragments",
    status: "Partial Clearance",
    availability: "Available Soon",
    detail: "Loose excerpts, voice remnants, and incomplete field notes remain under review.",
    meta: "31 fragments / unstable chronology",
  },
  {
    id: "03",
    title: "Character Dossiers",
    status: "Sealed",
    availability: "Access Pending",
    detail: "Cross-referenced identities exist, but attribution confidence is still compromised.",
    meta: "09 dossiers / 04 redacted",
  },
  {
    id: "04",
    title: "Timeline",
    status: "Partial Clearance",
    availability: "Available Soon",
    detail: "Temporal reconstruction is incomplete. Several events repeat across conflicting dates.",
    meta: "Chronology rebuild in progress",
  },
  {
    id: "05",
    title: "Evidence Files",
    status: "Sealed",
    availability: "Access Pending",
    detail: "Physical records, transcripts, and anomaly traces require elevated review.",
    meta: "17 exhibits / restricted circulation",
  },
  {
    id: "06",
    title: "Missing Records",
    status: "Open Anomaly",
    availability: "Unavailable",
    detail: "Catalog references survive, but the original files do not. Cause remains unresolved.",
    meta: "08 gaps / source missing",
  },
] as const;

const manifestNotes = [
  "Observer access permits inspection of structure only.",
  "Unsealed collections will appear as record integrity improves.",
  "Not all absences are accidental.",
] as const;

export default function ArchiveIndexPage() {
  return (
    <main className="relative overflow-hidden bg-[#05070b] text-[#f4efe6]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_14%,rgba(140,109,82,0.2),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(92,104,121,0.16),transparent_24%),radial-gradient(circle_at_50%_88%,rgba(64,73,85,0.2),transparent_26%),linear-gradient(180deg,#06080c_0%,#04060a_48%,#030408_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4.5rem,4.5rem_100%]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.1] bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0.7px,transparent_0.9px)] bg-[size:12px_12px] mix-blend-soft-light"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.17] bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_4px)] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_92%,transparent)]"
      />
      <div
        aria-hidden="true"
        className="motion-safe:animate-[pulse_15s_ease-in-out_infinite] pointer-events-none absolute left-[-8%] top-[-8%] h-72 w-72 rounded-full bg-[#8a694f]/10 blur-3xl sm:h-[24rem] sm:w-[24rem]"
      />
      <div
        aria-hidden="true"
        className="motion-safe:animate-[pulse_18s_ease-in-out_infinite] [animation-delay:1.4s] pointer-events-none absolute bottom-[-12%] right-[-6%] h-72 w-72 rounded-full bg-[#526071]/10 blur-3xl sm:h-[25rem] sm:w-[25rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10"
      />

      <section className="relative border-b border-white/10">
        <div className="mx-auto flex min-h-[46svh] w-full max-w-7xl flex-col justify-between px-6 pb-10 pt-18 sm:px-8 sm:pb-12 sm:pt-20 lg:px-12 lg:pt-24">
          <div className="flex flex-wrap items-center justify-between gap-3 text-[0.68rem] uppercase tracking-[0.32em] text-[#b7ac9d]/80 sm:text-[0.72rem]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#b28a64] shadow-[0_0_12px_rgba(178,138,100,0.8)]"
              />
              Archive Index
            </div>
            <Link
              href="/"
              className="font-mono text-[#8f98a4] transition hover:text-[#d7cec2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbc3aa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b]"
            >
              Return to Entry
            </Link>
          </div>

          <div className="grid gap-8 py-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] lg:items-end">
            <div className="max-w-4xl">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.36em] text-[#908474] sm:text-[0.76rem]">
                Internal Manifest / Primary Access Layer
              </p>
              <h1 className="mt-6 text-[2.8rem] font-semibold uppercase tracking-[0.22em] text-[#f7f2ea] sm:text-[4.4rem] md:text-[5.4rem] lg:text-[6.6rem]">
                Archive Index
              </h1>
              <p className="mt-5 max-w-2xl text-base uppercase tracking-[0.22em] text-[#d9d0c4] sm:text-lg">
                Six collections detected. Full recovery not authorized.
              </p>
              <p className="mt-6 max-w-lg text-sm leading-7 text-[#aca293] sm:text-[0.96rem]">
                Access is limited to surface classification, containment
                status, and record integrity. Internal collections remain
                partially sealed.
              </p>
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
                      Manifest Summary
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[#e3d8cb]">
                      Layer 01 / Observer View
                    </p>
                  </div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[#958977]">
                    partial
                  </p>
                </div>

                <div className="space-y-4 py-5">
                  <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-white/10 pb-3">
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                      Visible Collections
                    </span>
                    <span className="text-sm uppercase tracking-[0.24em] text-[#dfd5c8]">
                      06
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-white/10 pb-3">
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                      Opened Records
                    </span>
                    <span className="text-sm uppercase tracking-[0.24em] text-[#dfd5c8]">
                      00
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-white/10 pb-3">
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                      Seal Integrity
                    </span>
                    <span className="text-sm uppercase tracking-[0.24em] text-[#dfd5c8]">
                      stable
                    </span>
                  </div>
                </div>

                <p className="max-w-sm text-sm leading-7 text-[#b5ab9d]">
                  The index is visible. The contents are not fully permitted.
                  Continue under observer limitations.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10 px-6 py-14 sm:px-8 lg:px-12 lg:py-18">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.34em] text-[#8f98a4]">
                Collection Register
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[#f2ede4] sm:text-3xl">
                Sealed Archive Sections
              </h2>
            </div>
            <p className="max-w-md text-sm uppercase tracking-[0.22em] text-[#a59c8f]">
              Manifest visible. Content access remains conditional.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {archiveCollections.map((collection) => (
              <article
                key={collection.title}
                className="group relative overflow-hidden rounded-sm border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)] transition duration-300 ease-out hover:border-white/16 hover:bg-white/[0.045]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.38),transparent)] opacity-60"
                />
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[#8f98a4]">
                    {collection.title}
                  </p>
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[#8e8172]">
                    {collection.id}
                  </span>
                </div>
                <p className="mt-5 text-lg font-medium uppercase tracking-[0.18em] text-[#f1eadf] sm:text-xl">
                  {collection.status}
                </p>
                <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[#b7ad9f]">
                  {collection.availability}
                </p>
                <p className="mt-4 text-sm leading-7 text-[#b7ae9f]">
                  {collection.detail}
                </p>
                <div className="mt-6 border-t border-dashed border-white/10 pt-4 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                  {collection.meta}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-14 sm:px-8 lg:px-12 lg:py-18">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.84fr_1.16fr]">
          <article className="rounded-sm border border-white/10 bg-white/[0.03] p-6 shadow-[0_14px_60px_rgba(0,0,0,0.26)] sm:p-8">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.34em] text-[#8f98a4]">
              Observer Notes
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-[#f3ede4] sm:text-3xl">
              Access is informational, not complete.
            </h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-[#b8aea0]">
              {manifestNotes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
            <div className="mt-8 border-t border-white/10 pt-5 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8e8172]">
              Clearance escalation unavailable.
            </div>
          </article>

          <article className="rounded-sm border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.016))] p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-dashed border-white/10 pb-4">
              <p className="text-sm uppercase tracking-[0.22em] text-[#e2d7ca]">
                Missing Records Notice
              </p>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[#8f98a4]">
                anomaly / active
              </p>
            </div>
            <div className="grid gap-4 pt-5 sm:grid-cols-2">
              <div className="rounded-sm border border-white/8 bg-[#0b0f14]/70 p-4">
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                  Last Confirmed Gap
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#e1d7ca]">
                  Record 08 / Removed
                </p>
              </div>
              <div className="rounded-sm border border-white/8 bg-[#0b0f14]/70 p-4">
                <p className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                  Recovery State
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#e1d7ca]">
                  Available Soon
                </p>
              </div>
            </div>
            <p className="pt-5 text-sm leading-7 text-[#b9b0a2] sm:text-[0.97rem]">
              References to absent files continue to surface across visible
              collections. Their omission appears systemic rather than clerical.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
