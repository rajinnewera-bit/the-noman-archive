import { notFound } from "next/navigation";

import { ChapterArchiveReader } from "@/components/chapter-archive-reader";
import { listAvailableChapterIds, normalizeChapterId } from "@/lib/chapters";

export async function generateStaticParams() {
  const chapterIds = await listAvailableChapterIds();

  return chapterIds.map((chapterId) => ({
    chapterId,
  }));
}

type ChapterPageProps = {
  params: Promise<{
    chapterId: string;
  }>;
};

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { chapterId } = await params;
  const normalizedChapterId = normalizeChapterId(chapterId);

  if (!normalizedChapterId) {
    notFound();
  }

  const availableChapterIds = await listAvailableChapterIds();

  if (!availableChapterIds.includes(normalizedChapterId)) {
    notFound();
  }

  return <ChapterArchiveReader chapterId={normalizedChapterId} />;
}
