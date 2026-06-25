import Link from "next/link";

const identityRecords = [
  { label: "Name", value: "Noman" },
  { label: "Age", value: "Unknown" },
  { label: "Gender", value: "███████" },
  { label: "Classification Level", value: "LEVEL IV / SEALED" },
  { label: "Current Status", value: "ACTIVE / UNRESOLVED" },
  { label: "Last Confirmed Appearance", value: "03 NOV 1998 / ████" },
  { label: "File Number", value: "NM-01-██-731" },
  { label: "Clearance Level", value: "OBSERVER / PARTIAL" },
] as const;

const psychologicalAssessments = [
  {
    title: "Memory Distortion",
    rating: "SEVERE",
    note: "Recovered accounts diverge after repeated exposure to core identifiers.",
  },
  {
    title: "Identity Displacement",
    rating: "ACTIVE",
    note: "Witnesses intermittently describe the subject as present in roles occupied by others.",
  },
  {
    title: "Hallucination Risk",
    rating: "ELEVATED",
    note: "Peripheral details intensify during late-stage recall and cannot be independently verified.",
  },
  {
    title: "Temporal Inconsistency",
    rating: "CONFIRMED",
    note: "Multiple records position the same event before and after official filing dates.",
  },
  {
    title: "Repetition Trigger",
    rating: "IDENTIFIED",
    note: "Pronunciation of the subject name appears correlated with record corruption.",
  },
  {
    title: "Observer Notes",
    rating: "RESTRICTED",
    note: "Personnel rotation is advised once narrative overlap begins to recur across reports.",
  },
] as const;

const timelineEntries = [
  {
    date: "14 FEB 1997",
    status: "Filed",
    body: "Initial subject mention recorded in a municipal incident log without corroborating witness identity.",
  },
  {
    date: "03 NOV 1998",
    status: "Confirmed",
    body: "Last confirmed appearance entered after a fragmented recovery statement and subsequent file escalation.",
  },
  {
    date: "██ ███ 1999",
    status: "Corrupted",
    body: "Chronological reference unreadable. Supporting material persists, original timestamp does not.",
  },
  {
    date: "08 APR 2001",
    status: "Redacted",
    body: "███ ███████ ███████ removed by internal order. Only routing notes remain in the docket trail.",
  },
  {
    date: "17 SEP 2004",
    status: "Withheld",
    body: "Cross-agency transfer acknowledged, destination file never returned to the visible archive layer.",
  },
] as const;

const evidenceItems = [
  {
    title: "Recovered Diary",
    status: "PARTIAL CLEARANCE",
    detail: "Physical notebook recovered with legible openings and extensive later damage.",
    href: "/archive/chapters/01",
    accessible: true,
  },
  {
    title: "Police Report",
    status: "SEALED",
    detail: "Incident summary exists, but investigative appendix remains unavailable.",
    accessible: false,
  },
  {
    title: "Witness Statement",
    status: "ACCESS DENIED",
    detail: "Primary account retained under restricted review due to recall instability.",
    accessible: false,
  },
  {
    title: "Voice Recording",
    status: "UNDER REVIEW",
    detail: "Audio source recovered with severe distortion clustered around the subject name.",
    accessible: false,
  },
  {
    title: "Photograph",
    status: "REDACTED",
    detail: "Visual record preserved only as an obscured evidence still with facial data compromised.",
    accessible: false,
  },
  {
    title: "Hospital File",
    status: "FILE MISSING",
    detail: "Referenced by three secondary reports; original admission file no longer present.",
    accessible: false,
  },
] as const;

const observerNotes = [
  "Repeated review causes discrepancies to migrate between records rather than resolve within them.",
  "Observers assigned longer than one cycle begin reproducing identical phrasing across unrelated reports.",
  "The subject does not stabilize under scrutiny. The archive degrades around the point of certainty.",
] as const;

export default function SubjectFilePage() {
  return (
    <main className="relative overflow-hidden bg-[#05070b] text-[#f4efe6]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(140,109,82,0.2),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(92,104,121,0.16),transparent_24%),radial-gradient(circle_at_50%_88%,rgba(64,73,85,0.18),transparent_28%),linear-gradient(180deg,#06080c_0%,#04060a_48%,#030408_100%)]"
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
        <div className="mx-auto flex min-h-[48svh] w-full max-w-7xl flex-col justify-between px-6 pb-10 pt-18 sm:px-8 sm:pb-12 sm:pt-20 lg:px-12 lg:pt-24">
          <div className="flex flex-wrap items-center justify-between gap-3 text-[0.68rem] uppercase tracking-[0.32em] text-[#b7ac9d]/80 sm:text-[0.72rem]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#b28a64] shadow-[0_0_12px_rgba(178,138,100,0.8)]"
              />
              Subject File
            </div>
            <Link
              href="/archive"
              className="font-mono text-[#8f98a4] transition hover:text-[#d7cec2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbc3aa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b]"
            >
              Return to Index
            </Link>
          </div>

          <div className="grid gap-8 py-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(21rem,0.92fr)] lg:items-end">
            <div className="max-w-4xl">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.36em] text-[#908474] sm:text-[0.76rem]">
                Confidential Intelligence Dossier / NM-01
              </p>
              <h1 className="mt-6 text-[2.8rem] font-semibold uppercase tracking-[0.22em] text-[#f7f2ea] sm:text-[4.4rem] md:text-[5.4rem] lg:text-[6.6rem]">
                Subject File
              </h1>
              <p className="mt-5 max-w-2xl text-base uppercase tracking-[0.22em] text-[#d9d0c4] sm:text-lg">
                Primary subject classification confirmed. Identity remains unstable.
              </p>
              <p className="mt-6 max-w-lg text-sm leading-7 text-[#aca293] sm:text-[0.96rem]">
                This dossier aggregates surviving identity markers, assessment
                records, investigation chronology, and evidence custody notes
                related to the subject known as Noman.
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
                      Dossier Summary
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[#e3d8cb]">
                      NM-01 / Active Review
                    </p>
                  </div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[#958977]">
                    partial
                  </p>
                </div>

                <div className="space-y-4 py-5">
                  <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-white/10 pb-3">
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                      Identity Confidence
                    </span>
                    <span className="text-sm uppercase tracking-[0.24em] text-[#dfd5c8]">
                      compromised
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-white/10 pb-3">
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                      Exposure Risk
                    </span>
                    <span className="text-sm uppercase tracking-[0.24em] text-[#dfd5c8]">
                      elevated
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-white/10 pb-3">
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                      Evidence State
                    </span>
                    <span className="text-sm uppercase tracking-[0.24em] text-[#dfd5c8]">
                      fragmentary
                    </span>
                  </div>
                </div>

                <p className="max-w-sm text-sm leading-7 text-[#b5ab9d]">
                  Repeated dossier contact correlates with wording convergence,
                  timestamp drift, and record contamination across unrelated
                  evidence sets.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10 px-6 py-14 sm:px-8 lg:px-12 lg:py-18">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-sm border border-white/10 bg-white/[0.03] p-6 shadow-[0_14px_60px_rgba(0,0,0,0.26)] sm:p-8">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.34em] text-[#8f98a4]">
                  Identity Section
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[#f2ede4] sm:text-3xl">
                  Recorded Identity
                </h2>
              </div>
              <p className="text-sm uppercase tracking-[0.22em] text-[#a59c8f]">
                Observer view / partial disclosure
              </p>
            </div>

            <dl className="grid gap-3 sm:grid-cols-2">
              {identityRecords.map((record) => (
                <div
                  key={record.label}
                  className="rounded-sm border border-white/8 bg-[#0b0f14]/70 px-4 py-4"
                >
                  <dt className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-[#8f98a4]">
                    {record.label}
                  </dt>
                  <dd className="mt-3 text-sm uppercase tracking-[0.18em] text-[#e1d7ca]">
                    {record.value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="rounded-sm border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.016))] p-6 sm:p-8">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.34em] text-[#8f98a4]">
                  Evidence Photograph
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[#f2ede4] sm:text-3xl">
                  Visual Record
                </h2>
              </div>
              <p className="text-sm uppercase tracking-[0.22em] text-[#a59c8f]">
                Image integrity compromised
              </p>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10 bg-[#090b10] shadow-[inset_0_0_80px_rgba(0,0,0,0.65)]">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(205,197,184,0.24),transparent_18%),radial-gradient(circle_at_50%_52%,rgba(150,144,135,0.18),transparent_20%),radial-gradient(circle_at_50%_68%,rgba(120,115,108,0.14),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02)_24%,rgba(0,0,0,0.22)_100%)]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-[12%] rounded-[45%_45%_38%_38%/36%_36%_42%_42%] bg-[radial-gradient(circle_at_50%_22%,rgba(230,220,205,0.28),transparent_22%),radial-gradient(circle_at_50%_48%,rgba(130,124,116,0.24),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.22))] blur-xl opacity-70"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.22] bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_4px)]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.16),transparent_14%),radial-gradient(circle_at_82%_14%,rgba(255,255,255,0.14),transparent_12%),radial-gradient(circle_at_24%_86%,rgba(255,255,255,0.12),transparent_12%),radial-gradient(circle_at_78%_82%,rgba(255,255,255,0.12),transparent_14%)] mix-blend-screen"
              />
              <div className="absolute bottom-4 left-4 right-4 border-t border-white/10 pt-3 font-mono text-[0.64rem] uppercase tracking-[0.28em] text-[#a39a8d]">
                Facial data obstructed / source degraded
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="relative border-b border-white/10 px-6 py-14 sm:px-8 lg:px-12 lg:py-18">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.34em] text-[#8f98a4]">
                Psychological Assessment
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[#f2ede4] sm:text-3xl">
                Clinical Observations
              </h2>
            </div>
            <p className="max-w-md text-sm uppercase tracking-[0.22em] text-[#a59c8f]">
              Review prepared for restricted internal circulation.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {psychologicalAssessments.map((entry) => (
              <article
                key={entry.title}
                className="relative overflow-hidden rounded-sm border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.38),transparent)] opacity-60"
                />
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[#8f98a4]">
                    {entry.title}
                  </p>
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[#8e8172]">
                    {entry.rating}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#b7ae9f]">
                  {entry.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10 px-6 py-14 sm:px-8 lg:px-12 lg:py-18">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <article className="rounded-sm border border-white/10 bg-white/[0.03] p-6 shadow-[0_14px_60px_rgba(0,0,0,0.26)] sm:p-8">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.34em] text-[#8f98a4]">
              Timeline
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-[#f3ede4] sm:text-3xl">
              Investigation Sequence
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#b8aea0]">
              Timeline integrity remains uneven. The surviving order is
              preserved exactly as recovered, including breaks, loss, and
              procedural redaction.
            </p>
          </article>

          <div className="space-y-4">
            {timelineEntries.map((entry) => (
              <article
                key={`${entry.date}-${entry.status}`}
                className="rounded-sm border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.016))] p-5 sm:p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-dashed border-white/10 pb-4">
                  <p className="text-sm uppercase tracking-[0.22em] text-[#e2d7ca]">
                    {entry.date}
                  </p>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[#8f98a4]">
                    {entry.status}
                  </p>
                </div>
                <p className="pt-4 text-sm leading-7 text-[#b9b0a2] sm:text-[0.97rem]">
                  {entry.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="evidence-inventory"
        className="relative border-b border-white/10 px-6 py-14 sm:px-8 lg:px-12 lg:py-18"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.34em] text-[#8f98a4]">
                Evidence Inventory
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[#f2ede4] sm:text-3xl">
                Custody Materials
              </h2>
            </div>
            <p className="max-w-md text-sm uppercase tracking-[0.22em] text-[#a59c8f]">
              Only one item currently clears observer access.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {evidenceItems.map((item) =>
              item.accessible ? (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative overflow-hidden rounded-sm border border-[#d1b79a]/22 bg-[linear-gradient(180deg,rgba(209,183,154,0.08),rgba(255,255,255,0.02))] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)] transition duration-300 ease-out hover:border-[#d1b79a]/36 hover:bg-[linear-gradient(180deg,rgba(209,183,154,0.1),rgba(255,255,255,0.03))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbc3aa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b]"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.38),transparent)] opacity-60"
                  />
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[#8f98a4]">
                      {item.title}
                    </p>
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[#d8c1a6]">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#b7ae9f]">
                    {item.detail}
                  </p>
                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-dashed border-white/10 pt-4">
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                      Diary Layer
                    </span>
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#f0e6d9]">
                      Open
                    </span>
                  </div>
                </Link>
              ) : (
                <button
                  key={item.title}
                  type="button"
                  aria-disabled="true"
                  className="group relative overflow-hidden rounded-sm border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-5 text-left shadow-[0_10px_40px_rgba(0,0,0,0.22)]"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.38),transparent)] opacity-60"
                  />
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[#8f98a4]">
                      {item.title}
                    </p>
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[#8e8172]">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-[#b7ae9f]">
                    {item.detail}
                  </p>
                </button>
              ),
            )}
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
              Repeated exposure destabilizes the record.
            </h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-[#b8aea0]">
              {observerNotes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          </article>

          <article className="rounded-sm border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.016))] p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-dashed border-white/10 pb-4">
              <p className="text-sm uppercase tracking-[0.22em] text-[#e2d7ca]">
                Internal Handling Directive
              </p>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[#8f98a4]">
                NM-01 / caution
              </p>
            </div>
            <p className="pt-5 text-sm leading-7 text-[#b9b0a2] sm:text-[0.97rem]">
              Archive staff are advised to log wording drift immediately,
              discontinue prolonged review sessions, and avoid repeating the
              subject designation aloud within shared record environments.
            </p>

            <div className="mt-8">
              <Link
                href="/archive/chapters/01"
                className="inline-flex min-h-12 items-center justify-center rounded-sm border border-[#d1b79a]/45 bg-[#d1b79a]/12 px-6 py-3 text-sm font-medium uppercase tracking-[0.28em] text-[#f8f3eb] transition duration-200 ease-out hover:border-[#d1b79a]/70 hover:bg-[#d1b79a]/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbc3aa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b]"
              >
                Open Recovered Diary
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
