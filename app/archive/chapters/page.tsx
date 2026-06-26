"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ArchivePath } from "@/components/archive-path";

type OverlayRecord = {
  eyebrow: string;
  title: string;
  lines: readonly string[];
};

type ChapterRecord = {
  id: string;
  title: string;
  status: string;
  note: string;
  meta: string;
  available: boolean;
  href?: string;
  overlay?: OverlayRecord;
};

const chapterRecords: readonly ChapterRecord[] = [
  {
    id: "01",
    title: "Chapter 01",
    status: "Access Pending",
    note: "Opening record detected. Structural shell visible, narrative clearance withheld.",
    meta: "Partial file integrity / observer view only",
    available: true,
    href: "/archive/chapters/01",
  },
  {
    id: "02",
    title: "Chapter 02",
    status: "Sealed",
    note: "Referenced by internal sequencing, but direct reading access remains sealed.",
    meta: "Seal lock active / release not authorized",
    available: false,
    overlay: {
      eyebrow: "Access Denied",
      title: "Chapter 02 remains sealed.",
      lines: [
        "Recovery status: 31%.",
        "Expected release: Unknown.",
      ],
    },
  },
  {
    id: "03",
    title: "Chapter 03",
    status: "Withheld",
    note: "Record listed in sequence, then withdrawn from standard circulation without comment.",
    meta: "Source removed / retention flag present",
    available: false,
    overlay: {
      eyebrow: "Record Withheld",
      title: "This record was intentionally removed from standard circulation.",
      lines: [
        "Recovery status: Not permitted.",
        "Reason: Redacted.",
      ],
    },
  },
] as const;

const readerPath = [
  { label: "Home", href: "/" },
  { label: "Archive", href: "/archive" },
  { label: "Chapter Records", href: "/archive/chapters", active: true },
  { label: "Recovered Diary", href: "/archive/chapters/01" },
  { label: "Subject File", href: "/archive/subject/nm-01" },
] as const;

function ChapterOverlay({
  overlay,
  onClose,
}: {
  overlay: OverlayRecord;
  onClose: () => void;
}) {
  if (!overlay) {
    return null;
  }

  return (
    <div
      aria-labelledby="chapter-overlay-title"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center sm:p-6"
      role="dialog"
    >
      <button
        aria-label="Dismiss sealed record notice"
        className="absolute inset-0 bg-[#030408]/78 backdrop-blur-[2px]"
        onClick={onClose}
        type="button"
      />

      <article className="relative w-full max-w-xl overflow-hidden rounded-sm border border-white/10 bg-[linear-gradient(180deg,rgba(9,12,17,0.98),rgba(5,7,11,0.96))] p-6 shadow-[0_28px_120px_rgba(0,0,0,0.6)] sm:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(140,109,82,0.16),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_18%),repeating-linear-gradient(180deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_1px,transparent_1px,transparent_4px)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.38),transparent)]"
        />

        <div className="relative">
          <div className="flex items-start justify-between gap-4 border-b border-dashed border-white/10 pb-4">
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.34em] text-[#8f98a4]">
                Restricted Notice
              </p>
              <h2
                className="mt-3 text-2xl font-semibold uppercase tracking-[0.16em] text-[#f3ede4] sm:text-3xl"
                id="chapter-overlay-title"
              >
                {overlay.eyebrow}
              </h2>
            </div>
            <button
              className="inline-flex min-h-10 items-center justify-center rounded-sm border border-white/10 bg-white/[0.03] px-3 text-[0.7rem] font-mono uppercase tracking-[0.3em] text-[#d7cec2] transition hover:border-white/16 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbc3aa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b]"
              onClick={onClose}
              type="button"
            >
              Close
            </button>
          </div>

          <p className="mt-6 text-base leading-8 text-[#e3d8cb] sm:text-lg">
            {overlay.title}
          </p>

          <div className="mt-6 space-y-4 rounded-sm border border-white/8 bg-white/[0.03] p-4 sm:p-5">
            {overlay.lines.map((line) => (
              <p
                key={line}
                className="font-mono text-[0.78rem] uppercase tracking-[0.26em] text-[#b8aea0] sm:text-[0.82rem]"
              >
                {line}
              </p>
            ))}
          </div>

          <div className="mt-6 border-t border-dashed border-white/10 pt-4 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8f98a4]">
            Observer copy / chapter layer / constrained access
          </div>
        </div>
      </article>
    </div>
  );
}

export default function ChapterRecordsPage() {
  const [activeOverlay, setActiveOverlay] = useState<OverlayRecord | null>(null);

  useEffect(() => {
    if (!activeOverlay) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveOverlay(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeOverlay]);

  return (
    <>
      <main className="relative overflow-hidden bg-[#05070b] text-[#f4efe6]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(140,109,82,0.2),transparent_30%),radial-gradient(circle_at_84%_18%,rgba(92,104,121,0.16),transparent_24%),radial-gradient(circle_at_48%_88%,rgba(64,73,85,0.18),transparent_28%),linear-gradient(180deg,#06080c_0%,#04060a_48%,#030408_100%)]"
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
                Chapter Records
              </div>
              <Link
                href="/archive"
                className="font-mono text-[#8f98a4] transition hover:text-[#d7cec2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbc3aa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b]"
              >
                Return to Index
              </Link>
            </div>

            <div className="grid gap-8 py-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] lg:items-end">
              <div className="max-w-4xl">
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.36em] text-[#908474] sm:text-[0.76rem]">
                  Sequential Story Records / Layer 01
                </p>
                <h1 className="mt-6 text-[2.8rem] font-semibold uppercase tracking-[0.22em] text-[#f7f2ea] sm:text-[4.4rem] md:text-[5.4rem] lg:text-[6.2rem]">
                  Chapter Records
                </h1>
                <p className="mt-5 max-w-2xl text-base uppercase tracking-[0.22em] text-[#d9d0c4] sm:text-lg">
                  Indexed entries detected. Reading clearance not yet granted.
                </p>
                <p className="mt-6 max-w-lg text-sm leading-7 text-[#aca293] sm:text-[0.96rem]">
                  Story records appear here as controlled evidence. Only one
                  record opens.
                </p>

                <div className="mt-8 max-w-2xl">
                  <ArchivePath
                    steps={readerPath}
                    next={{
                      href: "/archive/chapters/01",
                      label: "Recovered Diary",
                      note: "Chapter 01 is the first readable surface.",
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
                        Record Summary
                      </p>
                      <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[#e3d8cb]">
                        Observer Catalog / NM-CH
                      </p>
                    </div>
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[#958977]">
                      partial
                    </p>
                  </div>

                  <div className="space-y-4 py-5">
                    <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-white/10 pb-3">
                      <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                        Visible Records
                      </span>
                      <span className="text-sm uppercase tracking-[0.24em] text-[#dfd5c8]">
                        03
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-white/10 pb-3">
                      <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                        Partial Access
                      </span>
                      <span className="text-sm uppercase tracking-[0.24em] text-[#dfd5c8]">
                        chapter 01
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-white/10 pb-3">
                      <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                        Reader State
                      </span>
                      <span className="text-sm uppercase tracking-[0.24em] text-[#dfd5c8]">
                        withheld
                      </span>
                    </div>
                  </div>

                  <p className="max-w-sm text-sm leading-7 text-[#b5ab9d]">
                    The opening record is present. The rest remains sealed.
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
                  Indexed Sequence
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[#f2ede4] sm:text-3xl">
                  Surface Chapter Files
                </h2>
              </div>
              <p className="max-w-md text-sm uppercase tracking-[0.22em] text-[#a59c8f]">
                Open Chapter 01 to continue the reader path.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {chapterRecords.map((record) =>
                record.available ? (
                  <Link
                    key={record.title}
                    href={record.href ?? "/archive/chapters/01"}
                    className="group relative cursor-pointer overflow-hidden rounded-sm border border-[#d1b79a]/22 bg-[linear-gradient(180deg,rgba(209,183,154,0.08),rgba(255,255,255,0.02))] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.22)] transition duration-300 ease-out hover:-translate-y-1 hover:border-[#d1b79a]/38 hover:bg-[linear-gradient(180deg,rgba(209,183,154,0.11),rgba(255,255,255,0.025))] hover:shadow-[0_22px_70px_rgba(0,0,0,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbc3aa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b]"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.38),transparent)] opacity-60"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_18%,rgba(209,183,154,0.12),transparent_34%),radial-gradient(circle_at_78%_82%,rgba(209,183,154,0.08),transparent_28%)]"
                    />
                    <div className="relative">
                      <div className="flex items-start justify-between gap-4">
                        <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[#8f98a4]">
                          {record.title}
                        </p>
                        <span className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[#c7b29a]">
                          {record.id}
                        </span>
                      </div>
                      <p className="mt-5 text-lg font-medium uppercase tracking-[0.18em] text-[#f1eadf] sm:text-xl">
                        {record.status}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-[#b7ae9f]">
                        {record.note}
                      </p>
                      <div className="mt-6 flex items-center justify-between gap-4 border-t border-dashed border-white/10 pt-4">
                        <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                          {record.meta}
                        </span>
                        <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#efe3d5]">
                          Open
                        </span>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <button
                    key={record.title}
                    className="group relative w-full cursor-pointer overflow-hidden rounded-sm border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-5 text-left shadow-[0_10px_40px_rgba(0,0,0,0.22)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-white/16 hover:bg-white/[0.045] hover:shadow-[0_18px_54px_rgba(0,0,0,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbc3aa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070b]"
                    onClick={() => setActiveOverlay(record.overlay ?? null)}
                    type="button"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.38),transparent)] opacity-60"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.05),transparent_30%)]"
                    />
                    <div className="relative">
                      <div className="flex items-start justify-between gap-4">
                        <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[#8f98a4]">
                          {record.title}
                        </p>
                        <span className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[#8e8172]">
                          {record.id}
                        </span>
                      </div>
                      <p className="mt-5 text-lg font-medium uppercase tracking-[0.18em] text-[#f1eadf] sm:text-xl">
                        {record.status}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-[#b7ae9f]">
                        {record.note}
                      </p>
                      <div className="mt-6 flex items-center justify-between gap-4 border-t border-dashed border-white/10 pt-4">
                        <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                          {record.meta}
                        </span>
                        <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#d7cec2]">
                          Inspect
                        </span>
                      </div>
                    </div>
                  </button>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="relative px-6 py-14 sm:px-8 lg:px-12 lg:py-18">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.86fr_1.14fr]">
            <article className="rounded-sm border border-white/10 bg-white/[0.03] p-6 shadow-[0_14px_60px_rgba(0,0,0,0.26)] sm:p-8">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.34em] text-[#8f98a4]">
                Release Notice
              </p>
            <h2 className="mt-4 text-2xl font-semibold text-[#f3ede4] sm:text-3xl">
              One record opens. Two remain closed.
            </h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-[#b8aea0]">
              <p>
                These files are catalog entries first, chapters second.
              </p>
              <p>
                Chapter 01 is the only visible opening.
              </p>
            </div>
            </article>

            <article className="rounded-sm border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.016))] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-dashed border-white/10 pb-4">
                <p className="text-sm uppercase tracking-[0.22em] text-[#e2d7ca]">
                  Archive Handling Notes
                </p>
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[#8f98a4]">
                  chapter layer / observer
                </p>
              </div>
              <div className="grid gap-4 pt-5 sm:grid-cols-2">
                <div className="rounded-sm border border-white/8 bg-[#0b0f14]/70 p-4">
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                    Clearance Floor
                  </p>
                  <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#e1d7ca]">
                    observer / partial
                  </p>
                </div>
                <div className="rounded-sm border border-white/8 bg-[#0b0f14]/70 p-4">
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                    Record Mode
                  </p>
                  <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#e1d7ca]">
                    catalog only
                  </p>
                </div>
              </div>
              <p className="pt-5 text-sm leading-7 text-[#b9b0a2] sm:text-[0.97rem]">
                Follow the visible sequence. Do not expect full release.
              </p>
            </article>
          </div>
        </section>
      </main>

      {activeOverlay ? (
        <ChapterOverlay
          overlay={activeOverlay}
          onClose={() => setActiveOverlay(null)}
        />
      ) : null}
    </>
  );
}
