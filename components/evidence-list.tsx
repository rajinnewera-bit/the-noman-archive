"use client";

import { useState } from "react";

import type { ChapterEvidenceItem, EvidenceType } from "@/lib/evidence";
import { EvidenceViewerModal } from "@/components/evidence-viewer-modal";

type EvidenceListProps = {
  items: readonly ChapterEvidenceItem[];
  title?: string;
};

const evidenceTypeMeta: Record<
  EvidenceType,
  { icon: string; label: string; inventoryCode: string }
> = {
  photograph: {
    icon: "📷",
    label: "Photograph",
    inventoryCode: "PH",
  },
  note: {
    icon: "📄",
    label: "Evidence Note",
    inventoryCode: "NT",
  },
  audio: {
    icon: "🎙",
    label: "Audio Recording",
    inventoryCode: "AU",
  },
  document: {
    icon: "🗂",
    label: "Document",
    inventoryCode: "DC",
  },
};

export function EvidenceList({
  items,
  title = "Recovered Evidence",
}: EvidenceListProps) {
  const [activeItem, setActiveItem] = useState<ChapterEvidenceItem | null>(null);

  return (
    <>
      <section className="rounded-sm border border-white/8 bg-[#0a0e13]/76 px-4 py-5 shadow-[0_20px_70px_rgba(0,0,0,0.22)] sm:px-5 sm:py-6">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-dashed border-white/10 pb-4">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-[#8f98a4]">
              Archive Inventory
            </p>
            <h2 className="mt-3 text-xl font-semibold text-[#f3ede4] sm:text-2xl">
              {title}
            </h2>
          </div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#958977]">
            {String(items.length).padStart(2, "0")} entries
          </p>
        </div>

        <div className="mt-2">
          {items.map((item, index) => {
            const meta = evidenceTypeMeta[item.type];

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveItem(item)}
                className="flex w-full items-start justify-between gap-4 border-b border-dashed border-white/8 px-1 py-4 text-left transition hover:bg-white/[0.025] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dbc3aa] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07090d] last:border-b-0"
              >
                <div className="flex min-w-0 flex-1 items-start gap-4">
                  <div className="flex w-12 flex-none items-center justify-center pt-1 text-lg">
                    <span aria-hidden="true">{meta.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.3em] text-[#8f98a4]">
                        {meta.label}
                      </p>
                      <span className="font-mono text-[0.66rem] uppercase tracking-[0.28em] text-[#756b5d]">
                        {meta.inventoryCode}-{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-2 text-base font-semibold text-[#f0e9de]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-7 text-[#b9b0a2]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-1">
                  <span className="inline-flex min-h-9 items-center justify-center rounded-sm border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.28em] text-[#d5cbbe]">
                    Open
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {activeItem ? (
        <EvidenceViewerModal
          item={activeItem}
          onClose={() => setActiveItem(null)}
        />
      ) : null}
    </>
  );
}
