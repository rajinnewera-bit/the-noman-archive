import Link from "next/link";

import { ArchivePath } from "@/components/archive-path";
import {
  getMarkdownChapter,
  type ChapterLine,
  type ChapterSegment,
} from "@/lib/chapters";

const recoveryMetadata = [
  { label: "Recovery Date", value: "22 FEB 2008" },
  { label: "Archive Reference", value: "NM-01 / E-14 / LEDGER-A" },
  { label: "Evidence Tag", value: "RD-01 / PAPER / PARTIAL" },
  { label: "Scan Quality", value: "63% / STABLE ARTIFACTING" },
  { label: "Ink Degradation", value: "UNASSESSED" },
  { label: "Recovery Team", value: "NORTH WING RETRIEVAL UNIT" },
] as const;

const evidenceStamps = [
  "Recovered",
  "Partial Scan",
  "Restricted Copy",
] as const;

const archiveAnnotations = [
  {
    ref: "AN-01",
    title: "Source Linked",
    body: "This record is now resolved from a dedicated Markdown chapter source rather than interface code.",
  },
  {
    ref: "AN-02",
    title: "Content State",
    body: "The recovered chapter prose is now loaded from the canonical manuscript source inside the repository.",
  },
  {
    ref: "AN-03",
    title: "Handling Rule",
    body: "Archive framing remains outside the manuscript. The source file preserves the chapter text and spacing.",
  },
] as const;

const readerPath = [
  { label: "Home", href: "/" },
  { label: "Archive", href: "/archive" },
  { label: "Chapter Records", href: "/archive/chapters" },
  { label: "Recovered Diary", href: "/archive/chapters/01", active: true },
  { label: "Subject File", href: "/archive/subject/nm-01" },
] as const;

function renderSegments(
  segments: ChapterSegment[],
  keyPrefix: string,
) {
  return segments.map((segment, index) => {
    const key = `${keyPrefix}-${index}`;

    if (segment.bold && segment.italic) {
      return (
        <strong key={key}>
          <em>{segment.text}</em>
        </strong>
      );
    }

    if (segment.bold) {
      return <strong key={key}>{segment.text}</strong>;
    }

    if (segment.italic) {
      return <em key={key}>{segment.text}</em>;
    }

    return <span key={key}>{segment.text}</span>;
  });
}

export default async function RecoveredDiaryPage() {
  const chapter = await getMarkdownChapter("chapter01");
  const textLineIndexes = chapter.lines.reduce<number[]>((indexes, line, index) => {
    if (line.type === "text") {
      indexes.push(index);
    }

    return indexes;
  }, []);
  const [bookTitleIndex, chapterTitleIndex, subtitleIndex] = textLineIndexes;
  const bookTitleLine =
    bookTitleIndex !== undefined ? chapter.lines[bookTitleIndex] : null;
  const chapterTitleLine =
    chapterTitleIndex !== undefined ? chapter.lines[chapterTitleIndex] : null;
  const subtitleLine =
    subtitleIndex !== undefined ? chapter.lines[subtitleIndex] : null;
  const bodyLines: ChapterLine[] =
    subtitleIndex !== undefined
      ? chapter.lines.slice(subtitleIndex + 1)
      : chapter.lines;

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
                Content now resolves from a dedicated archive manuscript file.
              </p>
              <p className="mt-6 max-w-xl text-sm leading-7 text-[#aca293] sm:text-[0.96rem]">
                The archive frame remains. The chapter text now lives outside
                the interface.
              </p>

              <div className="mt-8 max-w-2xl">
                <ArchivePath
                  steps={readerPath}
                  next={{
                    href: "/archive/subject/nm-01",
                    label: "Subject File",
                    note: "Continue from the recovered text into the subject file.",
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
                      Source File
                    </span>
                    <span className="text-sm uppercase tracking-[0.24em] text-[#dfd5c8]">
                      chapter01.md
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-white/10 pb-3">
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                      Content State
                    </span>
                    <span className="text-sm uppercase tracking-[0.24em] text-[#dfd5c8]">
                      ingested
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-white/10 pb-3">
                    <span className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                      Layout State
                    </span>
                    <span className="text-sm uppercase tracking-[0.24em] text-[#dfd5c8]">
                      ready
                    </span>
                  </div>
                </div>

                <p className="max-w-sm text-sm leading-7 text-[#b5ab9d]">
                  The content architecture is active. The recovered manuscript
                  now enters through the chapter source file without being
                  embedded in the page component.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10 px-6 py-14 sm:px-8 lg:px-12 lg:py-18">
        <div className="mx-auto max-w-7xl">
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
        </div>
      </section>

      <section className="relative px-6 py-14 sm:px-8 lg:px-12 lg:py-18">
        <div className="mx-auto max-w-7xl space-y-8">
          <article className="relative overflow-hidden rounded-sm border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] p-4 shadow-[0_22px_90px_rgba(0,0,0,0.38)] sm:p-6 lg:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)]"
            />

            <div className="relative overflow-hidden rounded-sm border border-[#9b8a74]/24 bg-[linear-gradient(180deg,rgba(222,210,190,0.96),rgba(192,177,156,0.94))] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_24px_60px_rgba(0,0,0,0.22)] sm:p-7 lg:p-9">
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

              <div className="absolute right-5 top-5 flex flex-col items-end gap-3">
                {evidenceStamps.map((stamp, index) => (
                  <span
                    key={stamp}
                    className={`rounded-sm border px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-[#6f1d1d]/78 ${
                      index % 2 === 0
                        ? "rotate-[6deg] border-[#7d2c2c]/40 bg-[#b57e7e]/10"
                        : "rotate-[-4deg] border-[#7d2c2c]/30 bg-[#b57e7e]/8"
                    }`}
                  >
                    {stamp}
                  </span>
                ))}
              </div>

              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-dashed border-[#6f5d4a]/24 pb-4 font-mono text-[0.64rem] uppercase tracking-[0.28em] text-[#5f5244]/74">
                  <span>scan sheet / 01-a</span>
                  <span>evidence marker e-14</span>
                  <span>source / content/chapters/chapter01.md</span>
                </div>

                <div className="mt-10">
                  {bookTitleLine && bookTitleLine.type === "text" ? (
                    <p className="text-center font-mono text-[0.78rem] uppercase tracking-[0.34em] text-[#4d4032]/72">
                      {renderSegments(bookTitleLine.segments, "book-title")}
                    </p>
                  ) : null}

                  {chapterTitleLine && chapterTitleLine.type === "text" ? (
                    <h2 className="mt-5 text-center text-[2.3rem] font-semibold uppercase tracking-[0.18em] text-[#2d261c]/86 sm:text-[3rem]">
                      {renderSegments(chapterTitleLine.segments, "chapter-title")}
                    </h2>
                  ) : null}

                  {subtitleLine && subtitleLine.type === "text" ? (
                    <p className="mt-5 text-center text-[1.05rem] leading-8 text-[#46392b]/80 sm:text-[1.12rem]">
                      {renderSegments(subtitleLine.segments, "chapter-subtitle")}
                    </p>
                  ) : null}

                  <div className="mt-8 text-left text-[1.02rem] leading-8 text-[#2e261c]/82 sm:text-[1.08rem]">
                    {bodyLines.map((line, index) =>
                      line.type === "blank" ? (
                        <div
                          key={`blank-${index}`}
                          aria-hidden="true"
                          className="h-6 sm:h-7"
                        />
                      ) : (
                        <p key={`line-${index}`}>
                          {renderSegments(line.segments, `line-${index}`)}
                        </p>
                      ),
                    )}
                  </div>
                </div>

                <div className="mt-10 border-t border-dashed border-[#6f5d4a]/24 pt-4 font-mono text-[0.66rem] uppercase tracking-[0.28em] text-[#5f5244]/72">
                  content source loaded successfully
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="relative border-t border-white/10 px-6 py-14 sm:px-8 lg:px-12 lg:py-18">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <article className="rounded-sm border border-white/10 bg-white/[0.03] p-6 shadow-[0_14px_60px_rgba(0,0,0,0.26)] sm:p-8">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.34em] text-[#8f98a4]">
              Archive Annotations
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-[#f3ede4] sm:text-3xl">
              The interface now stands apart from the chapter text.
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
              The manuscript remains in the chapter file. The archive layer
              continues to frame it without rewriting it.
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
      </section>
    </main>
  );
}
