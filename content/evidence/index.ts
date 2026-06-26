import { chapter01Evidence } from "@/content/evidence/chapter01";
import type { ChapterEvidenceItem } from "@/lib/evidence";

const chapterEvidenceRegistry: Record<string, readonly ChapterEvidenceItem[]> = {
  chapter01: chapter01Evidence,
};

export function getChapterEvidenceItems(
  chapterSlug: string,
): readonly ChapterEvidenceItem[] {
  return chapterEvidenceRegistry[chapterSlug] ?? [];
}
