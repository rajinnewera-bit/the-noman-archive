export type ChapterParagraph =
  | {
      kind: "text";
      text: string;
    }
  | {
      kind: "redacted";
      before: string;
      redactions: readonly { width: string }[];
      after: string;
    };

export type ChapterPage = {
  id: string;
  paragraphs: readonly ChapterParagraph[];
};

export const chapter01 = {
  id: "chapter-01",
  title: "Recovered Diary",
  pages: [
    {
      id: "01-A",
      paragraphs: [
        {
          kind: "text",
          text: "I woke before the knock again. The corridor was quiet, but I could hear the latch breathing as if someone stood outside waiting for me to remember why the door should stay locked.",
        },
        {
          kind: "text",
          text: "There is a name written on the first page and every time I look at it the letters seem to belong to someone else. I keep tracing them anyway, as though the hand might admit what the mind will not.",
        },
        {
          kind: "text",
          text: "By noon the room had changed shape for the third time. The window was where the wardrobe should have been and the mirror refused to keep me in it longer than a second. I wrote down the order of the furniture and then lost the paper with the order on it.",
        },
      ],
    },
    {
      id: "01-B",
      paragraphs: [
        {
          kind: "redacted",
          before:
            "The woman downstairs called me by a different name this morning. I answered before I could stop myself. Later I found the sound of my own reply written in the margin:",
          redactions: [{ width: "w-24" }, { width: "w-16" }],
          after:
            "as if someone listening had decided that was the only part worth keeping.",
        },
        {
          kind: "text",
          text: "Mother used to say memory was a room, and rooms can be entered in the wrong order. I think I entered mine backwards. I keep arriving after things have already frightened me.",
        },
      ],
    },
    {
      id: "01-C",
      paragraphs: [
        {
          kind: "text",
          text: "I found mud on the inside of the sink. I washed my hands until the water went cold and still it felt like I had come home carrying a place I had never visited.",
        },
        {
          kind: "text",
          text: "If this is still mine, if I am still Noman, then someone has been editing the days behind me. They leave the shape of the hours in place and take the reasons out. What remains is enough to live through, not enough to trust.",
        },
        {
          kind: "text",
          text: "Tonight I pushed the wardrobe against the door again. I told myself it was for the sound in the corridor. It may have been for the sound of my own voice repeating back from the dark.",
        },
      ],
    },
  ],
} as const;
