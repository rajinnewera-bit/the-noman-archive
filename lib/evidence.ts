export type EvidenceType = "photograph" | "note" | "audio" | "document";

export type ChapterEvidenceItem = {
  id: string;
  type: EvidenceType;
  title: string;
  description: string;
  thumbnail: string | null;
  file: string;
  chapterId: string;
};
