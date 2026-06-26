import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

export type ChapterSegment = {
  text: string;
  bold?: boolean;
  italic?: boolean;
};

export type ChapterLine =
  | {
      type: "blank";
    }
  | {
      type: "text";
      raw: string;
      segments: ChapterSegment[];
    };

export type MarkdownChapter = {
  lines: ChapterLine[];
};

const chapterFilePattern = /^chapter(\d+)\.md$/;

const inlineTokenPattern = /(\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*]+\*)/g;

function segmentFromToken(token: string): ChapterSegment {
  if (token.startsWith("***") && token.endsWith("***")) {
    return {
      text: token.slice(3, -3),
      bold: true,
      italic: true,
    };
  }

  if (token.startsWith("**") && token.endsWith("**")) {
    return {
      text: token.slice(2, -2),
      bold: true,
    };
  }

  return {
    text: token.slice(1, -1),
    italic: true,
  };
}

function parseInlineMarkdown(line: string): ChapterSegment[] {
  const segments: ChapterSegment[] = [];
  let cursor = 0;

  for (const match of line.matchAll(inlineTokenPattern)) {
    const [token] = match;
    const start = match.index ?? 0;

    if (start > cursor) {
      segments.push({
        text: line.slice(cursor, start),
      });
    }

    segments.push(segmentFromToken(token));
    cursor = start + token.length;
  }

  if (cursor < line.length) {
    segments.push({
      text: line.slice(cursor),
    });
  }

  if (segments.length === 0) {
    segments.push({
      text: line,
    });
  }

  return segments;
}

export async function getMarkdownChapter(slug: string): Promise<MarkdownChapter> {
  const filePath = path.join(process.cwd(), "content", "chapters", `${slug}.md`);
  const source = await readFile(filePath, "utf8");
  const normalized = source.replace(/\r\n/g, "\n");
  const rawLines = normalized.endsWith("\n")
    ? normalized.slice(0, -1).split("\n")
    : normalized.split("\n");

  return {
    lines: rawLines.map((line) =>
      line === ""
        ? { type: "blank" }
        : {
            type: "text",
            raw: line,
            segments: parseInlineMarkdown(line),
          },
    ),
  };
}

export function normalizeChapterId(chapterId: string): string | null {
  if (!/^\d+$/.test(chapterId)) {
    return null;
  }

  return chapterId.padStart(2, "0");
}

export function chapterIdToSlug(chapterId: string): string {
  const normalized = normalizeChapterId(chapterId);

  if (!normalized) {
    throw new Error(`Invalid chapter id: ${chapterId}`);
  }

  return `chapter${normalized}`;
}

export async function listAvailableChapterIds(): Promise<string[]> {
  const chaptersDirectory = path.join(process.cwd(), "content", "chapters");
  const entries = await readdir(chaptersDirectory, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name.match(chapterFilePattern)?.[1] ?? null)
    .filter((chapterId): chapterId is string => chapterId !== null)
    .sort((left, right) => Number(left) - Number(right));
}

export function isMissingChapterError(
  error: unknown,
): error is NodeJS.ErrnoException {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === "ENOENT"
  );
}
