import { chapter01Scenes } from "@/content/scenes/chapter01";
import type { ChapterSceneDefinition } from "@/lib/scenes";

const chapterSceneRegistry: Record<string, readonly ChapterSceneDefinition[]> = {
  chapter01: chapter01Scenes,
};

export function getChapterSceneDefinitions(
  chapterSlug: string,
): readonly ChapterSceneDefinition[] {
  return chapterSceneRegistry[chapterSlug] ?? [];
}
