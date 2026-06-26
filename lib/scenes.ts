import type { ChapterLine } from "@/lib/chapters";

export type ChapterSceneDefinition = {
  id: string;
  title: string;
  description: string;
  image: string;
  anchor: string;
};

export type ResolvedChapterScene = ChapterSceneDefinition & {
  anchorId: string;
  anchorLineIndex: number;
};

export function resolveChapterScenes(
  lines: ChapterLine[],
  scenes: readonly ChapterSceneDefinition[],
): ResolvedChapterScene[] {
  let searchStart = 0;

  return scenes.map((scene) => {
    let anchorLineIndex = lines.findIndex(
      (line, index) =>
        index >= searchStart &&
        line.type === "text" &&
        line.raw === scene.anchor,
    );

    if (anchorLineIndex === -1) {
      anchorLineIndex = lines.findIndex(
        (line) => line.type === "text" && line.raw === scene.anchor,
      );
    }

    if (anchorLineIndex === -1) {
      throw new Error(
        `Scene anchor "${scene.anchor}" was not found for scene "${scene.id}".`,
      );
    }

    searchStart = anchorLineIndex + 1;

    return {
      ...scene,
      anchorId: `scene-anchor-${scene.id}`,
      anchorLineIndex,
    };
  });
}
