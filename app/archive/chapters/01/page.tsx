import Link from "next/link";

import { ArchivePath } from "@/components/archive-path";

const recoveryMetadata = [
  { label: "Recovery Date", value: "22 FEB 2008" },
  { label: "Archive Reference", value: "NM-01 / E-14 / LEDGER-A" },
  { label: "Evidence Tag", value: "RD-01 / PAPER / PARTIAL" },
  { label: "Scan Quality", value: "63% / STABLE ARTIFACTING" },
  { label: "Ink Degradation", value: "MODERATE TO SEVERE" },
  { label: "Recovery Team", value: "NORTH WING RETRIEVAL UNIT" },
] as const;

const evidenceStamps = [
  "Recovered",
  "Partial Scan",
  "Restricted Copy",
] as const;

const continuationStamps = [
  "Forensic Copy",
  "Authenticity Under Review",
] as const;

const marginNotes = [
  "Ink pressure rises after self-reference.",
  "Name occurrence corresponds with scan interference.",
  "Cross-check emotional shift against witness statement B.",
] as const;

const archiveAnnotations = [
  {
    ref: "AN-04",
    title: "Margin Review",
    body: "The writer returns to thresholds, doors, and repetitions with increasing instability.",
  },
  {
    ref: "AN-09",
    title: "Forensic Remark",
    body: "Material fibers suggest prolonged exposure to moisture before recovery and controlled drying.",
  },
  {
    ref: "AN-12",
    title: "Handling Warning",
    body: "Do not narrate the full passage aloud during shared review. Prior sessions produced wording convergence.",
  },
] as const;

const readerPath = [
  { label: "Home", href: "/" },
  { label: "Archive", href: "/archive" },
  { label: "Chapter Records", href: "/archive/chapters" },
  { label: "Recovered Diary", href: "/archive/chapters/01", active: true },
  { label: "Subject File", href: "/archive/subject/nm-01" },
] as const;

function RedactionBar({ width }: { width: string }) {
  return (
    <span
      aria-label="redacted"
      className={`mx-1 inline-block h-[0.9em] ${width} rounded-[2px] bg-[#16110b]/90 align-middle`}
    />
  );
}

export default function RecoveredDiaryPage() {
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
        <div className="mx-auto flex min-h-[42svh] w-full max-w-7xl flex-col justify-between px-6 pb-10 pt-18 sm:px-8 sm:pb-12 sm:pt-20 lg:px-12 lg:pt-24">
          <div className="flex flex-wrap items-center justify-between gap-3 text-[0.68rem] uppercase tracking-[0.32em] text-[#b7ac9d]/80 sm:text-[0.72rem]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#b28a64] shadow-[0_0_12px_rgba(178,138,100,0.8)]"
              />
              Recovered Record
            </div>
            <Link
              href="/archive/subject/nm-01"
              className="font-mono text-[#8f98a4] transition hover:text-[#d7cec2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbc3aa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b]"
            >
              Return to Dossier
            </Link>
          </div>

          <div className="grid gap-8 py-12 lg:grid-cols-[minmax(0,1.06fr)_minmax(20rem,0.94fr)] lg:items-end">
            <div className="max-w-4xl">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.36em] text-[#908474] sm:text-[0.76rem]">
                Evidence Layer / Notebook Fragment 01
              </p>
              <h1 className="mt-6 text-[2.8rem] font-semibold uppercase tracking-[0.22em] text-[#f7f2ea] sm:text-[4.4rem] md:text-[5.2rem] lg:text-[6.2rem]">
                Recovered Diary
              </h1>
              <p className="mt-5 max-w-2xl text-base uppercase tracking-[0.2em] text-[#d9d0c4] sm:text-lg">
                Personal writing surfaced within sealed evidence material.
              </p>
              <p className="mt-6 max-w-xl text-sm leading-7 text-[#aca293] sm:text-[0.96rem]">
                Institutional distance ends here. The voice does not.
              </p>

              <div className="mt-8 max-w-2xl">
                <ArchivePath
                  steps={readerPath}
                  next={{
                    href: "/archive/subject/nm-01",
                    label: "Subject File",
                    note: "Follow the diary into the dossier it disturbs.",
                  }}
                />
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
                      Recovery Summary
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[#e3d8cb]">
                      RD-01 / Exhibit Open
                    </p>
                  </div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[#958977]">
                    partial
                  </p>
                </div>

                <div className="space-y-4 py-5">
                  <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-white/10 pb-3">
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                      Page Integrity
                    </span>
                    <span className="text-sm uppercase tracking-[0.24em] text-[#dfd5c8]">
                      fractured
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-white/10 pb-3">
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                      Author Confidence
                    </span>
                    <span className="text-sm uppercase tracking-[0.24em] text-[#dfd5c8]">
                      probable
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-white/10 pb-3">
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                      Emotional Hazard
                    </span>
                    <span className="text-sm uppercase tracking-[0.24em] text-[#dfd5c8]">
                      elevated
                    </span>
                  </div>
                </div>

                <p className="max-w-sm text-sm leading-7 text-[#b5ab9d]">
                  First-person language survives. The surrounding archive bends
                  around it.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10 px-6 py-14 sm:px-8 lg:px-12 lg:py-18">
        <div className="mx-auto max-w-7xl">
          <article className="relative overflow-hidden rounded-sm border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-4 shadow-[0_22px_90px_rgba(0,0,0,0.38)] sm:p-6 lg:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)]"
            />
            <div
              aria-hidden="true"
              className="absolute left-0 top-[18%] h-32 w-10 bg-[linear-gradient(90deg,rgba(5,7,11,0.82),transparent)]"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-[12%] right-0 h-36 w-12 bg-[linear-gradient(270deg,rgba(5,7,11,0.86),transparent)]"
            />
            <div
              aria-hidden="true"
              className="absolute left-6 top-20 h-10 w-16 -rotate-[14deg] rounded-full bg-[#05070b]/60 blur-md"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-18 right-10 h-12 w-24 rotate-[8deg] rounded-full bg-[#05070b]/55 blur-lg"
            />

            <div className="relative">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-dashed border-white/10 pb-4 font-mono text-[0.66rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                <span>Scan Sheet / 01-A</span>
                <span>Evidence Marker E-14</span>
                <span>Clerk Reference 7C-113</span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {recoveryMetadata.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-sm border border-white/8 bg-[#0b0f14]/72 px-4 py-4"
                  >
                    <dt className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-[#8f98a4]">
                      {item.label}
                    </dt>
                    <dd className="mt-3 text-sm uppercase tracking-[0.18em] text-[#e1d7ca]">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </div>

              <div className="relative mt-8 overflow-hidden rounded-sm border border-[#9b8a74]/24 bg-[linear-gradient(180deg,rgba(222,210,190,0.96),rgba(192,177,156,0.94))] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_24px_60px_rgba(0,0,0,0.22)] sm:p-7 lg:p-9">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(255,255,255,0.36),transparent_14%),radial-gradient(circle_at_84%_14%,rgba(255,255,255,0.16),transparent_12%),radial-gradient(circle_at_18%_86%,rgba(99,80,58,0.12),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.18),transparent_18%,rgba(100,82,61,0.08)_100%)]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.18] bg-[repeating-linear-gradient(180deg,rgba(52,40,29,0.16)_0,rgba(52,40,29,0.16)_1px,transparent_1px,transparent_4px)]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-6 bg-[linear-gradient(90deg,rgba(118,96,72,0.3),transparent)]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-[18%] top-0 h-5 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),transparent)]"
                />
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-24 h-36 w-8 bg-[linear-gradient(270deg,rgba(87,69,47,0.25),transparent)]"
                />
                <div
                  aria-hidden="true"
                  className="absolute left-[-2%] top-[28%] h-14 w-14 rotate-[18deg] bg-[#20180f]/16 blur-md"
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-[26%] right-[-1%] h-20 w-16 -rotate-[12deg] bg-[#20180f]/18 blur-md"
                />

                <div className="absolute right-5 top-5 flex flex-col items-end gap-3">
                  {evidenceStamps.map((stamp, index) => (
                    <span
                      key={stamp}
                      className={`rounded-sm border px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[#6f1d1d]/78 ${
                        index === 0
                          ? "rotate-[6deg] border-[#7d2c2c]/40 bg-[#b57e7e]/10"
                          : "rotate-[-4deg] border-[#7d2c2c]/30 bg-[#b57e7e]/8"
                      }`}
                    >
                      {stamp}
                    </span>
                  ))}
                </div>

                <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_13rem]">
                  <div className="max-w-3xl">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[#5e5043]/78">
                      notebook extract / page one / source stabilized
                    </p>
                    <div className="mt-6 space-y-6 text-[0.98rem] leading-8 text-[#2e261c]/82 sm:text-[1.04rem]">
                      <p>
                        I woke before the knock again. The corridor was quiet,
                        but I could hear the latch breathing as if someone stood
                        outside waiting for me to remember why the door should
                        stay locked.
                      </p>
                      <p className="opacity-78">
                        There is a name written on the first page and every
                        time I look at it the letters seem to belong to someone
                        else. I keep tracing them anyway, as though the hand
                        might admit what the mind will not.
                      </p>
                      <p>
                        By noon the room had changed shape for the third time.
                        The window was where the wardrobe should have been and
                        the mirror refused to keep me in it longer than a second.
                        I wrote down the order of the furniture and then lost
                        the paper with the order on it.
                      </p>

                      <div className="rounded-sm border border-dashed border-[#6e5a46]/26 bg-[#8a745a]/10 px-4 py-4 text-[0.82rem] uppercase tracking-[0.24em] text-[#5e5043]/72">
                        paragraph loss detected / lower sheet torn during recovery
                      </div>

                      <p className="opacity-70">
                        The woman downstairs called me by a different name this
                        morning. I answered before I could stop myself. Later I
                        found the sound of my own reply written in the margin:
                        <RedactionBar width="w-24" />
                        <RedactionBar width="w-16" />
                        as if someone listening had decided that was the only
                        part worth keeping.
                      </p>
                    </div>
                  </div>

                  <aside className="space-y-4">
                    <div className="rounded-sm border border-[#6f5d4a]/28 bg-white/18 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-[#5f5244]/74">
                        margin notation / inv. hand
                      </p>
                      <div className="mt-4 space-y-4 text-[0.82rem] italic leading-6 text-[#44372a]/78">
                        {marginNotes.map((note, index) => (
                          <p
                            key={note}
                            className={
                              index % 2 === 0 ? "rotate-[-2deg]" : "rotate-[1.5deg]"
                            }
                          >
                            {note}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-sm border border-[#6f5d4a]/28 bg-[#89745c]/10 p-4 font-mono text-[0.66rem] uppercase tracking-[0.28em] text-[#5c4d3f]/78">
                      <p>Marker / Fig. A</p>
                      <p className="mt-3 border-t border-dashed border-[#6f5d4a]/24 pt-3">
                        Ref / edge fiber anomaly
                      </p>
                      <p className="mt-3 border-t border-dashed border-[#6f5d4a]/24 pt-3">
                        Ref / line dropout cluster
                      </p>
                    </div>
                  </aside>
                </div>

                <div className="relative mt-8 border-t border-dashed border-[#6f5d4a]/26 pt-5">
                  <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_13rem]">
                    <div className="text-sm leading-7 text-[#342a20]/74">
                      Archive annotation: subject-oriented language increases in
                      clarity whenever the writer describes enclosed spaces,
                      thresholds, or his own reflection.
                    </div>
                    <div className="font-mono text-[0.64rem] uppercase tracking-[0.28em] text-[#5f5244]/72 sm:text-right">
                      review ref / 01-a / sheet retained
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="relative border-b border-white/10 px-6 py-14 sm:px-8 lg:px-12 lg:py-18">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="relative overflow-hidden rounded-sm border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-4 shadow-[0_22px_90px_rgba(0,0,0,0.38)] sm:p-6">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-8 bg-[linear-gradient(90deg,rgba(5,7,11,0.82),transparent)]"
            />
            <div
              aria-hidden="true"
              className="absolute right-4 top-4 h-10 w-20 rotate-[10deg] bg-[#05070b]/35 blur-md"
            />

            <div className="relative overflow-hidden rounded-sm border border-[#9b8a74]/24 bg-[linear-gradient(180deg,rgba(219,205,184,0.96),rgba(184,167,145,0.94))] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] sm:p-7 lg:p-9">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(255,255,255,0.34),transparent_14%),radial-gradient(circle_at_86%_16%,rgba(255,255,255,0.16),transparent_12%),linear-gradient(180deg,rgba(255,255,255,0.12),transparent_18%,rgba(99,81,60,0.1)_100%)]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.16] bg-[repeating-linear-gradient(180deg,rgba(52,40,29,0.16)_0,rgba(52,40,29,0.16)_1px,transparent_1px,transparent_4px)]"
              />
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-[24%] h-7 w-32 -translate-x-1/2 bg-[radial-gradient(circle_at_50%_0,rgba(5,7,11,0.72),transparent_72%)]"
              />
              <div
                aria-hidden="true"
                className="absolute right-0 top-[30%] h-20 w-8 bg-[linear-gradient(270deg,rgba(89,72,52,0.3),transparent)]"
              />

              <div className="absolute right-5 top-5 flex flex-col items-end gap-3">
                {continuationStamps.map((stamp, index) => (
                  <span
                    key={stamp}
                    className={`rounded-sm border border-[#7d2c2c]/34 bg-[#b57e7e]/10 px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[#6f1d1d]/76 ${
                      index === 0 ? "rotate-[-5deg]" : "rotate-[7deg]"
                    }`}
                  >
                    {stamp}
                  </span>
                ))}
              </div>

              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-dashed border-[#6f5d4a]/24 pb-4 font-mono text-[0.64rem] uppercase tracking-[0.28em] text-[#5f5244]/74">
                  <span>continuation sheet / 01-b</span>
                  <span>reference no. nm-01-rd-2</span>
                </div>

                <div className="mt-6 space-y-6 text-[0.98rem] leading-8 text-[#2d261c]/82 sm:text-[1.04rem]">
                  <p>
                    Mother used to say memory was a room, and rooms can be
                    entered in the wrong order. I think I entered mine
                    backwards. I keep arriving after things have already
                    frightened me.
                  </p>
                  <p className="opacity-76">
                    I found mud on the inside of the sink. I washed my hands
                    until the water went cold and still it felt like I had come
                    home carrying a place I had never visited.
                  </p>
                  <p>
                    If this is still mine, if I am still Noman, then someone
                    has been editing the days behind me. They leave the shape of
                    the hours in place and take the reasons out. What remains is
                    enough to live through, not enough to trust.
                  </p>
                  <p className="opacity-72">
                    Tonight I pushed the wardrobe against the door again. I
                    told myself it was for the sound in the corridor. It may
                    have been for the sound of my own voice repeating back from
                    the dark.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-[minmax(0,1fr)_14rem]">
                  <div className="rounded-sm border border-[#6f5d4a]/26 bg-[#896f54]/10 px-4 py-4 text-sm leading-7 text-[#382d22]/72">
                    Lower margin heavily abraded. Final lines are either missing
                    or intentionally removed before recovery.
                  </div>
                  <div className="rounded-sm border border-[#6f5d4a]/26 bg-white/14 p-4">
                    <p className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-[#5f5244]/72">
                      field note
                    </p>
                    <p className="mt-3 rotate-[1.5deg] text-[0.82rem] italic leading-6 text-[#44372a]/76">
                      First direct naming event. Tone becomes intimate and more
                      coherent immediately afterward.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <div className="space-y-6">
            <article className="rounded-sm border border-white/10 bg-white/[0.03] p-6 shadow-[0_14px_60px_rgba(0,0,0,0.26)] sm:p-8">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.34em] text-[#8f98a4]">
                Archive Annotations
              </p>
            <h2 className="mt-4 text-2xl font-semibold text-[#f3ede4] sm:text-3xl">
              Review notes cluster around the voice itself.
            </h2>
              <div className="mt-6 space-y-4">
                {archiveAnnotations.map((note) => (
                  <article
                    key={note.ref}
                    className="rounded-sm border border-white/8 bg-[#0b0f14]/70 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                        {note.ref}
                      </p>
                      <p className="text-sm uppercase tracking-[0.2em] text-[#e1d7ca]">
                        {note.title}
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[#b7ae9f]">
                      {note.body}
                    </p>
                  </article>
                ))}
              </div>
            </article>

            <article className="rounded-sm border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.016))] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-dashed border-white/10 pb-4">
                <p className="text-sm uppercase tracking-[0.22em] text-[#e2d7ca]">
                  Custody Notice
                </p>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[#8f98a4]">
                  observer copy
                </p>
              </div>
              <p className="pt-5 text-sm leading-7 text-[#b9b0a2] sm:text-[0.97rem]">
                This is the first source that speaks from inside the event.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/archive/chapters"
                  className="inline-flex min-h-11 items-center justify-center rounded-sm border border-white/12 bg-white/[0.03] px-5 py-3 text-sm uppercase tracking-[0.24em] text-[#d8cec1] transition hover:border-white/18 hover:bg-white/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbc3aa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b]"
                >
                  Return to Records
                </Link>
                <Link
                  href="/archive/subject/nm-01"
                  className="inline-flex min-h-11 items-center justify-center rounded-sm border border-[#d1b79a]/28 bg-[#d1b79a]/10 px-5 py-3 text-sm uppercase tracking-[0.24em] text-[#f4ede3] transition hover:border-[#d1b79a]/42 hover:bg-[#d1b79a]/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbc3aa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b]"
                >
                  Open Subject File
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
