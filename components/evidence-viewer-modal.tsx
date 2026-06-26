"use client";

import { useCallback, useEffect, useState } from "react";

import type { ChapterEvidenceItem } from "@/lib/evidence";

type EvidenceViewerModalProps = {
  item: ChapterEvidenceItem;
  onClose: () => void;
};

export function EvidenceViewerModal({
  item,
  onClose,
}: EvidenceViewerModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  const requestClose = useCallback(() => {
    setIsVisible(false);
    window.setTimeout(onClose, 180);
  }, [onClose]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        requestClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [requestClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-200 ease-out sm:p-6 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={requestClose}
      role="presentation"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#030509]/84 backdrop-blur-[2px]"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="evidence-viewer-title"
        className={`relative w-full max-w-2xl overflow-hidden rounded-sm border border-white/10 bg-[linear-gradient(180deg,rgba(14,18,24,0.96),rgba(8,11,16,0.98))] shadow-[0_30px_120px_rgba(0,0,0,0.58)] transition-all duration-200 ease-out ${
          isVisible ? "translate-y-0 scale-100" : "translate-y-2 scale-[0.985]"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.08)_0,rgba(255,255,255,0.08)_1px,transparent_1px,transparent_4px)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(196,167,132,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%,rgba(0,0,0,0.12)_100%)]"
        />

        <div className="relative border-b border-white/10 px-5 py-4 sm:px-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-[#8f98a4]">
                Evidence Viewer
              </p>
              <h2
                id="evidence-viewer-title"
                className="mt-3 text-xl font-semibold text-[#f3ede4] sm:text-2xl"
              >
                {item.title}
              </h2>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-[#d7ccbd]">
                {item.description}
              </p>
            </div>
            <button
              type="button"
              onClick={requestClose}
              className="inline-flex min-h-10 items-center justify-center rounded-sm border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#d5cbbe] transition hover:border-white/18 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbc3aa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06080c]"
            >
              Close
            </button>
          </div>
        </div>

        <div className="relative px-5 py-8 sm:px-6 sm:py-10">
          <div className="rounded-sm border border-dashed border-white/10 bg-[#0b0f14]/68 px-5 py-8 text-center sm:px-8 sm:py-12">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.34em] text-[#8f98a4]">
              Evidence Viewer Placeholder
            </p>
            <p className="mt-5 text-sm leading-7 text-[#b9b0a2] sm:text-[0.97rem]">
              Archive rendering for this evidence file will be connected here in
              a later milestone.
            </p>
            <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#958977]">
              Source / {item.file}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
