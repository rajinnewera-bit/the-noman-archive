"use client";
import { useEffect, useState } from "react";

import type { ResolvedChapterScene } from "@/lib/scenes";

type ChapterScenePanelProps = {
  scenes: readonly ResolvedChapterScene[];
};

export function ChapterScenePanel({ scenes }: ChapterScenePanelProps) {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);

  useEffect(() => {
    if (scenes.length === 0) {
      return;
    }

    let frame = 0;

    const updateActiveScene = () => {
      frame = 0;

      const threshold = window.innerHeight * 0.38;
      let nextSceneIndex = 0;

      scenes.forEach((scene, index) => {
        const anchor = document.querySelector<HTMLElement>(
          `[data-scene-anchor-id="${scene.anchorId}"]`,
        );

        if (!anchor) {
          return;
        }

        if (anchor.getBoundingClientRect().top <= threshold) {
          nextSceneIndex = index;
        }
      });

      setActiveSceneIndex((currentIndex) =>
        currentIndex === nextSceneIndex ? currentIndex : nextSceneIndex,
      );
    };

    const requestSceneUpdate = () => {
      if (frame !== 0) {
        return;
      }

      frame = window.requestAnimationFrame(updateActiveScene);
    };

    requestSceneUpdate();

    window.addEventListener("scroll", requestSceneUpdate, { passive: true });
    window.addEventListener("resize", requestSceneUpdate);

    return () => {
      window.removeEventListener("scroll", requestSceneUpdate);
      window.removeEventListener("resize", requestSceneUpdate);

      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [scenes]);

  if (scenes.length === 0) {
    return (
      <aside className="lg:sticky lg:top-6">
        <article className="overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.022),rgba(255,255,255,0.008))] p-3 shadow-[0_24px_100px_rgba(0,0,0,0.38)] sm:p-4">
          <div className="overflow-hidden bg-[#080b10]">
            <div className="relative min-h-[22rem] sm:min-h-[24rem] lg:min-h-[30rem]">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(196,167,132,0.12),transparent_24%),linear-gradient(180deg,rgba(10,12,16,0.72),rgba(5,7,11,0.96))]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.1] bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_4px)]"
              />
              <div className="relative flex min-h-[22rem] flex-col justify-end p-6 sm:min-h-[24rem] sm:p-7 lg:min-h-[30rem]">
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-[#8f98a4]">
                  Visual record unavailable
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-[#f3ede4] sm:text-[2rem]">
                  No recovered scene is attached to this passage.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-[#b7ae9f] sm:text-[0.98rem]">
                  The manuscript remains present. The visual evidence has not
                  yet surfaced in the archive.
                </p>
              </div>
            </div>
          </div>
        </article>
      </aside>
    );
  }

  return (
    <aside className="lg:sticky lg:top-6">
      <article className="overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.022),rgba(255,255,255,0.008))] p-3 shadow-[0_24px_100px_rgba(0,0,0,0.38)] sm:p-4">
        <div className="overflow-hidden bg-[#080b10]">
          <div className="relative min-h-[22rem] sm:min-h-[24rem] lg:min-h-[30rem]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-20 opacity-[0.1] bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_4px)]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_20%_16%,rgba(196,167,132,0.14),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(112,124,140,0.12),transparent_22%),linear-gradient(180deg,rgba(4,6,10,0.04)_0%,rgba(4,6,10,0.18)_44%,rgba(4,6,10,0.92)_100%)]"
            />

            <div className="relative z-10">
              <div className="relative border-b border-white/5 p-4 sm:p-5">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-[8.6%] right-[10.4%] top-[14.8%] h-[56.5%] rotate-[-0.45deg] rounded-[2px] bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.02))] opacity-[0.18] blur-[2px]"
                />
                <div
                  className="relative h-[13rem] rounded-[1px] bg-[linear-gradient(180deg,rgba(232,225,215,0.98),rgba(214,205,193,0.93))] shadow-[0_18px_38px_rgba(0,0,0,0.24)] sm:h-[14.5rem] lg:h-[16.5rem]"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.14),transparent_16%),radial-gradient(circle_at_78%_24%,rgba(255,255,255,0.06),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_22%,rgba(77,58,38,0.05)_100%)]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply bg-[radial-gradient(circle,rgba(58,44,30,0.18)_0.7px,transparent_0.95px)] bg-[size:10px_10px]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 shadow-[inset_0_0_28px_rgba(0,0,0,0.12)]"
                  />
                  <div className="absolute inset-[2px] overflow-hidden bg-[#0d1015]">
                    {scenes.map((scene, index) => {
                      const isActive = index === activeSceneIndex;

                      return (
                        <div
                          key={scene.id}
                          className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                            isActive ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={scene.image}
                            alt={scene.title}
                            className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out ${
                              isActive ? "scale-100" : "scale-[1.04]"
                            }`}
                          />
                        </div>
                      );
                    })}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,11,0.06)_0%,rgba(5,7,11,0.18)_55%,rgba(5,7,11,0.56)_100%)]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-screen bg-[radial-gradient(circle,rgba(255,255,255,0.22)_0.8px,transparent_1px)] bg-[size:11px_11px]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 shadow-[inset_0_0_52px_rgba(0,0,0,0.2)]"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-[12%] top-[14%] h-10 w-24 rounded-full bg-white/[0.05] blur-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="relative min-h-[9rem] p-5 sm:p-6 lg:p-7">
                <div
                  aria-live="polite"
                  aria-atomic="true"
                  className="relative min-h-[8rem]"
                >
                  {scenes.map((scene, index) => {
                    const isActive = index === activeSceneIndex;

                    return (
                      <div
                        key={scene.id}
                        className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                          isActive ? "opacity-100" : "pointer-events-none opacity-0"
                        }`}
                      >
                        <p className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-[#8f98a4]">
                          {String(index + 1).padStart(2, "0")} /{" "}
                          {String(scenes.length).padStart(2, "0")}
                        </p>
                        <h2 className="mt-4 text-[1.9rem] font-semibold leading-tight text-[#f7f2ea] sm:text-[2.1rem]">
                          {scene.title}
                        </h2>
                        <p className="mt-3 max-w-md text-sm leading-7 text-[#d0c6b8] sm:text-[0.98rem]">
                          {scene.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </aside>
  );
}
