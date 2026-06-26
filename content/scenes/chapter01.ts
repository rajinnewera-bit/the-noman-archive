import type { ChapterSceneDefinition } from "@/lib/scenes";

export const chapter01Scenes: readonly ChapterSceneDefinition[] = [
  {
    id: "scene-01",
    title: "Temple Lights",
    description: "Noman watches the distant lights from his balcony.",
    image: "/scenes/placeholder.jpg",
    anchor: "The eyes looked older than the man.",
  },
  {
    id: "scene-02",
    title: "Balcony Ritual",
    description: "The night settles around the table of phones, lighter, water, and notebook.",
    image: "/scenes/placeholder.jpg",
    anchor:
      "On the small table beside him lay three phones, a lighter, a glass of water, and a black notebook swollen with loose papers.",
  },
  {
    id: "scene-03",
    title: "Future Spiral",
    description: "His mind turns a single question into an entire architecture of dread.",
    image: "/scenes/placeholder.jpg",
    anchor: "What if?",
  },
  {
    id: "scene-04",
    title: "Inner Courtroom",
    description: "The private voice arrives and begins dismantling him with precision.",
    image: "/scenes/placeholder.jpg",
    anchor: "“You’re doing it again,” the voice said.",
  },
  {
    id: "scene-05",
    title: "Notebook Threshold",
    description: "The notebook shifts from clutter into evidence and intention.",
    image: "/scenes/placeholder.jpg",
    anchor: "He picked up the notebook from the table.",
  },
  {
    id: "scene-06",
    title: "Three Phones",
    description: "The night ruptures when all three phones vibrate with the same unknown warning.",
    image: "/scenes/placeholder.jpg",
    anchor: "The phones vibrated.",
  },
] as const;
