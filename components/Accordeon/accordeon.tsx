"use client";

import { useState } from "react";

export interface AccordionSection {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  sections: AccordionSection[];
}

export default function Accordion({ sections }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {sections.map((section, index) => (
        <div key={index} className="border-b py-4">
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between text-left"
          >
            <span className="font-semibold">{section.title}</span>
            <span>{openIndex === index ? "−" : "+"}</span>
          </button>

          {openIndex === index && (
            <div className="mt-3 text-sm">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
