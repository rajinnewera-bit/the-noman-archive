import { readFile } from "node:fs/promises";
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
