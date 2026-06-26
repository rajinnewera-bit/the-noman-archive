import type { ChapterEvidenceItem } from "@/lib/evidence";

export const chapter01Evidence: readonly ChapterEvidenceItem[] = [
  {
    id: "chapter01-photograph-01",
    type: "photograph",
    title: "Photograph 01",
    description: "Recovered Balcony Photograph",
    thumbnail: null,
    file: "/evidence/chapter01/recovered-balcony-photograph.jpg",
    chapterId: "01",
  },
  {
    id: "chapter01-note-01",
    type: "note",
    title: "Evidence Note",
    description: "Handwritten Observation",
    thumbnail: null,
    file: "/evidence/chapter01/handwritten-observation.pdf",
    chapterId: "01",
  },
  {
    id: "chapter01-audio-01",
    type: "audio",
    title: "Audio Recording",
    description: "Tape A-01",
    thumbnail: null,
    file: "/evidence/chapter01/tape-a-01.wav",
    chapterId: "01",
  },
] as const;
